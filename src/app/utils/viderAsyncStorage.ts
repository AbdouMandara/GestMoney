import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TransactionFormSchema } from "../schemas/transaction.schema";

// export function vider_lors_chargement(){
//     useEffect(()=>{
//         const chargement = async ()=>{
//             await AsyncStorage.removeItem("mes_depenses");
//             alert('Supprimez avec succes !')
//             context?.setAllTransactions([])
//         }
//         chargement()
//     },[])
// }

export default function vider_lors_press_bouton(setAllTransactions:Dispatch<SetStateAction<TransactionFormSchema[]|undefined>>){
    const execution = async()=>{
        await AsyncStorage.removeItem("mes_depenses");
        alert('Supprimez avec succes !')
            setAllTransactions([])
    } 
    execution()
}
