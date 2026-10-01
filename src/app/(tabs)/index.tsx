import { Annoyed, MoveDownLeft, MoveUpRight } from "lucide-react-native";
import { useContext, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import "../../../global.css";
import CardTotal from "../components/CardTotal";
import TransactionsContext from "../context/TransactionContext";
import PieComponent from "../components/PieComponent";
export default function Index() {
  const context = useContext(TransactionsContext);
  let somme_gain = context?.allTransactions.filter((t) => t.type === 'gain').reduce((acc,t)=> acc + t.prix, 0)
  let somme_depense = context?.allTransactions.filter((t) => t.type === 'depense').reduce((acc,t)=> acc + t.prix, 0)
  let argent_total = (somme_gain??0) + (somme_depense??0)
  let pourcentage_gain = Number((((somme_gain??0)*100)/argent_total).toFixed(1))
  let pourcentage_depense = Number((((somme_depense??0)*100)/argent_total).toFixed(1))

  return (
    <ScrollView className="flex gap-4 bg-[#2292A4]" contentContainerClassName="items-center">
      <View className="flex flex-column mt-8 items-center mb-4 w-[95%] gap-8 rounded-2xl py-4 ">
        <View className="w-full flex items-center gap-1 ">
          <Text className="text-xl font-semibold text-white" style={{ fontFamily: "Oldenburg" }}>
            L' argent dans tes poches
          </Text>
          <Text className="text-4xl font-semibold text-white flex text-center" style={{ fontFamily: "Oldenburg" }}>
            <Text className="text-6xl font-bold text-white" style={{ fontFamily: "Oldenburg" }}
            >
              {(somme_gain ?? 0) > (somme_depense ?? 0) ? (somme_gain ?? 0) - (somme_depense ?? 0) : 0}
            </Text>
            FCFA
          </Text>
        </View>

        <View className="w-full justify-between flex flex-row overflow-hidden">
          <CardTotal
            title="Gains"
            icone={<MoveUpRight color="rgba(14, 250, 45, 0.52)" size={20} />}
            price={somme_gain}
            signe="+"
          />
          <CardTotal
            title="Depenses"
            icone={<MoveDownLeft color="rgb(207, 13, 13)" size={20} />}
            price={somme_depense}
            signe="-"
          />
        </View>
      </View>

      <View className="flex-1 w-full bg-white rounded-tl-3xl rounded-tr-3xl pt-6">
        <Text
          className="text-2xl text-center "
          style={{ fontFamily: "Oldenburg" }}
        >
          Regardes ton travail, <Text className="font-bold">Abdou</Text> !

        </Text>
          {somme_gain === 0 && somme_depense === 0 ? (
            <View className="h-[300px] flex flex-col justify-center items-center gap-2 rounded-2xl bg-white">
              <Annoyed size={60} />
              <Text className="text-center text-gray-500 " style={{ fontFamily: "Oldenburg" }}>
                Tu n'as rien gagné et dépensé depuis !
              </Text>
            </View>
          ) : (
              
              <PieComponent pourcentage_depense={pourcentage_depense} pourcentage_gain={pourcentage_gain}/>
          )}
      </View>
    </ScrollView>
  );
}
