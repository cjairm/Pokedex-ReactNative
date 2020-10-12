import React, { FC, useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AppProvider } from "./context/App";

import Navigation from "./navigation/Main";
import Theme from "./styles/Theme";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

const App: FC = () => {
    const [appIsReady, setAppIsReady] = useState<boolean>(false);

    const gettingReady = useCallback(async () => {
        try {
            await SplashScreen.preventAutoHideAsync();
            await fetchFonts();
        } catch (e) {
            console.warn(e);
        } finally {
            await SplashScreen.hideAsync();
            setAppIsReady(true);
        }
    }, []);

    useEffect(() => {
        gettingReady();
    }, []);

    if (!appIsReady) return null;
    return (
        <Theme>
            <AppProvider>
                <Navigation />
            </AppProvider>
        </Theme>
    );
};

export default App;

// import React, { FC, useState, useEffect, useCallback, useRef } from "react";
// import { Animated } from "react-native";
// import * as Font from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// import Navigation from "./navigation/Main";
// import Theme from "./styles/Theme";
// import { CustomImage } from "./components/Image";

// const fetchFonts = () => {
//     return Font.loadAsync({
//         "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//         "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//     });
// };

// const App: FC = () => {
//     const [appIsReady, setAppIsReady] = useState<boolean>(false);

//     const fadeAnim = useRef(new Animated.Value(1)).current;

//     const fade = (duration: number, state: "in" | "out"): void => {
//         Animated.timing(fadeAnim, {
//             toValue: state === "in" ? 1 : 0,
//             duration: duration,
//             useNativeDriver: state === "in" ? true : false,
//         }).start();
//     };

//     const gettingReady = useCallback(async () => {
//         try {
//             await SplashScreen.preventAutoHideAsync();
//             await fetchFonts();
//         } catch (e) {
//             console.warn(e);
//         }
//     }, []);

//     const cacheResourcesAsync = useCallback(async () => {
//         await SplashScreen.hideAsync();
//         fade(1500, "out");
//         setTimeout(() => setAppIsReady(true), 1200);
//     }, []);

//     useEffect(() => {
//         gettingReady();
//     }, []);

//     if (!appIsReady)
//         return (
//             <Animated.View
//                 style={{
//                     opacity: fadeAnim,
//                 }}
//             >
//                 <CustomImage
//                     source={require("./assets/splash.png")}
//                     onLoad={cacheResourcesAsync}
//                 />
//             </Animated.View>
//         );
//     else
//         return (
//             <Theme>
//                 <Navigation />
//             </Theme>
//         );
// };

// export default App;
