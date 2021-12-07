import React, { useState } from 'react';
import { Loader } from '..';

const withLoading = (WrappedComponent, loadingMessage) => {
	function HOC(props) {
		const [isLoading, setLoading] = useState(true);
		const setLoadingState = (isComponentLoading) => {
			setLoading(isComponentLoading);
		};

		return (
			<>
				{isLoading && <Loader message={loadingMessage} />}
				<WrappedComponent
					{...props}
					setLoading={setLoadingState}
					isLoading={isLoading}
				/>
			</>
		);
	}
	return HOC;
};

export default withLoading;
