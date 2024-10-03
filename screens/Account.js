import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import edit from '../assets/edit.png'; // Adjust the path as necessary
import person from '../assets/person.png'; // Adjust the path as necessary

const Account = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.instructionText}>Please double click on any information to edit it.</Text>
            <Image source={person} style={styles.profileImage} />
            <Text style={styles.profileName}>Micheal Smith</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>★★★★☆</Text>
                <Text style={styles.reviewText}>4.1 Stars - 153 Reviews</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
            <View style={styles.optionContainer}>
                <Text style={styles.optionText}>Billing Details</Text>
                <Image source={edit} style={styles.arrowIcon} />
            </View>
            <View style={styles.optionContainer}>
                <Text style={styles.optionText}>Notification Settings</Text>
                <Image source={edit} style={styles.arrowIcon} />
            </View>
            <View style={styles.optionContainer}>
                <Text style={styles.optionText}>Privacy</Text>
                <Image source={edit} style={styles.arrowIcon} />
            </View>
            <View style={styles.optionContainer}>
                <Text style={styles.optionText}>Appearance</Text>
                <Image source={edit} style={styles.arrowIcon} />
            </View>
            <View style={styles.optionContainer}>
                <Text style={styles.optionText}>Help + FAQ</Text>
                <Image source={edit} style={styles.arrowIcon} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 20,
    },
    instructionText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    ratingContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    ratingText: {
        fontSize: 24,
        color: '#A10909',
    },
    reviewText: {
        fontSize: 16,
        color: '#666',
    },
    logoutButton: {
        backgroundColor: '#A10909',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginVertical: 20,
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 18,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});

export default Account;