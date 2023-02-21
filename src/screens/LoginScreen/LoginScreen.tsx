import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-eva-icons";
import auth from "@react-native-firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FacebookLogo, InstagramLogo } from "../../../assets/icons";
import { Button, ErrorMessage, ItemSeparator } from "../../components";
import { useDispatch } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/BeforeAuth/AuthStack";

const { height, width } = Dimensions.get("window");

interface Values {
  email: string;
  password: string;
}

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showPasswordHandler = () => setShowPassword(prev => !prev);

  const dispatch = useDispatch();

  const signupHandler = () => navigation.navigate("Signup");

  const loginPressHandler = async ({ email, password }: Values) => {
    await auth().signInWithEmailAndPassword(email, password);

    const userCredentials = auth().currentUser?.toJSON();
    const user = { ...userCredentials, savedPosts: [] };
    dispatch({ type: "user", payload: user });
  };

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: loginPressHandler,
    validationSchema,
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
  });

  const isDisabled = !errors || !values.email || !values.password;

  return (
    <View style={styles.rootContainer}>
      <View style={styles.loginContainer}>
        <InstagramLogo
          width={width * 0.5}
          height={height * 0.15}
          style={styles.instagramLogo}
        />

        <TextInput
          placeholder="Phone number, username or email"
          style={styles.input}
          autoCapitalize="none"
          value={values.email}
          onChangeText={handleChange("email")}
        />
        {errors.email && <ErrorMessage error={errors.email} />}

        <TextInput
          placeholder="Password"
          style={[styles.input, styles.inputMargin]}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          value={values.password}
          onChangeText={handleChange("password")}
        />

        {showPassword ? (
          <Icon
            name="eye-outline"
            width={24}
            height={24}
            style={styles.icon}
            onPress={showPasswordHandler}
          />
        ) : (
          <Icon
            name="eye-off-outline"
            width={24}
            height={24}
            style={styles.icon}
            onPress={showPasswordHandler}
          />
        )}
        {errors.password && <ErrorMessage error={errors.password} />}

        <Button textStyle={styles.forgotPassword}>Forgot password?</Button>

        <Button
          style={[styles.logInBtn, isDisabled && styles.disabled]}
          textStyle={[styles.logInText, styles.logInBtnText]}
          disabled={isDisabled}
          onPress={handleSubmit}>
          Log in
        </Button>

        <View style={styles.separatorContainer}>
          <ItemSeparator style={styles.itemSeparator} />
          <Text style={styles.separatorText}>OR</Text>
          <ItemSeparator style={styles.itemSeparator} />
        </View>

        <View style={styles.fbLogInContainer}>
          <FacebookLogo width={17} height={17} />
          <Button textStyle={[styles.logInText, styles.logInFBText]}>
            Log in with Facebook
          </Button>
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Button textStyle={styles.signupBtnText} onPress={signupHandler}>
          Sign Up.
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  loginContainer: {
    flex: 1,
  },
  instagramLogo: {
    marginTop: height * 0.18,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#FAFAFA",
    height: 44,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  inputMargin: {
    marginTop: 12,
  },
  icon: {
    position: "absolute",
    bottom: 10,
    alignSelf: "flex-end",
    right: 8,
  },
  forgotPassword: {
    color: "#3797EF",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.32,
    letterSpacing: 0.15,
    marginTop: 19,
    alignSelf: "flex-end",
  },
  logInBtn: {
    backgroundColor: "#3797EF",
    height: 44,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  logInText: {
    fontWeight: "600",
    lineHeight: 16.71,
    letterSpacing: -0.15,
  },
  logInBtnText: {
    color: "#FFFFFF",
  },
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemSeparator: {
    width: "40%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  separatorText: {
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14.32,
  },
  fbLogInContainer: {
    flexDirection: "row",
    marginTop: 37,
    alignSelf: "center",
  },
  logInFBText: {
    color: "#3797EF",
    marginLeft: 10,
  },
  signupContainer: {
    flexDirection: "row",
    width,
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 95,
    paddingTop: 18,
    paddingBottom: 52,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.2)",
  },
  signupText: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 12,
    lineHeight: 14.32,
  },
  signupBtnText: {
    color: "#3797EF",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14.32,
    marginLeft: 4,
  },
  presses: {
    opacity: 0.6,
  },
  disabled: {
    opacity: 0.6,
  },
});
