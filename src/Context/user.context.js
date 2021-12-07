import react, { createContext, useContext, useState, useEffect } from 'react';
import { auth, firestore_db } from '../Firebase/firebase';

//create context
const UserContext = createContext();

export const UserProvider = (props) => {
	const [currentUser, setCurrentUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const checkUserAuth = () => {
		return auth.onAuthStateChanged(async (userAuth) => {
			console.log(userAuth);
			if (userAuth) {
				setLoggedIn(true);
				const userRef = await createUserProfileDocument(userAuth, {});
				userRef.onSnapshot((snapshot) => {
					console.log(snapshot.data());
					setCurrentUser({ id: snapshot.id, ...snapshot.data() });
					setIsLoading(false);
				});
			} else {
				setCurrentUser(null);
				setLoggedIn(false);
				setIsLoading(false);
			}
		});
	};

	useEffect(() => {
		checkUserAuth();
	}, [loggedIn]);

	const createUser = (displayName, email, password) => {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//successfully created a new user with email. and password
				if (auth.user) {
					auth.user
						.updateProfile({
							displayName: displayName,
						})
						.then((s) => {
							console.log(s);
						});
				}
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
			const { email } = userAuth;
			const { displayName } = additionalData;
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

	const signInUser = async (email, password) => {
		try {
			return await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error);
			setError(true);
		}
	};

	const signOut = () => {
		auth.signOut().then(() => setLoggedIn(false));
		// localStorage.setItem('userLoggedIn', false);
		//setWaiting(false);
		//unsubscribeFromAuth();
	};

	return (
		<UserContext.Provider
			value={{ createUser, currentUser, signInUser, signOut }}
		>
			{props.children}
		</UserContext.Provider>
	);
};

// export default UserProvider;

//export to pull info from the data layer
export const useUserContext = () => {
	return useContext(UserContext);
};
