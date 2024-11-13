// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) { //window.onclick menetapkan sebuah fungsi yang akan dipanggil setiap kali pengguna mengklik di mana saja di jendela.
    if (event.target == modal) { //Di dalam fungsi ini, ada pemeriksaan untuk melihat apakah elemen yang diklik (event.target) adalah modal itu sendiri.
      modal.style.display = "none"; //Jika event.target adalah modal, maka properti style.display dari modal diatur menjadi "none", yang berarti modal tersebut akan disembunyikan.
    }
  }
  
  window.onload = function() {
    // Mengganti riwayat halaman sebelumnya
    history.replaceState(null, "", window.location.href);
    history.pushState(null, "", window.location.href);
    
    // Cegah navigasi "back" di browser
    window.onpopstate = function() {
        history.go(1);
    };
};