import { View, Text } from 'react-native'
import "../../../global.css";
import LineTransaction from "../components/LineTransaction";
import { useContext } from 'react';
import TransactionsContext from '../context/TransactionContext';
export default function HistoryScreen(){
  const context = useContext(TransactionsContext) //ca contient la valeur que le Provider a mis dans le context

  return (
    <View className='px-2 py-4'>
      <Text style={{ fontFamily: 'Roboto Slab' }} className='text-2xl mb-6 text-center font-bold'>Gains & Dépenses</Text>
      
      {context?.allTransactions?.map((t)=>(
        <LineTransaction key={String(t.date_creation)} titre={t.titre} date_creation={t.date_creation} prix={t.prix} type={t.type} />
      ))}
    </View>
  )
}