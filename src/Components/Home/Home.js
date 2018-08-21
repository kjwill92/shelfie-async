import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';

//<<-- styling -->>
const Body = styled.div`
    > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`
const Header = styled.div`
    width: 80vw;
    height: 75px;
    display: flex;
    background-color: #ab2a19;
    padding: 2px;
    > h2 {
        color: white;
        font-size: 28px;
    }
`
const Logo = styled.div`
    width: 10%;
    background-color: #ab2a19;
    padding: 3px;
    padding-left: 200px;
`
const Button = styled.button`
    background: #d34735;
    color: white;
    font-size: 32px;
    width: 520px;
    height: 70px;
    border-radius: 8px;
`

//<<<--- code --->>>
const Home = () => {
    return (
        <Body>
            <div>
                <Header>
                    <Logo>
                        < img src={logo} alt=""/>
                    </Logo>
                    <h2>SHELFIE</h2>
                </Header>
                <br/>
                <Link to={'/shelf/A'}><Button>Shelf A</Button></Link>
                <br/>
                <Link to={'/shelf/B'}><Button>Shelf B</Button></Link>
                <br/>
                <Link to={'/shelf/C'}><Button>Shelf C</Button></Link>
                <br/>
                <Link to={'/shelf/D'}><Button>Shelf D</Button></Link>
            </div>
        </Body>
    )
}
export default Home;