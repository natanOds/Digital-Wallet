import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "./styles/theme";

import { Login } from "./screens/Login/Login";



const App: React.FC = () => {

    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    });



      if (!fontsLoaded) {
        return null;
      } //IMPORTAÇÃO DA FONTE GLOBAL

    return (
        <ThemeProvider theme={COLORS}>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <View>
                <Login />
            </View>
        </ThemeProvider>
    );
};

export default App;
