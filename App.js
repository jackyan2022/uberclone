import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";  
import HomeScreen from './screen/HomeScreen';
import { store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <Provider store = {store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
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
