
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './Navigation/Index';


export default function App() {
  return (
    <View style={styles.container}>
     <Navigator />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
