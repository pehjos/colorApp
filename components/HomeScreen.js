import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useSharedValue} from 'react-native-reanimated';
import { getRandomColor, getRandomColorFromBase } from '../utils';
import styles from '../styles';

const HomeScreen = ({ route }) => {
  const [bgColor, setBgColor] = useState(route.params?.selectedBaseColor || getRandomColor()); 

  useEffect(() => {
    if (route.params?.selectedBaseColor) {
      setBgColor(route.params.selectedBaseColor); 
    }
  }, [route.params?.selectedBaseColor]);

  const progress = useSharedValue(1);
  const handlePress = () => {
    const newColor = route.params?.selectedBaseColor
      ? getRandomColorFromBase(route.params.selectedBaseColor)
      : getRandomColor();
    setBgColor(newColor);
    progress.value = progress.value === 1 ? 1.2 : 1;
  };


  const handleReset = () => setBgColor('#FFFFFF');

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]} onPress={handlePress}>
      <StatusBar barStyle="light-content" />
      <View style={styles.btns}>
        <Text style={styles.selectedColorText}>Hello there</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Color</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreen;
