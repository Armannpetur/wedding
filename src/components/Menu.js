import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Menu.css';

export default class Menu extends Component {
    render(){
        return(
            <Grid className="home-grid">
                <Image src="assets/matsedill.jpg" className="menu-pic" />
                <Row className="show-grid text-center">
                    <Col  className="menu-wrapper">
                     <p>Matseðill kemur síðar</p>
                    </Col>
                </Row>

            </Grid>
        )
    }
}