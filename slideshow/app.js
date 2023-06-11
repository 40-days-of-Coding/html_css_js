let arrayImages = ['https://images6.alphacoders.com/131/thumbbig-1314156.webp',
    'https://images5.alphacoders.com/481/thumbbig-481903.webp',
    'https://images8.alphacoders.com/533/533007.png',
    'https://images.alphacoders.com/598/thumbbig-598846.webp',
    'https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg',
    'https://images.alphacoders.com/605/thumbbig-605592.webp']

let image = document.getElementById('myImage');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slideImages = 0;

prev.addEventListener('click', function () {
    slideImages--;

    if (slideImages < 0) {
        slideImages = arrayImages.length - 1;
    }

    image.src = arrayImages[slideImages];
})

next.addEventListener('click', function () {
    slideImages++;

    if (slideImages > arrayImages.length - 1) {
        slideImages = 0;
    }

    image.src = arrayImages[slideImages];
})