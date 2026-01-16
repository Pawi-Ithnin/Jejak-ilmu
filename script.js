const dataKuliah = [
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Jumaat", lokasi: "Masjid An Nur Larkin Sentral" },
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Sabtu", lokasi: "Masjid An Nur Larkin Sentral" },
  { negeri: "Johor", tajuk: "Kuliah Maghrib", penceramah: "-", tarikh: "Ahad", lokasi: "Masjid An Nur Larkin Sentral" },
  { negeri: "Johor", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Selasa 13/1", lokasi: "Masjid Habib Hassan Alattas" },
  { negeri: "Johor", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Rabu 14/1", lokasi: "Masjid Habib Hassan Alattas" },
  { negeri: "Johor", tajuk: "dhuha 9am ", penceramah: "-", tarikh: "Sabtu 17/1", lokasi: "Masjid Habib Hassan Alattas" },
  { negeri: "Johor", tajuk: "10.30am ", penceramah: "-", tarikh: "Sabtu 24/1 wanita sahaja", lokasi: "Surah Al Munawarah Molek " },
  { negeri: "Johor", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Sabtu 3/1", lokasi: "Masjid Kolam Ayer" },
  { negeri: "Johor", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: " Ahad 18/1 ", lokasi: "Masjid Jamek Taman Perling" },
  { negeri: "Selangor", tajuk: "8.30am ", penceramah: "-", tarikh: "Ahad 25/1", lokasi: "Masjid Saujana utama" },
  { negeri: "Selangor", tajuk: "Kuliah Mahgrib ", penceramah: "-", tarikh: "Selasa 6/1 ", lokasi: "Masjid Saujana utama" },
  { negeri: "Selangor", tajuk: "Kuliah Mahgrib ", penceramah: "-", tarikh: "Selasa 6/1", lokasi: "Masjid Sultan Abdul Aziz" },
  { negeri: "Selangor", tajuk: "Kuliah Mahgrib ", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Sultan Abdul Aziz" },
  { negeri: "Selangor", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Jumaat 23/1", lokasi: "Masjid Al Makmuriah Kayu Ara Damansara" },
  { negeri: "Pahang", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Jumaat 2/1", lokasi: "Masjid Kg Koi Ulu Cheka" },
  { negeri: "Pahang", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Sabtu 10/1", lokasi: "Masjid Tepian Putra" },
  { negeri: "Pahang", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Jumaat 24/1", lokasi: "Masjid Tepian Putra" },
  { negeri: "KL", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Al Bukhary" },
  { negeri: "KL", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Selasa 6/1", lokasi: "Masjid Al Bukhary" },
  { negeri: "KL", tajuk: "Lepas Mahgrib", penceramah: "-", tarikh: "Isnin 10/1", lokasi: "Masjid Al Bukhary" },
  { negeri: "KL", tajuk: "Tazkirah Jumaat", penceramah: "-", tarikh: "Jumaat 16/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "KL", tajuk: "Kuliah Zuhor", penceramah: "-", tarikh: "Rabu 21/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "KL", tajuk: "Kuliah Zuhor ", penceramah: "-", tarikh: "Isnin 26/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "KL", tajuk: "Kuliah Zuhor", penceramah: "-", tarikh: "Rabu 28/1", lokasi: "Masjid Jamek Abdullah Hukum" },
  { negeri: "Melaka", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Tengkera" },
  { negeri: "Melaka", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Selasa 6/1", lokasi: "Masjid Tengkera" },
  { negeri: "Melaka", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Jumaat 7/1", lokasi: "Masjid Tengkera" },
  { negeri: "Melaka", tajuk: "Kuliah Dhuha", penceramah: "-", tarikh: "Sabtu 10/1", lokasi: "Masjid Al Azim" },
  { negeri: "Melaka", tajuk: "Kuliah Mahgrib", penceramah: "-", tarikh: "Isnin 5/1", lokasi: "Masjid Jamek Ar Rahman Kg Pulai" }
  
 
];

const input = document.getElementById("search");
const result = document.getElementById("result");

input.addEventListener("keyup", () => {
  const keyword = input.value.toLowerCase().trim();
  result.innerHTML = "";

  if (!keyword) return;

  const tapis = dataKuliah.filter(k =>
    k.negeri.toLowerCase().includes(keyword) ||
    k.tajuk.toLowerCase().includes(keyword) ||
    k.penceramah.toLowerCase().includes(keyword) ||
    k.lokasi.toLowerCase().includes(keyword)
  );

  if (tapis.length === 0) {
    result.innerHTML = "<p>Tiada kuliah dijumpai</p>";
    return;
  }

  tapis.forEach(k => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    const tajuk = k.tajuk.replace(regex, '<span class="highlight">$1</span>');
    const penceramah = k.penceramah.replace(regex, '<span class="highlight">$1</span>');
    const negeri = k.negeri.replace(regex, '<span class="highlight">$1</span>');
    const lokasi = k.lokasi.replace(regex, '<span class="highlight">$1</span>');

    result.innerHTML += `
      <div class="kuliah-card">
        <strong>${tajuk}</strong><br>
        <p>🎙 ${penceramah}</p>
        <p>🗓 ${k.tarikh}</p>
        <p>📍 ${lokasi} (${negeri})</p>
        <hr>
      </div>
    `;
  });
});
