import React, {useState} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import StoreContextProvider from '../../context/StoreContext';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

   // const [category, setCategory] = useState("All");

    return (
        <div>
            <Header/>
            <StoreContextProvider>
            <ExploreMenu />
            <FoodDisplay />   
            <AppDownload /> 
            </StoreContextProvider>
            
        </div>
    );
}

export default Home;