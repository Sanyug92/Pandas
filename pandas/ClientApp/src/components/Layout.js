import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import Navigation from './NavBar';
import BtnDropDowns from './dropdowns';
import Card from './card';
import Carousels from './Carousel';
import Footer from './Footer';
import {Button, NavbarBrand, Navbar, NavbarNav, NavItem} from 'mdbreact';

export default props => (
	<Grid fluid>
		<Row>
			<Navigation />
		</Row>
		<Row>
			<Carousels/>
		</Row>
		<br/>
		<Row>
			<BtnDropDowns />
		</Row>
		<br />
		<br />
			<h1 className="text-center">Explore Project</h1>
		<br />
		<br />
		<br />
		<br />
		<br />
		<Row>
			<Col lg={12}>
				<Card/>
			</Col>
		</Row>
		<br />
		<br />
		<br />
		<br />
       <Row>
        <Col lg={12}>
			<Footer/>
		</Col>
       </Row>
	</Grid>
);
