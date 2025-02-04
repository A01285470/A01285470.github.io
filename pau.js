document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('start-screen');
    const mainMenu = document.getElementById('main-menu');
    const continueButton = document.getElementById('continue-button');
    const backButtons = document.querySelectorAll('.back-button');
    const menuButtons = document.querySelectorAll('.menu-button');
    const clockElement = document.getElementById('clock');

    continueButton.addEventListener('click', function() {
        startScreen.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    });

    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.add('hidden');
            });
            mainMenu.classList.remove('hidden');
        });
    });

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const frameId = button.getAttribute('data-frame');
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.add('hidden');
            });
            document.getElementById(frameId).classList.remove('hidden');
        });
    });
    
        // Función para actualizar el reloj
        function updateClock() {
            const targetDate = new Date('2023-07-02T00:00:00'); // Fecha objetivo (2 de julio de 2023)
            const now = new Date(); // Fecha y hora actual
            const delta = now - targetDate; // Tiempo transcurrido desde la fecha objetivo
    
            // Calcular días, horas, minutos y segundos
            const days = Math.floor(delta / (1000 * 60 * 60 * 24));
            const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((delta % (1000 * 60)) / 1000);
    
            // Mostrar el tiempo transcurrido en el elemento del reloj
            clockElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
        }
    
        // Actualizar el reloj cada segundo
        setInterval(updateClock, 1000);
    
        // Llamar a la función una vez para evitar el retraso inicial
        updateClock();
    });