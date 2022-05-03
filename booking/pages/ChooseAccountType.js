import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native'
import { VisualPicker } from '../components/VisualPicker';
import { Foundation } from '@expo/vector-icons'; 


const options = [
   {
      text: 'Business',
      value: 'business',
      icon: require('../icons/businessman.png') 
   },
   {
      text: 'Customer',
      value: 'customer',
      icon: require('../icons/user.png') 
   }
]

export const ChooseAccountType = () => {
   return (
      <Container>
         <TitleBox>
            <Title>Choose account type</Title>
         </TitleBox>
         <ContentBox>
           <VisualPicker options={options}/>
         </ContentBox>
      </Container>
   )
}

const Container = styled.View`
   flex: 1;
   width: 100%;
`
const ContentBox = styled.View`
   flex: 2;
   justify-content: center;
   align-items: center;
`
const TitleBox = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`

const Title = styled.Text`
   font-size: 37px;
   font-weight: 600;
   text-align: center;
   color: #e76f51;
`