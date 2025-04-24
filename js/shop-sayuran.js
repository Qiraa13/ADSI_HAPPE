const sayuran = [
    { nama: "Pare", harga: "Rp 5.000 / kg", stok: "1000 kg", gambar: "sayur/pare.jpg" },
    { nama: "Terong", harga: "Rp 15.000 / kg", stok: "1000 kg", gambar: "sayur/terong.jpg" },
    { nama: "Bayam", harga: "Rp 3.000 / ikat", stok: "500 ikat", gambar: "sayur/bayam.jpg" },
    { nama: "Sawi", harga: "Rp 4.000 / ikat", stok: "700 ikat", gambar: "sayur/sawi.jpg" },
    { nama: "Kangkung", harga: "Rp 3.500 / ikat", stok: "600 ikat", gambar: "sayur/kangkung.jpg" },
    { nama: "Brokoli", harga: "Rp 20.000 / kg", stok: "300 kg", gambar: "sayur/brokoli.jpg" },
    { nama: "Kembang Kol", harga: "Rp 18.000 / kg", stok: "400 kg", gambar: "sayur/kembang-kol.jpg" },
    { nama: "Tomat", harga: "Rp 10.000 / kg", stok: "900 kg", gambar: "sayur/tomat.jpg" },
    { nama: "Wortel", harga: "Rp 8.000 / kg", stok: "800 kg", gambar: "sayur/wortel.jpg" },
    { nama: "Kentang", harga: "Rp 12.000 / kg", stok: "750 kg", gambar: "sayur/kentang.jpg" },
    { nama: "Timun", harga: "Rp 6.000 / kg", stok: "650 kg", gambar: "sayur/timun.jpg" },
    { nama: "Labu", harga: "Rp 9.000 / kg", stok: "550 kg", gambar: "sayur/labu.jpg" },
    { nama: "Paprika", harga: "Rp 25.000 / kg", stok: "400 kg", gambar: "sayur/paprika.jpg" },
    { nama: "Cabai", harga: "Rp 22.000 / kg", stok: "300 kg", gambar: "sayur/cabe.jpg" },
    { nama: "Selada", harga: "Rp 7.000 / ikat", stok: "500 ikat", gambar: "sayur/selada.jpg" }
  ];
  
  const grid = document.getElementById("productGrid");
  
  sayuran.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}">
      <h3>${item.nama}</h3>
      <p><em>sayuran</em></p>
      <p>${item.harga}</p>
      <p>Stok ${item.stok}</p>
    `;
    grid.appendChild(card);
  });
  