import "../../../global.css";
import { ScrollView,View, Text } from "react-native";
import { Wallet } from "lucide-react-native";
export default function Index() {
  return (
    <View className="flex items-center h-full py-8 gap-4">
      <View className="flex flex-column items-center mb-4 w-[95%] gap-2 bg-blue-500 rounded-2xl px-4 py-6">
        <View className="w-full flex items-center gap-2">
          <Text className="text-2xl font-semibold text-white" style={{ fontFamily: 'Roboto Slab' }}>L'argent dans tes poches :</Text>
          <Text className="text-2xl font-semibold text-white text-center" style={{ fontFamily: 'Roboto Slab' }}><Text className="text-6xl font-bold text-white" style={{ fontFamily: 'Roboto Slab' }}>0</Text> FCFA</Text>
        </View>

        {/* <View className="flex-1">
          <Wallet color="white" size={50}  />
        </View> */}
      </View>

      <View className="flex-1 w-full bg-purple-500 py-4 gap-2">
        <Text className="text-2xl" style={{ fontFamily: 'Roboto Slab' }}>Regardes ton travail, <Text className="font-bold">Abdou</Text> :(</Text>
        <View className="relative z-0 h-[25%] w-full bg-white flex flex-row rounded-2xl overflow-hidden">
          <View className="flex-1 z-0 h-full bg-red-400/30 flex py-8 items-center">
            <Text className="text-white font-semibold text-2xl" style={{ fontFamily: 'Roboto Slab' }}>Depenses</Text>
            <Text className="text-white font-bold text-6xl" style={{ fontFamily: 'Roboto Slab' }}>0</Text>
            <Text className="text-white font-italic text-xl" style={{ fontFamily: 'Roboto Slab' }}>FCFA</Text>
          </View>
          <View className="flex-1 z-0 h-full bg-green-400/30 flex py-8 items-center">
            <Text className="text-white font-semibold text-2xl" style={{ fontFamily: 'Roboto Slab' }}>Gains</Text>
            <Text className="text-white font-bold text-6xl" style={{ fontFamily: 'Roboto Slab' }}>0</Text>
            <Text className="text-white font-italic text-xl" style={{ fontFamily: 'Roboto Slab' }}>FCFA</Text>
          </View>
          <View className="h-[55px] w-[55px] flex justify-center items-center rounded-full absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
            <Text className="text-2xl font-bold text-black" style={{ fontFamily: 'Roboto Slab' }}>VS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}