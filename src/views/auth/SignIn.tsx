import React, { useMemo } from "react";
import { View, Image, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { localStrings } from "shared/localization";
import Glyphs from "assets/Glyphs";
import createStyles from "./styles/SignInStyle";
import * as NavigationService from "@navigation";
import { SCREENS } from "@shared-constants";
import CustomText from "components/TextWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import { setAppTheme } from "redux/actions/ThemeAction";
import Button from "components/button";
import LocalString from "shared/localization/localEnums";

const SignInScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoStyle} source={Glyphs.Logo} />
        </View>
        <View style={styles.fieldsContainer}>
          <View style={styles.fieldsSubContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={colors.text}
              placeholder={localStrings.getString(LocalString.placeholderEmail)}
            />
            <TextInput
              style={styles.password}
              placeholderTextColor={colors.text}
              placeholder={localStrings.getString(
                LocalString.placeholderPassword,
              )}
            />
            <CustomText
              h3
              color={colors.text}
              style={styles.forgotPasswordText}
              onPress={() => Alert.alert("Hi")}
            >
              {localStrings.getString(LocalString.forgotPassword)}
            </CustomText>
          </View>
        </View>
      </View>
      <Button
        text={localStrings.getString(LocalString.login)}
        onPress={async () => NavigationService.navigate(SCREENS.TAB)}
      />
      <Button
        text={localStrings.getString(LocalString.changeTheme)}
        onPress={() => dispatch(setAppTheme(!isDarkMode))}
      />
      <Button
        text={localStrings.getString(LocalString.changeLanguage)}
        onPress={async () => localStrings.setLanguage("en")}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
