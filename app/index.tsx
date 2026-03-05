import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import Colors from '@/constants/colors';
import GameOverScreen from '@/screens/GameOverScreen';
import GameScreen from '@/screens/GameScreen';
import StartGameScreen from '@/screens/StartGameScreen';
import { useState } from 'react';

export default function Index() {
    const [userNumber, setUserNumber] = useState(0);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [roundsPlayed, setRoundsPlayed] = useState(0);

    useFonts({
        'open-sans': require('@/assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('@/assets/fonts/OpenSans-Bold.ttf'),
    });

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds: any) {
        setGameIsOver(true);
        setRoundsPlayed(numberOfRounds);
    }

    function restartHandler() {
        setGameIsOver(false);
        setUserNumber(0);
        setRoundsPlayed(0);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler}
            />
        );
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                userNumber={userNumber}
                roundsPlayed={roundsPlayed}
                onRestart={restartHandler}
            />
        );
    }

    return (
        <LinearGradient style={styles.rootScreen} colors={[Colors.primary800, Colors.secondary500]}>
            <StatusBar style="auto" />
            <ImageBackground
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.imageBackground}
                source={require('../assets/images/background.png')}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.2,
    },
    text: {
        fontSize: 24,
    },
});
