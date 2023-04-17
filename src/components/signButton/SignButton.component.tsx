import { Text, TouchableOpacity } from "react-native";
import SignButtonStyle from "./SignButton.style";

type SignButtonProps = {
  title: string;
  onPress: () => void;
};

const SignButton = ({ title, onPress }: SignButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={SignButtonStyle.button} onPress={onPress}>
      <Text style={SignButtonStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
