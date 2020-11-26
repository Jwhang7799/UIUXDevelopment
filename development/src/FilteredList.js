import React, { Component } from "react";
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import './App.css';
import { FoodCards } from './FoodCards';

/*
    Class that contains the logic for filter and sort.
    Renders a DisplayList.
*/
export class FilteredList extends Component {

    // Constructor for each of the state variables.
    constructor(props) {
        super(props);
        this.state = ({
            foodList: this.props.list,
            origList: [...this.props.list],
            course: "All",
            spiciness: "All",
            price: "None"
        })
    }

    /* 
        Sets the state depending on what type of option was changed.
        "Type" refers to Course.
    */
    handleChange = (option, event) => {
        if (option === "Type") {
            this.setState({
                course: event.target.value
            })
        } else if (option === "Spicy") {
            this.setState({
                spiciness: event.target.value
            })
        }         
    };

    /*
        Sorts foodList depending on the selected option.
        Sorts using a ternary and sets the state accordingly.
    */
    sortOption = (event) => {
        if (event.target.value === "Low to High") {
            this.state.foodList.sort((a, b) => (a.price > b.price) ? 1 : -1)
            this.setState({
                price: "Low to High"
            })
        } else if (event.target.value === "High to Low") {
            this.state.foodList.sort((a, b) => (a.price > b.price) ? -1 : 1)
            this.setState({
                price: "High to Low"
            }) 
        } else {
            this.setState({
                foodList: this.state.origList,
                price: "None"
            })
        }
    }

    /*
        Returns the "Course" selection list. Uses Material UI.
    */
    filterByTypeOption() {
        return (
            <div className="option">
                <FormControl variant="filled" className="formControl">
                    <InputLabel className="optionLabel">Course</InputLabel>
                    <Select
                        labelId="typeSelect"
                        id="typeSelect"
                        style={{backgroundColor: 'white'}}
                        value={this.state.course}
                        onChange= {(event) => {this.handleChange("Type", event)}}
                        >
                        <MenuItem value={"All"}>See All</MenuItem>
                        <MenuItem value={"Appetizer"}>Appetizer</MenuItem>
                        <MenuItem value={"Side"}>Side</MenuItem>
                        <MenuItem value={"Entree"}>Entree</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }

    /*
        Returns the "Spiciness" selection list. Uses Material UI.
    */ 
    filterBySpicinessOption() {
        return (
            <div className="option">
                <FormControl variant="filled" className="formControl">
                    <InputLabel className="option">Spiciness</InputLabel>
                    <Select
                        labelId="typeSelect"
                        id="typeSelect"
                        style={{backgroundColor: 'white'}}
                        value={this.state.spiciness}
                        onChange= {(event) => {this.handleChange("Spicy", event)}}
                        >
                        <MenuItem value={"All"}>See All</MenuItem>
                        <MenuItem value={"Not Spicy"}>Not Spicy</MenuItem>
                        <MenuItem value={"1 Flame"}>1 Flame</MenuItem>
                        <MenuItem value={"2 Flames"}>2 Flames</MenuItem>
                        <MenuItem value={"3 Flames"}>3 Flames</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }

    /*
        Returns the "Price" selection list for sorting. Uses Material UI.
    */
    sortByPriceOption() {
        return (
            <div className="option">
                <FormControl variant="filled" className="formControl" style={{backgroundColor: 'white'}}>
                    <InputLabel className="optionLabel">Price</InputLabel>
                    <Select
                        labelId="typeSelect"
                        id="typeSelect"
                        style={{backgroundColor: 'white'}}
                        value={this.state.price}
                        onChange= {(event) => {this.sortOption(event)}}
                        >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Low to High"}>Price Low to High</MenuItem>
                        <MenuItem value={"High to Low"}>Price High to Low</MenuItem>
                    </Select> 
                </FormControl>               
            </div>
        )
    }

    /*
        Filters for spiciness and then filters for the course type by checking if the 
        passed in item matches the state.
    */
    matchesFilter = (item) => {
        var spiciness = this.matchesFilterSpiciness(item);
        if (spiciness === false) {
            return false
        }
        if (this.state.course === "All") { 
            return true
        } else if (this.state.course === item.course) {
            return true
        } else {
            return false
        }
    }

    /*
        Called by matchesFilter().
        Filters for spiciness by checking if the passed in item matches the state.
    */
    matchesFilterSpiciness = (item) => {
        // all items should be shown when no filter is selected
        if (this.state.spiciness === "All") { 
            return true
        } else if (this.state.spiciness === item.spiciness) {
            return true
        } else {
            return false
        }
    }

    /*
        Renders the three selection options and a DisplayList.
        Passes the filtered foodList into DisplayList.
    */   
    render() {
        return (
            <div>
                <div className="optionsHeading">
                    {this.filterByTypeOption()}
                    {this.filterBySpicinessOption()}
                    {this.sortByPriceOption()}
                </div>
                <FoodCards list={this.state.foodList.filter(item => this.matchesFilter(item))}></FoodCards>     
            </div>
        ) 
    }
}

