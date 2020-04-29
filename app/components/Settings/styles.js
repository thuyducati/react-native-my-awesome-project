import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonStyle: {
    width: 300,
    backgroundColor: '#f7c744',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
  buttonTextStyle: {
    color: 'rgb(32, 53, 70)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    alignItems: 'stretch',
  },
  flatListStyle: {
    backgroundColor: 'lightblue',
    height: 300,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  templateContainer: {
    flexDirection: 'row',
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
