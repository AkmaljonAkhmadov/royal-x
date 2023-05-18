import React, {Component} from 'react';

class Navbar extends Component {
    render() {


        return (
            <>
                <header>
                    <nav>

                        <img src="assets/icons/LOGO.svg" alt="Logo"/>

                        <ul className="navbar-dark">
                            <li className="nav-item"><a className="nav-link" href="#">Why?</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span>Pupils</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span>About</span></a></li>
                        </ul>


                        <select>
                            <option value="0">UZB</option>
                            <option value="1">RU</option>
                        </select>

                        <div className="frame">

                            <button className="custom-btn btn-7"><span>Contact</span></button>

                        </div>

                    </nav>
                </header>
            </>
        );
    }
}

export default Navbar;