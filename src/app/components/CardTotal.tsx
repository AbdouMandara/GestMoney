import { ReactElement } from "react";
import {View, Text } from "react-native";
interface CardProps{
    title : String,
    icone : ReactElement,
    price : number,
    signe : String,
}
export default function CardTotal({title, icone, price, signe}: CardProps){
    return(
          <View className="w-[45%] flex justify-center gap-1 items-center rounded-2xl">
            <View className="flex flex-row gap-2 items-center justify-center">
                {icone}
                <Text className="text-white text-xl" style={{ fontFamily: 'Roboto Slab' }}>{title}</Text>
            </View>
            <Text className="text-white flex text-center justify-center text-2xl" >{signe} <Text className="text-white font-semibold text-3xl" style={{ fontFamily: 'Roboto Slab' }}>{price} F</Text></Text>
        </View>
    )
}