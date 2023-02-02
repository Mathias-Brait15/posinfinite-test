import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function AddProductScreen() {
  // const [inputForm, setInputForm] = useState({
  //   productName: "",
  //   description: "",
  //   sku: "",
  //   stock: "",
  //   category: 0,
  //   price: "",
  //   imageUrl: "",
  // });

  // function handleInput(e) {
  //   let obj = {
  //     ...inputForm,
  //     [e.target.name]: e.target.value,
  //   };
  //   setInputForm(obj);
  // }

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSKU] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
      />
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
      />
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
      />

      <Button mode="contained" onPress={() => console.log(productName)}>
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
