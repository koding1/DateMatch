import React, { Component } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

export default class LoadableImage extends Component {
  state = {
    loading: true
  }

  render() {
    const { url } = this.props.url

    console.log(url)

    return (
      <View>
        <Image style={styles.profile}
          onLoadEnd={this._onLoadEnd}
          // source={{ uri: url }}
          source={require("../image/bg.jpg")}
        />
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={this.state.loading}
        />
      </View>
    )
  }

  _onLoadEnd = () => {
    this.setState({
      loading: false
    })
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    width: 250,
    height: 250,
  },
  profile: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
})