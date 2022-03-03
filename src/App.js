import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Home from './Pages/Home';
import ErrorPage from './Pages/Error';
import Header from './components/HeaderComponent';
import EnterModal from './components/ModalComponent';

function App() {
	return (
		<>
			<EnterModal />
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Project />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
