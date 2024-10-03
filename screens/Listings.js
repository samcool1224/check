import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import vacuum from '../assets/vacuum.png'; // Adjust the path as necessary

const Listings = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.tabs}>
                <View style={[styles.tab, styles.activeTab]}>
                    <Text style={styles.tabText}>Active</Text>
                </View>
                <View style={styles.tab}>
                    <Text style={styles.tabText}>Not Available</Text>
                </View>
                <View style={styles.tab}>
                    <Text style={styles.tabText}>Deleted</Text>
                </View>
            </View>
            <Image source={vacuum} style={styles.listingImage} />
            <Text style={styles.listingTitle}>Eureka Vacuum Cleaner</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, styles.editButton]}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]}>
                    <Text style={styles.buttonText}>Delete Listing</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <Text style={styles.footerText}>These are your only Active Listings, add more from the Add page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    activeTab: {
        backgroundColor: '#f0f0f0',
    },
    tabText: {
        fontSize: 16,
    },
    listingImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    listingTitle: {
        fontSize: 24,
        marginVertical: 10,
    },
    buttons: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    editButton: {
        backgroundColor: '#8A2BE2',
    },
    deleteButton: {
        backgroundColor: '#A10909',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    separator: {
        height: 5,
        backgroundColor: '#A10909',
        width: '100%',
        marginVertical: 20,
    },
    footerText: {
        color: '#666',
        textAlign: 'center',
    },
});

export default Listings;