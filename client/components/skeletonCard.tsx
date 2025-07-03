import React from 'react';
import { View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SkeletonBox = ({ width, height, radius = 8 }: { width: any; height: number; radius?: number }) => {
  return (
    <View 
    className='animate-pulse'
    style={{
      width,
      height,
      borderRadius: radius,
      backgroundColor: '#2a2a2a',
      overflow: 'hidden',
      marginBottom: 10,
    }}>
      <LinearGradient
        colors={['#2a2a2a', '#3a3a3a', '#2a2a2a']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          flex: 1,
          width: '100%',
        }}
      />
    </View>
  );
};

const CardSkeleton = () => {
  return (
    <View style={{
      height: 350,
      width: 150,
      backgroundColor: '#1a1a1a',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#333333',
      padding: 12,
    }}>
      <SkeletonBox width="100%" height={200} radius={12} />
      <SkeletonBox width="80%" height={18} />
      <SkeletonBox width="60%" height={12} />
      <SkeletonBox width="100%" height={14} />
      <SkeletonBox width="40%" height={12} />
      <View style={{ flexDirection: 'row', gap: 4 }}>
        <SkeletonBox width={40} height={12} radius={6} />
        <SkeletonBox width={40} height={12} radius={6} />
      </View>
    </View>
  );
};

export default CardSkeleton;
