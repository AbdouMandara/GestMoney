import { Text, View } from "react-native";
import { type TransactionFormSchema } from "../schemas/transaction.schema";
import transformDate from "../utils/transformDate";
export default function LineTransaction({titre, type, prix, date_creation}:TransactionFormSchema){
    return(
        <>
        <View className={`${type === 'gain' ? 'bg-green-500' : 'bg-red-100'} w-full px-4 rounded-2xl`}>          
            <View>
                <Text>{titre}</Text>
                <Text>{transformDate(date_creation)}</Text>
            </View>
            <Text>{type == 'gain' ? '+' : '-'}{prix}</Text>
        </View>
        </>
    )
}