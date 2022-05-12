import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChooseAccountType } from "./pages/ChooseAccountType";
import { FindPlace } from "./pages/FindPlace";
import { ChooseBusinessType } from "./pages/ChooseBusinessType";
import { RentPlace } from "./pages/RentPlace";

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false };

export default function App() {
  const { Navigator, Screen } = Stack;
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={screenOptions}
        initialRouteName="ChooseAccountType"
      >
        <Screen name="ChooseAccountType" component={ChooseAccountType} />
        <Screen name="FindPlace" component={FindPlace} />
        <Screen name="ChooseBusinessType" component={ChooseBusinessType} />
        <Screen name="RentPlace" component={RentPlace} />
      </Navigator>
    </NavigationContainer>
  );
}
