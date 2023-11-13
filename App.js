import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import { useState } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { increment, decrement } from './store/state';

export default function App() {
    return ( <
        Provider store = { store } >
        <
        View style = { styles.container } >
        <
        TouchableOpacity onPress = {
            () => store.dispatch(increment)
        } >
        <
        Text > Increment < /Text> < /
        TouchableOpacity > <
        TouchableOpacity onPress = {
            () => store.dispatch(decrement)
        } >
        <
        Text > Decrement < /Text> < /
        TouchableOpacity > <
        StatusBar style = "auto" / >
        <
        /View> < /
        Provider >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});