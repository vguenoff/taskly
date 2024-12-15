import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import theme from './theme'

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      'Are you sure you want to delete this?',
      'It will be gone for good.',
      [
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => console.log('Ok, deleting.'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => console.log('Ok, deleting.'),
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
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
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.color.cerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.color.black,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.color.white,
  },
  text: {
    fontSize: 18,
    fontWeight: 200,
  },
})
