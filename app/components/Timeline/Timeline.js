import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Image,
} from 'react-native';
import styles from './styles';
import axios from 'axios';

class DataTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: '',
      displayName: '',
    };
  }

  componentDidMount() {
    this.setState({
      profileImage: this.props.item.profile_image,
      displayName: this.props.item.display_name,
    });
  }

  render() {
    return (
      <View style={styles.templateContainer}>
        <Image
          source={{uri: this.state.profileImage}}
          style={styles.profileImageStyle}
        />
        <Text style={styles.displayNameStyle}>{this.state.displayName}</Text>
      </View>
    );
  }
}

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      loading: false,
      isRefreshing: false,
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    this.getAllUsers(this.page);
  }

  getAllUsers(page) {
    const url = `https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`;
    this.setState({
      loading: true,
    });
    axios
      .get(url)
      .then((res) => {
        let listData = this.state.data;
        let data = listData.concat(res.data.items);
        this.setState({
          loading: false,
          data: data,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: 'Something just went wrong',
        });
      });
  }

  refreshItems = () => {
    const url =
      'https://api.stackexchange.com/2.2/users?page=1&order=desc&sort=reputation&site=stackoverflow';
    this.setState({
      isRefreshing: true,
    });
    axios
      .get(url)
      .then((res) => {
        let data = res.data.items;
        this.setState({isRefreshing: false, data: data});
      })
      .catch((error) => {
        this.setState({
          isRefreshing: false,
          error: 'Something just went wrong',
        });
      });
  };

  renderSeparator = () => {
    return <View style={styles.separatorStyle} />;
  };

  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }
    return <ActivityIndicator style={styles.activityIndicatorStyle} />;
  };

  loadMoreHandler = () => {
    if (!this.state.loading) {
      this.page += 1;
      this.getAllUsers(this.page);
    }
  };

  render() {
    if (this.state.loading && this.page === 1) {
      return (
        <View style={styles.container}>
          <ActivityIndicator style={styles.activityIndicatorStyle} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          ref={'usersList'}
          data={this.state.data}
          extraData={this.state}
          renderItem={({item, index}) => (
            <DataTemplate item={item} index={index} parentFlatList={this} />
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.refreshItems}
            />
          }
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={0.4}
          onEndReached={this.loadMoreHandler}
        />
      </View>
    );
  }
}

export default Timeline;
