import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const WeatherScreen = () => {
    const scrollY = new Animated.Value(0);

    const blueHeight = scrollY.interpolate({
        inputRange: [0, SCREEN_HEIGHT],
        outputRange: [SCREEN_HEIGHT * 0.5, SCREEN_HEIGHT * 0.2],
        extrapolate: 'clamp'
    });

    const greenHeight = scrollY.interpolate({
        inputRange: [0, SCREEN_HEIGHT],
        outputRange: [SCREEN_HEIGHT * 0.5, SCREEN_HEIGHT * 0.8],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { height: blueHeight, backgroundColor: 'blue' }]} />
            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                style={[styles.box, { height: greenHeight, backgroundColor: 'green' }]}
            >
                {/* You can add more purple cards here */}
                <View style={styles.purpleCard} />
                <View style={styles.purpleCard} />
                <View style={styles.purpleCard} />
                <View style={styles.purpleCard} />
                <View style={styles.purpleCard} />
                <View style={styles.purpleCard} />
                <View style={styles.purpleCard} />
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        width: '100%',
    },
    purpleCard: {
        height: SCREEN_HEIGHT * 0.2,
        margin: 10,
        backgroundColor: 'purple',
        borderRadius: 10
    }
});

export default WeatherScreen;
