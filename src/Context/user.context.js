import react, { createContext, useContext } from 'react';
import { auth } from '../Firebase/firebase';

//create context
const UserContext = createContext();

export const UserProvider = (props: { children?: React.ReactChild }) => {



	const createUser = (email, password) => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//successfully created a new user with email. and password
				console.log(auth);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<UserContext.Provider value={{createUser}}>
			{props.children}
		</UserContext.Provider>
	);
};

// export default UserProvider;

//export to pull info from the data layer
export const useUserContext = () => {
	return useContext(UserContext);
};
