// import { View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useActivityLog } from "../stores/useActivityLog";

const ActivityLogs = () => {
  const { activityLog } = useActivityLog((s) => s);

  return (
    <ScrollView>
      {activityLog.map((activity, idx) => (
        <Text key={idx} style={{ marginVertical: 5 }} variant="labelSmall">
          {activity}
        </Text>
      ))}
    </ScrollView>
  );
};

export default ActivityLogs;
