document.addEventListener("DOMContentLoaded", function () {

  const search = document.getElementById("search");
  const result = document.getElementById("result");

  const dataKuliah = [
    { negeri: "Johor", tajuk: "Kuliah Maghrib", tarikh: "Jumaat", lokasi: "Masjid An Nur Larkin Sentral" },
    { negeri: "KL", tajuk: "Lepas Maghrib", tarikh: "Isnin", lokasi: "Masjid Al Bukhary" }
  ];

  function papar(data) {
    result.innerHTML = "";
    data.forEach(k => {
      result.innerHTML += `
        <div>
          <b>${k.tajuk}</b><br>
          ${k.negeri} | ${k.tarikh}<br>
          ${k.lokasi}
        </div><hr>
      `;
    });
  }

  papar(dataKuliah);

  search.addEventListener("input", function () {
    const key = this.value.toLowerCase();
    const tapis = dataKuliah.filter(k =>
      k.negeri.toLowerCase().includes(key)
    );
    papar(tapis);
  });

});
