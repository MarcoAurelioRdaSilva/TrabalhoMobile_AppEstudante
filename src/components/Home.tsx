import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import { Aluno } from "../modes/Aluno";

export let database : Aluno[] = [];

interface Input{
    navigation: any
}

const Home = ( { navigation } : Input ) => {
    return (
        <View>            
            <Button
            title= "NOVO"
            onPress={ () => navigation.navigate('Novo') }/>
            <Button
            title= "EDITAR"
            onPress={ () => navigation.navigate('Editar') }/>
            <Button
            title= "LISTAR"
            onPress={ () => navigation.navigate('Listar') }/>
        </View>
    );
};

export default Home;
