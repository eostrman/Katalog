// Ovo će trenutačno biti u app.js dok ne vidim kako će se razvijati aplikacija pa možda prebacim u zaseban .js

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
