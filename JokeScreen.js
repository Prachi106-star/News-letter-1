import * as React from "react" ;
import {Text,View,StyleSheet} from "react-native" ;

class JokeScreen extends React.Component {
render() {
    return (
     <View>
        <Text
          style={styles.buttonText}>
          Press Me
        </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default JokeScreen ;