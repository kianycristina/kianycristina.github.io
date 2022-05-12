var photos = [
  "imgs/fotografias/1.jpg",
  "imgs/fotografias/2.jpg",
  "imgs/fotografias/3.jpg",
  "imgs/fotografias/4.jpg",
  "imgs/fotografias/5.jpg",
  "imgs/fotografias/6.jpg",
  "imgs/fotografias/7.jpg",
  "imgs/fotografias/8.jpg",
  "imgs/fotografias/9.jpeg",
  "imgs/fotografias/10.jpeg",
];

createGallery();

function createGallery() {
  for(var i=0; i < photos.length; i++) {
    var photo = document.createElement("img");

    photo.classList.add("gal-photo");
    photo.classList.add("shadow");
    photo.src = photos[i];

    document.getElementById('gal-photos').appendChild(photo);
  }
}
