import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Alert} from 'react-native';

export default class Counter extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  };

  decrementCount = () => {
    if (this.state.count == 0) {
      Alert.alert('Warning', 'Cannot move below zero.');
    } else {
      this.setState(prevState => ({count: prevState.count - 1}));
    }
  };

  navigateToNextScreen = () => {
    if (this.state.count == 0) {
      Alert.alert('Warninig', 'Give a value');
    } else {
      this.props.navigation.navigate('GetValue', {count: this.state.count});
    }
  };
  reset = () => {
    this.state.count(count => {
      count.reset = 0;
      return count;
    });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: '600',
            marginBottom: 10,
            color: 'black',
            marginBottom: 90,
          }}>
          Counter App
        </Text>

        <Text style={{fontSize: 60, fontWeight: '500', marginBottom: 190,color:'black'}}>
          {this.state.count}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this.decrementCount}
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#f4c2c2',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 40,
            }}>
            <Text style={{color: 'black', marginBottom: 20, fontSize: 50}}>
              -
            </Text>
          </TouchableOpacity>

          <View
            style={{
              height: 38,
              width: 90,
              marginTop: 10,
              alignItems: 'center',
             
            }}>
            <Text style={{fontSize: 40, color:'black',fontWeight:'bold'}}>{this.state.count}</Text>
          </View>
          <TouchableOpacity
            onPress={this.incrementCount}
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#f4c2c2',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 40,
            }}>
            <Text style={{color: 'black', fontSize: 40}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            // this.setState({count: 0});
            this.navigateToNextScreen();
          }}
          style={{
            height: 60,
            width: 300,
            backgroundColor: '#C6ACFC',
            borderRadius: 17,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <Text style={{fontSize: 30, color: 'black'}}> GetValue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({count: 0});
          }}
          style={{
            height: 60,
            width: 300,
            backgroundColor: 'red',
            borderRadius: 17,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 30, color: 'black'}}> Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
