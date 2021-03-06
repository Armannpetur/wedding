import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './List.css';

export default class List extends Component {
    render(){
        return(
            <Grid className="home-grid">
                <Image src="assets/gjafalisti.jpg" className="home-pic" />
                <Row className="show-grid text-center">
                    <Col xs={12} md={4}/>
                    <Col xs={12} md={4} className="list-wrapper">
                     <p>Þessir gjafalistar eru eingöngu hugsaðir sem hugmyndir en auðvitað ekki tæmandi listi yfir það sem okkur langar í eða vantar. 
                        </p>

                        <h3><a href="https://casa.is/giftlist/view/440/">Casa</a></h3>
                        <h3 className="links"><a href="http://www.hrim.is/index.php?route=giftregistry/gift/products&gift_id=34">Hrím</a></h3>
                        <h3 className="links"><a href="https://www.lifoglist.is">Líf og List (listi í verslun)</a></h3>

                        <p>Við erum líka að safna okkur fyrir stærri hlutum og því eru peningagjafir vel þegnar :) :)</p>
                    </Col>
                </Row>

            </Grid>
        )
    }
}