import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-eva-icons";
import auth from "@react-native-firebase/auth";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import { Button, ErrorMessage } from "../../components";
import { InstagramLogo } from "../../../assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/BeforeAuth/AuthStack";

const { height, width } = Dimensions.get("window");

interface Values {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  username: Yup.string().required().min(4).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match",
  ),
});

const SignupScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Signup">) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const signupPressHandler = async ({
    password,
    confirmPassword,
    username,
    email,
  }: Values) => {
    try {
      if (password === confirmPassword) {
        await (
          await auth().createUserWithEmailAndPassword(email, password)
        ).user.updateProfile({
          displayName: username,
        });
      }

      if (auth().currentUser) {
        return Alert.alert("Sign up successful", "Welcome! Please log in now", [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]);
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={signupPressHandler}
      validateOnMount={false}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}>
      {({
        handleSubmit,
        values,
        handleChange,
        errors,
      }: FormikProps<Values>) => {
        const isDisabled =
          !errors ||
          !values.username ||
          !values.email ||
          !values.password ||
          !values.confirmPassword;

        return (
          <View style={styles.rootContainer}>
            <InstagramLogo
              width={width * 0.5}
              height={height * 0.15}
              style={styles.instagramLogo}
            />
            <TextInput
              placeholder="Username"
              style={styles.input}
              autoCapitalize="none"
              value={values.username.toLowerCase()}
              onChangeText={handleChange("username")}
            />
            {errors.username && <ErrorMessage error={errors.username} />}
            <TextInput
              placeholder="Email"
              style={[styles.input, styles.inputMargin]}
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
                onPress={() => setShowPassword(prev => !prev)}
              />
            ) : (
              <Icon
                name="eye-off-outline"
                width={24}
                height={24}
                style={styles.icon}
                onPress={() => setShowPassword(prev => !prev)}
              />
            )}
            {errors.password && <ErrorMessage error={errors.password} />}

            <TextInput
              placeholder="Confirm Password"
              style={[styles.input, styles.inputMargin]}
              autoCapitalize="none"
              secureTextEntry={!showConfirmPassword}
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
            />
            {showConfirmPassword ? (
              <Icon
                name="eye-outline"
                width={24}
                height={24}
                style={styles.icon}
                onPress={() => setShowConfirmPassword(prev => !prev)}
              />
            ) : (
              <Icon
                name="eye-off-outline"
                width={24}
                height={24}
                style={styles.icon}
                onPress={() => setShowConfirmPassword(prev => !prev)}
              />
            )}

            {errors.confirmPassword && (
              <ErrorMessage error={errors.confirmPassword} />
            )}
            <Button
              disabled={isDisabled}
              style={[styles.logInBtn, isDisabled && styles.disabled]}
              textStyle={[styles.logInText, styles.logInBtnText]}
              onPress={handleSubmit}>
              Sign Up
            </Button>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  instagramLogo: {
    marginTop: height * 0.1,
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
  disabled: {
    opacity: 0.6,
  },
});
