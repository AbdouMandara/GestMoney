import { MoveDownLeft, MoveUpRight } from "lucide-react-native";
import { useContext } from "react";
import { Text, View } from "react-native";
import "../../../global.css";
import CardTotal from "../components/CardTotal";
import TransactionsContext from "../context/TransactionContext";

export default function Index() {
  const context = useContext(TransactionsContext);
  console.log(context?.allTransactions?.map((t) => t.prix));
  return (
    // <View className="flex items-center h-full gap-4 bg-blue-500">
    <View className="flex items-center h-full gap-4 bg-[#2292A4]">
      <View className="flex flex-column mt-8 items-center mb-4 w-[95%] gap-8 rounded-2xl p-4">
        <View className="w-full flex items-center gap-1 ">
          <Text
            className="text-xl font-semibold text-white"
            style={{ fontFamily: "Oldenburg" }}
          >
            L' argent dans tes poches{" "}
          </Text>
          <Text
            className="text-4xl font-semibold text-white flex text-center"
            style={{ fontFamily: "Oldenburg" }}
          >
            <Text
              className="text-6xl font-bold text-white"
              style={{ fontFamily: "Oldenburg" }}
            >
              0
            </Text>{" "}
            FCFA
          </Text>
        </View>

        <View className="w-full justify-between px-1 flex flex-row overflow-hidden">
          <CardTotal
            title="Gains"
            icone={<MoveUpRight color="rgba(14, 250, 45, 0.52)" size={20} />}
            price={50}
            signe="+"
          />
          <CardTotal
            title="Depenses"
            icone={<MoveDownLeft color="rgb(207, 13, 13)" size={20} />}
            price={40}
            signe="-"
          />
        </View>
      </View>

      <View className="flex-1 w-full h-full bg-white rounded-tl-3xl rounded-tr-3xl pt-6 gap-4">
        <Text
          className="text-2xl text-center "
          style={{ fontFamily: "Oldenburg" }}
        >
          Regardes ton travail, <Text className="font-bold">Abdou</Text> !
        </Text>
      </View>
    </View>
  );
}
