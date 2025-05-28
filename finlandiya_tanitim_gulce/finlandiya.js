window.addEventListener("load", function() {
    alert("Finlandiya Tanıtım Sitesine Hoş Geldiniz!");
});

function handleForm(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log("Ad:", name);
    console.log("E-posta:", email);
    console.log("Konu:", subject);
    console.log("Mesaj:", message);

    alert("Teşekkürler, geri bildiriminiz alındı!");
}

function showSection(id) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selected = document.getElementById(id);
    if (selected) {
        selected.style.display = 'block';
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        showSection(targetId);
    });
});

window.addEventListener('load', () => {
    showSection('genel');
});

