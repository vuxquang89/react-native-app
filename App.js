import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";

//view -> container that will wrap multiple components together
//text -> to showcase any text

export default function App() {
  const [value, setvalue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnChangText(getEnteredText) {
    setvalue(getEnteredText);
  }

  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
    setvalue("");
  }

  function handleOnRemoveItem(getCurrentIndex) {
    let cpyListOfNotes = [...listOfNotes];
    cpyListOfNotes = cpyListOfNotes.filter(
      (_, index) => getCurrentIndex !== index
    );
    setListOfNotes(cpyListOfNotes);
  }

  return (
    <View style={{ padding: 40, paddingHorizontal: 15, flex: 1 }}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleOnChangText}
          style={styles.input}
          placeholder="Add Your Note Here"
          value={value}
        />
        <Button
          onPress={handleOnPressButton}
          style={styles.button}
          title="Add Note"
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={listOfNotes}
          renderItem={(itemData) => (
            <Pressable onPress={() => handleOnRemoveItem(itemData.index)}>
              <Text style={styles.listItem}>{itemData.item}</Text>
            </Pressable>
          )}
        />
        {/*
        <ScrollView>
          {listOfNotes.map((item, index) => (
            <Text style={styles.listItem} key={`item${index}`}>
              {item}
            </Text>
          ))}
        </ScrollView>
        */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  button: {
    color: "#000",
  },
  listContainer: {
    paddingTop: 30,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 10,
    color: "#fff",
    fontSize: 20,
  },
});
