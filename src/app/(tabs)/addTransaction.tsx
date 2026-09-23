import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import * as Crypto from "expo-crypto";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import "../../../global.css";
import transactionSchema, {
  TransactionFormInput,
  TransactionFormOutput,
  type TransactionFormSchema,
} from "../schemas/transaction.schema";

export default function addTransaction() {
  const cle_stockage: any = process.env.EXPO_PUBLIC_KEY_TRANSACTIONS;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionFormInput, any, TransactionFormOutput>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      titre: "",
      type: "gain",
      prix: 0,
    },
  });

  const onSubmit = async (data: TransactionFormSchema) => {
    alert(
      `Enregistrement de la nouvelle transaction réussie !\nTitre: ${data.titre}\nType: ${data.type}\nPrix: ${data.prix}`,
    );
    const new_transaction = {
      id: Crypto.randomUUID(),
      titre: data.titre,
      type: data.type,
      prix: data.prix,
      date_creation: Date.now(),
    };
    const storedData = await AsyncStorage.getItem(cle_stockage);
    const transactions = storedData ? JSON.parse(storedData) : [];
    transactions.push(new_transaction);

    await AsyncStorage.setItem(cle_stockage, JSON.stringify(transactions));
    console.log(transactions, new_transaction);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingTop: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        className="px-2 py-10 flex gap-4"
        contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-6 py-10 flex justify-center bg-white gap-2 rounded-xl border border-gray-300">
          <Text
            className="text-4xl font-bold text-center"
            style={{ fontFamily: "Oldenburg" }}
          >
            Ajout de transaction
          </Text>
          <Text
            className="text-xl text-center mb-4"
            style={{ fontFamily: "Oldenburg" }}
          >
            Lâches ta transaction
          </Text>

          <View className="flex gap-6 mb-4">
            {/* Pour le Titre*/}
            <View className="flex gap-2">
              <Text
                className="text-lg font-bold"
                style={{ fontFamily: "Oldenburg" }}
              >
                Titre
              </Text>
              {errors.titre && (
                <Text
                  className="text-red-500"
                  style={{ fontFamily: "Oldenburg" }}
                >
                  {errors.titre.message}
                </Text>
              )}
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
                    className="rounded-2xl px-4 py-4 border border-gray-400"
                    style={{ fontFamily: "Oldenburg" }}
                  />
                )}
              />
            </View>

            <View className="flex gap-2">
              <Text
                className="text-lg font-bold"
                style={{ fontFamily: "Oldenburg" }}
              >
                Type
              </Text>
              {errors.type && (
                <Text
                  className="text-red-500"
                  style={{ fontFamily: "Oldenburg" }}
                >
                  {errors.type.message}
                </Text>
              )}
              {/* Select */}
              <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                  <View className="px-2 py-0 border border-gray-400 rounded-2xl">
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      accessibilityLabel="Type"
                    >
                      <Picker.Item label="Choisir une catégorie" value="" />
                      <Picker.Item
                        label="Gain"
                        value="gain"
                        style={{ fontFamily: "Oldenburg" }}
                      />
                      <Picker.Item
                        label="Dépense"
                        value="depense"
                        style={{ fontFamily: "Oldenburg" }}
                      />
                    </Picker>
                  </View>
                )}
              />
            </View>

            <View className="flex gap-2">
              <Text
                className="text-lg font-bold"
                style={{ fontFamily: "Oldenburg" }}
              >
                Montant
              </Text>
              {errors.prix && (
                <Text className="text-red-500">{errors.prix.message}</Text>
              )}
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
                    className="rounded-2xl px-4 py-4 border border-gray-400"
                    style={{ fontFamily: "Oldenburg" }}
                  />
                )}
              />
            </View>
          </View>

          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="w-full rounded-2xl bg-[#2292A4] py-4 items-center"
          >
            <Text className="text-white font-semibold text-xl text-base">
              Enregistrer
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
