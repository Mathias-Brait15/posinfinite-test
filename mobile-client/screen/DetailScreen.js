import {
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-native-paper";
export default function DetailScreen({ route }) {
  const { id } = route.params;
  const BASE_URL =
    "https://f1f5-2001-448a-2061-95aa-95c5-84d4-da40-9615.ap.ngrok.io";
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then((response) => {
      setItem(response.data);
    });
  }, []);

  const [quantity, setQuantity] = useState("");
  async function addCheckout(qty, id) {
    const access_token = await AsyncStorage.getItem("access_token");
    console.log(access_token, "<=================================");
    try {
      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL}/${id}`,
        headers: {
          access_token: access_token,
        },
        data: {
          quantity: qty,
        },
      });
    } catch (error) {
      console.log(error, "<<===");
    }
  }

  return (
    <ScrollView>
      <Image
        style={{
          width: Dimensions.get("window").width,
          height: 500,
          marginTop: 0,
        }}
        source={{ uri: item.imgUrl }}
      ></Image>

      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.stock}</Text>
      <Text>{item.sku}</Text>
      <Text>{item.description}</Text>

      <TextInput
        style={styles.input}
        onChangeText={setQuantity}
        value={quantity}
        placeholder="Quantity"
        keyboardType="numeric"
      />

      <Button mode="contained" onPress={() => addCheckout(quantity, id)}>
        Checkout
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
