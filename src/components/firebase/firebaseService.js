import {async} from "@firebase/util"
import {initializeApp} from "firebase/app"
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	Timestamp,
	updateDoc,
} from "firebase/firestore"

// Inicio Firebase
const firebaseConfig = {
	apiKey: "AIzaSyC417RG-Q2idySjYH3bEE7upjvZv2XtCnA",
	authDomain: "mi-proyecto-react-a2053.firebaseapp.com",
	projectId: "mi-proyecto-react-a2053",
	storageBucket: "mi-proyecto-react-a2053.appspot.com",
	messagingSenderId: "580373830901",
	appId: "1:580373830901:web:d541b04d9b18b4f0ad79bc",
}

export const app = initializeApp(firebaseConfig)

const db = getFirestore()

//	Traer TODOS los items
export const getItems = async () => {
	const items = await getDocs(collection(db, "items"))
	return items
}

// Trae UN item
export const getItem = async (id) => {
	const item = await getDoc(doc(db, "items", id))
	return item
}

// Generacion de order
export const generateOrder = async (order) => {
	const newOrder = addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	return newOrder
}

// Manejar stock --> plus
export const updateStock = async (itemId, quiantity) => {
	const item = await getDoc(doc(db, "items", itemId))
	await updateDoc(doc(db, "items", itemId), {
		stock: item.data().stock - quiantity,
	})
}

//Fin Firebase
