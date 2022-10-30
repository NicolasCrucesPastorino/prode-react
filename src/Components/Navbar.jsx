import { Link } from 'react-router-dom';
import { ROL } from '../Constantes';
import authconsumer from './../Hooks/UseAuth';

export const Navbar = () => {
	const consumer = authconsumer();

	const links = [
		{ name: 'home', url: '/' },
		{ name: 'reglas', url: '/reglas' },
		{ name: 'tabla', url: '/tabla' },
		{ name: 'tuprode', url: '/tuprode' },
	];

	if (consumer.userauth.rol === ROL.ADMIN) {
		links.push({ name: 'Super Prode', url: '/superprode' });
	}

	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/tuprode'>
					TU PRODE
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						{links.map(link => (
							<li key={link.name} className='nav-item'>
								<Link className='nav-link' to={link.url}>
									{link.name.toUpperCase()}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
