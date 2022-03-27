import { StatusBar, SafeAreaView } from 'react-native';

import Basket from './src/screens/Basket';

export default function App() {
  return (
    <SafeAreaView>
      <Basket />
      <StatusBar />
    </SafeAreaView>
  );
}

