import { v4 as uuidv4 } from "uuid";
import firebase from "./firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
	if (!snapshot.exists) return undefined;
	const data = snapshot.data();

	for (const prop in data) {
		if (data.hasOwnProperty(prop)) {
			if (data[prop] instanceof firebase.firestore.Timestamp) {
				data[prop] = data[prop].toDate();
			}
		}
	}

	return {
		...data,
		id: snapshot.id,
	};
}

export function listenToEventsFromFS() {
	return db.collection("events").orderBy("date");
}

export function listenToEventFromFS(eventId) {
	return db.collection("events").doc(eventId);
}

export function addEventToFS(event) {
	return db.collection("events").add({
		...event
	});
}

export function updateEventToFS(event) {
	return db.collection("events").doc(event.id).update(event);
}

export function deleteEventToFS(eventId) {
	return db.collection("events").doc(eventId).delete();
}

export function cancelEventTog(event) {
	return db.collection("events").doc(event.id).update({
		isCancelled: !event.isCancelled,
	});
}

export function signInWithEmail(user) {
	return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
}
