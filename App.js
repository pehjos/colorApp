import React from 'react';
import { TouchableOpacity,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import CustomDrawerContent from './components/CustomDrawerContent';
import TopNavBar from './components/TopNavBar';
import styles from './styles';

const { width } = Dimensions.get('window'); 
const Drawer = createDrawerNavigator();

const App = () => {
  const isDesktop = width >= 768; 

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (!isDesktop ? <CustomDrawerContent {...props} /> : null)} // Show drawer only on mobile
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            title: 'Random Color Generator',
            headerLeft: () =>
              !isDesktop ? (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.drawerToggle}>
                  <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
              ) : null, // Hide on desktop
            headerRight: () =>
              isDesktop ? (
                <TopNavBar navigation={navigation} activeColor={route?.params?.selectedBaseColor || '#FFFFFF'} />
              ) : null, 
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
