import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import MainNavigator from './MainNavigator';

const Navigator = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{
          headerShown: false,
        }} name='MainNavigator' component={MainNavigator}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigator