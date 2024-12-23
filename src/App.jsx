
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Companies from "./components/Companies/Companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";

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
        </div>
    );
}


export default App;