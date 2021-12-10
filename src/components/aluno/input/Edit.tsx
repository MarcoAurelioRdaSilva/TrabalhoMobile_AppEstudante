import React, { useState } from "react";
import { Button, View } from "react-native";
import { Aluno } from "../../../modes/Aluno";
import Form from "./Form";

function editar(){
    console.log("Editar");
}

function Edit(){
    const [ Aluno , setAluno ] = useState<Partial<Aluno>>({
        nome: 'Marco Aurelio Rodrigues da Silva',
        sexo: 'Masculino',
        turma: 'A',
        datanasc: new Date(2000,2,25),
        endereco: 'Rua Claudia Maria, 16 - Dico Leite',
        filiacao: 'Adriana Aparecida Rodrigues da Silva'
    });

    return(
        <View>
            <Form aluno= {Aluno as Aluno} setAluno={setAluno} />
            <Button
                title="Salvar Alterações"
                onPress={ editar }
           />
        </View>);
}

export default Edit;