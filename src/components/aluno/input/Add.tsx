import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Aluno } from "../../../modes/Aluno";
import { database } from "../../Home";
import Form from "./Form";
import firestore from '@react-native-firebase/firestore';

function salvar(aluno: Aluno){
    firestore()
    .collection('estudante')
    .add(aluno)
    .then((data) =>{
        console.log(data);
        console.log('Aluno Cadastrado!')
    })
}

interface Input{
    navigation: any
}

const Add = ( {navigation}: Input ) => {
    const [ Aluno , setAluno ] = useState<Partial<Aluno>>({});

    return(
        <View>
            <Form aluno={ Aluno as Aluno } setAluno={setAluno}/>
            <Button title= 'Salvar' 
            onPress={() =>{
                salvar(Aluno as Aluno);
                navigation.navigate('Home')
            }}
            />
        </View>
    );
};

export default Add;
