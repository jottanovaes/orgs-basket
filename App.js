import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { StatusBar, SafeAreaView, View } from 'react-native';

import Basket from './src/screens/Basket';

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  return fontsLoaded && (
    <SafeAreaView>
      <Basket />
      <StatusBar />
    </SafeAreaView>
  );
}

