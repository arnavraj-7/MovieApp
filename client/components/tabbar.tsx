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
      <View style={styles.tabBarWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;
          const isFocused = state.index === index;
         
          const getIcons = (icon: string): 'home' | 'search' | 'bookmark' | 'chatbubbles' => {
            switch (icon) {
              case 'Home':
                return 'home';
              case 'Search':
                return 'search';
              case 'Saved':
                return 'bookmark';
              case 'Chat':
                return 'chatbubbles';
              default:
                return icons.home;
            }
          };

          const getTabLabel = (routeName: string): string => {
            switch (routeName) {
              case 'Home':
                return 'Home';
              case 'Search':
                return 'Explore';
              case 'Saved':
                return 'Library';
              case 'Chat':
                return 'Sensei';
              default:
                return routeName;
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
                isFocused && styles.focusedTab
              ]}
            >
              <View style={[styles.iconContainer, isFocused && styles.focusedIconContainer]}>
                <Ionicons 
                  name={getIcons(label)} 
                  size={24} 
                  color={isFocused ? '#ffffff' : '#666666'} 
                />
              </View>
              <Text
                style={[
                  styles.labelStyle,
                  { color: isFocused ? '#ff6b6b' : '#888888' }
                ]}
              >
                {getTabLabel(label)}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    backgroundColor: 'transparent',
  },
  tabBarWrapper: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#0a0a0a',
    borderRadius: 20,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16,
    elevation: 16,
    overflow: 'hidden',
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 18,
    marginHorizontal: 4,
    marginVertical: 4,
    position: 'relative',
  },
  focusedTab: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#ff6b6b',
    shadowColor: '#ff6b6b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 4,
    padding: 4,
    borderRadius: 12,
  },
  focusedIconContainer: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
  },
  labelStyle: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});