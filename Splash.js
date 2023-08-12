import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CounterScreen from './CounterScreen';

// const Stack = createStackNavigator();

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
    // After hiding the splash screen, navigate to the CounterScreen
    this.props.navigation.navigate('Counter');
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <ImageBackground
            source={require('../asset/splash.jpg')}
            style={{ width: '100%', height: '100%'}}
         >
            <Text
            style={{
                height:60,
                width:300,
                fontSize:50,
                fontWeight:'bold',
                color:'black',
                alignSelf:'center',
                marginLeft:30
            }}>Counter App</Text>
             <Text
            style={{
                height:50,
                width:'100%',
                fontSize:50,
                fontWeight:'bold',
                color:'red',
                alignSelf:'center',
                marginLeft:50,
                marginTop:600
            }}>Electronic tasbih</Text>
            <Text
            style={{
                height:50,
                width:'100%',
                fontSize:50,
                fontWeight:'bold',
                color:'red',
                alignSelf:'center',
                marginLeft:230
            }}>Counter</Text>
         </ImageBackground>
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    // margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    flex: 1,
  },
});




