import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Toastmasters.css';

export default class Toastmasters extends Component {
    render(){
        return(
            <Grid className="toast-grid">
                <Image src="assets/veislustjorar.jpg" className="home-pic" />
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/bjork.jpg" circle className="toast-pic" />
                        <p>Björk Nóadóttir</p>
                        <p>Sími: 866-9191</p>
                        <p>Eða á Facebook</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <p>
                            Björk Nóadóttir og Sveinn Leó Bogason eru hressir og skemmtilegir vitleysingar sem ætla að taka að sér veislustjórnun í brúðkaupsveislunni.
                            Bæði hafa þau þekkt brúðhjónin lengi og verið nánir vinir þeirra um áraraðir. Hins vegar þekkjast þau sjálf ekkert svakalega mikið og óþæginlegt
                            hefur verið á fyrstu skipulagsfundunum sökum þess. Aðallega er það þó komið til vegna óeðlilegra óska brúðhjónanna, sem hafa vægast sagt
                            verið erfið í öllum þessum undirbúningi hingað til. Björk og Sveinn Leó eru bæði uppalin á Akureyri og búa þar í dag. 
                            Björk á ásamt Helga Þór Jónassyni þrjú börn og Sveinn er í sambúð með Rakel Gunnlaugsdóttir. Bæði Björk og Sveinn Leó eru spennt og stressuð fyrir 
                            því að fá það hlutverk að veislustýra brúðkaupsveislu en þau hafa hvorugt gert það áður.
                        </p>
                        <h3>
                            Vinsamlega hafið samband við veislustjóra varðandi ræður eða uppákomur.
                        </h3>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/selli.jpg" circle className="toast-pic" />
                        <p>Sveinn Leó Bogason</p>
                        <p>Sími: 659-6722</p>
                        <p>Facebook</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}