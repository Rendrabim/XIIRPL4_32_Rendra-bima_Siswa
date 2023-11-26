const Biodata = require('../models/TempatPKL-Schema')

module.exports = {
    //get all data
    index: async (req, res) => {
        try{
            const tempat = await Biodata.find()
            if (tempat.length > 0) {
            res.status(200).json({
                status: true,
                data: tempat,
                method: req.method,
                url: req.url
                })
            }   
            else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        }
        catch(error){
            res.status(400).json({success: false})
        }
    },
    //get a data
    read: async (req, res) => {
        try {
            const tempat = await Biodata.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: tempat,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    },
    //post data
    create: async (req, res) => {
        try {
            const tempat = await Biodata.create(req.body)
            res.status(200).json({
                status: true,
                data: tempat,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    },
    //put data
    update: async (req, res) => {
        try {
            const tempat = await Biodata.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: tempat,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    },
    //delete data
    delete: async (req, res) => {
        try {
            const tempat = await Biodata.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                method: req.method,
                data: tempat,
                url: req.url,
                message: "Data berhasil dihapus!"
            })
        } 
        catch (error) {
            res.status(400).json({success: false})
        }
    }
};