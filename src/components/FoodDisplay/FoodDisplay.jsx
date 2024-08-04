import React, {useContext, useEffect} from 'react';
import "./FoodDisplay.css";
import {StoreContext} from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

        const FoodDisplay = () => {

    const {food_list, category} = useContext(StoreContext);

    const filteredFoodList = food_list.filter(item => category === "All" || item.category === category);

    return (
        <div className="food-display" id="food-display">
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {filteredFoodList.map((item, index)=>{
                    {console.log(category)}
                        return (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} /> 
                        )                   
                })}       
            </div>
        </div>
    );
}

export default FoodDisplay;