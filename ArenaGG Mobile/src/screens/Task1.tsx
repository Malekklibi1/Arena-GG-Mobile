import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Celebrations } from "../components/Celebrations";
import { Task1Game } from "../components/Games/Task1Game";
import { GameScreen } from "../components/GameScreen";
import { ResultModal } from "../components/ResultModal";
import { task1Levels } from "../constants/GameLevel";
import { useCountDown } from "../hooks/useCountDown";
import { useAppState } from "../stores/state";

const Task1 = () => {
  const { state, setState } = useAppState();
  const task1Progress = state.taskProgress?.[0] || { currLevel: 0, totalLevel: 1 };
  const [result, setResult] = useState<"success" | "error" | "">("");
  const [gameKey, setGameKey] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { tiles, grid } = task1Levels[task1Progress.currLevel];
  const { countDown } = useCountDown(5);

  const isComplete = task1Progress.currLevel === task1Progress.totalLevel;

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => navigation.navigate("Task 2" as never), 1500);
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
      // Always ensure newProgress has 5 objects
      let newProgress = Array.isArray(prev.taskProgress) ? [...prev.taskProgress] : [];
      while (newProgress.length < 5) {
        newProgress.push({ currLevel: 0, totalLevel: 1 });
      }
      newProgress[0] = { ...newProgress[0], currLevel: newProgress[0].currLevel + 1 };
      return {
        ...prev,
        taskProgress: newProgress,
        result: { ...prev.result, task1: `Max Grid: ${grid}, Max Tiles: ${tiles}` },
      };
    });
  };

  return (
    <GameScreen onRefresh={onRefresh} countDown={countDown} {...task1Progress}>
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
          navigation.navigate("Task 1" as never);
        }}
      />
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          width: 300,
        }}
      >
        <Text style={{ flex: 1 }} variant="titleMedium">
          Tiles: {tiles}
        </Text>
        <Text variant="titleMedium">Grid: {grid}</Text>
      </View>
      <Task1Game
        key={gameKey}
        tiles={tiles}
        grid={grid}
        visible={countDown > 0}
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

export default Task1;
