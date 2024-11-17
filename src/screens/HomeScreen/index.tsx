import { FlatList, Text, TextInput, View, StyleSheet, Button, TouchableOpacity} from "react-native"
import { useState } from "react"
import FontAwesome from '@expo/vector-icons/FontAwesome';


export const HomeScreen = () =>{
    const [tarefa, setTarefa] = useState ("")

    const [listaTarefas, setListaTarefas] = useState<any[]>([]);

    const handlePress = () => {
       if (tarefa == "") return;
        const novaTarefa = {
            title: tarefa
        };

        setListaTarefas([...listaTarefas, novaTarefa]);

        setTarefa("");
    }

    return (
        <View style={style.container}>
            <View style={style.containerInput}>
            <TextInput style={style.input} value={tarefa} onChangeText={setTarefa}/>
            <Button title="Adicionar Tarefa" onPress={handlePress}/>
            </View>

            <FlatList 
            data={listaTarefas}
            renderItem={({item, index}) => (
                <View style={style.itemContainer}>
                <Text>{item.title}</Text>
                <TouchableOpacity>
                <FontAwesome name="trash-o" size={50} color="black" />
                </TouchableOpacity>
                
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
} 

const style = StyleSheet.create({
    container:{ 
        backgroundColor:"#0ff",
        flex:1,
        padding:16,
        
    },
    containerInput: {
 
    },

    input:{
        borderWidth:1,
        borderBlockColor:"#ccc",
        borderRadius:8,
        backgroundColor: "white",
        alignItems:"center"

    },

    itemContainer:
    {
        //flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"red",
            
    }

    
});