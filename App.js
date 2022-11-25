import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import logo from './assets/logo.png';

function App() {
  const [list, setList] = useState([]);
  const [txt, setTxt] = useState('');

  let del = i => {
    console.log(i);
    list.splice(i, 1);
    setList([...list]);
  };

  let add = () => {
    console.log('Add Function Start');
    setList([...list, txt]);
  };
  return (
    <>
        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'}}>
      <View style={styles.container}>
        <View>
          <Image source={logo} style={{width: 50, height: 50}} />
        </View>
        <Text style={styles.heading}>Todo App</Text>
        <View style={{flexDirection:'row'}}>
          <TextInput
            onChangeText={e => setTxt(e)}
            style={[styles.input,{flex:4}]}
            placeholder="Enter Todo"
          />
          <Button style={{flex:3}} title="Add" onPress={add} color="orange" />
        </View>
        <Text>{txt}</Text>
        {list.map((x, i) => (
          <View key={i}>
            <Text style={{color: 'white', fontSize: 25}}>{x}</Text>
            {/* <Button title="Delete" color="black" onPress={() => del(i)} /> */}
            <TouchableOpacity onPress={() => del(i)}>
              <Image
                style={{width: 30, height: 30}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1799/1799391.png',
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      </ImageBackground>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  heading: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
