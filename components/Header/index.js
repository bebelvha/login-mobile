import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles'
import Logo from '../../assets/logo-makerclub.png';

function Header() {
    return(
        <Container>
            <Image 
                source={Logo}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 45,
                }} 
            />
        </Container>
    )
}

export default Header;