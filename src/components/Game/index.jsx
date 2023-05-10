import React from 'react';
import Header from './Header';
import Footer from "../Footer";
import Home from '../Home';

export default function Game (){
    return (
        <div>
            <Header>
                <Home />
            </Header>
            <Footer/>
        </div>
    )
};