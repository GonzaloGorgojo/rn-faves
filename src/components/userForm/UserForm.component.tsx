import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity, View } from 'react-native';
import UserFormStyle from './userForm.style';
import { Ionicons } from '@expo/vector-icons';

type userFormProps = {
  isUsername: boolean;
  emailAddress: string;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
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
  setShowPassword,
  showPassword,
}: userFormProps): JSX.Element => {
  return (
    <SafeAreaView style={UserFormStyle.container}>
      {isUsername ? (
        <TextInput
          placeholderTextColor="grey"
          style={UserFormStyle.input}
          value={username}
          placeholder="Username..."
          onChangeText={(username) =>
            setUsername ? setUsername(username) : ''
          }
        />
      ) : (
        ''
      )}
      <TextInput
        placeholderTextColor="grey"
        style={UserFormStyle.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        keyboardType="email-address"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <View
        style={{
          ...UserFormStyle.input,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholderTextColor="grey"
          value={password}
          placeholder="Password..."
          secureTextEntry={showPassword}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {!showPassword ? (
            <Ionicons name="eye-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserForm;
