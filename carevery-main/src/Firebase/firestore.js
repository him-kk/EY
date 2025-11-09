// src/firebase/firestore.js
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// ========== BOOKINGS ==========

// Create Booking
export const createBooking = async (bookingData) => {
  try {
    const bookingsRef = collection(db, 'bookings');
    const docRef = await addDoc(bookingsRef, {
      ...bookingData,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    console.log('Booking created with ID:', docRef.id);
    
    // Create notification
    await createNotification({
      bookingId: docRef.id,
      clientName: bookingData.clientName,
      clientEmail: bookingData.email,
      clientPhone: bookingData.phone,
      serviceName: bookingData.service,
      servicePrice: bookingData.servicePrice,
      appointmentDate: bookingData.preferredDate,
      appointmentTime: bookingData.preferredTime,
      specialRequests: bookingData.message || '',
      notificationStatus: 'pending'
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Create booking error:', error);
    return { success: false, error: error.message };
  }
};

// Get All Bookings
export const getAllBookings = async () => {
  try {
    const bookingsRef = collection(db, 'bookings');
    const q = query(bookingsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: bookings };
  } catch (error) {
    console.error('Get bookings error:', error);
    return { success: false, error: error.message };
  }
};

// Get Bookings by User
export const getUserBookings = async (userId) => {
  try {
    const bookingsRef = collection(db, 'bookings');
    const q = query(
      bookingsRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: bookings };
  } catch (error) {
    console.error('Get user bookings error:', error);
    return { success: false, error: error.message };
  }
};

// Update Booking Status
export const updateBookingStatus = async (bookingId, status) => {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, {
      status: status,
      updatedAt: serverTimestamp()
    });

    console.log('Booking status updated:', status);
    return { success: true };
  } catch (error) {
    console.error('Update booking status error:', error);
    return { success: false, error: error.message };
  }
};

// ========== NOTIFICATIONS ==========

// Create Notification
export const createNotification = async (notificationData) => {
  try {
    const notificationsRef = collection(db, 'notifications');
    const docRef = await addDoc(notificationsRef, {
      ...notificationData,
      createdAt: serverTimestamp()
    });

    console.log('Notification created with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Create notification error:', error);
    return { success: false, error: error.message };
  }
};

// Get All Notifications
export const getAllNotifications = async () => {
  try {
    const notificationsRef = collection(db, 'notifications');
    const q = query(notificationsRef, orderBy('createdAt', 'desc'), limit(100));
    const querySnapshot = await getDocs(q);
    
    const notifications = [];
    querySnapshot.forEach((doc) => {
      notifications.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: notifications };
  } catch (error) {
    console.error('Get notifications error:', error);
    return { success: false, error: error.message };
  }
};

// Update Notification Status
export const updateNotificationStatus = async (notificationId, status) => {
  try {
    const notificationRef = doc(db, 'notifications', notificationId);
    await updateDoc(notificationRef, {
      notificationStatus: status,
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('Update notification error:', error);
    return { success: false, error: error.message };
  }
};

// ========== VEHICLES ==========

// Add Vehicle
export const addVehicle = async (userId, vehicleData) => {
  try {
    const vehiclesRef = collection(db, 'vehicles');
    const docRef = await addDoc(vehiclesRef, {
      ...vehicleData,
      userId: userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    console.log('Vehicle added with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Add vehicle error:', error);
    return { success: false, error: error.message };
  }
};

// Get User Vehicles
export const getUserVehicles = async (userId) => {
  try {
    const vehiclesRef = collection(db, 'vehicles');
    const q = query(vehiclesRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    const vehicles = [];
    querySnapshot.forEach((doc) => {
      vehicles.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: vehicles };
  } catch (error) {
    console.error('Get vehicles error:', error);
    return { success: false, error: error.message };
  }
};

// Update Vehicle Health
export const updateVehicleHealth = async (vehicleId, healthData) => {
  try {
    const vehicleRef = doc(db, 'vehicles', vehicleId);
    await updateDoc(vehicleRef, {
      health: healthData,
      lastHealthCheck: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('Update vehicle health error:', error);
    return { success: false, error: error.message };
  }
};

// ========== CONTACT MESSAGES ==========

// Create Contact Message
export const createContactMessage = async (messageData) => {
  try {
    const messagesRef = collection(db, 'contactMessages');
    const docRef = await addDoc(messagesRef, {
      ...messageData,
      status: 'new',
      createdAt: serverTimestamp()
    });

    console.log('Contact message created with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Create contact message error:', error);
    return { success: false, error: error.message };
  }
};

// Get All Contact Messages
export const getAllContactMessages = async () => {
  try {
    const messagesRef = collection(db, 'contactMessages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: messages };
  } catch (error) {
    console.error('Get contact messages error:', error);
    return { success: false, error: error.message };
  }
};

// ========== SERVICES ==========

// Get All Services
export const getAllServices = async () => {
  try {
    const servicesRef = collection(db, 'services');
    const querySnapshot = await getDocs(servicesRef);
    
    const services = [];
    querySnapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: services };
  } catch (error) {
    console.error('Get services error:', error);
    return { success: false, error: error.message };
  }
};

// Add Service (Admin)
export const addService = async (serviceData) => {
  try {
    const servicesRef = collection(db, 'services');
    const docRef = await addDoc(servicesRef, {
      ...serviceData,
      createdAt: serverTimestamp()
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Add service error:', error);
    return { success: false, error: error.message };
  }
};

// ========== SERVICE HISTORY ==========

// Add Service History Entry
export const addServiceHistory = async (userId, vehicleId, serviceData) => {
  try {
    const historyRef = collection(db, 'serviceHistory');
    const docRef = await addDoc(historyRef, {
      ...serviceData,
      userId: userId,
      vehicleId: vehicleId,
      createdAt: serverTimestamp()
    });

    console.log('Service history added with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Add service history error:', error);
    return { success: false, error: error.message };
  }
};

// Get Service History by Vehicle
export const getVehicleServiceHistory = async (vehicleId) => {
  try {
    const historyRef = collection(db, 'serviceHistory');
    const q = query(
      historyRef,
      where('vehicleId', '==', vehicleId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const history = [];
    querySnapshot.forEach((doc) => {
      history.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: history };
  } catch (error) {
    console.error('Get service history error:', error);
    return { success: false, error: error.message };
  }
};

// ========== GALLERY ==========

// Get Gallery Images
export const getGalleryImages = async () => {
  try {
    const galleryRef = collection(db, 'gallery');
    const querySnapshot = await getDocs(galleryRef);
    
    const images = [];
    querySnapshot.forEach((doc) => {
      images.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: images };
  } catch (error) {
    console.error('Get gallery images error:', error);
    return { success: false, error: error.message };
  }
};

// ========== TEAM MEMBERS ==========

// Get Team Members
export const getTeamMembers = async () => {
  try {
    const teamRef = collection(db, 'team');
    const querySnapshot = await getDocs(teamRef);
    
    const members = [];
    querySnapshot.forEach((doc) => {
      members.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: members };
  } catch (error) {
    console.error('Get team members error:', error);
    return { success: false, error: error.message };
  }
};