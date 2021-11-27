import React, { useState } from 'react';
import Loader from './Loader';

const withLoading = (WrappedComponent, loadingMessage) => {
	function HOC(props) {
		const [isLoading, setLoading] = useState(true);
		const setLoadingState = (isComponentLoading) => {
			setLoading(isComponentLoading);
		};
		console.log('isLoading', isLoading);
		return (
			<>
				{isLoading && <Loader message={loadingMessage} />}
				<WrappedComponent {...props} setLoading={setLoadingState} />
			</>
		);
	}
	return HOC;
};

export default withLoading;
