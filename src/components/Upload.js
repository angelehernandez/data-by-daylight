import React from 'react';
import { Button } from 'react-bootstrap';

const UploadButton = () => {

return (
	<div style={{
        display: 'flex',
        margin: 'auto',
        width: 400,
        flexWrap: 'wrap',
	}}>
	<div style={{ width: '100%', float: 'left' }}>
		<h3>How to use create button to choose file in ReactJS?</h3> <br />
	</div>
	<input
		type="file"
		accept="image/*"
		style={{ display: 'none' }}
		id="contained-button-file"
	/>
	<label htmlFor="contained-button-file">
		<Button>
		Upload
		</Button>
	</label>
	<h3> OR </h3>
	<input accept="image/*" id="icon-button-file"
		type="file" style={{ display: 'none' }} />
	</div>
);
}

export default UploadButton;