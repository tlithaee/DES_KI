const CryptoJS = require('crypto-js');
const readlineSync = require('readline-sync');

// Define DES class
class DES {
    constructor(key) {
        // Initialize DES with key
        this.key = CryptoJS.enc.Hex.parse(key);
    }

    encrypt(userInput) {
        // Perform DES encryption on plaintext
        const encrypted = CryptoJS.DES.encrypt(
            userInput,
            this.key,
            { mode: CryptoJS.mode.ECB }
        );

        // Return ciphertext as hex string
        return encrypted.ciphertext.toString();
    }

    decrypt(ciphertext) {
        // Parse ciphertext from hex string
        const ciphertextHex = CryptoJS.enc.Hex.parse(ciphertext);

        // Perform DES decryption on ciphertext
        const decrypted = CryptoJS.DES.decrypt(
            { ciphertext: ciphertextHex },
            this.key,
            { mode: CryptoJS.mode.ECB }
        );

        // Return decrypted plaintext as UTF-8 string
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}

// Define DES key and plaintext
const key = "0123456789abcdef";
// const plaintext = "Hello, world!";

const userInput = readlineSync.question('Masukkan yang ingin di decrypt : ');
// console.log('Anda memasukkan: ' + userInput);

// Perform DES encryption
const des = new DES(key);
const ciphertext = des.encrypt(userInput);

// Perform DES decryption
const decrypted = des.decrypt(ciphertext);

// Print results
console.log("Plaintext: ", userInput);
console.log("Ciphertext: ", ciphertext);
console.log("Decrypted: ", decrypted);
