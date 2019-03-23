import { StyleSheet } from 'react-native'
import params from '../../params';

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  exploded: {
    backgroundColor: '#f00',
    borderColor: '#f00',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  }
})

export default styles
