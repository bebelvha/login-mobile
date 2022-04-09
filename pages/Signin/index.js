import React from 'react';
import { View } from 'react-native'
import { 
    Title,
    Container,
    Input,
    ButtonSubmit,
    TextButton,
    Content
} from './styles';
import Header from '../../components/Header';

function Signin() {
    return(
        <Content>
            <Header />
            <Container>
             <Title>Login</Title>
             <Input
                placeholderTextColor="#fff"
                placeholder="e-mail"
             />
             <Input 
                placeholderTextColor="#fff"
                placeholder="Senha"
                secureTextEntry
             />
             <ButtonSubmit>
               <TextButton>
                    Entrar
               </TextButton>
             </ButtonSubmit>
            </Container>  
        </Content> 
    )
}

export default Signin;