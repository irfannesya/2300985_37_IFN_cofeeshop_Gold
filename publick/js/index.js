

//default function create submit form//
$(document).ready(function () {
  $("#create-news-form").submit(function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengambil data dari formulir
    let title = $("#title").val();
    let cover = $("#cover").val();
    let content = $("#content").val();

    // Mengirim data ke API menggunakan AJAX
    $.ajax({
      url: "/api/v1/news", // Ganti dengan URL API sesuai dengan struktur Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ title: title, cover: cover, content: content, isPublic: true, author: "Admin" }),
      success: function (response) {
        // Tindakan setelah berhasil
        alert("Berita berhasil ditambah.");
        // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
        window.location.href = "/";
      },
      error: function (error) {
        // Tindakan jika terjadi kesalahan
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal menyimpan berita.");
      },
    });
  });
});


// register
$("#registration-form").submit(function (event) {
  event.preventDefault();

  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const repassword = $("#repassword").val();

  if (password !== repassword) {
    alert("Maaf konfirmasi password yang and masukan tidak sesuai")
  } else {
    // Kirim data registrasi ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api/v1/register", // Ganti dengan rute API registrasi Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ name, email, password }),
      success: function (response) {
        // Tampilkan pesan sukses atau redirect ke halaman login
        alert("Registrasi berhasil! Silakan masuk.");
        window.location.href = "/";
      },
      error: function (error) {
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal mendaftar. Silakan coba lagi.");
      },
    });
  }
});

//create produk
$("#create-produk-form").submit(function (event) {
  event.preventDefault();

  let nama = $("#nama").val();
  let jenis = $("#jenis").val();
  let harga = $("#harga").val();

  $.ajax({
    url: "/api/v1/produk",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ nama, jenis, harga }),

    success: function (response) {
      alert("Produk Berhasil Ditambahkan.");
      window.location.href = "";
    },
    error: function (error) {
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal Menyimpan Produk.");
    },
  });
});