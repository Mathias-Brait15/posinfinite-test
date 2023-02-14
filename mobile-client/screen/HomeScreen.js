import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const BASE_URL =
  "https://f1f5-2001-448a-2061-95aa-95c5-84d4-da40-9615.ap.ngrok.io";

export default function Home() {
  const navigation = useNavigation();
  const [items, setItem] = useState([]);
  const [user_balance, setUserBalance] = useState("");

  const getUserData = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${BASE_URL}/user`,
      headers: {
        access_token: await AsyncStorage.getItem("access_token"),
      },
    });
    console.log(data);
    setUserBalance(data.user_balance);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setItem(response.data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.circle}></View>

      <View style={styles.rectangle}>
        <View style={{ marginLeft: 180, marginTop: 80 }}>
          <Text
            style={{
              color: "#535353",
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Your Balance
          </Text>
          <Text
            style={{
              color: "#0099EE",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Rp. {user_balance}
          </Text>
        </View>
      </View>

      <View style={{ margin: 32 }}>
        <Text
          style={{
            marginBottom: 7,
            marginLeft: 4,
            color: "#3B97CB",
            fontWeight: "bold",
          }}
        >
          PREVIOUS ORDER
        </Text>
        <View>
          <Card onPress={() => navigation.navigate("InvoicePage")}>
            <Card.Content>
              <Image
                style={{
                  resizeMode: "contain",
                  height: 100,
                  width: 200,
                  marginLeft: -50,
                }}
                source={{
                  uri: "https://www.ikea.com/au/en/images/products/enhet-laundry-white-high-gloss-white__1035229_pe838007_s5.jpg",
                }}
              ></Image>
            </Card.Content>
          </Card>
        </View>
      </View>

      <View style={{ margin: 32, marginTop: 10 }}>
        <Text
          style={{
            marginBottom: 7,
            marginLeft: 4,
            color: "#3B97CB",
            fontWeight: "bold",
          }}
        >
          YOUR MOST ORDERED
        </Text>
        <Card>
          <Card.Cover
            source={{
              uri: "https://harimukti-teknik.com/wp-content/uploads/2022/11/Mesin-Laundry-Industri.jpg",
            }}
          />
        </Card>
      </View>

      <View style={{ margin: 32, marginTop: 10 }}>
        <Text
          style={{
            marginBottom: 7,
            marginLeft: 4,
            color: "#3B97CB",
            fontWeight: "bold",
          }}
        >
          OUR LATEST PRODUCT
        </Text>
        {items.map((el) => {
          return (
            <View>
              <Card key={el.id} style={{ marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetailPage", { id: el.id });
                  }}
                >
                  <Card.Content>
                    <Image
                      source={{ uri: el.imgUrl }}
                      style={{ width: 50, height: 50, marginTop: 10 }}
                    ></Image>
                  </Card.Content>
                  <Card.Title title={el.name} subtitle={"Rp " + el.price} />
                </TouchableOpacity>
              </Card>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 260,
    height: 500,
    marginLeft: 57,
    marginTop: -300,
    borderRadius: 120,
    backgroundColor: "#F36868",
    position: "absolute",
    transform: [{ scaleX: 2 }],
  },
  rectangle: {
    width: 160 * 2,
    height: 140,
    marginLeft: 39,
    marginTop: 120,
    backgroundColor: "#CCEDFF",
    borderRadius: 15,
  },
});
