import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo1.png';
import axios from 'axios';

//<<-- styling -->>
const Body = styled.div`
    > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`
const BinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header = styled.div`
    width: 80vw;
    height: 80px;
    display: flex;
`
const Logo = styled.div`
    width: 23%;
    background-color: #ab2a19;
    padding: 5px;
`
const ShelfBox = styled.div`
    background-color: #d34735;
    width: 77%;
    color: white;
    font-size: 32px;
    /* padding-top: 20px; */
    > h2 {
        color: white;
        font-size: 28px;
        padding-right: 600px;
    }
`
const Button = styled.button`
    background: #ed6b5a;
    color: white;
    font-size: 32px;
    width: 520px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 8px;
`
const Button2 = styled.button`
    background: #ffb8af;
    color: black;
    font-size: 32px;
    width: 520px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 8px;
`


//<<<--- code --->>>
class Shelf extends Component {
    constructor(){
        super()
        this.state = {
            bins: []
        }
    }

    componentDidMount(){
        this.getBins()
    }
    
    // get bins -->> empty or not
    //if empty, i want it to display add inventory
    // if(bin1 !== null){show bin contents} else {show + add inventory}
    getBins = () => {
        axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
            this.setState({
                bins: res.data
            })
            
        })
    }

    render(){
        console.log(111, this.props.match.params.id)
        let binDisplay = this.state.bins.map((el, i) => {
            if(el.name === null && el.price === null){
                return (
                    <Link to={`/shelf/${this.props.match.params.id}/${el.bin_id}`} key={i}><Button2> + Add Inventory</Button2></Link>
                )
            } else {
                return (
                    <Link to={`/shelf/${this.props.match.params.id}/bin/${el.bin_id}`} key={i}><Button> 
                        {`Bin ${el.bin_id}`} </Button></Link>
                        
                )
            }
        })
        return(
            
            <Body>
                <div>
                    <Header>
                        <Logo>
                            <Link to='/'>< img src={logo} alt=""/> </Link>
                        </Logo>
                        <ShelfBox>
                            <h2>
                            {`Shelf ${this.props.match.params.id}`}
                            </h2>
                        </ShelfBox>
                    </Header>
                    <br/>
                    <BinContainer>
                            {/* <Link to={`/shelf/${this.props.match.params.id}/bin/1`}><Button>Bin 1</Button></Link>
                            <Link to={`/shelf/${this.props.match.params.id}/bin/2`}><Button>Bin 2</Button></Link>
                            <Link to={`/shelf/${this.props.match.params.id}/bin/3`}><Button>Bin 3</Button></Link>
                            <Link to={`/shelf/${this.props.match.params.id}/bin/4`}><Button>Bin 4</Button></Link>
                            <Link to={`/shelf/${this.props.match.params.id}/bin/5`}><Button>Bin 5</Button></Link> */}
                    {binDisplay}
                    </BinContainer>
                </div>
            </Body>
        )
    }
}
export default Shelf;




