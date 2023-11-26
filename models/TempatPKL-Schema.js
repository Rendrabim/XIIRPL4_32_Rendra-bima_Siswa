const mongoose = require('mongoose')

const pklSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan Isikan Nama Perusahaan'],
        unique: true,
    },
    lokasi: {
        type: String,
        required: [true, 'Silahkan Isikan Lokasi Perusahaan'],
    },
    kordinator: {
        type: String,
        required: [true, 'Silahkan Isikan Kordinator Perusahaan'],
    },
    sistemKerja: {
        type: String,
        required: [true, 'Silahkan Isikan Sistem Kerja yang Dipakai Perusahaan'],
    },
    jurusan: {
        type: String,
        required: [true, 'Silahkan Isikan Jurusan Apa Saja yang Menerima Perusahaan'],
    },
});

module.exports = mongoose.model('TempatPKL', pklSchema);