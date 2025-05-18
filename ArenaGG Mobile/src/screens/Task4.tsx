import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Celebrations } from "../components/Celebrations";
import { Task4Game } from "../components/Games/Task4Game";
import { GameScreen } from "../components/GameScreen";
import { ResultModal } from "../components/ResultModal";
import { task4Levels } from "../constants/GameLevel";
import { useCountDown } from "../hooks/useCountDown";
import { useAppState } from "../stores/state";

const Task4 = () => {
  const { state, setState } = useAppState();
  const task4Progress = state.taskProgress?.[3] || { currLevel: 0, totalLevel: 1 };
  const [result, setResult] = useState<"success" | "error" | "">("");
  const [x, setX] = useState({ correct: 0, intrusion: 0, intrusionA: 0, intrusionB: 0 });
  const navigation = useNavigation();
  const route = useRoute();
  const { words, time, random } = task4Levels[task4Progress.currLevel];
  const { countDown } = useCountDown(time);

  if (task4Progress.currLevel === task4Progress.totalLevel)
    return <Celebrations />;

  const onRefresh = () => {
    navigation.navigate(route.name as never);
  };

  const updateProgress = () => {
    setState((prev: any) => {
      const newProgress = [...(prev.taskProgress || [])];
      newProgress[3] = { ...newProgress[3], currLevel: newProgress[3].currLevel + 1 };
      return {
        ...prev,
        taskProgress: newProgress,
        result: { ...prev.result, task4: `Trial: ${newProgress[3].currLevel}, Correct: ${x.correct} Missed: ${9 - x.correct} Intrusion: ${x.intrusion} ${x.intrusionA ? "IntrusionA " + x.intrusionA : ""} ${x.intrusionB ? "IntrusionB " + x.intrusionB : ""}` },
      };
    });
  };

  return (
    <GameScreen
      onRefresh={onRefresh}
      countDown={countDown}
      scroll
      {...task4Progress}
    >
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
          } else {
            // reset progress for retry
            setState((prev: any) => {
              const newProgress = [...(prev.taskProgress || [])];
              newProgress[3] = { ...newProgress[3], currLevel: 0 };
              return { ...prev, taskProgress: newProgress };
            });
          }
          navigation.navigate("Task 4" as never);
        }}
      />
      <Task4Game
        wordsToShow={words}
        countDown={countDown}
        setX={setX}
        reset={() => {
          setState((prev: any) => {
            const newProgress = [...(prev.taskProgress || [])];
            newProgress[3] = { ...newProgress[3], currLevel: 0 };
            return { ...prev, taskProgress: newProgress };
          });
        }}
        firstLevel={task4Progress.currLevel === 0}
        random={random}
        next={updateProgress}
        onSuccess={() => {
          setResult("success");
        }}
        onError={() => {
          setResult("error");
        }}
      />
      <View style={{ height: 60 }} />
    </GameScreen>
  );
};

export default Task4;
