import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet } from 'react-native'
import theme from './theme'

// Cmd + D in the simulator open dev menu
// Shift + M in the terminal open dev menu

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    justifyContent: 'center',
  },
  textWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: theme.color.cerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 200,
  },
})
