import { Text, View } from "react-native";
import { type TransactionFormSchema } from "../schemas/transaction.schema";
import transformDate from "../utils/transformDate";
export default function LineTransaction({
  titre,
  type,
  prix,
  date_creation,
}: TransactionFormSchema) {
  return (
    <>
      <View className="flex-row justify-between items-center w-full p-4 rounded-2xl mb-2 border border-gray-300 bg-white">
        <View>
          <Text
            className="text-2xl font-bold"
            style={{ fontFamily: "Oldenburg" }}
          >
            {titre}
          </Text>
          <Text style={{ fontFamily: "Oldenburg" }}>
            {transformDate(date_creation)}
          </Text>
        </View>

        <Text
          className={`${
            type === "gain"
              ? "text-[#00a43b] bg-[#eef8ef]"
              : "text-[#ff6266] bg-[#fff3f2]"
          } w-max px-2 py-1 rounded-md`}
          style={{ fontFamily: "Oldenburg" }}
        >
          {type === "gain" ? "+" : "-"} {prix} FCFA
        </Text>
      </View>
    </>
  );
}
