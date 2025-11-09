// src/firebase/storage.js
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { storage } from './firebase';

// ========== UPLOAD IMAGE ==========
export const uploadImage = async (file, path) => {
  try {
    // Create unique filename
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `${path}/${fileName}`);

    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Image uploaded successfully:', downloadURL);
    return { success: true, url: downloadURL, path: snapshot.ref.fullPath };
  } catch (error) {
    console.error('Upload image error:', error);
    return { success: false, error: error.message };
  }
};

// ========== UPLOAD WITH PROGRESS ==========
export const uploadImageWithProgress = (file, path, onProgress) => {
  return new Promise((resolve, reject) => {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `${path}/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Calculate progress percentage
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) {
          onProgress(progress);
        }
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Handle errors
        console.error('Upload error:', error);
        reject({ success: false, error: error.message });
      },
      async () => {
        // Handle successful uploads
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at:', downloadURL);
          resolve({
            success: true,
            url: downloadURL,
            path: uploadTask.snapshot.ref.fullPath
          });
        } catch (error) {
          reject({ success: false, error: error.message });
        }
      }
    );
  });
};

// ========== DELETE IMAGE ==========
export const deleteImage = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    await deleteObject(fileRef);
    
    console.log('Image deleted successfully');
    return { success: true };
  } catch (error) {
    console.error('Delete image error:', error);
    return { success: false, error: error.message };
  }
};

// ========== UPLOAD PROFILE PICTURE ==========
export const uploadProfilePicture = async (userId, file) => {
  try {
    const path = `profiles/${userId}`;
    const result = await uploadImage(file, path);
    return result;
  } catch (error) {
    console.error('Upload profile picture error:', error);
    return { success: false, error: error.message };
  }
};

// ========== UPLOAD GALLERY IMAGE ==========
export const uploadGalleryImage = async (file, metadata = {}) => {
  try {
    const path = 'gallery';
    const result = await uploadImage(file, path);
    
    if (result.success) {
      return {
        success: true,
        url: result.url,
        path: result.path,
        metadata: {
          ...metadata,
          uploadedAt: new Date().toISOString()
        }
      };
    }
    
    return result;
  } catch (error) {
    console.error('Upload gallery image error:', error);
    return { success: false, error: error.message };
  }
};

// ========== UPLOAD VEHICLE IMAGE ==========
export const uploadVehicleImage = async (userId, vehicleId, file) => {
  try {
    const path = `vehicles/${userId}/${vehicleId}`;
    const result = await uploadImage(file, path);
    return result;
  } catch (error) {
    console.error('Upload vehicle image error:', error);
    return { success: false, error: error.message };
  }
};

// ========== UPLOAD MULTIPLE IMAGES ==========
export const uploadMultipleImages = async (files, path) => {
  try {
    const uploadPromises = files.map(file => uploadImage(file, path));
    const results = await Promise.all(uploadPromises);
    
    const successfulUploads = results.filter(r => r.success);
    const failedUploads = results.filter(r => !r.success);
    
    return {
      success: true,
      uploaded: successfulUploads,
      failed: failedUploads,
      total: files.length,
      successCount: successfulUploads.length,
      failedCount: failedUploads.length
    };
  } catch (error) {
    console.error('Upload multiple images error:', error);
    return { success: false, error: error.message };
  }
};