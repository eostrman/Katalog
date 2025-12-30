document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(function(b) {
            b.classList.remove('active');
        });

        btn.classList.add('active');

        if (btn.textContent.includes('Proizvodi')) {
            document.getElementById('tab-proizvodi').style.display = 'block';
            document.getElementById('tab-kategorije').style.display = 'none';
        }
        else {
            document.getElementById('tab-proizvodi').style.display = 'none';
            document.getElementById('tab-kategorije').style.display = 'block';
        }
    });
});