    // Mostrar u ocultar el botón dependiendo de la posición de scroll
    window.onscroll = function() {
        var button = document.getElementById("backToTop");
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 300) {
            button.style.display = "block"; // Mostrar botón
        } else {
            button.style.display = "none"; // Ocultar botón
        }
    };

    // Función para desplazar suavemente hacia arriba
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

