import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Celebrations } from "../components/Celebrations";
import { Task3Game } from "../components/Games/Task3Game";
import { GameScreen } from "../components/GameScreen";
import { ResultModal } from "../components/ResultModal";
import { task3Levels } from "../constants/GameLevel";
import { useCountDown } from "../hooks/useCountDown";
import { useAppState } from "../stores/state";

const Task3 = () => {
  const { state, setState } = useAppState();
  const task3Progress = state.taskProgress?.[2] || { currLevel: 0, totalLevel: 1 };
  const [result, setResult] = useState<"success" | "error" | "">("");
  const [gameKey, setGameKey] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { cards, images, grid } = task3Levels[task3Progress.currLevel];
  const { countDown } = useCountDown(5);

  const isComplete = task3Progress.currLevel === task3Progress.totalLevel;
  React.useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => navigation.navigate("Task 4" as never), 1500);
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
      newProgress[2] = { ...newProgress[2], currLevel: newProgress[2].currLevel + 1 };
      return {
        ...prev,
        taskProgress: newProgress,
        result: { ...prev.result, task3: `Max Cards: ${cards}, Max Tiles: ${images}` },
      };
    });
  };

  return (
    <GameScreen onRefresh={onRefresh} {...task3Progress}>
      <ResultModal
        result={result}
        onClickBtnB={() => {
          if (result === "success") {
            updateProgress();
          } else {
            setResult("");
            setGameKey((k) => k + 1); // force remount
            onRefresh();
          }
        }}
        onClickBtnA={() => {
          if (result === "success") {
            updateProgress();
          }
          navigation.navigate("Task 3" as never);
        }}
      />
      <Task3Game
        key={gameKey}
        countDown={countDown}
        cards={cards}
        images={images}
        grid={grid}
        onSuccess={() => {
          setResult("success");
        }}
        onError={() => {
          setResult("error");
        }}
      />
    </GameScreen>
  );
};

export default Task3;
