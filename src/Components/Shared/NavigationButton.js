import React from 'react'
import useNavigation from '../../CustomHooks/useNavigation';

const NavigationButton = ({path, text, ...props}) => {
    const navigator = useNavigation()
    return (
			<div>
				<button
					type="button"
					onClick={() => navigator.goTo(path)}>
					{text}
				</button>
			</div>
		);
}

export default NavigationButton
