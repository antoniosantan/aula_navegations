import React from "react";
import Tela1 from "../views/Tela1";
import Tela2 from "../views/Tela2";
import Tela3 from "../views/Tela3";
import Tela4 from "../views/Tela4";
import Tela5 from "../views/Tela5";
import TelaPrincipal from "../views/TelaPrincipal"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name='Tela1' component={Tela1}/>
        <Stack.Screen name='Tela2' component={Tela2}/>
        <Stack.Screen name='Tela3' component={Tela3}/>
        <Stack.Screen name='Tela4' component={Tela4}/>
        <Stack.Screen name='Tela5' component={Tela5}/>
        <Stack.Screen name='TelaPrincipal' component={TelaPrincipal}/>
    
    </Stack.Navigator>
)