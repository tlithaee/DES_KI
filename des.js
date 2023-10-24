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
const userInput = readlineSync.question('Masukkan text yang ingin di-encrypt : ');

// Perform DES encryption
const des = new DES(key);
const ciphertext = des.encrypt(userInput);

// Perform DES decryption
const decrypted = des.decrypt(ciphertext);

// Print results
console.log("Ciphertext: ", ciphertext);
console.log("Decrypted: ", decrypted);




// ```
// const CryptoJS = require('crypto-js');
// const readlineSync = require('readline-sync');
// ```
// Berikut adalah library yang diperlukan dalam penyusunan kode DES. 
// 1. `const readlineSync = require('readline-sync');` = untuk mengambil input user
// 2. `const CryptoJS = require('crypto-js');` = library javascript buat standar crypto

// ```
// class DES {
//     constructor(key) {
//         // Initialize DES with key
//         this.key = CryptoJS.enc.Hex.parse(key);
//     }
// ```

// Dibuat fungsi `class` DES
// 1. `constructor(key)` = membuat constructor untuk key nanti
// 2. `this.key = CryptoJS.enc.Hex.parse(key);` = key yang tadi di-refer dan diparse menggunakan fungsi dari library `CryptoJS`

// ```
//     encrypt(userInput) {
//         // Perform DES encryption on plaintext
//         const encrypted = CryptoJS.DES.encrypt(
//             userInput,
//             this.key,
//             { mode: CryptoJS.mode.ECB }
//         );

//         // Return ciphertext as hex string
//         return encrypted.ciphertext.toString();
//     }
// ```

// Lalu ada fungsi `encrypt` yang mengambil data dari `userInput`
// 1. `const encrypted = CryptoJS.DES.encrypt` = mendeklarasikan variabel
// 2. `userInput`, `this.key`, `{ mode: CryptoJS.mode.ECB }` = variabel yang akan dienkripsi, berisi key dari enkripsi, dan mendeskripsikan mode enkripsi yang dipakai
// 3. `return encrypted.ciphertext.toString();` = nilai hasil enkripsinya dikembalikan dalam bentuk hex string
