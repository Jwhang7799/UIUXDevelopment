import React, { Component } from 'react';
import './App.css';
import { Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import Cart from './Cart';

/*
    The flames constant adds the flame images based on spiciness level of the item.
*/
const flames = (spicy) => {
    if (spicy === "Not Spicy") {
        return (
            <div className="nonspicyContainer">Not Spicy</div>
        )
    } else if (spicy === "1 Flame") {
        return (
            <div className="spicyContainer">
                <div className="spicyLabel">Spicy: </div>  
                <img src="https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png" className="spicy" alt="spicy level"></img>
            </div>
            
        )
    } else if (spicy === "2 Flames") {
        return (
            <div className="spicyContainer">
                <div className="spicyLabel">Spicy: </div> 
                <img src="https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png" className="spicy" alt="spicy level"></img>
                <img src="https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png" className="spicy" alt="spicy level"></img>
            </div>
        )
    } else {
        return (
            <div className="spicyContainer">
                <div className="spicyLabel">Spicy: </div> 
                <img src="https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png" className="spicy" alt="spicy level"></img>
                <img src="https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png" className="spicy" alt="spicy level"></img>
                <img src="https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png" className="spicy" alt="spicy level"></img>
            </div>
        )
    } 
}

/*
    The FoodCards class creates Cards for each food item.
*/
export class FoodCards extends Component {

    /*
        Simple constructor for the state.
    */
    constructor(props) {
        super(props);
        this.state = ({
            total: 0,
            cart: [],
        })
    }

    /*
        Allows the Cart to update this class' state whenever an item is deleted.
    */
    setCartState = (newTotal, newCart) => {
        this.setState({
            total: newTotal,
            cart: newCart
        })
    }

    /*
        Renders the cards for each food item using map().
        Uses Material UI cards.
    */
    render() {
        return (
            <div className="mainDivider">
                <div className="menu">
                    {this.props.list.length !== 0 ? (
                        this.props.list.map(({name, course, price, spiciness, img}) => {
                            var randomKey =  Math.random()*Number.MAX_SAFE_INTEGER
                            return (
                                <Card key={randomKey} className="cards">
                                    <div className="cardContainer">
                                        <CardMedia
                                            className="pic"
                                            image={img}
                                            title={name}>
                                        </CardMedia>    
                                        <CardContent className="contentContainer">
                                            <div className="cardHeader">
                                                <div className="foodTitle">
                                                    {name}
                                                </div>
                                                <CardActions>
                                                    <Button variant="contained" size="small" style={{fontSize: '1vw', fontWeight: '700', color: '#2A324B', 
                                                        backgroundColor: '#F7C59F'}} onClick={() => {
                                                        var newTotal = this.state.total + price
                                                        var newCart = [...this.state.cart, {name, price, randomKey}]
                                                        this.setState({
                                                            total: newTotal,
                                                            cart: newCart,
                                                        })
                                                    }}>
                                                        Order
                                                    </Button>
                                                </CardActions>
                                            </div>
                                            <div className="descriptionContainer">
                                                <div className="description">
                                                    Course: {course}
                                                </div>
                                                <div className="description">
                                                    Price: ${price}
                                                </div>
                                                <div className="description">
                                                    {flames(spiciness)}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>       
                            )
                        }
                    )) : (
                        <div className="noResult">
                            There are no results for these filters.
                        </div>
                    )}
                </div>
                <div className="shoppingCartContainer">
                    <Cart list={this.state.cart} total={this.state.total} stateSetter={this.setCartState}></Cart>
                </div>
            </div>
        )
    }
}