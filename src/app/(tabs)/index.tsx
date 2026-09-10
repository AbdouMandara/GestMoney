import "../../../global.css";
import * as Font from "expo-font";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 w-full h-[25%] px-6 py-8 gap-2">
      <Text className="font-roboto-slab text-2xl">Regardes ton travail, <Text className="font-bold">Abdou</Text> :(</Text>
      <View className="relative z-0 h-[25%] w-full bg-white flex flex-row rounded-2xl overflow-hidden">
        <View className="flex-1 z-0 h-full bg-red-400/30 flex py-8 items-center">
          <Text className="text-white font-semibold text-2xl">Depenses</Text>
          <Text className="text-white font-bold text-6xl">0</Text>
          <Text className="text-white font-italic text-xl">FCFA</Text>
        </View>
        <View className="flex-1 z-0 h-full bg-green-400/30 flex py-8 items-center">
          <Text className="text-white font-semibold text-2xl">Gains</Text>
          <Text className="text-white font-bold text-6xl">0</Text>
          <Text className="text-white font-italic text-xl">FCFA</Text>
        </View>
        <View className="h-[55px] w-[55px] flex justify-center items-center rounded-full absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
          <Text className="text-2xl font-bold text-black">VS</Text>
        </View>
      </View>
    </View>
  );
}