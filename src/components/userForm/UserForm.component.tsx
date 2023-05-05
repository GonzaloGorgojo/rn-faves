import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, View } from "react-native";
import UserFormStyle from "./userForm.style";

type userFormProps = {
  isUsername: boolean;
  emailAddress: string;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  username?: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
};

const UserForm = ({
  isUsername,
  emailAddress,
  setEmailAddress,
  password,
  setPassword,
  username,
  setUsername,
}: userFormProps): JSX.Element => {
  return (
    <SafeAreaView style={UserFormStyle.container}>
      {isUsername ? (
        <TextInput
          style={UserFormStyle.input}
          value={username}
          placeholder="Username..."
          onChangeText={(username) =>
            setUsername ? setUsername(username) : ""
          }
        />
      ) : (
        ""
      )}
      <TextInput
        style={UserFormStyle.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        keyboardType="email-address"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />

      <TextInput
        style={UserFormStyle.input}
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </SafeAreaView>
  );
};

export default UserForm;
