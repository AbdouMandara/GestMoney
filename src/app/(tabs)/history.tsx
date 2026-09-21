import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import transactionSchema, { type TransactionFormSchema}  from "../schemas/transaction.schema";

export default async function HistoryScreen() {
  const cle_stockage:any = process.env.KEY_TRANSACTIONS 

  const getTransactions = async () =>{
    const storedData = await AsyncStorage.getItem(cle_stockage);
    const transactions:Array<TransactionFormSchema> = storedData ? JSON.parse(storedData):[]
    return transactions
  }

  const allTransactions = await getTransactions()


  return (
    <View>
      <Text style={{ fontFamily: 'Roboto Slab' }}>Historique</Text>
      {allTransactions.map((t)=>(
        <p>{t.titre}</p>
      ))}
    </View>
  );
}