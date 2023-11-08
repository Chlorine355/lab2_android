import * as React from 'react';
import { useState, useRef } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


export default function App() {
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-between',
        gap: 30,
      }}>
      {list.length === 0 ? (
        <Text>Список пуст!</Text>
      ) : (
        <FlatList
          removeClippedSubviews={false}
          contentContainerStyle={{ display: 'flex', alignItems: 'center' }}
          data={list}
          renderItem={({ item }) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                marginBottom: 20,
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <TextInput placeholder="Введите текст"/>
              <TouchableOpacity
                onPress={() => {
                  setList(list.filter((a) => a !== item));
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#ff0000',
                  backgroundColor: '#ff000030',
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                }}>
                <Text>🗑</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      )}
      <Button
        title="Добавить пункт"
        onPress={() => {
          setList([...list, id]);
          setId(id + 1);
        }}
      />
    </View>
  );
}
