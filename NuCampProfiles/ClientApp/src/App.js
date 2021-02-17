import logo from './nl.PNG';
import './App.css';
import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { AppConfig } from './AppConfig';
import ProfileList from './components/ProfileList';

function App() {
    const classes = AppConfig.classes.map((c, idx) => { return <option key={idx}>{c.name}</option> });
    const [selectedClass, setSelected] = useState(AppConfig.classes[0].name);
    return (
        <div className="App">
            <header className="App-header pt-2 f-5">
                <div className="container">
                    <div className="media w-75">
                        <img className="mr-3 App-logo" src={logo} alt="Generic placeholder image" />
                        <div className="media-body align-self-center">
                            <h3 className="mt-0">Congratulations on Your BootCamp Progress, NuCamp Students!</h3>
                            <h5>Time to Showcase Your Skills</h5>
                    </div>
                    </div>
                </div>
            </header>
            <div className="App-Body">
                <Input className="classSelect" type="select" onChange={(e) => { setSelected(e.target.value) }}>{classes}</Input>
                <div className="cardList row">
                    <ProfileList selectedClass={selectedClass} />
                </div>
            </div>
            <footer>
                <h5><q>{AppConfig.classes.filter(c => { return c.name === selectedClass })[0].comment}</q></h5>
            </footer>
        </div>
    );
}

export default App;
