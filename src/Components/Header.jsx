import React from 'react';
import NavMenu from './NavMenu';
import S from './StyledComponents';

const Header = () => {

    return (
        <S.HeaderContainer>
            <p>Laura Kenny</p>
            <NavMenu />
        </S.HeaderContainer>
    )
}

export default Header;