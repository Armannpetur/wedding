import React, {Component} from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import logo from './../Utils/assets/a+r.jpg';
import kirkja from './../Utils/assets/kirkja.jpg';
import hjon from './../Utils/assets/profile.jpg';
import salur from './../Utils/assets/hlidarbaer.jpg';

export default class Home extends Component {
    render() {
        return (
            <Grid className="container">
                <Image src="assets/a+r.jpg" circle className="home-pic" />
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/kirkja.jpg" circle className="profile-pic" />
                        <h3>Kirkjan</h3>
                        <p>Athöfnin verður í Akureyrarkirkju kl 15:30</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/profile.jpg" circle className="profile-pic-center" />
                        <h3>Brúðhjón</h3>
                        <p>Við erum að fara gifta okkur þann 4.ágúst 2018.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/hlidarbaer.jpg" circle className="profile-pic" />
                        <h3>Veislusalur</h3>
                        <p>Veislan er haldin í Hlíðarbæ strax í kjölfar athafnar</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}