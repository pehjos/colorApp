import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btns: {
  justifyContent: 'center', 
  flex: 1,
  display: 'flex',   
  alignItems: 'center',
  gap: 10,
  },
  resetButton: {
    padding: 8,
    backgroundColor: '#FF3333',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  selectedColorText: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 18,
  },
  navBar: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#000',
  },
  drawerTitle: {
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  navItem: {
    padding: 10,
    borderRadius: 5,
    display: 'flex',
  },
  navItemText: {
    color: '#fff',
  },
  drawerToggle: {
    marginLeft: 10,
  },
});

export default styles;
