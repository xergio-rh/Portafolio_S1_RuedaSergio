document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');
    if (navbar) { 
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scroll-active');
            } else {
                navbar.classList.remove('scroll-active');
            }
        });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id') || '';
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                
                if (href && current && href.includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    const btnSubmit = document.getElementById('btn-submit');

    if (contactForm && btnSubmit) { // 
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const originalText = btnSubmit.innerHTML;
            btnSubmit.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Enviando...";
            btnSubmit.disabled = true;

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let res = await response.json();
                if (response.status === 200) {
                    btnSubmit.innerHTML = "<i class='bx bx-check-circle'></i> ¡Mensaje Enviado!";
                    btnSubmit.style.backgroundColor = "#10b981"; 
                    contactForm.reset(); // Limpiamos los campos
                } else {
                    console.log("Error de Web3Forms:", res);
                    btnSubmit.innerHTML = "Error al enviar";
                    btnSubmit.style.backgroundColor = "#ef4444"; 
                }
            })
            .catch(error => {
                console.error("Error de conexión:", error);
                btnSubmit.innerHTML = "Error de conexión";
                btnSubmit.style.backgroundColor = "#ef4444";
            })
            .then(() => {
                setTimeout(() => {
                    btnSubmit.innerHTML = originalText;
                    btnSubmit.style.backgroundColor = ""; 
                    btnSubmit.disabled = false;
                }, 4000);
            });
        });
    }
});