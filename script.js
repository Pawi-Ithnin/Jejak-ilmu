<input type="text" id="search" placeholder="Cari kuliah...">
<div id="result"></div>

<script>
document.addEventListener("DOMContentLoaded", function () {

  const dataKuliah = [
    { negeri: "Johor", tajuk: "Kuliah Maghrib", tarikh: "Jumaat", lokasi: "Masjid An Nur Larkin Sentral" },
    { negeri: "Johor", tajuk: "Kuliah Dhuha", tarikh: "Selasa", lokasi: "Masjid Habib Hassan Alattas" },
    { negeri: "KL", tajuk: "Lepas Maghrib", tarikh: "Isnin", lokasi: "Masjid Al Bukhary" }
  ];

  const search = document.getElementById("search");
  const result = document.getElementById("result");

  function papar(data) {
    result.innerHTML = "";
    if (data.length === 0) {
      result.innerHTML = "<em>Tiada rekod ditemui.</em>";
      return;
    }
    data.forEach(k => {
      result.innerHTML += `
        <div>
          <strong>${k.tajuk}</strong><br>
          ${k.negeri} | ${k.tarikh}<br>
          ${k.lokasi}
        </div>
        <hr>
      `;
    });
  }

  // Papar semua data pada awal
  papar(dataKuliah);

  search.addEventListener("input", function () {
    const key = this.value.toLowerCase();
    const tapis = dataKuliah.filter(k =>
      k.negeri.toLowerCase().includes(key) ||
      k.tajuk.toLowerCase().includes(key) ||
      k.tarikh.toLowerCase().includes(key) ||
      k.lokasi.toLowerCase().includes(key)
    );
    papar(tapis);
  });

});
</script>


