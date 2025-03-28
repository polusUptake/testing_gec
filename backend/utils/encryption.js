import crypto from 'crypto';

// Secret key (should be 32 bytes for AES-256)
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-here';  // Use your existing JWT_SECRET for encryption key
const IV_LENGTH = 16;  // AES block size

// Function to encrypt data
const encryptData = (data) => {
  const iv = crypto.randomBytes(IV_LENGTH);  // Generate random initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(SECRET_KEY, 'utf-8'), iv);  // AES-256-CBC mode
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: iv.toString('hex'), encryptedData: encrypted };  // Return both iv and encrypted data
};

// Function to decrypt data
const decryptData = (iv, encryptedData) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(SECRET_KEY, 'utf-8'), Buffer.from(iv, 'hex'));  // AES-256-CBC mode
  let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};

export { encryptData, decryptData };