import React from "react"
import TextoCentral from "../components/TextoCentral";
import {Button, SafeAreaView, Text} from "react-native"

export default props => (
    <SafeAreaView >
            <Text></Text>
            <Button  title="Tela 1" onPress={() => props.navigation.navigate('Tela1')}/>
            <Button style={{flex: 1}} title="Tela 2" onPress={() => props.navigation.navigate('Tela2')}/>
            <Button style={{flex: 1}} title="Tela 3" onPress={() => props.navigation.navigate('Tela3')}/>
            <Button style={{flex: 1}} title="Tela 4" onPress={() => props.navigation.navigate('Tela4')}/>
            <Button style={{flex: 1}} title="Tela 5" onPress={() => props.navigation.navigate('Tela5')}/>
    </SafeAreaView>
)

 