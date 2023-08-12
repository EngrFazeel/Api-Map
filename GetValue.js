import React,{Component} from 'react';
import { View, Text } from 'react-native';
export default class GetValue extends Component {
  render () {

const {count} = this.props.route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50,color:'black', fontWeight: 'bold',marginBottom:150,color:'green' }}>GetValue</Text>
      <Text style={{ fontSize: 90,color:'black', fontWeight: '600' }}>{count}</Text>
    </View>
  );
};
}