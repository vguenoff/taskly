import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// Cmd + D in the simulator open dev menu
// Shift + M in the terminal open dev menu

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
