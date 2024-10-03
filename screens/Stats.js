import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import gthumb from '../assets/gthumb.png'; // Adjust the path as necessary

const Stats = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.statNumber}>29 pounds</Text>
            <Text style={styles.statDescription}>of estimated waste reused from LendIt borrowing</Text>
            <View style={styles.separator} />
            <Text style={styles.statNumber}>150 pounds</Text>
            <Text style={styles.statDescription}>of estimated waste reused from LendIt listings</Text>
            <View style={styles.separator} />
            <Text style={styles.achievementsTitle}>User Achievements</Text>
            <View style={styles.separator} />
            <Image source={gthumb} style={styles.achievementImage} />
            <Text style={styles.achievementTitle}>Green Thumb</Text>
            <Text style={styles.achievementDescription}>Borrowed Garden Tools</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 20,
    },
    statNumber: {
        fontSize: 48,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    statDescription: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    separator: {
        height: 5,
        backgroundColor: '#A10909',
        width: '80%',
        marginVertical: 20,
    },
    achievementsTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    achievementImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    achievementTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    achievementDescription: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});

export default Stats;