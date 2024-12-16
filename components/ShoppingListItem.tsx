import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import theme from '../theme'

type Props = {
  name: string
  completed?: boolean
}

export default function ShoppingListItem({ name, completed }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete '${name}'?`,
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
      ],
    )
  }

  return (
    <View style={[styles.wrapper, completed && styles.completedWrapper]}>
      <Text style={[styles.text, completed && styles.completedText]}>
        {name}
      </Text>
      <TouchableOpacity
        style={[styles.button, completed && styles.completedButton]}
        activeOpacity={0.8}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: theme.color.cerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: 400,
  },
  button: {
    backgroundColor: theme.color.black,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.color.white,
  },
  // Completed styles
  completedWrapper: {
    backgroundColor: theme.color.lightGrey,
    borderBottomColor: theme.color.lightGrey,
  },
  completedText: {
    color: theme.color.grey,
    textDecorationLine: 'line-through',
  },
  completedButton: {
    backgroundColor: theme.color.grey,
  },
})
