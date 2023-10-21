import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import CardItem from "./components/card-item/CardItem";

import CustomText from "components/TextWrapper";
import fonts from "@fonts";
import { localStrings } from "shared/localization";
import LocalString from "shared/localization/localEnums";

interface HomeScreenProps {
  userData: any;
  handleItemPress: () => void;
}

const List = (props: any) => {
  return (
    <FlatList
      data={props.userData.userData}
      renderItem={({ item }) => (
        <CardItem data={item} onPress={props.handleItemPress} />
      )}
    />
  );
};

const HomeScreen = (props: HomeScreenProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <>
          <CustomText h1 bold color={colors.text}>
            {localStrings.getString(LocalString.boilerPlateHeader)}
          </CustomText>
          <CustomText
            fontFamily={fonts.montserrat.lightItalic}
            color={colors.placeholder}
          >
            {localStrings.getString(LocalString.welcomeBack)}
          </CustomText>
        </>
        <View style={styles.listContainer}>
          {List(props)}
          {/* <List data={props} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
