let closeMenuBar = document.querySelector('.close')
let category = document.querySelector('.category .category-title');
let list = document.querySelector('.category .category-content');
let listMobile = document.querySelector('.header .category-content');
let categoryMobile = document.querySelector('.header .category-title');
let tabs = document.querySelectorAll('.tab-item');
let panes = document.querySelectorAll('.tab-pane');
let listNewProduct = document.querySelector('.newProduct .products');
let imgStylist = document.querySelector('.stylist .right img');
let imgLink = document.querySelectorAll('.stylist .container .content a');
let newProducts = [
  {
    id: 1,
    image: './images/newProduct-1.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '1.058.000 đ',
  },
  {
    id: 2,
    image: './images/newProduct-2.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '2.230.000 đ',
  },
  {
    id: 3,
    image: './images/newProduct-3.jpg',
    nameProduct: 'MAT-YT01GL-A4',
    price: '1.780.000 đ',
  },
  {
    id: 4,
    image: './images/newProduct-4.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '3.480.000 đ',
  },
  {
    id: 5,
    image: './images/newProduct-1.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '1.058.000 đ',
  },
  {
    id: 6,
    image: './images/newProduct-2.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '1.058.000 đ',
  },
  {
    id: 7,
    image: './images/newProduct-3.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '1.058.000 đ',
  },
  {
    id: 8,
    image: './images/newProduct-4.jpg',
    nameProduct: 'LTP-VT01GL-7B',
    price: '1.058.000 đ',
  },
]

// TODO: click category (hide/show)
category.addEventListener('click', function() {
  list.classList.toggle('active')
})

categoryMobile.addEventListener('click', function() {
  listMobile.classList.toggle('active')
})

// TODO: hide/show menubar mobile
closeMenuBar.addEventListener('click', function(e) {
  listMobile.classList.remove('active');
})

tabs.forEach((tab, index) => {
  let pane = panes[index]
  tab.onclick = function() {
    $(this).addClass('active').siblings().removeClass('active')
    $(pane).addClass('active').siblings().removeClass('active')
  }
});

imgLink.forEach(link => {
  link.onclick = () => {
    let src = link.getAttribute('data-src')
    imgStylist.src = src;
  }
})

// TODO: slider
$(document).ready(function() {
  $('.banner').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0:{
            dots: false,
        },
        992: {
          items:1,
        },
      }
    });
  $('.commit .container').owlCarousel({
      items: 3,
      loop: false,
      dots: false,
      nav: false,
      autoplay: false,
      autoplayTimeout: 1000,
      responsive: {
        0: {
          items:1,
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true
        },
        576:{
          items:2,
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true
        },
        768:{
          items:2,
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true
        },
        992: {
          items:3,
        },
        1200:{
            items:3,
            loop:true
        },
        1500:{
            items:3,
            loop:true
        },
        2000:{
            items:3,
            loop:true
        },
      }
    });
  $('.brand .container').owlCarousel({
      items: 5,
      loop: true,
      dots: false,
      nav: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items:2,
        },
        576:{
          items:2,
        },
        768:{
            items:2,
        },
        992: {
          items:3,
        },
        1200:{
            items:4,
            loop:true
        },
        1500: {
          items:5,
          // nav:true,
          loop:true
        }
      }
    });
  $('.products').owlCarousel({
    items: 4,
    loop: false,
    dots: false,
    nav: true,
    margin: 15,
    navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
    autoplay: false,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items:2,
      },
      576:{
        items:2,
      },
      768:{
          items:3,
      },
      992: {
        items:3,
      },
      1200:{
          items:4,
          // loop:true
      },
      1500: {
        items:4,
        // loop:true
      }
    }
  });
  $('.sales').owlCarousel({
    item: 4,
    loop: false,
    dots: false,
    nav: true,
    margin: 15,
    navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
    autoplay: false,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items:2,
      },
      576:{
        items:2,
      },
      768:{
          items:3,
      },
      992: {
        items:3,
      },
      1200:{
          items:4,
          loop:true
      },
      1500: {
        items:4,
        loop:true
      }
    }
  });
  $('.stylist .content a').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
  });
});

renderNewProduct(newProducts);

function renderNewProduct(newProducts) {
  const item = document.querySelectorAll('.newProduct .products .product-item');
  for (let i = 0; i < item.length; i++) {
    item[i].remove();
  }
  newProducts.forEach(val => {
    const item1 = document.createElement("div");
    item1.dataset.id = val.id;
    item1.classList.add('product-item');
    item1.innerHTML = `
      <div class="image">
      <img src="${val.image}" alt="">
      </div>
      <span class="name">${val.nameProduct}</span>
      <span class="price">${val.price}</span>
      <div class="new">Mới</div>
    `
    listNewProduct.prepend(item1)
  })
}