const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.employee-card');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;

        function updateSliderPosition() {
            const width = slides[0].clientWidth;
            slider.style.transform = `translateX(${-currentIndex * width}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex === 0) {
                currentIndex = slides.length - 3;
            } else {
                currentIndex--;
            }
            updateSliderPosition();
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex === slides.length - 3) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateSliderPosition();
        });

        // Inicializa la posición del slider
        updateSliderPosition();

        // document.addEventListener("DOMContentLoaded", function() {
        //     const slider = document.querySelector(".slider");
        //     const prevButton = document.getElementById("prevButton");
        //     const nextButton = document.getElementById("nextButton");
        
        //     const cards = document.querySelectorAll(".employee-card");
        //     const cardWidth = cards[0].offsetWidth;
        //     const visibleCards = 3; // Número de tarjetas visibles al inicio
        //     let currentIndex = 0;
        
        //     // Ajusta el ancho del slider según el número de tarjetas visibles
        //     slider.style.width = `${cardWidth * cards.length}px`;
        
        //     // Función para mover el slider hacia la izquierda
        //     const moveLeft = () => {
        //         currentIndex--;
        //         if (currentIndex < 0) {
        //             currentIndex = cards.length - visibleCards;
        //         }
        //         updateSliderPosition();
        //     };
        
        //     // Función para mover el slider hacia la derecha
        //     const moveRight = () => {
        //         currentIndex++;
        //         if (currentIndex > cards.length - visibleCards) {
        //             currentIndex = 0;
        //         }
        //         updateSliderPosition();
        //     };
        
        //     // Actualiza la posición del slider según el currentIndex
        //     const updateSliderPosition = () => {
        //         const position = -currentIndex * cardWidth;
        //         slider.style.transform = `translateX(${position}px)`;
        //     };
        
        //     // Escucha los clics en los botones de navegación
        //     prevButton.addEventListener("click", moveLeft);
        //     nextButton.addEventListener("click", moveRight);
        // });
        