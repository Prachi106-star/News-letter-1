import * as React from "react" ;
import {Text,TouchableOpacity,View,StyleSheet,Image} from "react-native";

class HomeScreen extends React.Component {
  
 

  render() { 
    return ( 
     <View>
     <TouchableOpacity
        style={styles.button}
        onPress = {()=> this.props.navigation.navigate("JokeScreen")}>
        <Text
          style={styles.buttonText}>
          Read a Joke
        </Text>
      </TouchableOpacity>
    
 <TouchableOpacity
        style={styles.button}
         onPress = {()=> this.props.navigation.navigate("HoroscopeScreen")}>
        <Text
          style={styles.buttonText}>
        
        Horoscope
        </Text>
      </TouchableOpacity>

 <TouchableOpacity
        style={styles.button}
       onPress = {()=> this.props.navigation.navigate("WeatherScreen")}> 
        
        <Text
          style={styles.buttonText}>
         Weather News
        </Text>
      </TouchableOpacity>

 <TouchableOpacity
        style={styles.button}
           onPress = {()=> this.props.navigation.navigate("NewsScreen")}>

        <Text
          style={styles.buttonText}>
          Top News
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
       <Text
          style={styles.buttonText}>
          Rate us 
        </Text>
      </TouchableOpacity>
</View>

        );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    justifyContent : "center" ,
    alignSelf : "center" ,
    borderWidth : 2 ,
    borderRadius : 15,
    width : 200 ,
    height : 50 ,
    backgroundColor : "white"  
   
  },
  buttonText: {
    textAlign : "center",
    color : "black" ,
    fontWeight: 'bold',
    fontSize: 20,
  }

});



export default HomeScreen;