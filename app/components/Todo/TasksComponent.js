import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

class DataTemplate extends Component {
  render() {
    return (
      <View style={styles.rowTemplate}>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.taskId)}
          style={styles.toggleButton}
        />
        <Text
          style={[
            styles.taskNameText,
            {
              color: this.props.completed == true ? 'green' : 'red',
              fontWeight: 'bold',
            },
          ]}>
          {this.props.taskId.toString().concat(' - ')}
          {this.props.taskName.concat(' ----- ')}
          {this.props.completed === true ? 'Completed' : 'In Progress'}
        </Text>
      </View>
    );
  }
}

class TasksComponent extends Component {
  toggleTaskHandler = (taskId) => {
    Alert.alert(
      'Task ID ' + taskId.toString(),
      'Completed???',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => this.props.onToggleTask(taskId),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  render() {
    return (
      <FlatList
        ref={'taskList'}
        data={this.props.tasks}
        renderItem={({item, index}) => (
          <DataTemplate
            {...item}
            onToggle={this.toggleTaskHandler}
            parentFlatList={this}
          />
        )}
        keyExtractor={(item, index) => item.taskName}
      />
    );
  }
}

export default TasksComponent;
