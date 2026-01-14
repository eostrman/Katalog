// Ovo će trenutačno biti u app.js dok ne vidim kako će se razvijati aplikacija pa možda prebacim u zaseban .js

//Prikaži/sakrij gumbe
document.getElementById('btnNoviProizvod').addEventListener('click', () => {
    document.getElementById('formaProizvod').style.display = 'block';
});

document.getElementById('btnZatvoriProizvod').addEventListener('click', () => {
    document.getElementById('formaProizvod').style.display = 'none';
});

document.getElementById('btnOdustaniProizvod').addEventListener('click', () => {
    document.getElementById('formaProizvod').style.display = 'none';
});

document.getElementById('btnNovaKategorija').addEventListener('click', () => {
    document.getElementById('formaKategorija').style.display = 'block';
});

document.getElementById('btnZatvoriKategoriju').addEventListener('click', () => {
    document.getElementById('formaKategorija').style.display = 'none';
});

document.getElementById('btnOdustaniKategorija').addEventListener('click', () => {
    document.getElementById('formaKategorija').style.display = 'none';
});

//Dropdown
document.getElementById('proizvodKategorija').addEventListener('change', (e) => {
    const container = document.getElementById('novaKategorijaContainer');
    if (e.target.value === 'novaKategorija') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});

// TO DO SLJEDEĆE

//Spremi novu kategoriju
//prvo moram vidit u localStorage dal ima koju kategoriju ako nema novoj dajem ID=1 a ako ima dajem za jedan više od zadnjeg u listi

//napunit dropdown - malo mi je to čudno da kategoriju dodajemo na proizvodu, čemu onda još jedan tab di se opet dodaje kategorija
