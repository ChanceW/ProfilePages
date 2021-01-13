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
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Congratulations NuCamp Students on You BootCamp Progress!</p>
                <p>Time to Showcase Your Skills</p>
            </header>
            <div className="App-Body">
                <Input className="classSelect" type="select" onChange={(e) => { setSelected(e.target.value) }}>{classes}</Input>
                <div className="cardList row">
                    <ProfileList selectedClass={selectedClass} />
                </div>
            </div>
        </div>
    );
}

export default App;
