import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    height: 40,
    width: 120,
  },
  checked: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 3,
  },
  not_checked: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 3,
  },
  button: {
    backgroundColor: 'red',
  },
  input: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});
