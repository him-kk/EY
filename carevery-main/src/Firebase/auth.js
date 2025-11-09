// src/firebase/auth.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

// ========== SIGN UP ==========
export const signUp = async (email, password, fullName, phone) => {
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update profile with name
    await updateProfile(user, {
      displayName: fullName
    });

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: email,
      fullName: fullName,
      phone: phone || '',
      memberSince: new Date().toISOString(),
      membershipTier: 'Basic',
      profileImage: '',
      preferences: {
        notificationEmail: true,
        notificationSMS: true,
        notificationApp: true
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    console.log('User registered successfully:', user.uid);
    return { success: true, user };
  } catch (error) {
    console.error('Sign up error:', error);
    return { success: false, error: error.message };
  }
};

// ========== LOGIN ==========
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user.uid);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: error.message };
  }
};

// ========== GOOGLE SIGN IN ==========
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user document exists, if not create one
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        fullName: user.displayName || '',
        phone: user.phoneNumber || '',
        profileImage: user.photoURL || '',
        memberSince: new Date().toISOString(),
        membershipTier: 'Basic',
        preferences: {
          notificationEmail: true,
          notificationSMS: true,
          notificationApp: true
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    console.log('Google sign in successful:', user.uid);
    return { success: true, user };
  } catch (error) {
    console.error('Google sign in error:', error);
    return { success: false, error: error.message };
  }
};

// ========== LOGOUT ==========
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
};

// ========== PASSWORD RESET ==========
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent');
    return { success: true, message: 'Password reset email sent' };
  } catch (error) {
    console.error('Password reset error:', error);
    return { success: false, error: error.message };
  }
};

// ========== GET CURRENT USER ==========
export const getCurrentUser = () => {
  return auth.currentUser;
};

// ========== AUTH STATE LISTENER ==========
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// ========== GET USER PROFILE ==========
export const getUserProfile = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return { success: true, data: userDoc.data() };
    } else {
      return { success: false, error: 'User not found' };
    }
  } catch (error) {
    console.error('Get user profile error:', error);
    return { success: false, error: error.message };
  }
};

// ========== UPDATE USER PROFILE ==========
export const updateUserProfile = async (uid, updates) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      ...updates,
      updatedAt: new Date().toISOString()
    }, { merge: true });

    console.log('Profile updated successfully');
    return { success: true };
  } catch (error) {
    console.error('Update profile error:', error);
    return { success: false, error: error.message };
  }
};