import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Login from "./scrip/componentes/Login";
import Singin from "./scrip/componentes/Singin";
import DashDoard from "./scrip/componentes/DashDoard";
import Game1 from "./scrip/game/Game1";
import Game2 from "./scrip/game/Game2";
import Game3 from "./scrip/game/Game3";
import Game4 from "./scrip/game/Game4";
import Game5 from "./scrip/game/Game5";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Singin" component={Singin} />

        <Stack.Screen name="Dashboard" component={DashDoard} />

        <Stack.Screen name="Game1" component={Game1} />
        <Stack.Screen name="Game2" component={Game2} />
        <Stack.Screen name="Game3" component={Game3} />
        <Stack.Screen name="Game4" component={Game4} />
        <Stack.Screen name="Game5" component={Game5} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}