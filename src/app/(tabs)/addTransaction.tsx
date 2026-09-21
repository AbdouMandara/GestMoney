import { ScrollView, View, Text, TextInput, Button, KeyboardAvoidingView, Platform } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Picker } from "@react-native-picker/picker";
import { Controller, useForm } from "react-hook-form";
import transactionSchema, { TransactionFormInput, TransactionFormOutput, type TransactionFormSchema}  from "../schemas/transaction.schema";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from "expo-crypto";
export default function addTransaction() {

  const cle_stockage:any = process.env.KEY_TRANSACTIONS 
  const { control, handleSubmit, formState : {errors} } = useForm<TransactionFormInput, any, TransactionFormOutput>({
    resolver : zodResolver(transactionSchema),
    defaultValues: {
      titre: "",
      type: "gain",
      prix: 0,
    },
  });

  const onSubmit = async (data: TransactionFormSchema) => {
    alert(`Titre: ${data.titre}\nType: ${data.type}\nPrix: ${data.prix}`);
    const new_transaction ={
      id : Crypto.randomUUID(),
      titre : data.titre,
      type : data.type,
      prix : data.prix,
      date_creation : Date.now()
    }
    const new_transaction_en_json = JSON.stringify(new_transaction)
    const storedData = await AsyncStorage.getItem(cle_stockage);

    const transactions = storedData ? JSON.parse(storedData) : [];

    transactions.push(new_transaction_en_json)

    await AsyncStorage.setItem(
      cle_stockage,
      JSON.stringify(transactions)
    );
  };

  return (
    <KeyboardAvoidingView
  style={{ flex: 1, paddingTop : 0 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
>
    <ScrollView className="px-2 py-10 flex  gap-4" contentContainerStyle={{justifyContent:"center" ,flexGrow: 1}} keyboardShouldPersistTaps="handled">
      <View className="px-6 py-10 flex justify-center bg-white gap-4 rounded-xl">
        <Text className="text-4xl font-bold text-center">Ajout de transaction</Text>
        <Text className="text-xl text-center">Remplis ce formulaire pour enregistrer une transaction </Text>
       
        <View className="flex gap-6 mb-4">

          {/* Pour le Titre*/}
          <View className="flex gap-2">
            <Text className="text-lg font-bold">Titre</Text>
            {errors.titre && <Text className="text-red-500">{errors.titre.message}</Text>}
            <Controller
              control={control}
              name="titre"
              render={({ field: { onChange, value, onBlur } }) => (
                  // onChange → "la valeur a changé"
                  // onBlur   → "l'utilisateur a quitté le champ"
                  // value → "voici la valeur actuelle"
                <TextInput
                  placeholder="Titre de la transaction"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  accessibilityLabel="titre"
                  className="rounded-2xl p-6"
                  style={{
                    borderWidth: 1,
                    padding: 12,
                    borderRadius: 8,
                  }}
                />
              )}
            />
          </View>
          
          <View>
            <Text className="text-lg font-bold">Type</Text>
            {errors.type && <Text className="text-red-500">{errors.type.message}</Text>}
            {/* Select */}
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, value } }) => (
                <View style={{ borderWidth: 1, borderRadius: 8 }}>
                  <Picker selectedValue={value} onValueChange={onChange} accessibilityLabel="Type">
                    <Picker.Item label="Choisir une catégorie" value="" />
                    <Picker.Item label="Gain" value="gain" />
                    <Picker.Item label="Dépense" value="depense" />
                  </Picker>
                </View>
              )}
              />
          </View>

          <View>
            <Text className="text-lg font-bold">Montant</Text>
            {errors.prix && <Text className="text-red-500">{errors.prix.message}</Text>}
            {/* Nombre */}
            <Controller
              control={control}
              name="prix"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  accessibilityLabel="Montant"
                  placeholder="Montant"
                  keyboardType="numeric"
                  value={String(value)}
                  onChangeText={(text) => onChange(Number(text))}
                  style={{
                    borderWidth: 1,
                    padding: 12,
                    borderRadius: 8,
                  }}
                />
              )}
            />
          </View>
          
        </View>

      <Button title="Enregistrer"  onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}