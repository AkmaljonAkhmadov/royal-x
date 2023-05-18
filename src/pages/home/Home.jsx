import React, {Component} from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Home;