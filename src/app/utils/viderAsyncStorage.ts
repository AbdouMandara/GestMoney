 import { useContext, useEffect } from "react";
 import AsyncStorage from "@react-native-async-storage/async-storage";
import TransactionsContext from "../context/TransactionContext";

export default function vider(){
    const context = useContext(TransactionsContext)
    useEffect(()=>{
        const chargement = async ()=>{
            await AsyncStorage.removeItem("mes_depenses");
            console.log('supprime')
            context?.setAllTransactions([])
        }
        chargement()
    },[])
}