let order = document.getElementById('submit');
let cars = document.querySelector('.cars');
console.log(order);

order.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Order Success...');
});

let mobil = [
  {
    src: 'car1.jpg',
    alt: 'Mobil Biru',
    text: 'Mobil Biru',
  },
  {
    src: 'car2.jpg',
    alt: 'Mobil Hijau',
    text: 'Mobil Hijau',
  },
  {
    src: 'car3.webp',
    alt: 'Mobil Putih',
    text: 'Mobil Putih',
  },
];

for (let i = 0; i < mobil.length; i++) {
  cars.insertAdjacentHTML(
    'beforeend',
    `<div>
          <img src="${mobil[i].src}" alt="${mobil[i].alt}" class="car-image" />
          <h2>${mobil[i].text}</h2>
          <a href="#">Beli Sekarang</a>
        </div>`
  );
}
