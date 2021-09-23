import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header/header.js';
import Maincontent from './main_content/mc.js';
import { Ruc } from './right_upper_content/ruc.js';
import { Rlc } from './right_lower_content/rlc.js';
import { Footer } from './footer/footer.js';
import "./index.css"

class App extends React.Component{
    render(){
        //Header
        return (
        <div className="container">
        <Header/>
        <Maincontent/>
        <Ruc/>
        <Rlc/>
        <Footer/>
        </div>);
            
        

    }
}
ReactDOM.render(<App/> , document.getElementById('root'));
