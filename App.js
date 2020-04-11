import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      

      <TouchableOpacity
        onPress={() => alert('Welcome')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
