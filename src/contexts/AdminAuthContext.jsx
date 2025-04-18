
import { createContext, useContext, useState, useEffect } from "react";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../lib/firebase";

// Initialize Firebase Auth
const auth = getAuth(app);

const AdminAuthContext = createContext(undefined);

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}

export function AdminAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }

  const value = {
    currentUser,
    login,
    signOut,
    loading
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}
