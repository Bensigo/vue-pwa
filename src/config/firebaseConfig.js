import firebase from 'firebase';

const config = {
	 apiKey: "AIzaSyDpKhk2rtU1bAdpXQi4Qo6xNcd_XRIKsBE",
    authDomain: "vue-pwa-b78ef.firebaseapp.com",
    databaseURL: "https://vue-pwa-b78ef.firebaseio.com",
    projectId: "vue-pwa-b78ef",
    storageBucket: "",
    messagingSenderId: "142147013788"
};

firebase.initializeApp(config);

export const messaging = firebase.messaging();

export function firebaseListener(func) {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			console.log('User log in success', user);
			func(true, user);
		} else {
			console.log('User log in failed', user);
			func(false);
		}
	}, (error) => {
		console.log(error);
	});
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
