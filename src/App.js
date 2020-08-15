import React from "react";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import'./style.css';
import {Switch, Route} from "react-router-dom";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Skillset from "./components/Skillset";
import Pastimes from "./components/Pastimes";
import Bio from "./components/Bio";
import Inspiration from "./components/Inspiration";
import Testimonies from "./components/Testimonies"







function App() {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/"component={Home}/>
                <Route path="/Work" component={Work}/>
                <Route path="/Resume" component={Resume}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Skillset" component={Skillset}/>
                <Route path="/Pastimes" component={Pastimes}/>
                <Route path="/Bio" component={Bio}/>
                <Route path="/Inspiration" component={Inspiration}/>
                <Route path="/Testimonies" component={Testimonies}/>
            </Switch>  
            <Footer />
        </div>
    )
}

export default App
