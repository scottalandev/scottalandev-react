import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './headFoot.css';

export function Header() {
	const [isNavOpen, toggleNav] = useState(false);

	return (
		<Navbar dark className="bg-dark dark" sticky="top" expand="md">
			<NavbarBrand className="mr-auto col-sm-3" href="/">
				<img src="img/SAFavicon80px.png" alt="logo" />
			</NavbarBrand>
			<NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
			<Collapse isOpen={isNavOpen} navbar>
				<Nav navbar navbar-dark className="offset-sm-3">
					<NavItem>
						<NavLink className="nav-link" to="/" onClick={() => toggleNav(false)}>
							home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/projects" onClick={() => toggleNav(false)}>
							projects
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/tech" onClick={() => toggleNav(false)}>
							tech
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/me" onClick={() => toggleNav(false)}>
							me
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/contact" onClick={() => toggleNav(false)}>
							contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export function Footer(props) {
	return (
		<div className="container-fluid bg-dark text-light footer-content" style={{ width: '100%' }}>
			<div className="row align-items-center">
				<div className="col-sm-3 offset-sm-2 col-3 foot-col foot-nav">
					<h5>Links</h5>
					<Nav navbar navbar-dark vertical className="">
						<NavItem>
							<NavLink className="foot-link" to="/">
								home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="foot-link" to="/projects">
								projects
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="foot-link" to="/tech">
								tech
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="foot-link" to="/me">
								me
							</NavLink>
						</NavItem>
						<NavLink className="foot-link" to="/contact">
							contact
						</NavLink>
					</Nav>
				</div>
				<div className="col-sm-6 col-8 text-center foot-col">
					<p>
						<strong>scottalan.dev</strong> is the personal portfolio of full-stack web developer Scott Alan.
					</p>
					<hr style={{ borderTop: '3px solid white' }} />
					<div href="http://scottalan.dev/" target="_blank" rel="noreferrer">
						<img src="img/SADLogoLt2LgTrans.png" alt="Scott Alan Dev logo" height="50px" style={{ marginRight: '5%' }} />
						&copy; 2021 Scott Alan
					</div>
				</div>
			</div>
		</div>
	);
}
