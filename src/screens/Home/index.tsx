import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { FriendList } from "../../components/FriendList";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  const handleSearchPeople = async () => {
    const response = await fetch(`http://192.168.15.34:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setName}
        value={name}
      />
      <Button title="Adicionar" onPress={handleSearchPeople} />
      <ScrollView style={styles.list}>
        <FriendList data={friends} />
      </ScrollView>
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
});