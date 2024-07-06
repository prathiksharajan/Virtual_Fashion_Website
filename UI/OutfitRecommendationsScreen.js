import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const OutfitRecommendationsScreen = ({ route }) => {
  const { username } = route.params;
  const [occasion, setOccasion] = useState('');
  const [stylePreferences, setStylePreferences] = useState('');
  const [color, setColor] = useState('');
  const [patternPreferences, setPatternPreferences] = useState('');
  const [currentTrends, setCurrentTrends] = useState('');
  const [budget, setBudget] = useState('');
  const [comfort, setComfort] = useState('');
  const [icon, setIcon] = useState('');
  const [dressCode, setDressCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const submitHandler = () => {
  //   // Handle submission logic here
  //   if (!occasion || !stylePreferences || !color || !patternPreferences || !currentTrends || !budget || !comfort || !icon || !dressCode) {
  //     console.error('All fields are required');
  //     return; // Prevent form submission
  //   }
  //   const data = {
  //     username,
  //     occasion,
  //     stylePreferences,
  //     color,
  //     patternPreferences,
  //     currentTrends,
  //     budget,
  //     comfort,
  //     icon,
  //     dressCode,
  //   };
  //
  //   console.log('POST Request Data:', data);
  //
  //   fetch('http://192.168.56.1:3000/submit', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //
  //   })
  //   .then((response) => {
  //     console.log("After fetch response");
  //     console.log('Response:', response);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     console.log('Response:', response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('Success:', data);
  //     setSuccessMessage('Outfit recommendations submitted successfully');
  //     // Handle success response if needed
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //     // Handle error if needed
  //   });
  Alert.alert('Submission', 'Your outfit recommendations have been submitted.');
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Questions</Text>
            <Text style={styles.tableHeader}>Options</Text>
          </View>

          {/* Repeat the following block for each question */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1. Occasion</Text>
            <Picker
              style={styles.picker}
              selectedValue={occasion}
              onValueChange={(itemValue) => { console.log("Selected Occasion:", itemValue); setOccasion(itemValue); }}>
              <Picker.Item label="Casual day out" value="casual" />
              <Picker.Item label="Formal event" value="formal" />
              <Picker.Item label="Party or celebration" value="party" />
              <Picker.Item label="Work or business meeting" value="work" />
              <Picker.Item label="Athletic or sporty activity" value="athletic" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2. Style Preferences</Text>
            <Picker style={styles.picker}selectedValue={stylePreferences}
    onValueChange={(itemValue) => setStylePreferences(itemValue)}>
              <Picker.Item label="Casual and laid-back" value="casual" />
              <Picker.Item label="Trendy and fashionable" value="trendy" />
              <Picker.Item label="Classic and timeless" value="classic" />
              <Picker.Item label="Bohemian and free-spirited" value="bohemian" />
              <Picker.Item label="Edgy and experimental" value="edgy" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>3. Color Palette</Text>
            <Picker style={styles.picker}
            selectedValue={color}
            onValueChange={(itemValue) => setColor(itemValue)}
            >
              <Picker.Item label="Neutral tones(black,white,gray)" value="Neutral" />
              <Picker.Item label="Earthy tones (brown, green, beige)" value="Earthy" />
              <Picker.Item label="Classic and timeless" value="classic" />
              <Picker.Item label="Vibrant colors (red, blue, yellow)" value="Vibrant" />
              <Picker.Item label="Pastel hues (soft pinks, blues, greens)" value="Pastel" />
              <Picker.Item label="Monochrome (single color)" value="Monochrome" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>4. Pattern Preferences</Text>
            <Picker style={styles.picker}
            selectedValue={patternPreferences}
            onValueChange={(itemValue) => setPatternPreferences(itemValue)}>
              <Picker.Item label="Stripes" value="Stripes" />
              <Picker.Item label="Florals" value="Florals" />
              <Picker.Item label="Geometric shapes" value="Geometric shapes" />
              <Picker.Item label="Solids" value="Solids" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>5. Current Trends</Text>
            <Picker style={styles.picker}
            selectedValue={currentTrends}
            onValueChange={(itemValue) => setCurrentTrends(itemValue)}
            >
              <Picker.Item label="Yes, incorporate current trends" value="Yes" />
              <Picker.Item label=" No, prefer timeless classics" value=" No" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>6. Budget</Text>
            <Picker style={styles.picker}
            selectedValue={budget}
            onValueChange={(itemValue) => setBudget(itemValue)}
            >
              <Picker.Item label="High-end designer" value="designer" />
              <Picker.Item label="Mid-range brands" value="Mid-range" />
              <Picker.Item label="Budget-friendly options" value="Budget-friendly" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>7. Comfort Level</Text>
            <Picker style={styles.picker}
             selectedValue={comfort}
             onValueChange={(itemValue) => setComfort(itemValue)}
            >
              <Picker.Item label="Comfort is top priority" value="comfort" />
              <Picker.Item label="Balanced comfort and style" value="comfort-style" />
              <Picker.Item label="Style is top priority" value="style" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>8. Fashion Icons</Text>
            <Picker style={styles.picker}
            selectedValue={icon}
            onValueChange={(itemValue) => setIcon(itemValue)}
            
            >
              <Picker.Item label="Coco Chanel" value="Chanel" />
              <Picker.Item label="Zendaya" value="Zendaya" />
              <Picker.Item label="Gigi Hadid" value="Gigi Hadid" />
              <Picker.Item label="Manish Malhotra" value="Manish Malhotra" />
              <Picker.Item label="Sabyasachi Mukherjee" value="Sabyasachi Mukherjee" />
            </Picker>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>9. Dress Code</Text>
            <Picker style={styles.picker}
            selectedValue={dressCode}
            onValueChange={(itemValue) => setDressCode(itemValue)}
            >
              <Picker.Item label="Business casual" value="Business-casual" />
              <Picker.Item label="Cocktail attire" value="Cocktail" />
              <Picker.Item label="Formal evening wear" value="Formal" />
              <Picker.Item label="Casual wear" value="Casual" />
            </Picker>
          </View>
          {/* Repeat for other questions... */}
        </View>
      </ScrollView>

      {/* <View style={styles.submitButtonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0bce0',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  tableContainer: {
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    padding: 15,
    backgroundColor: '#cb16cb',
    color: 'black',
    fontFamily: 'Sofia',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    padding: 15,
    fontFamily: 'Sofia',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cb16cb',
  },
  picker: {
    flex: 1,
    color: 'black',
    padding: 5,
    borderColor: '#cb16cb',
    borderRadius: 10,
    fontFamily: 'Sofia',
    fontWeight: '600',
    fontSize: 16,
  },
  pickerItem: {
    color: 'black',
  },
  submitButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#cb16cb',
    borderRadius: 15,
  },
  submitButtonText: {
    color: 'white',
    fontFamily: 'Sofia',
    fontSize: 16,
  },
});

export default OutfitRecommendationsScreen;
