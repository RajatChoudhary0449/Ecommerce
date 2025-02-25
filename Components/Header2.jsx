import React from 'react';
import { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../App';

const Header2 = () => {
    const { items, setSearch } = useContext(AppContext);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: "https://i.pinimg.com/736x/4c/39/ab/4c39ab98eabcaeb1935b3d5f64f55d31.jpg" }}
                    style={styles.logo}
                />
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for products..."
                    onChangeText={(text) => setSearch(text)}
                />
            </View>

            <TouchableOpacity style={styles.cartContainer} onPress={() => { navigation.navigate("Cart") }}>
                <Image
                    source={require('./../Assets/Images/cart.png')}
                    style={styles.cartIcon}
                />
                <Text style={styles.cartBadge}>{items}</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingLeft: 2,
        paddingRight: 10,
        paddingVertical: 10,
        backgroundColor: '#FF0000',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logoContainer: {
        flex: 1,
    },
    logo: {
        width: 70,
        height: 40,
        resizeMode: 'contain',
    },
    searchContainer: {
        flex: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 10,
    },
    searchInput: {
        height: 40,
        fontSize: 16,
        paddingLeft: 10,
        color: '#333',
    },
    cartContainer: {
        position: 'relative',
        width: 30,
        height: 30,
    },
    cartIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 10,
        width: 18,
        height: 18,
        textAlign: 'center',
        lineHeight: 18,
    },
});

export default Header2;
