import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Footer from "./components/Footer"
import About from "./components/About";
import ContactUs from "./components/Contact";
import ViewMovies from "./components/ViewMovies";
import ManageMovies from "./components/ManageMovies";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="app-container">
                    <ul className="header">
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/view-movies">View Movies</NavLink></li>
                        <li><NavLink to="/manage-movies" >Manage Movies</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactUs} />
                        <Route path="/view-movies" component={ViewMovies} />
                        <Route path="/manage-movies" component={ManageMovies} />
                    </div>

                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;
