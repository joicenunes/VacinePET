import { PropsWithChildren, ReactElement } from 'react';
import { Feather } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { IconProps as FeatherIconProps } from '@expo/vector-icons/build/createIconSet';

interface IconProps {
  url: string;
  iconProps: FeatherIconProps<any>;
}

type Props = PropsWithChildren<{
  leftIcon?: IconProps;
  pageTitle: string;
}>;

export default function Header({
  leftIcon,
  pageTitle
}: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {
        router.push((leftIcon?.url ?? "/") as Href)
      }}>
        !!leftIcon ?
        <View style={styles.iconBox}>
          <Feather name={leftIcon?.iconProps.name} size={24} color='#FFF' /> :
        </View>
        <View style={{width: 24}}></View>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>
        {pageTitle}
      </Text>
      <View style={{width: 24}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "transparent",
  },
  headerTitle: { color: "#000", fontSize: 18, fontWeight: "bold", textAlign: "center" },
  iconBox: { backgroundColor: "#FF914D", borderRadius: 8 },
});