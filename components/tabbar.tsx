import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { icons } from '@/constants/icons';

import Ionicons from '@expo/vector-icons/Ionicons';

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;
        
        const getIcons = (icon: string): 'home' | 'search' | 'bookmark'=> {
          switch (icon) {
            case 'Home':
              return 'home';
            case 'Search':
              return 'search';
            case 'Saved':
              return 'bookmark';
            default:
              return icons.home;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabs,
              isFocused && styles.focusedTab // Add focused state styling
            ]}
          >
                  <Ionicons name={getIcons(label)} size={32} color={isFocused ? '#ffffff' : '#888888'} />
            <Text 
              style={[
                styles.labelStyle,
                { color: isFocused ? '#ffffff' : '#888888' }
              ]}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 10,
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#0f0D23', 
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 12, 
  },
  focusedTab: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginBottom: 4,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
});