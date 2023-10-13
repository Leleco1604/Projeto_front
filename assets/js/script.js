document.addEventListener("DOMContentLoaded", function() {
    // Elementos do menu responsivo
    var menuMobile = document.querySelector('.mobile-menu');
    var menuIcon = document.querySelector('.mobile-menu-icon button');
    var navLinks = document.querySelectorAll('.mobile-menu .nav-link');

    // Elementos do formulário de login
    var loginForm = document.getElementById("loginForm");
    var usuarioInput = document.getElementById("usuario");
    var senhaInput = document.getElementById("senha");

    // Simular dados de login corretos
    var usuarioCorreto = "usuario";
    var senhaCorreta = "senha123";

    // Função para abrir/fechar o menu responsivo
    function toggleMenu() {
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            menuIcon.querySelector('img').src = "assets/img/menu_white_36dp.svg";
        } else {
            menuMobile.classList.add('open');
            menuIcon.querySelector('img').src = "assets/img/close_white_36dp.svg";
        }
    }

    // clique no ícone do menu
    menuIcon.addEventListener('click', toggleMenu);

    // clique nos links do menu
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleMenu(); 
        });
    });

    // clique em qualquer lugar fora do menu para fechá-lo
    document.addEventListener('click', function(event) {
        if (!menuMobile.contains(event.target) && !menuIcon.contains(event.target)) {
            menuMobile.classList.remove('open');
            menuIcon.querySelector('img').src = "assets/img/menu_white_36dp.svg";
        }
    });

    // envio do formulário de login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var usuario = usuarioInput.value;
        var senha = senhaInput.value;

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            // Redireciona o usuário para a página de sucesso após o login
            window.location.href = "cadastro-sucesso.html";
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
