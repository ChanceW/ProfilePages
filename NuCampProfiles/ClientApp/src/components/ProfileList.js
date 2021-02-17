import React from 'react';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import { AppConfig } from '../AppConfig';
import { Snapshots } from '../Snapshots';
import Confetti from 'react-confetti';
import trophy from '../trophy.svg';

function ProfileList({ selectedClass }) {
    const classProfiles = AppConfig.classes.filter(c => { return c.name === selectedClass })[0].profiles;
    return classProfiles.map((p, idx) => {
        const url = p.external ? p.index : `/profiles/${p.index}`;
        return <Card key={idx}>
            <CardHeader tag="h5"><a className="App-link" rel="noreferrer" href={url} target="_blank">{p.Name}</a></CardHeader>
            <CardBody>
                {p.winner ? <Confetti height="500" width="500" /> : null}
                <img className="snapshot" src={Snapshots[p.id]} />
                {p.winner ? <img className="trophy" src={trophy} /> : null}
                <br />
                <Button rel="noreferrer" href={url} target="_blank">Visit</Button>
            </CardBody>
        </Card>
    });
}

export default ProfileList;