import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#CDCDCD',
  },
  taskInputField: {
    height: 40,
    width: 300,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    opacity: 0.9,
    color: 'gray',
  },
  addButton: {
    marginRight: 10,
  },
  addImage: {
    width: 35,
    height: 35,
  },
  todoContainer: {
    flex: 1,
    marginTop: Platform === 'ios' ? 35 : 0,
    backgroundColor: 'lightgray',
  },
  toggleButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  taskNameText: {
    margin: 10,
    fontSize: 18,
  },
  rowTemplate: {
    flexDirection: 'row',
  },
});

export default styles;
