import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { type TransactionFormSchema}  from "../schemas/transaction.schema";
import { useEffect, useState } from 'react';
import "../../../global.css";

export default function HistoryScreen(){
  const cle_stockage:any = process.env.EXPO_PUBLIC_KEY_TRANSACTIONS 
  const [allTransactions, setAllTransactions] = useState<Array<TransactionFormSchema>>()
  
  useEffect(()=>{
    const charger = async ()=>{
        try {
          
          const getTransactions = async () =>{
            const storedData = await AsyncStorage.getItem(cle_stockage);
            const transactions:Array<TransactionFormSchema> = storedData ? JSON.parse(storedData):[]
            console.log('stored' + storedData)
            console.log('re'+transactions)
            return transactions
          }
          const transactionsFetched = await getTransactions()
          setAllTransactions(transactionsFetched)
          
        } catch (error) {
          alert('Erreur : '+ error)
        }
      }
      
      charger()
  },[])



  return (
    <View className='px-2 py-4'>
      <Text style={{ fontFamily: 'Roboto Slab' }} className='text-2xl text-center font-bold'>Gains & Dépenses</Text>
      
      {allTransactions?.map((t)=>(
        <Text>{t.titre}</Text>
      ))}
    </View>
  )
}