//this will be a post to the backend/ db
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';
import axios from 'axios';


const Body = styled.div`
    > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    > input {
        border: 1px solid orange;
        border-radius: 5px;
        height: 50px;
        width: 500px;
        margin-bottom: 10px;
    }
`
const Header = styled.div`
    width: 80vw;
    height: 80px;
    display: flex;
`
const Logo = styled.div`
    width: 14%;
    background-color: #ab2a19;
    padding: 5px;
`
const ShelfBox = styled.div`
    background-color: #d34735;
    width: 21%;
    color: white;
    > h2 {
        color: white;
        font-size: 30px;
        padding-right: 70px;
    }
`
const BinBox = styled.div`
    background: #ffb8af;
    width: 65%;
    > h2 {
        color: black;
        font-size: 30px;
        padding-right: 400px;
    }
`
const Button = styled.button`
    background: #40f99b;
    color: black;
    font-size: 32px;
    width: 520px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 50px;
`


class AddToBin extends Component {
    constructor(){
        super()
        this.state = {
           name: '',
           price: ''
        }
    }
    handleProdUpdate = () => {
        let {name, price} = this.state;
        axios.put(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`, {
            name, price
        }).then(res => {
            this.setState({
                name: this.state.name,
                price: this.state.price
            })
        });
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handlePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    render(){
        return(
            <Body>
                <div>
                    <Header>
                        <Logo>
                            <Link to='/'> < img src={logo} alt=""/> </Link>
                        </Logo>
                        <ShelfBox onClick={this.props.history.goBack}>
                            <h2>
                                {`Shelf ${this.props.match.params.id}`}
                            </h2>
                        </ShelfBox>
                        <BinBox>
                            <h2>
                                {`Add to Bin ${this.props.match.params.number}`}
                            </h2>
                        </BinBox>
                    </Header>
                </div>
                <br/>
                Name  <input type="text" placeholder="Enter Name..." onChange={this.handleName} />
                <br/>
                Price  <input type="text" placeholder="$0.00" onChange={this.handlePrice}  />
                <br/>
                <br/>
                <Link to={`/shelf/${this.props.match.params.id}`}><Button onClick={this.handleProdUpdate}>+ Add Inventory</Button></Link>
            </Body>
        )
    }
}
export default AddToBin;
