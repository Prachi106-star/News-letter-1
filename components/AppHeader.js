import * as React from 'react';
import { View , Text ,StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render (){
    return(
      <View style = {styles.container} >
      <Text  style = {styles.text}>News Letter App</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create(
  {
    container : {
      backgroundColor:"blue" 

    } ,
    text : {
      color : "Red" ,
      padding : 20 ,
      fontSize : 20 ,
      textAlign:"center",
      fontWeight : "bold" 
    }

  }
)

export default AppHeader ;
