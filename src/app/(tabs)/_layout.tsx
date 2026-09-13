import { Tabs } from 'expo-router';
import { Home, ClipboardClock, PlusCircle} from 'lucide-react-native';
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'GestMoney | Accueil',
          tabBarLabel: 'Accueil',
          tabBarActiveTintColor : '#000000',
          tabBarIcon : ({color, size}) => (
            <Home color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="addTransaction"
        options={{
          title: 'GestMoney | Ajout',
          tabBarLabel: 'Ajouter',
          tabBarActiveTintColor : '#000000',
          tabBarIcon : ({color, size})=>(
            <PlusCircle color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
            title: 'GestMoney | Historique',
          tabBarLabel: 'Historique',
          tabBarActiveTintColor : '#000000',
          tabBarIcon : ({color, size})=>(
            <ClipboardClock color={color} size={size} />
          )
        }}
      />

    </Tabs>
  );
}