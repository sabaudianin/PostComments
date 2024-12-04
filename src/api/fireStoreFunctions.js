import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

//Fn dodawania dokumentu
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef;
  } catch (error) {
    console.error("Error adding document", error);
    throw error;
  }
};

// Function to add a document to a collection
export async function addDocumentToCollection(collectionName, data) {
  try {
    // Get a reference to the collection
    const collectionRef = getDocs(collection(collectionName));

    // Add the document
    const docRef = await collectionRef.add(data);

    // Log the document ID
    console.log("Document written with ID: ", docRef.id);

    // Return the document reference
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}

//Fn do pobierania dokumentów z kolekcji
export const getDocument = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("error fetching document", error);
    throw error;
  }
};

// Function to get documents from a collection
export async function getDocumentsFromCollection(collectionName) {
  try {
    // Get a reference to the collection
    const collectionRef = collection(db, collectionName);

    // Get all documents from the collection
    const querySnapshot = await getDocs(collectionRef);

    // Extract the data from the documents
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Return the array of documents
    return documents;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
}

//Fn to delete document
export const deleteDocument = async (collectionName, id) => {
  try {
    await deleteDoc(doc(db, collectionName, id));
    console.log("Document deleted");
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

// Function to delete a document from a collection
export async function deleteDocumentFromCollection(collectionName, documentId) {
  try {
    // Get a reference to the document
    const docRef = doc(db, collectionName, documentId);

    // Delete the document
    await deleteDoc(docRef);

    console.log("Document deleted successfully!");
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
}

//Fn to Update
export const updateDocument = async (collectionName, id, updatedData) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, updatedData);
    console.log("DOcument updated");
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

// Function to update a document in a collection
export async function updateDocumentinCollection(
  collectionName,
  documentId,
  updatedData
) {
  try {
    // Get a reference to the document
    const docRef = doc(db, collectionName, documentId);

    // Update the document
    await updateDoc(docRef, updatedData);

    console.log("Document updated successfully!");
    return docRef; // Return the document reference for further operations
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
}
