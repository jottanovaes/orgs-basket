import { StatusBar, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Basket from './src/screens/Basket';
import mock from './src/mocks/basket';

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <Basket {...mock} />
      <StatusBar />
    </SafeAreaView>
  );
}

