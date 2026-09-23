import { Tabs } from "expo-router";
import { ClipboardClock, Home, PlusCircle, Trash2 } from "lucide-react-native";
import { TransactionProvider } from "../context/TransactionContext";
import { Pressable } from "react-native";
import vider_lors_press_bouton from "../utils/viderAsyncStorage";
export default function TabsLayout() {
  return (
    <TransactionProvider>
      <Tabs
        screenOptions={{
          headerTitleStyle: { fontFamily: "Oldenburg" },
          tabBarLabelStyle: { fontFamily: "Oldenburg" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "GestMoney | Accueil",
            tabBarLabel: "Accueil",
            tabBarActiveTintColor: "#2292A4",
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />

        <Tabs.Screen
          name="addTransaction"
          options={{
            title: "GestMoney | Ajout",
            tabBarLabel: "Ajouter",
            tabBarActiveTintColor: "#2292A4",
            tabBarIcon: ({ color, size }) => (
              <PlusCircle color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "GestMoney | Historique",
            tabBarLabel: "Historique",
            tabBarActiveTintColor: "#2292A4",
            tabBarIcon: ({ color, size }) => (
              <ClipboardClock color={color} size={size} />
            ),
            headerRight:()=>(
              <Pressable 
                className="bg-[#fff3f2] flex flex-row p-2 rounded-xl mr-2  border border-[#ff6266]"
                accessibilityLabel="Effacer les transactions"
                onPress={vider_lors_press_bouton}
              >
                <Trash2 size={20} color="#ff6266"/>
              </Pressable>
            )
          }}
        />
      </Tabs>
    </TransactionProvider>
  );
}
