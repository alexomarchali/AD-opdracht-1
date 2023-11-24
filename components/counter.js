import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Counter() {
    const [count, setCount] = useState(0);

    return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>marokkannen {count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.textStyle}>meer</Text>
        </TouchableOpacity>
            <Text style={styles.textStyle}>Of</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
            <Text style={styles.textStyle}>minder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
            <Text style={styles.textStyle}>reset nederland</Text>
        </TouchableOpacity>
    </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      paddingBottom: 0,
      flex: 1,
      gap: 20,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
      color: 'white',
      fontSize: 30

    },

    button: {
        backgroundColor : 'grey',
        padding : 30,
        borderRadius : '10px',

    }
  });