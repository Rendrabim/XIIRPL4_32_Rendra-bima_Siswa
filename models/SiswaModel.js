const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    nis: {
        type: String,
        required: true,
        unique: true,
    },
    noabsen: {
        type: String,
        required: true,
    },
    kelas: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Siswa', SiswaSchema);