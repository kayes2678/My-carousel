const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

let imgLayOut = 0 ;
const imgEl = document.getElementById('slider-img');
setInterval( () => {
    if (imgLayOut === images.length){
        imgLayOut = 0;
    }
    const imgUrl = images[imgLayOut];
    // console.log(imgLayOut ,imgUrl);
    imgEl.setAttribute('src', imgUrl);
    imgLayOut++;
},2000)