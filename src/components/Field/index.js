import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import Mine from '../Mine'
import Flag from '../Flag'

import styles from './styles'

export default props => {
  const { mined, opened, nearMines, exploded, flagged } = props

  const styleField = [styles.field]

  if (opened) styleField.push(styles.opened)
  if (exploded) styleField.push(styles.exploded)
  if (flagged) styleField.push(styles.flagged)
  if (!opened && !exploded) styleField.push(styles.regular)

  let color = null

  if (nearMines > 0) {
    if (nearMines == 1) color = '#2a28d7'
    if (nearMines == 2) color = '#2b520f'
    if (nearMines > 2 && nearMines < 6) color = '#f9060a'
    if (nearMines >= 6) color = '#f221a9'
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSelect}
    >
      <View style={styleField}>
        {
          !mined && opened && nearMines > 0 ? <Text style={[styles.label, { color: color }]}>{nearMines}</Text> : false
        }
        {
          mined && opened ? <Mine /> : false
        }
        {
          flagged && !opened ? <Flag /> : false
        }
      </View>
    </TouchableWithoutFeedback>
  )
}