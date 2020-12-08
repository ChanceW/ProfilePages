import logo from './nl.PNG';
import trophy from './trophy.svg';
import './App.css';
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Input } from 'reactstrap';
import { AppConfig } from './AppConfig';
import { Snapshots } from './Snapshots';
import Confetti from 'react-confetti'

function getCards(selectedClass) {
    const classProfiles = AppConfig.classes.filter(c => { return c.name === selectedClass })[0].profiles;
    return classProfiles.map((p, idx) => {
        const url = p.external ? p.index : `/profiles/${p.index}`;
        return <Card key={idx}>
            <CardBody>
                {p.winner ? <Confetti height="500" width="500" /> : null}
                <CardTitle tag="h5"><a className="App-link" rel="noreferrer" href={url} target="_blank">{p.Name}</a></CardTitle>
                <img className="snapshot" src={Snapshots[p.id]} />
                {p.winner ? <img className="trophy" src={trophy} /> : null}
                <br />
                <Button rel="noreferrer" href={url} target="_blank">Visit</Button>
            </CardBody>
        </Card>
    });
}


function App() {
    const classes = AppConfig.classes.map((c, idx) => { return <option key={idx}>{c.name}</option> });
    const [selectedClass, setSelected] = useState(AppConfig.classes[0].name);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Congratulations HTML, CSS and JavaScript Graduates!</p>
            </header>
            <div className="App-Body">
                <Input className="classSelect" type="select" onChange={(e) => { setSelected(e.target.value) }}>{classes}</Input>
                <div className="cardList row">
                    {getCards(selectedClass)}
                </div>
            </div>
        </div>
    );
}

export default App;
