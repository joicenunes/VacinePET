// This file is a fallback for using Feather icons on Android and web.

import Feather from '@expo/vector-icons/Feather';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

// Add your SFSymbol to Feather icons mappings here.
const MAPPING = {
  // See Feather icons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'chevron.right': 'chevron-right',
  'rectangle.portrait.and.arrow.right': 'log-out',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof Feather>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and Feather icons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to Feather icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <Feather color={color} size={size} name={MAPPING[name]} style={style} />;
}
