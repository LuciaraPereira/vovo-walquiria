let currentIndex = 0;
const images = [
   
    'assets/image/carrossel/vovo2.jpg',
    'assets/image/carrossel/vovo2.jpg',
    'assets/image/carrossel/vovo3.jpg',
    'assets/image/carrossel/vovo4.jpg',
    'assets/image/carrossel/vovo7.jpg',
    'assets/image/carrossel/vovo10.jpg',
    'assets/image/carrossel/vovo11.jpg',
    'assets/image/carrossel/vovo12.jpg',
    'assets/image/carrossel/vovo13.jpg',
    'assets/image/carrossel/vovo14.jpg',
    'assets/image/carrossel/vovo15.jpg',
    'assets/image/carrossel/vovo16.jpg',
    'assets/image/carrossel/vovo17.jpg',
];



const carouselImage = document.getElementById('carouselImage');

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
    resetTimer();
}

function updateImage() {
    carouselImage.src = images[currentIndex];
}

let autoSlideInterval = setInterval(() => {
    changeSlide(1);
}, 5000); // Muda a imagem a cada 10 segundos

function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}



// Iniciar o carrossel com a primeira imagem
updateImage();