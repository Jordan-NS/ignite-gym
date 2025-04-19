import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { AuthContextProvider } from './src/contexts/AuthContext';


import { config } from './config/gluestack-ui.config';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <GluestackUIProvider config={config}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <AuthContextProvider>
        { fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </GluestackUIProvider>
  );
}
