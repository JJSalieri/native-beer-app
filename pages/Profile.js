import { View, Text, Button } from "react-native";

export const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Profile - {route.params.name}</Text>
    </View>
  );
};
