import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Text>Welcome To Boda Chap
      </Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b62011',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
