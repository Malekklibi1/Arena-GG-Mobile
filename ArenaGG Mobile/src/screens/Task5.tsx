import React, { useRef, useState } from "react";
import { task5Levels } from "../constants/GameLevel";
import { Task5Game } from "../components/Games/Task5Game";
import { GameScreen } from "../components/GameScreen";
import { Celebrations } from "../components/Celebrations";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ResultModal } from "../components/ResultModal";
import { useAppState } from "../stores/state";

const Task5 = () => {
  const { state, setState } = useAppState();
  const task5Progress = state.taskProgress?.[4] || { currLevel: 0, totalLevel: 1 };
  const [result, setResult] = useState<"success" | "error" | "">("");
  const navigation = useNavigation();
  const route = useRoute();
  const { grid, images, timer } = task5Levels[task5Progress.currLevel];
  const start = useRef(new Date().getTime()).current;

  if (task5Progress.currLevel === task5Progress.totalLevel)
    return <Celebrations />;

  const onRefresh = () => {
    navigation.navigate(route.name as never);
  };

  const updateProgress = () => {
    setState((prev: any) => {
      const newProgress = [...(prev.taskProgress || [])];
      newProgress[4] = { ...newProgress[4], currLevel: newProgress[4].currLevel + 1 };
      return {
        ...prev,
        taskProgress: newProgress,
        result: { ...prev.result, task5: `Trial: ${newProgress[4].currLevel} Time: ${(new Date().getTime() - start) / 1000}sec` },
      };
    });
  };

  return (
    <GameScreen {...task5Progress}>
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
          navigation.navigate("Task 5" as never);
        }}
      />
      <Task5Game
        grid={grid}
        timer={timer}
        images={images}
        onSuccess={() => {
          setResult("success");
        }}
        onError={() => {
          setResult("error");
        }}
        reset={onRefresh}
      />
    </GameScreen>
  );
};

export default Task5;
