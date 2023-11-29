const DataSiswa = require('../models/SiswaModel')

module.exports = {
    home: async (req, res) => {
        try{
            const siswa = await DataSiswa.find()
            if (siswa.length > 0) {
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url
                })
            }   
            else {
                res.json({
                    status: false,
                    message: "Tidak ada siswa terdaftar!"
                })
            }
        }
        catch(error){
            res.status(400).json({success: false})
        }
    },
    show: async (req, res) => {
        try {
            const siswa = await DataSiswa.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Siswa berhasil ditemukan!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    },
    store: async (req, res) => {
        try {
            const siswa = await DataSiswa.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Siswa berhasil ditambahkan!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    },
    update: async (req, res) => {
        try {
            const siswa = await DataSiswa.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Keterangan Siswa berhasil diubah!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    },
    delete: async (req, res) => {
        try {
            const siswa = await DataSiswa.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                method: req.method,
                data: siswa,
                url: req.url,
                message: "Siswa berhasil dihapus!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    }
};