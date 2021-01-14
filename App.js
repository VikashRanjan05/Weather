import React ,{useState} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet,  View } from 'react-native';
import axios from 'axios' ;
export default function App() {
  const [location ,setLocation] = useState('');
  const api_key1 = '02ff1af40501eaef4791534f45ecc281'; // Weather stack api key
  // const api_key = 'bccfca751a7a5188daaf0e80ee03c12a'; // openweather api key
  
  axios.get(`http://api.weatherstack.com/current?access_key=${api_key1}&query=muzaffarpur&unit=standard`)
  .then(res=>console.log("ok",res.data))
  .catch(err=>console.log("error", err))
  // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=muzaffarpur&appid=${api_key}`)
  // .then(res=>console.log("okk",res.data))
  // .then(err=>console.log("error",err))
  const HandleSubmit = () =>{
    console.log(location)
  }
  
  return (
    
    <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Global Weather</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Search Your location weather
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  form : {
    width : 300
  },
  input : {
    height : 30,
    borderColor : 'black',
    borderWidth : 1
  }
});
