import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(32, 53, 70)',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
    color: '#ffffff',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    borderRadius: 30,
  },
  backButtonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 30,
  },
  registerButton: {
    backgroundColor: '#f7c744',
  },
  registerText: {
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
  },
  registerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f7c744',
    opacity: 0.9,
    marginTop: 5,
    marginBottom: 50,
  },
});

export default styles;
