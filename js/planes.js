document.addEventListener('DOMContentLoaded', function() {
    // Selector para todos los elementos del acordeón
    const accordionItems = document.querySelectorAll('.accordion-item');
    const panels = document.querySelectorAll('.panel');

    accordionItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Si el panel correspondiente ya está abierto, ciérralo
            if (panels[index].classList.contains('active')) {
                panels[index].classList.remove('active');
            } else {
                // Primero cierra todos los paneles activos
                panels.forEach(panel => panel.classList.remove('active'));
                // Luego abre el panel correspondiente
                panels[index].classList.add('active');
            }
        });
    });
});