
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Companies from "./components/Companies/Companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";

function App() {
    return (
        <div className={App}>
            <div>
                <div className="white-gradient"/>
                <Header/>
                <Hero/>
            </div>
            <Companies/>
            <Residencies/>
            <Value/>
            <Contact/>
            <GetStarted/>
        </div>
    );
}


export default App;