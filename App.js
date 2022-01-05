import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Text, View, Platform } from 'react-native';
import { Provider } from "react-redux";  
import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import { store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={{ flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform === "ios" ? -64 : 0}
            >
            <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={HomeScreen} 
                options= {{
                  headerShown: false,
                }}/>
                <Stack.Screen name='MapScreen' component={MapScreen} 
                options= {{
                  headerShown: false,
                }}/>              
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

