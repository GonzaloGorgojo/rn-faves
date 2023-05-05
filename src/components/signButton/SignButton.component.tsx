import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import SignButtonStyle from "./signButton.style";

type SignButtonProps = {
  title: string;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle> | object;
};

const SignButton = ({
  title,
  onPress,
  customStyle,
}: SignButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[SignButtonStyle.button, customStyle ?? SignButtonStyle.button]}
      onPress={onPress}
    >
      <Text style={SignButtonStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
