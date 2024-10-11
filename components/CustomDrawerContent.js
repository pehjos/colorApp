
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native';
import styles from '../styles';

const baseColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFF5', '#FFFB33', '#9B33FF', '#FF3333', '#33FF91', '#338AFF'];
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <Text style={styles.drawerTitle}>Select Base Color</Text>
    {baseColors.map((color, index) => (
      <DrawerItem
        key={index}
        label={`Base Color ${index + 1}`}
        onPress={() => props.navigation.navigate('Home', { selectedBaseColor: color })}
        labelStyle={{ color }}
      />
    ))}
  </DrawerContentScrollView>
);
export default CustomDrawerContent;
