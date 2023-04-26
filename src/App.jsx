import React from "react";
import './App.scss'
import Header from "./Components/layout/Header.jsx";
import Main from "./Components/layout/Main.jsx";
import Footer from "./Components/layout/Footer.jsx";
export default class App extends React.Component{
    state = {
    }
    render() {
        return(
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}