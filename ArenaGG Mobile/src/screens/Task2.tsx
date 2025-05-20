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
  const [gameKey, setGameKey] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { numLength, reverse } = task2Levels[task2Progress.currLevel];
  const { countDown } = useCountDown(numLength + 1);

  const isComplete = task2Progress.currLevel === task2Progress.totalLevel;

  React.useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => navigation.navigate("Task 3" as never), 1500);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, navigation]);

  if (isComplete) {
    return <Celebrations />;
  }

  const onRefresh = () => {
    navigation.navigate(route.name as never);
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
            setResult("");
            setGameKey((k) => k + 1);
          } else {
            setResult("");
            setGameKey((k) => k + 1);
            onRefresh();
          }
        }}
        onClickBtnA={() => {
          if (result === "success") {
            updateProgress();
            setResult("");
            setGameKey((k) => k + 1);
          }
          navigation.navigate("Task 2" as never);
        }}
      />
      <Task2Game
        key={gameKey}
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
