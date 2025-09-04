import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";

export default function App() {
  const handleLogin = () => {
    Alert.alert("Login", "Login button clicked!");
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Forgot Password clicked!");
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.root}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Image source={require("./assets/logo.png")} style={styles.logo} />

            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              activeOutlineColor="red"
              theme={{ roundness: 12 }}
            />

            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry
              style={styles.input}
              activeOutlineColor="red"
              theme={{ roundness: 12 }}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    elevation: 3,
    shadowColor: "red",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  forgotText: {
    marginTop: 20,
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
