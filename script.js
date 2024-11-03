let isLoggedIn = false; // Status login

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginMessage = document.getElementById("login-message");

  // Misalkan kita hanya mengecek username dan password hardcoded
  if (username === "admin" && password === "password") {
    isLoggedIn = true; // Set status login ke true
    loginMessage.textContent = ""; // Hapus pesan kesalahan
    document.getElementById("loginForm").style.display = "none"; // Sembunyikan form login
    document.getElementById("dashboard").style.display = "block"; // Tampilkan dashboard
    showContent('dashboardContent'); // Tampilkan konten dashboard
  } else {
    loginMessage.textContent = "Username atau Password salah!";
  }
}

function logout() {
  isLoggedIn = false; // Set status login ke false
  document.getElementById("loginForm").style.display = "block"; // Tampilkan form login
  document.getElementById("dashboard").style.display = "none"; // Sembunyikan dashboard
  document.getElementById("username").value = ""; // Hapus input username
  document.getElementById("password").value = ""; // Hapus input password
  document.getElementById("login-message").textContent = ""; // Hapus pesan kesalahan
}

function showContent(contentId) {
  // Cek jika pengguna sudah login
  if (!isLoggedIn) {
    alert("Anda tidak memiliki akses. Silakan login terlebih dahulu.");
    return; // Jangan lanjutkan jika belum login
  }

  // Sembunyikan semua konten
  const contents = document.querySelectorAll('.content, #dashboardContent');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  // Tampilkan konten yang dipilih
  if (contentId === 'dashboardContent') {
      document.getElementById('dashboardContent').style.display = 'block';
  } else if (contentId === 'karyawanContent') {
      document.getElementById('karyawanContent').style.display = 'block';
  } else {
      alert("Konten tidak tersedia.");
  }
}

// Fungsi untuk toggle sidebar
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active"); // Tambahkan atau hapus kelas 'active' untuk sidebar
}

// Fungsi untuk toggle sub-menu
function toggleSubMenu(subMenuId) {
  const subMenu = document.getElementById(subMenuId);
  subMenu.style.display = subMenu.style.display === "none" ? "block" : "none"; // Toggle display
}

// Event listener untuk memuat halaman
window.onload = function() {
  document.getElementById("dashboard").style.display = "none"; // Sembunyikan dashboard saat pertama kali
};

