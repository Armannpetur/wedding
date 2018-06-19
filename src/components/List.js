import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './List.css';

export default class List extends Component {
    render(){
        return(
            <Grid className="home-grid">
                <Image src="assets/gjafalisti.jpg" className="home-pic" />
                <Row className="show-grid text-center">
                    <Col xs={12} md={4} className="list-wrapper">
                     <p>Þessir gjafalistar eru eingöngu hugsaðir sem hugmyndir en auðvitað ekki tæmandi listi yfir það sem okkur langar í eða vantar. 
                        Við erum líka að safna okkur fyrir stærri hlutum og því eru peningagjafir vel þeggnar :)</p>

                        <h3><a href="https://www.w3schools.com/html/">Casa</a></h3>
                        <h3 className="links"><a>Líf og List</a></h3>

                        <p>Við erum líka að safna okkur fyrir stærri hlutum og því eru peningagjafir vel þegnar :)</p>
                    </Col>
                </Row>

            </Grid>
        )
    }
}