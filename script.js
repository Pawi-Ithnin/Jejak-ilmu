<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <title>Jejak Kuliah</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Amiri', serif;
      background: #f5f9f5;
      margin: 0;
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: #1b5e20;
    }

    #search {
      width: 90%;
      max-width: 400px;
      padding: 15px;
      font-size: 18px;
      border-radius: 30px;
      border: 2px solid #1b5e20;
      outline: none;
      margin-bottom: 20px;
    }

    .bantuan-oku {
      margin-bottom: 30px;
    }

    .btn-fungsi {
      background: #1b5e20;
      color: white;
      padding: 12px 20px;
      border-radius: 30px;
      text-decoration: none;
      font-size: 16px;
      display: inline-block;
    }

    #result {
      max-width: 600px;
      margin: auto;
      text-align: left;
    }

    .card-kuliah {
      background: white;
      border-left: 6px solid #1b5e20;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .card-kuliah h3 {
      margin: 0 0 5px;
      color: #1b5e20;
    }

    .iklan {
      margin-top: 40px;
    }

    .iklan img {
      max-width: 100%;
      border-radius: 15px;
    }
  </style>
</head>
<body>

  <h1>Jejak Kuliah</h1>

  <input type="text" id="search" placeholder="Taip negeri: Johor, KL, Selangor, Pahang">

  <div class="bantuan-oku">
    <a href="https://pawi-ithnin.github.io/Tanda" target="_blank" class="btn-fungsi">
      👂🚫 Bantuan OKU Pekak
    </a>
  </div>

  <div id="result"></div>

  <div class="iklan">
    <h2>Penaja</h2>
    <img src="https://i.ibb.co/4ZcpxQvx/photo-6289766686743269150-y.jpg" alt="Penaja">
  </div>

<script>
/* ================== DATA ANDA (KEKAL) ================== */
const dataKuliah = [
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Jumaat", lokasi: "Masjid An Nur Larkin Sentral" },
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Sabtu", lokasi: "Masjid An Nur Larkin Sentral" },
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Ahad", lokasi: "Masjid An Nur Larkin Sentral" },
  { negeri: "Johor", tajuk: "Kuliah Dhuha", penceramah: "-", tarikh: "Selasa 23/1 (Wanita)", lokasi: "Masjid Habib Hassan Alattas" },
  { negeri: "Johor", tajuk: "10.30am", penceramah: "-", tarikh: "Sabtu 24/1 (Wanita)", lokasi: "Surau Al Munawarah Molek" },
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Sabtu 19/1", lokasi: "Masjid Kolam Ayer" },
  { negeri: "Johor", tajuk: "Kuliah Subuh", penceramah: "-", tarikh: "Sabtu 24/1", lokasi: "Masjid Bandar Dato Onn" },
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Sabtu 23/1", lokasi: "Masjid BBU" },

  { negeri: "Selangor", tajuk: "Kuliah Pagi 8.30am", penceramah: "-", tarikh: "Ahad 25/1", lokasi: "Masjid Saujana Utama" },
  { negeri: "Selangor", tajuk: "Lepas Maghrib", penceramah: "-", tarikh: "Jumaat 23/1", lokasi: "Masjid Al Makmuriah Kayu Ara Damansara" },

  { negeri: "Pahang", tajuk: "Lepas Maghrib", penceramah: "-", tarikh: "Jumaat 24/1", lokasi: "Masjid Tepian Putra" },

  { negeri: "KL", tajuk: "Lepas Maghrib", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Al Bukhary" },
  { negeri: "KL", tajuk: "Lepas Maghrib", penceramah: "-", tarikh: "Selasa 6/1", lokasi: "Masjid Al Bukhary" },
  { negeri: "KL", tajuk: "Lepas Maghrib", penceramah: "-", tarikh: "Isnin 10/1", lokasi: "Masjid Al Bukhary" },
  { negeri: "KL", tajuk: "Tazkirah Jumaat", penceramah: "-", tarikh: "Jumaat 16/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "KL", tajuk: "Kuliah Zuhor", penceramah: "-", tarikh: "Rabu 21/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "KL", tajuk: "Kuliah Zuhor", penceramah: "-", tarikh: "Isnin 26/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "KL", tajuk: "Kuliah Zuhor", penceramah: "-", tarikh: "Rabu 28/1", lokasi: "Masjid Jamek Abdullah Hukum" },

  { negeri: "Melaka", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Tengkera" },
  { negeri: "Melaka", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Selasa 6/1", lokasi: "Masjid Tengkera" },
  { negeri: "Melaka", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Jumaat 7/1", lokasi: "Masjid Tengkera" },
  { negeri: "Melaka", tajuk: "Kuliah Dhuha", penceramah: "-", tarikh: "Sabtu 10/1", lokasi: "Masjid Al Azim" },
  { negeri: "Melaka", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Jamek Ar Rahman Kg Pulai" }
];

/* ================== LOGIK CARIAN ================== */
const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("result");

papar(dataKuliah);

searchInput.addEventListener("input", () => {
  const key = searchInput.value.toLowerCase().trim();
  const tapis = dataKuliah.filter(k =>
    k.negeri.toLowerCase().includes(key)
  );
  papar(tapis);
});

function papar(data) {
  resultDiv.innerHTML = "";

  if (data.length === 0) {
    resultDiv.innerHTML = "<p>❌ Tiada kuliah dijumpai</p>";
    return;
  }

  data.forEach(k => {
    resultDiv.innerHTML += `
      <div class="card-kuliah">
        <h3>${k.tajuk}</h3>
        <p><strong>Negeri:</strong> ${k.negeri}</p>
        <p><strong>Tarikh:</strong> ${k.tarikh}</p>
        <p><strong>Lokasi:</strong> ${k.lokasi}</p>
      </div>
    `;
  });
}
</script>

</body>
</html>
