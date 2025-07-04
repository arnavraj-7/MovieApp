import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView, MotiText } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
const LandingPage = () => {
    const router = useRouter();
    const onGetStarted = () => {
        router.push({ pathname: '/(tabs)' })
    }
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("./../assets/images/landing.webp")} // Replace with your anime collage image
        style={styles.backgroundImage}
        contentFit="cover"
      />
      
      {/* Dark Overlay */}
      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'rgba(10,10,10,0.5)', 'rgba(0,0,0,0.65)']}
        locations={[0, 0.5, 1]}
        style={styles.overlay}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* App Logo/Title */}
          <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 1000 }}
            style={styles.titleContainer}
          >
            <Text style={styles.appName}>
              anime<Text style={styles.appNameAccent}>Verse</Text>
            </Text>
            <View style={styles.titleUnderline} />
          </MotiView>

          {/* Tagline */}
          <MotiText
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 1000, delay: 300 }}
            style={styles.tagline}
          >
            Your Ultimate Anime Companion
          </MotiText>

          {/* Features */}
          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 800, delay: 600 }}
            style={styles.featuresContainer}
          >
            <View style={styles.featureItem}>
              <View style={[styles.featureIcon, { backgroundColor: '#ff6b6b' }]} />
              <Text style={styles.featureText}>Discover top anime & manga</Text>
            </View>
            
            <View style={styles.featureItem}>
              <View style={[styles.featureIcon, { backgroundColor: '#4ecdc4' }]} />
              <Text style={styles.featureText}>Advanced search facility</Text>
            </View>
            
            <View style={styles.featureItem}>
              <View style={[styles.featureIcon, { backgroundColor: '#ffa726' }]} />
              <Text style={styles.featureText}>AI chatbot for anime discussions</Text>
            </View>
          </MotiView>

          {/* Description */}
          <MotiText
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800, delay: 900 }}
            style={styles.description}
          >
            Explore the world of anime with personalized recommendations, 
            detailed information, and intelligent conversations about your favorite series.
          </MotiText>

          {/* Get Started Button */}
          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 600, delay: 1200 }}
            style={styles.buttonContainer}
          >
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={onGetStarted}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={['#ff6b6b', '#ff8e8e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Get Started</Text>
                <Text style={styles.buttonArrow}>→</Text>
              </LinearGradient>
            </TouchableOpacity>
          </MotiView>

          {/* Bottom Stats */}
          <MotiView
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800, delay: 1500 }}
            style={styles.statsContainer}
          >
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10K+</Text>
              <Text style={styles.statLabel}>Anime Titles</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5K+</Text>
              <Text style={styles.statLabel}>Manga Series</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>AI Assistant</Text>
            </View>
          </MotiView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    opacity: 0.3,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -2,
    textShadowColor: 'rgba(255, 107, 107, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  appNameAccent: {
    color: '#ff6b6b',
  },
  titleUnderline: {
    width: 120,
    height: 4,
    backgroundColor: '#ff6b6b',
    borderRadius: 2,
    marginTop: 8,
    opacity: 0.8,
  },
  tagline: {
    fontSize: 20,
    color: '#CCCCCC',
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  featuresContainer: {
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  featureIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 16,
  },
  featureText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginBottom: 40,
  },
  getStartedButton: {
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    paddingHorizontal: 0,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ff6b6b',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#AAAAAA',
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default LandingPage;