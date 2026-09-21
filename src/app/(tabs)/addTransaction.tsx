import { View, Text, TextInput, Button } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Picker } from "@react-native-picker/picker";
import { Controller, useForm } from "react-hook-form";
import transactionSchema, { type TransactionFormSchema}  from "../schemas/transaction.schema";


export default function addTransaction() {
  const { control, handleSubmit, formState : {errors} } = useForm<TransactionFormSchema>({
    resolver : zodResolver(transactionSchema),
    defaultValues: {
      titre: "",
      type: "gain",
      prix: 0,
    },
  });

  const onSubmit = (data: TransactionFormSchema) => {
    console.log(data);
  };

  return (
    <View className="p-2 gap-15">
      <Text className="text-2xl font-bold">Ajout de transaction</Text>
      {/* Texte */}
      <Controller
        control={control}
        name="titre"
        render={({ field: { onChange, value, onBlur } }) => (
            // onChange → "la valeur a changé"
            // onBlur   → "l'utilisateur a quitté le champ"
            // value → "voici la valeur actuelle"
          <TextInput
            placeholder="Nom"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            className="rounded-2xl p-6"
            style={{
              borderWidth: 1,
              padding: 12,
              borderRadius: 8,
            }}
          />
        )}
      />

      {/* Select */}
      <Controller
        control={control}
        name="type"
        render={({ field: { onChange, value } }) => (
          <View style={{ borderWidth: 1, borderRadius: 8 }}>
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item label="Choisir une catégorie" value="" />
              <Picker.Item label="Gain" value="gain" />
              <Picker.Item label="Dépense" value="depense" />
            </Picker>
          </View>
        )}
      />

      {/* Nombre */}
      <Controller
        control={control}
        name="prix"
        render={({ field: { onChange, value } }) => (
          <TextInput
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

      <Button title="Enregistrer" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}