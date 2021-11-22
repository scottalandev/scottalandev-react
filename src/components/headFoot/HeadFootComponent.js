import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './headFoot.css';

export function Header() {
	const [isNavOpen, toggleNav] = useState(false);

	return (
		<Navbar dark className="bg-dark dark" sticky="top" expand="md">
			<NavbarBrand className="mr-auto" href="/">
				<img src="img/SAFavicon80px.png" alt="logo" />
			</NavbarBrand>
			<NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
			<Collapse isOpen={isNavOpen} navbar>
				<Nav navbar className="ml-auto">
					<NavItem>
						<NavLink className="nav-link" to="/home" onClick={() => toggleNav(false)}>home</NavLink>
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
		<footer className="site-footer">
			<div className="container-fluid bg-dark text-light footer-content" style={{ width: '100%' }}>
				<div className="row align-items-center">
					<div className="col col-sm-4 offset-2 foot-col">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<NavItem>
								<NavLink to="/home">Home</NavLink>
							</NavItem>
							<li>
								<NavLink to="/page">Page</NavLink>
							</li>
						</ul>
					</div>
					<div className="col text-center foot-col">
						<p>'MERN: Fully Stacked' and this website developed by:</p>
						<a href="http://scottalan.dev/" target="_blank" rel="noreferrer">
							<img src="img/SADLogoLt2LgTrans.png" alt="Scott Alan Dev logo" height="50px" />
						</a>
						<hr style={{ borderTop: '3px solid white' }} />
						<p>&copy; 2021 Scott Alan</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
