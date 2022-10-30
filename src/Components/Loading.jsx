const loadingStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '50vh',
	width: '100vw',
	fontSize: '1.5rem',
	color: 'red',
};

const Loading = () => {
	return (
		<div style={loadingStyle} className='d-flex align-items-center'>
			<div className='card p-4'>
				<p>Loading...</p>
				<div
					className='spinner-border text-danger ml-auto text-center'
					role='status'
					aria-hidden='true'
				></div>
			</div>
		</div>
	);
};

export default Loading;
