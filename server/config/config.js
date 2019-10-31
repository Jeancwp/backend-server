// =======================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;

// =======================
// Entorno
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
// Base de Datos
// =======================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/mathbook';
} else {
    urlDB = 'mongodb+srv://jeancwp:ZQkRQCkb1fTVxHf2@cluster0-qe8wd.mongodb.net/mathbook?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;