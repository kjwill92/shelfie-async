//shows inventory details of the bin - name and price ->> and also displays the edit button & delete button
// the logo if the left corner will take back to the homepage
// clicking the shelf name should take you back to the bin list for that shelf
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import logo from './logo.png';

//<<-- styling -->>
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
    background: #ed6b5a;
    width: 65%;
    color: white;
    > h2 {
        color: white;
        font-size: 30px;
        padding-right: 520px;
    }
`
const Button = styled.button`
    background: #d8d8d8;
    color: black;
    font-size: 32px;
    width: 150px;
    height: 60px;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 6px;
`
const Button2 = styled.button`
    background: #40f99b;
    color: black;
    font-size: 32px;
    width: 150px;
    height: 60px;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 30px;
`

//<<<--- code --->>>
class Bin extends Component {
    constructor(){
        super()
        this.state = {
           name: '',
           price: '',
           disable: true,
           showSave: false
        }
    }
    
    componentDidMount(){
        axios.get(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`).then(res => {
            this.setState({
                name: res.data.name,
                price: res.data.price
            })
        })
    }
    
    handleEditClick = () => {
        //this needs to make the text editable and change the edit button into a Save button
        this.setState({
            disable: !this.state.disable,
            showSave: !this.state.showSave
        })
    }
    
    handleDeleteClick = () => {
        //this needs to remove the inventory from the bin in the db
        //this needs to navigate the user back to the bin list for that shelf
        // axios.delete(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`).then(res => {})
        axios.put(`/api/bins/${this.props.match.params.id}${this.props.match.params.number}`).then(res => {
            this.setState({
                name: null,
                price: null
            })
        });
    }
    
    handleSaveClick = () => {
        //switches back to an edit button
        //this should update the bin in the db

        let {name, price} = this.state;
        axios.put(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`, {
            //^path and req.body -> the body is the second param
            name, price
        }).then(res => {
            this.setState({
                disable: !this.state.disable,
                showSave: !this.state.showSave,
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
                                {`Bin ${this.props.match.params.number}`}
                            </h2>
                        </BinBox>
                    </Header>
                </div>
                <br/>
                Name  <input type="text" onChange={this.handleName} value={this.state.name} disabled={(this.state.disable) ? "disable" : ""}/>
                <br/>
                Price  <input type="text" onChange={this.handlePrice} value={this.state.price} disabled={(this.state.disable) ? "disable" : ""}/>
                <br/>

                {this.state.showSave 
                ? <Button2 onClick={this.handleSaveClick}>Save</Button2> 
                :<Button onClick={this.handleEditClick}>Edit</Button>
                }

                <Link to={`/shelf/${this.props.match.params.id}`}><Button onClick={this.handleDeleteClick}>Delete</Button></Link>
                
            </Body>
        )
    }
}
export default Bin;

//this needs to handle the put and delete endpoints
//as well as the get end point - map over the data and have it displayed in the input boxes
//disabled={(this.state.disabled) ? "disabled" : ""}