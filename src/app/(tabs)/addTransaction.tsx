        import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Controller, useForm } from "react-hook-form";
import { TransactionType } from "../schemas/transaction.schema";
type FormData = {
  name: string;
  category: string;
  amount: number;
};

const OPTIONS = [
  { value: "gain", label: "Gain" },
  { value: "depense", label: "Dépense" },
] satisfies {
  value: TransactionType;
  label: string;
}[];

export default function addTransaction() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      category: "",
      amount: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <View className="p-20 gap-15">
      {/* Texte */}
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Nom"
            value={value}
            onChangeText={onChange}
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
        name="category"
        render={({ field: { onChange, value } }) => (
          <View style={{ borderWidth: 1, borderRadius: 8 }}>
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item label="Choisir une catégorie" value="" />
              <Picker.Item label="Alimentation" value="food" />
              <Picker.Item label="Transport" value="transport" />
              <Picker.Item label="Autre" value="other" />
            </Picker>
          </View>
        )}
      />

      {/* Nombre */}
      <Controller
        control={control}
        name="amount"
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