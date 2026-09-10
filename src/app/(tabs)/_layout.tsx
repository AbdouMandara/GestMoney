import { Tabs } from 'expo-router';
import { Home, AlarmClock} from 'lucide-react-native';
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'GestMoney | Accueil',
          tabBarLabel: 'Accueil',
          tabBarIcon : ({color, size}) => (
            <Home color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'GestMoney | Historique',
          tabBarLabel: 'Historique',
          tabBarIcon : ({color, size})=>{
            <AlarmClock color={color} size={size} />
          }
        }}
      />

    </Tabs>
  );
}