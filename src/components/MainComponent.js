import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './headFoot/HeadFootComponent';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TechPage from './pages/TechPage';
import MePage from './pages/MePage';
import ContactPage from './pages/ContactPage';
import './main.css';

function Main() {
	//this block effects a Scroll-To-Top on navigation
	const location = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/tech" element={<TechPage />} />
					<Route path="/me" element={<MePage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="*" element={<HomePage />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Main;
