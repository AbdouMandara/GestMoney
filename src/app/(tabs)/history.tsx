import { View, Text } from 'react-native'
import "../../../global.css";
import LineTransaction from "../components/LineTransaction";
import { useContext } from 'react';
import TransactionsContext from '../context/TransactionContext';
import { ReceiptText } from 'lucide-react-native';
export default function HistoryScreen(){
  const context = useContext(TransactionsContext) //ca contient la valeur que le Provider a mis dans le context

  return (
    <View className='p-4'>
      <Text style={{ fontFamily: 'Roboto Slab' }} className='text-2xl mt-6 text-center font-bold'>Gains & Dépenses</Text>
      {context?.allTransactions && context.allTransactions.length > 0 ? (
        context.allTransactions.map((t) => (
          <LineTransaction key={String(t.date_creation)} titre={t.titre} date_creation={t.date_creation} prix={t.prix} type={t.type} />
        ))
      ) : (
        <>
        <View className="items-center justify-center py-10 rounded-2xl mt-4 border border-gray-300 bg-white">
          <ReceiptText size={48} />
          <Text className="mt-3 text-gray-500">
            Tu n'as rien gagné et depensé depuis !
          </Text>
        </View>
        </>
      )}
    </View>
  )
}