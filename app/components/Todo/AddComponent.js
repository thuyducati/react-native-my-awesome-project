import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from './styles';

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
  }

  addNewTaskHandler = (event) => {
    if (!this.state.taskName.trim()) {
      return;
    }
    this.props.onClickAdd(this.state.taskName);
    this.textInput.clear();
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.taskContainer}>
            <TextInput
              ref={(empty) => (this.textInput = empty)}
              placeholder="Your task ..."
              placeholderTextColor="gray"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={(changedText) =>
                this.setState({taskName: changedText})
              }
              style={styles.taskInputField}
            />
            <TouchableHighlight
              underlayColor="yellow"
              onPress={this.addNewTaskHandler}
              style={styles.addButton}>
              <Image
                source={require('../../images/add_icon.png')}
                style={styles.addImage}
              />
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default AddComponent;
