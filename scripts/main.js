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

    
    const translations = {
        es: {
            // Navbar
            nav_home: "Inicio",
            nav_about: "Sobre Mí",
            nav_skills: "Habilidades",
            nav_projects: "Proyectos",
            nav_contact: "Contáctame",

            hero_welcome: "Hola, soy",
            hero_subtitle: "Creo software eficiente, lógico y con impacto visual.",
            hero_desc: "Desarrollador de software enfocado en construir aplicaciones web robustas, automatizaciones eficientes y soluciones backend de alto rendimiento.",
            hero_btn_projects: "Ver Proyectos",
            hero_btn_talk: "Hablemos",

            
            about_title: "¿Quién es Sergio Rueda?",
            about_text_p1: "Soy un desarrollador de software con mentalidad analítica y un fuerte enfoque en resolver problemas complejos mediante código limpio. Formado con el rigor técnico de <strong>CampusLands</strong> y forjándome en las <strong>Unidades Tecnológicas de Santander</strong>, combino mi pasión por la tecnología con habilidades blandas clave como la comunicación asertiva, el liderazgo y la resiliencia.",
            about_text_p2: "Mi background técnico me permite adaptarme rápidamente a diferentes entornos, trabajando de manera eficiente tanto en el diseño de interfaces de usuario como en la arquitectura de bases de datos y desarrollo backend.",

            skills_title: "Habilidades Técnicas",
            skills_cat_backend: "Desarrollo Backend",
            skills_cat_frontend: "Desarrollo Frontend",
            skills_cat_db: "Bases de Datos",
            skills_cat_method: "Metodologías",

            projects_title: "Mis Proyectos",
            proj_matrix_desc: "Suite matemática interactiva diseñada para procesar y resolver matrices de dimensiones dinámicas. Integra un motor lógico capaz de computar sistemas de ecuaciones lineales y operaciones complejas con renderizado de gráficas en tiempo real.",
            proj_rinconada_desc: "Plataforma web interactiva para la exploración y reseña de contenido cinematográfico y televisivo. Implementa un sistema CRUD completo para la gestión dinámica de perfiles de usuario y catálogos de películas con una interfaz moderna y fluida.",
            proj_freelancer_desc: "Aplicación de software dedicada a la administración de flujos de trabajo autónomos. Centraliza la gestión de proyectos, contratos y entregables, integrando un módulo financiero para el registro detallado de ingresos, egresos y propuestas comerciales.",
            proj_f1_desc: "Simulador interactivo web de Fórmula 1 desarrollado bajo maquetación y diseño propio. Consume datos en tiempo real mediante una API customizada y gestiona el flujo de escuderías mediante operaciones CRUD del lado del cliente.",

            form_title: "¿Trabajamos Juntos?",
            form_name: "Tu Nombre",
            form_email: "Tu Correo",
            form_message: "Tu Mensaje",
            form_submit: "Enviar Mensaje",
            footer_text: "© 2026 Sergio Rueda. Hecho con código puro.",
            form_sending: "Enviando...",
            form_success: "¡Mensaje Enviado!",
            form_error: "Error al enviar",
            form_conn_error: "Error de conexión"
        },
        en: {
            nav_home: "Home",
            nav_about: "About Me",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact Me",

            hero_welcome: "Hi, I am",
            hero_subtitle: "I build efficient, logical software with visual impact.",
            hero_desc: "Software developer focused on building robust web applications, efficient automations, and high-performance backend solutions.",
            hero_btn_projects: "View Projects",
            hero_btn_talk: "Let's Talk",

            about_title: "Who is Sergio Rueda?",
            about_text_p1: "I am a software developer with an analytical mindset and a strong focus on solving complex problems through clean code. Trained with the technical rigor of <strong>CampusLands</strong> and shaping myself at <strong>Unidades Tecnológicas de Santander</strong>, I combine my passion for technology with key soft skills such as assertive communication, leadership, and resilience.",
            about_text_p2: "My technical background allows me to quickly adapt to different environments, working efficiently both in user interface design and database architecture and backend development.",

            skills_title: "Technical Skills",
            skills_cat_backend: "Backend Development",
            skills_cat_frontend: "Frontend Development",
            skills_cat_db: "Databases",
            skills_cat_method: "Methodologies",

            projects_title: "My Projects",
            proj_matrix_desc: "Interactive mathematical suite designed to process and solve matrices of dynamic dimensions. Integrates a logical engine capable of computing linear equation systems and complex operations with real-time graph rendering.",
            proj_rinconada_desc: "Interactive web platform for exploring and reviewing film and television content. Implements a complete CRUD system for dynamic management of user profiles and movie catalogs with a modern and fluid interface.",
            proj_freelancer_desc: "Software application dedicated to managing freelance workflows. Centralizes the management of projects, contracts, and deliverables, integrating a financial module for detailed tracking of income, expenses, and business proposals.",
            proj_f1_desc: "Web-based interactive Formula 1 simulator developed under custom layout and design. Consumes real-time data through a customized API and manages team workflows using client-side CRUD operations.",

            form_title: "Let's Work Together?",
            form_name: "Your Name",
            form_email: "Your Email",
            form_message: "Your Message",
            form_submit: "Send Message",
            footer_text: "© 2026 Sergio Rueda. Made with pure code.",
            form_sending: "Sending...",
            form_success: "Message Sent!",
            form_error: "Error sending",
            form_conn_error: "Connection error"
        }
    };

    
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangText = document.getElementById('current-lang');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    let currentLang = localStorage.getItem('preferred-language') || 'es';

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        
        if (currentLangText) {
            currentLangText.textContent = lang.toUpperCase();
        }

        dropdownItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            }
        });

        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                const icon = element.querySelector('i');
                if (icon) {
                    // Si tiene iconos dentro, reconstruimos manteniendo el nodo
                    element.innerHTML = '';
                    element.appendChild(icon);
                    element.appendChild(document.createTextNode(' ' + translations[lang][key]));
                } else {
                    // Si contiene marcado HTML plano (como strong), usamos innerHTML
                    if (translations[lang][key].includes('<strong') || translations[lang][key].includes('</strong')) {
                        element.innerHTML = translations[lang][key];
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            }
        });

        const placeholdersToTranslate = document.querySelectorAll('[data-translate-placeholder]');
        placeholdersToTranslate.forEach(input => {
            const key = input.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                input.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    setLanguage(currentLang);

    
    const contactForm = document.getElementById('contact-form');
    const btnSubmit = document.getElementById('btn-submit');

    if (contactForm && btnSubmit) { 
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const originalText = translations[currentLang]['form_submit'];
            const textSending = translations[currentLang]['form_sending'];
            const textSuccess = translations[currentLang]['form_success'];
            const textError = translations[currentLang]['form_error'];
            const textConnError = translations[currentLang]['form_conn_error'];

            btnSubmit.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> ${textSending}`;
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
                    btnSubmit.innerHTML = `<i class='bx bx-check-circle'></i> ${textSuccess}`;
                    btnSubmit.style.backgroundColor = "#10b981"; 
                    contactForm.reset(); 
                } else {
                    console.log("Error de Web3Forms:", res);
                    btnSubmit.innerHTML = textError;
                    btnSubmit.style.backgroundColor = "#ef4444"; 
                }
            })
            .catch(error => {
                console.error("Error de conexión:", error);
                btnSubmit.innerHTML = textConnError;
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