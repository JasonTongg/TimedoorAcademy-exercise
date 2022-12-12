let order = document.getElementById('submit');
let cars = document.querySelector('.cars');

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

let mobils = new Vue({
  el: '#content',
  data: {
    title: 'Rental Car',
    color: ['red', 'blue', 'green'],
    price: ['Rp 300.000,-', 'Rp 500.000,-', 'Rp 600.000,-'],
    dummyDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.`,
    carTitle: ['Mobil Biru', 'Mobil HIjau', 'Mobil Putih'],
    hover: true,
  },
  methods: {
    order() {
      alert('Order Success...');
    },
    active() {
      this.hover = false;
    },
    inactive() {
      this.hover = true;
    },
  },
  computed: {},
});
