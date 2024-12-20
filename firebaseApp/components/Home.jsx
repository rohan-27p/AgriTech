import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MFooter from "./footers/mfooter";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 80 }} // Ensures no overlap with Bottom Navigation
      >
        {/* Header */}
        <View style={styles.header}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#888"
          />
          <Icon name="magnify" size={24} style={styles.searchIcon} />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.bannerImage}
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {[
            "Drones",
            "Vertical Farming",
            "sensors",
            "Precision farming",
            "Spare parts",
          ].map((category, index) => (
            <View key={index} style={styles.category}>
              <Icon name="shoe-sneaker" size={24} />
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Sort and Filter */}
        <View style={styles.sortFilterContainer}>
          <TouchableOpacity style={styles.sortButton}>
            <Text>Sort By</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <View style={styles.productList}>
          {[
            {
              name: "VX3 geoforce",
              price: "₹16995",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "VX1 ultra fast ",
              price: "₹18995",
              image: "https://via.placeholder.com/150",
            },
          ].map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.cartButton}>
                <Icon name="cart-plus" size={24} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <MFooter></MFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    elevation: 2,
  },
  menuIcon: {
    marginRight: 15,
    color: "#555",
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#333",
  },
  searchIcon: {
    marginLeft: 10,
    color: "#888",
  },
  banner: {
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#fff",
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
  bannerTextContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 8,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
  },
  shopNowButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: "flex-start",
  },
  shopNowText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  categories: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 1,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  category: {
    alignItems: "center",
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 13,
    color: "#555",
    fontWeight: "bold",
  },
  sortFilterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    elevation: 1,
    marginBottom: 10,
  },
  sortButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  filterButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  productCard: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },
  cartButton: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 18,
    backgroundColor: "#fff",
    elevation: 3,
  },
  navIcon: {
    color: "#555",
  },
});
