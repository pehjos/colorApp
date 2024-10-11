import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles'; 

const baseColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFF5', '#FFFB33', '#9B33FF', '#FF3333', '#33FF91', '#338AFF'];

const TopNavBar = ({ navigation, activeColor }) => (
  <View style={styles.navBar}>
    {baseColors.map((color, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.navItem,]}
        onPress={() => navigation.navigate('Home', { selectedBaseColor: color })}
      >
        <Text style={[styles.navItemText, { color: color === activeColor ? '#fff' : color }]}>
          Base Color {index + 1}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TopNavBar;
