import { StyleSheet, View } from 'react-native'

import ShoppingListItem from '../components/ShoppingListItem'
import theme from '../theme'

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.color.pink,
        }}
      />
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" completed />
      <ShoppingListItem name="Sugar" completed />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    justifyContent: 'center',
  },
})
