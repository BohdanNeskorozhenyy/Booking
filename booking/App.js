import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native'
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChooseAccountType } from './pages/ChooseAccountType';


export default function App() {
  return (
      <LinearGradient colors={['#fbf5f3', '#FFEFBA',]} style={styles.container}>
          <StatusBar backgroundColor='#fbf5f3' style="auto" />
          <ChooseAccountType/>
       </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
    paddingLeft: 15
  },
});

const Container = styled.View` 
  width: 100%;
  padding: 0 15px;
`