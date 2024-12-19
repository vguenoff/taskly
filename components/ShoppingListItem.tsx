import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import theme from '../theme'

import { AntDesign, Entypo } from '@expo/vector-icons'

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
      <View style={styles.row}>
        <Entypo
          name={completed ? 'check' : 'circle'}
          color={completed ? theme.color.grey : theme.color.cerulean}
          size={24}
        />
        <Text style={[styles.text, completed && styles.completedText]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity hitSlop={20} onPress={handleDelete}>
        <AntDesign
          name="clockcircle"
          color={completed ? theme.color.grey : theme.color.red}
          size={24}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: theme.color.cerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 8,
    flex: 1,
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
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
})
