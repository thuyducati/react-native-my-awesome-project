import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  templateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  dataStyle: {
    color: 'black',
    fontSize: 15,
  },
  separatorStyle: {
    height: 2,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
  profileImageStyle: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  displayNameStyle: {
    fontSize: 18,
    alignItems: 'center',
    color: '#65A7C5',
  },
  activityIndicatorStyle: {
    color: '#000',
  },
});

export default styles;
