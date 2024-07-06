import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const VirtualWardrobe = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result;
        if (Platform.OS === 'web') {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        } else {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        }

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Virtual Wardrobe</Text>
            <TouchableOpacity onPress={pickImage} style={styles.button}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1adcc'
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Sofia',
        color: '#cb16cb'
    },
    button: {
        backgroundColor: '#cb16cb',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Sofia',
        fontSize: 16
    },
});

export default VirtualWardrobe;
