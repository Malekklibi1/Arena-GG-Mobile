import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Celebrations } from "../components/Celebrations";
import { Task2Game } from "../components/Games/Task2Game";
import { GameScreen } from "../components/GameScreen";
import { ResultModal } from "../components/ResultModal";
import { task2Levels } from "../constants/GameLevel";
import { useCountDown } from "../hooks/useCountDown";
import { useAppState } from "../stores/state";

const Task2 = () => {
  const { state, setState } = useAppState();
  const task2Progress = state.taskProgress?.[1] || { currLevel: 0, totalLevel: 1 };
  const [result, setResult] = useState<"success" | "error" | "">("");
  const navigation = useNavigation();
  const route = useRoute();
  const { numLength, reverse } = task2Levels[task2Progress.currLevel];
  const { countDown } = useCountDown(numLength + 1);

  if (task2Progress.currLevel === task2Progress.totalLevel)
    return <Celebrations />;

  const onRefresh = () => {
    if (navigation.setParams) {
      navigation.setParams({ key: Math.random() });
    } else {
      navigation.navigate(route.name as never, { key: Math.random() } as never);
    }
  };

  const updateProgress = () => {
    setState((prev: any) => {
      const newProgress = [...(prev.taskProgress || [])];
      newProgress[1] = { ...newProgress[1], currLevel: newProgress[1].currLevel + 1 };
      return {
        ...prev,
        taskProgress: newProgress,
        result: { ...prev.result, task2: `Trial: ${newProgress[1].currLevel}, ${reverse ? "Reverse" : "Forward"} digit span: ${numLength}` },
      };
    });
  };

  return (
    <GameScreen onRefresh={onRefresh} {...task2Progress}>
      <ResultModal
        result={result}
        onClickBtnB={() => {
          if (result === "success") {
            updateProgress();
          } else {
            onRefresh();
          }
        }}
        onClickBtnA={() => {
          if (result === "success") {
            updateProgress();
          }
          navigation.navigate("Task 2" as never);
        }}
      />
      <Task2Game
        level={numLength}
        reverse={reverse}
        countDown={countDown}
        onSuccess={() => {
          setResult("success");
        }}
        onError={() => {
          setTimeout(() => {
            setResult("error");
          }, 200);
        }}
      />
    </GameScreen>
  );
};

export default Task2;
