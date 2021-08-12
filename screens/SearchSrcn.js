import * as React from 'react';
import {Text,View} from 'react-native';

export default class SearchScrn extends React.Component
{
  render()
  {
    return(
        <View style={{flex:1, JustifyContent:'center', alignItems:'center'}}>
            <Text style={{margin:140}}>Searchign</Text>
        </View>
    );  
  }  
}
