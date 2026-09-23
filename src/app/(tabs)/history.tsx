import { ReceiptText, Trash2 } from "lucide-react-native";
import { useContext } from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import "../../../global.css";
import LineTransaction from "../components/LineTransaction";
import TransactionsContext from "../context/TransactionContext";
export default function HistoryScreen() {
  const context = useContext(TransactionsContext); //ca contient la valeur que le Provider a mis dans le context

  return (
    <ScrollView className="p-4">
      <Text
        style={{ fontFamily: "Oldenburg" }}
        className="text-2xl m-6 text-center font-bold"
      >
        Gains & Dépenses
      </Text>
      {context?.allTransactions && context.allTransactions.length > 0 ? (
        context.allTransactions.map((t) => (
          <LineTransaction
            key={String(t.date_creation)}
            titre={t.titre}
            date_creation={t.date_creation}
            prix={t.prix}
            type={t.type}
          />
        ))
      ) : (
        <>
          <View className="items-center justify-center py-10 rounded-2xl mt-4 border border-gray-300 bg-white">
            <ReceiptText size={48} color="#2292A4" />
            <Text className="mt-3 text-gray-500" style={{ fontFamily: "Oldenburg" }}>
              Tu n'as rien gagné et depensé depuis !
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
}
