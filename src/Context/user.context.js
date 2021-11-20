import react, { createContext, useContext } from 'react';
import { auth, firestore_db } from '../Firebase/firebase';
// import history from '../History';

//create context
const UserContext = createContext();

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const createUser = (displayName, email, password) => {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//successfully created a new user with email. and password
				createUserProfileDocument(auth.user, { displayName, email });
				console.log('AUTH', auth.user);
			})
			.catch((error) => alert(error.message));
	};

	const createUserProfileDocument = async (userAuth, additionalData) => {
		if (!userAuth) return;

		const userRef = firestore_db.doc(`users/${userAuth.uid}`);

		const snapShot = await userRef.get();

		if (!snapShot.exists) {
			const { displayName, email } = userAuth;
			const createdAt = new Date();

			try {
				await userRef.set({
					displayName,
					email,
					createdAt,
					...additionalData,
				});
			} catch (error) {
				console.log('error creating user', error.message);
			}
		}

		return userRef;
	};

	return (
		<UserContext.Provider value={{ createUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

// export default UserProvider;

//export to pull info from the data layer
export const useUserContext = () => {
	return useContext(UserContext);
};
