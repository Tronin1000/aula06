import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";



const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {

    return (
        <Navigator>

            <Screen name="Home" component={HomeScreen} options={{title:"Gerenciador de tarefas", //headerShown: false
            }}/>

        </Navigator>
    )

};