


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
  let image = $("#image").val();
  let deskripsi = $("#deskripsi").val();

  $.ajax({
    url: "/api/v1/produk",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ nama, jenis, harga, image, deskripsi }),

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

//daftar produk
function deleteProduk(id) {
  $.ajax({
    url: "/api/v1/daftarproduk/" + id, // Ganti dengan URL API sesuai dengan struktur Anda
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil
      alert("produk telah dihapus.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/daftarproduk";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menghapus produk.");
    },
  });
}


function updateProduk(params) {
  $.ajax({
    url: "/api/v1/daftarproduk/" + id,
    type: "PUT",
    success: function (response) {
      alert("Data produk berhasul di ubah.");
      window.location.href = "/daftarproduk";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menghapus produk.");
    },

  })

}

// klik tombol "Edit"
$(".edit-produk-form").click(function () {
  const selectedProduklId = $(this).attr("id");
  // Redirect ke halaman edit dengan membawa ID kelas
  window.location.href = `/produk/edit/${selectedProduklId}`;

});

// EDIT Produk
$("#edit-produk-form-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  let nama = $("#nama").val();
  let jenis = $("#jenis").val();
  let harga = $("#harga").val();
  let image = $("#image").val();
  let deskripsi = $("#deskripsi").val();

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: `"/api/v1/produk"${id}`, // Gunakan selectedKelasId
    type: "PUT", // Menggunakan metode PUT untuk pengeditan
    contentType: "application/json",
    data: JSON.stringify({ nama, jenis, harga, image, deskripsi }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Mata pelajaran berhasil diedit.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menyimpan mata pelajaran.");
    },
  });
});




