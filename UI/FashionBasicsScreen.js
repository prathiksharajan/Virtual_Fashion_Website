import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const FashionBasicsScreen = () => {
  const tableData = [
    ['Essential Wardrobe Pieces', 'For men: White Button-Up Shirt, Dark Jeans, Chinos/Khakis & Blazer.\n\nFor women: White Blouse, T-Shirt Dress, Pencil Skirt & Cardigan.'],
    ['Color Palette Essentials', 'Timeless Neutrals (Black, white, Gray, Camel), Earthy Elegance (Olive Green, Burgundy, Beige), Soft Pastels and Metallics (Blush Pink, Soft Mint, Lavender Silver) & Versatile Cool Tones (Slate Blue, Teal, Charcoal Gray, Gold)'],
    ['Footwear Staples', 'For Men: Classic Leather Dress Shoes, White Sneakers, Chukka Boots & Loafers\n\nFor Women: Ballet Flats, Ankle Boots, White Sneakers & Strappy Sandals'],
    ['Timeless Accessories', 'For Men: Wristwatch, Leather Belt, Classic Tie & Quality Leather Wallet\n\nFor Women: Pearl Necklace, Statement Handbag, Silk Scarf & Classic Sunglasses'],
    ['Clothing Care Tips', 'Here are four important clothing care points:\n\n1. Follow Care Labels: Pay attention to care labels on your clothes for specific washing, drying, and ironing instructions. This ensures that you\'re treating each garment according to its unique needs.\n\n2. Sort Your Laundry: Separate your laundry into different loads based on colors and fabric types. This prevents colors from bleeding and ensures that delicate fabrics receive the appropriate care.\n\n3. Air Dry When Possible: Opt for air drying instead of using a dryer, especially for delicate fabrics. This helps preserve the fabric\'s quality, prevents shrinkage, and conserves energy.\n\n4. Prompt Stain Treatment: Treat stains as soon as they occur to increase the likelihood of successful removal. Different stains may require different treatments, so be sure to follow specific stain removal guidelines.'],
  ];

  const renderTableCell = (rowData, index) => (
    <TouchableOpacity key={index} style={styles.tableCell}>
      <Text style={styles.tableCellText}>{rowData}</Text>
    </TouchableOpacity>
  );
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to <Text style={styles.italic}>StyleHarbor!</Text>
        </Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.sectionTitle}>Fashion Basics</Text>

        <Table style={styles.table}>
          <Row data={['Topic', 'Content']} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
          <Rows data={tableData} style={styles.tableRow} textStyle={styles.tableRowText} />
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1adcc',
    padding: 10,
  },
  header: {
    backgroundColor: '#d1adcc',
    marginBottom: 10,
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'Sofia',
    fontSize: 24,
    color: 'black',
  },
  italic: {
    color: '#cb16cb',
    fontStyle: 'italic',
  },
  main: {
    backgroundColor: '#d1adcc',
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontFamily: 'Sofia',
    fontSize: 20,
    color: '#cb16cb',
    marginBottom: 5,
  },
  table: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  tableHeader: {
    height: 40,
    backgroundColor: '#cb16cb',
    flexDirection: 'row',
  },
  tableHeaderText: {
    fontFamily: 'Sofia',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  tableRow: {
    height: 100,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    maxHeight: 100, 
  },
  tableCellText: {
    fontFamily: 'Sofia',
    fontSize: 12,
    color: '#cb16cb',
    textAlign: 'center',
  },
  tableRowText: {
    fontFamily: 'Sofia',
    fontSize : 12,
    color: '#cb16cb',
    textAlign: 'center',
  },
});

export default FashionBasicsScreen;

