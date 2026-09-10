import { Redirect } from 'expo-router';

export default function Index() {
  // Ca sert a rediriiger vers mes tabs dans ce cas sur ma page d'accueil
  return <Redirect href="/(tabs)" />;
}