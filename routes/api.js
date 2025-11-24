const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');

// Konfigurasi Multer untuk menyimpan file di memori
const upload = multer({ storage: multer.memoryStorage() });

// Route untuk membuat komik baru (dengan upload gambar)
router.post('/komik/', upload.single('image'), komikController.createKomik);

// Route untuk mendapatkan semua komik
router.get('/komik/', komikController.getAllKomik);

// Route untuk mendapatkan komik berdasarkan ID
router.get('/komik/:id', komikController.getKomikById);

// Route untuk memperbarui komik (dengan upload gambar)
router.put('/komik/:id', upload.single('image'), komikController.updateKomik);

// Route untuk menghapus komik
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;
