import React, { Component} from 'react';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

/*
    Class that takes care of the Cart's logic and rendering.
*/
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            foodList: this.props.list,
            total: this.props.total,
        })
    }

    /*
        Updates the Cart's food list if it isn't the same as the parent's.
    */  
    static getDerivedStateFromProps(newProps, prevState) {
        if (newProps.list !== prevState.foodList && newProps.total !== prevState.total) {
          return { foodList: newProps.list, total: newProps.total };
        }
        return null;
    }

    /*
        Renders the cart and includes the total price of the order.
    */
    makeCart() {
        return (
            <div>
                <div className="cartTitle">Order</div>
                <div className="cartContents">
                    <List component="ul" aria-label="shopping cart">
                        {this.setCart()}
                    </List> 
                </div>
                <div className="total">Total: ${this.props.total}</div>                
            </div>
        )
    }

    /*
        Deletes the item if the key matches the food list item's key.
    */
    deleteItem(item) {
        var subtractionVal = 0;
        var newList = [...this.state.foodList].filter((orderedItem) => {
            if (orderedItem.randomKey === item) {
                subtractionVal = orderedItem.price
                return false
            }
            return true
        })
        this.props.stateSetter(this.state.total-subtractionVal, newList)
    }
    
    /*
        Returns a Material UI ListItem with the delete icon for each added food item.
    */
    setCart() {
        return (
           this.state.foodList.map(({name, price, randomKey}) => {
               let newPrice = "$" + price; 
               return (
                    <div key={randomKey} className="cartItem">
                        <ListItem>
                            <ListItemText primary={name} secondary={newPrice}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => {this.deleteItem(randomKey)}}>
                                    <DeleteIcon className="deleteButton" />
                                </IconButton>
                            </ListItemSecondaryAction>     
                        </ListItem>
                    </div>
                )
        })     
        )
            
    }

    /*
        Renders the cart.
    */
    render() {
        return (
            <div>
                {this.makeCart()}
            </div>
        )
    }
}