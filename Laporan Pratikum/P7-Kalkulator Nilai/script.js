function hitungNilaiAkhir (tugas, uts, uas) { 
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

function tentukanGrade (nilaiAkhir) { 
    if (nilaiAkhir >= 85) return "A"; 
    else if (nilaiAkhir >= 75) return "B"; 
    else if (nilaiAkhir >= 65) return "C"; 
    else if (nilaiAkhir >= 55) return "D"; 
    return "E"; 
} 

const nama = document.getElementById("nama").value;
const tugas = Number(document.getElementById("tugas").value); 
const uts = Number(document.getElementById("uts").value); 
const uas = Number(document.getElementById("uas").value);

const daftarNilai = [tugas, uts, uas]; 
let semuaValid = true; 

for (let i = 0; i < daftarNilai.length; i++) { 
    if (!validasiNilai(daftarNilai [i])) { 
        semuaValid = false; 
    }
}

function validasiNilai(nilai) {
    if (nilai >= 0 && nilai <= 100) {
        return true;
    } else {
        return false;
    }
}

const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas); 
const grade = tentukanGrade(nilaiAkhir);

const status = nilaiAkhir >= 65 ? "Lulus" : "Belum Lulus";
const statusClass = nilaiAkhir >= 65 ? "lulus" : "belum-lulus";

const mahasiswa = {
    nama: nama, 
    tugas: tugas, 
    uts: uts, 
    uas: uas,
    nilaiAkhir: nilaiAkhir, 
    grade: grade,
    status: status, 
}; 


console.log("Data hasil perhitungan: ", mahasiswa); 

hasil.innerHTML =`
    <h2>Hasil Perhitungan</h2> 
    <p>Mahasiswa: <strong>${mahasiswa.nama}</strong></p> 
    <p class="score">${mahasiswa.nilaiAkhir.toFixed(1)}</p> 
    <p>Status: <span class="${statusClass}">${mahasiswa.status}</span></p> 
`;
