const express = require("express");
const connectDatabase = require("./config/db"); // Pastikan path sesuai lokasi file db Anda

const app = express();
const PORT = 3000;

app.use(express.json());
// Perbaikan: syntax urlencoded yang benar
app.use(express.urlencoded({ extended: false }));

async function startServer() {
  try {
    // Tunggu koneksi database sebelum menjalankan server
    await connectDatabase();
    
    // Perbaikan: syntax callback app.listen
    app.listen(PORT, () => {
      // Gunakan backtick (`) untuk template literal variable ${PORT}
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Gagal menjalankan server:", error);
  }
}

startServer();