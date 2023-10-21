import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./DetailScreen.style";
import Text from "components/TextWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setAppTheme } from "redux/actions/ThemeAction";
import RNBounceable from "libs/bounceable/RNBounceable";
import { RootState } from "redux/store/Store";
import { goBack } from "@navigation";

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Detail Screen
      </Text>
      <RNBounceable
        style={styles.buttonStyle}
        onPress={() => {
          goBack();
        }}
      >
        <Text color={colors.white}>Go back to Home</Text>
      </RNBounceable>
      <RNBounceable
        style={styles.buttonStyle}
        onPress={() => dispatch(setAppTheme(!isDarkMode))}
      >
        <Text color={colors.white}>Change Theme</Text>
      </RNBounceable>
    </View>
  );
};

export default DetailScreen;
