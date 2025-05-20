import React, { useRef, useState, useEffect } from "react";
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
  const [gameKey, setGameKey] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { grid, images, timer } = task5Levels[task5Progress.currLevel];
  const start = useRef(new Date().getTime()).current;

  const isComplete = task5Progress.currLevel === task5Progress.totalLevel;

  useEffect(() => {
    if (isComplete) {
      // You can add navigation or celebration logic here if needed
    }
  }, [isComplete]);

  if (isComplete) {
    return <Celebrations />;
  }

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
          navigation.navigate("Task 5" as never);
        }}
      />
      <Task5Game
        key={gameKey}
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
