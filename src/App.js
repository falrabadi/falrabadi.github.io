import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Preloader from "./components/Pre";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./styles.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./components/Particle-config";


const TRACKING_ID = "UA-241452739-1";
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.initialize(TRACKING_ID);

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Particles />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
        </>
    );
}

export default App;