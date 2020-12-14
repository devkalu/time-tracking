import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimmerForm from "./components/ToggleableTimerForm";

export default class App extends React.Component {
  render() {
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimmerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Mow the lawn"
          project="House Chores"
          elapsed="8986300"
          isRunning
        />
        <EditableTimer />
      </ScrollView>
    </View>;
  }
}

const styles = StyleSheet.create({});
