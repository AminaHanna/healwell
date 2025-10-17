import { supabase } from './supabase';

/**
 * Uploads an image file to Supabase Storage
 * @param {File} file - The image file to upload
 * @param {string} bucketName - The storage bucket name (e.g., 'blog-images', 'service-images')
 * @param {string} prefix - Optional prefix for the file name (e.g., 'blog', 'service')
 * @returns {Promise<{publicUrl: string, error: Error|null}>}
 */
export const uploadImage = async (file, bucketName, prefix = '') => {
  if (!file) {
    return { publicUrl: null, error: new Error('No file provided') };
  }

  try {
    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const sanitizedFileName = file.name
      .toLowerCase()
      .replace(/[^a-z0-9.-]/g, '-')
      .replace(/-+/g, '-');
    
    const fileName = prefix 
      ? `${prefix}-${timestamp}-${randomString}-${sanitizedFileName}`
      : `${timestamp}-${randomString}-${sanitizedFileName}`;

    // Attempt to upload the file
    const { data, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      // Check if it's a bucket not found error
      if (uploadError.message.includes('Bucket not found')) {
        console.error(`Storage bucket '${bucketName}' not found. Please create it in Supabase.`);
        return {
          publicUrl: null,
          error: new Error(
            `Storage bucket '${bucketName}' not found. Please create it in your Supabase project.`
          ),
        };
      }
      throw uploadError;
    }

    // Get public URL
    const { data: publicData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    return {
      publicUrl: publicData.publicUrl,
      error: null,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      publicUrl: null,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
};

/**
 * Deletes an image file from Supabase Storage
 * @param {string} publicUrl - The public URL of the image
 * @param {string} bucketName - The storage bucket name
 * @returns {Promise<{success: boolean, error: Error|null}>}
 */
export const deleteImage = async (publicUrl, bucketName) => {
  if (!publicUrl) {
    return { success: false, error: new Error('No URL provided') };
  }

  try {
    // Extract filename from public URL
    const urlParts = publicUrl.split('/');
    const fileName = urlParts[urlParts.length - 1];

    const { error } = await supabase.storage
      .from(bucketName)
      .remove([fileName]);

    if (error) throw error;

    return { success: true, error: null };
  } catch (error) {
    console.error('Error deleting image:', error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
};

/**
 * Creates a storage bucket if it doesn't exist
 * @param {string} bucketName - The bucket name to create
 * @param {boolean} isPublic - Whether the bucket should be public
 * @returns {Promise<{success: boolean, error: Error|null}>}
 */
export const createStorageBucket = async (bucketName, isPublic = true) => {
  try {
    const { data, error } = await supabase.storage.createBucket(bucketName, {
      public: isPublic,
    });

    if (error) {
      // Bucket might already exist, which is fine
      if (error.message.includes('already exists')) {
        return { success: true, error: null };
      }
      throw error;
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Error creating storage bucket:', error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
};

