import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
import Text from "components/TextWrapper";
import RNBounceable from "libs/bounceable/RNBounceable";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
      <View style={styles.userContainer} />
      <RNBounceable style={styles.userButton}>
        <Text color="#fff">Set User</Text>
      </RNBounceable>
    </View>
  );
};

export default ProfileScreen;
