function hitungKelvin(celsius) {
    return celsius + 273.15;
}

const suhuUji = [0, 100];
console.log("=== Tabel Konversi Titik Beku & Didih Air ===");
for(let i = 0; i < suhuUji.length; i++) {
    console.log(`${suhuUji[i]}°C = ${hitungKelvin(suhuUji[i])} Kelvin`);
}

document.getElementById("formSuhu").addEventListener("submit", function(event) {
    event.preventDefault();

    const celsius = Number(document.getElementById("celsius").value);

    if (celsius < -273.15) {
        console.error("Error: Suhu tidak bisa berada di bawah nol mutlak (-273.15 °C)!");
        document.getElementById("output").innerHTML = `<p style="color:red">Suhu tidak valid!</p>`;
        return; // Menghentikan program
    }

    const hasilKonversi = {
        celsius: celsius,
        fahrenheit: (celsius * 9/5) + 32,
        reamur: celsius * 4/5,
        kelvin: hitungKelvin(celsius)
    };

    console.log("Data hasil konversi: ", hasilKonversi);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>Fahrenheit: <strong>${hasilKonversi.fahrenheit.toFixed(2)} °F</strong></p>
        <p>Reamur: <strong>${hasilKonversi.reamur.toFixed(2)} °R</strong></p>
        <p>Kelvin: <strong>${hasilKonversi.kelvin.toFixed(2)} K</strong></p>
    `;
});