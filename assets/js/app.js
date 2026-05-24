let nextDom = document.getElementById('next'),
    prevDom = document.getElementById('prev'),
    carouselDom = document.querySelector('.carousel'),
    listItemDom = document.querySelector('.carousel .list'),
    thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = () => {
    showSlider('next');
};

prevDom.onclick = () => {
    showSlider('prev');
};

let timeRunning = 3000,
    timeAutoNext = 7000,
    runTimeOut,
    runAutoRun= setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item'),
        itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Función para subir suavemente
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Enviado",
        text: "Su mensaje ha sido enviado correctamente. Nos pondremos en contacto con usted lo antes posible.",
        icon: "success"
    });
    document.getElementById('nombre').focus();
    e.target.reset();

});