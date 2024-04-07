import { Component } from '@angular/core';
import { faCartShopping, faCartPlus, faBagShopping, faAngleLeft, faAngleRight, faPhone, faEnvelope, faLocationDot, faXmark, faTrashCan, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'bakery';

  icons: any = {
    cartBag: faBagShopping,
    addToCart: faCartPlus,
    left: faAngleLeft,
    right: faAngleRight,
    phone: faPhone,
    email: faEnvelope,
    location: faLocationDot,
    cancel: faXmark,
    trash: faTrashCan,
    menu: faBars,
    Brands: {
      facebook: faFacebookF,
      twitter: faTwitter,
      instagram: faInstagram,
      linkedin: faLinkedin
    }
  }

  productsDetails: any[] = [
    { id: 1, imgSrc: 'assets/img/o.png', name: 'Enticing Love Cake', price: 200 },
    { id: 2, imgSrc: 'assets/img/s.png', name: 'Oreo Chocolate Cake', price: 300 },
    { id: 3, imgSrc: 'assets/img/v.png', name: 'Mellow Cake', price: 250 },
    { id: 4, imgSrc: 'assets/img/i.png', name: 'Caramel Cake', price: 200 },
    { id: 5, imgSrc: 'assets/img/x.png', name: 'Wedding Cake', price: 300 },
    { id: 6, imgSrc: 'assets/img/z.png', name: 'Strawberry Cake', price: 100 },
    { id: 7, imgSrc: 'assets/img/d.png', name: 'Vanilla Cream Cupcake', price: 400 },
    { id: 8, imgSrc: 'assets/img/h.png', name: 'Red Velvet Cupcake', price: 150 },
    { id: 9, imgSrc: 'assets/img/w.png', name: 'Strawberry Cupcake', price: 200 },
    { id: 10, imgSrc: 'assets/img/q.png', name: 'Classic Chocolate Cake', price: 300 },
    { id: 11, imgSrc: 'assets/img/j.png', name: 'Raspberry Chocolate Cake', price: 500 },
    { id: 12, imgSrc: 'assets/img/r.png', name: 'Fruit Cake', price: 100 },
    { id: 13, imgSrc: 'assets/img/n.png', name: 'Cake Wall', price: 20 },
    { id: 14, imgSrc: 'assets/img/k.png', name: 'French Cake', price: 40 },
    { id: 15, imgSrc: 'assets/img/e.png', name: 'Brown Egg Less Cake', price: 50 },
    { id: 16, imgSrc: 'assets/img/b.png', name: 'Weed Donuts', price: 30 },
    { id: 17, imgSrc: 'assets/img/l.png', name: 'Ice Cream Cupcake', price: 40 },
    { id: 18, imgSrc: 'assets/img/c.png', name: 'Twinkle Star Cupcake', price: 50 },
    { id: 19, imgSrc: 'assets/img/ai.png', name: 'Tiramisu', price: 20 },
    { id: 20, imgSrc: 'assets/img/g.png', name: 'Bubbly Burger Cake', price: 20 },
    { id: 21, imgSrc: 'assets/img/ah.png', name: 'Bread Egg', price: 20 },
    { id: 22, imgSrc: 'assets/img/al.png', name: 'Croissant', price: 20 },
    { id: 23, imgSrc: 'assets/img/ad.png', name: 'Fresh Bread', price: 20 },
    // { id: 24, imgSrc: 'assets/img/ae.png', name: 'Hot Chocolate Cake', price: 20 },
  ];

  popular_categories: any[] = [
    { id:25, imgSrc: 'assets/img/cheese-cake.png', name: 'Cheese Cake', price: 50 },
    { id:26, imgSrc: 'assets/img/strawberry-choco-cake.png', name: 'Strawberry Choco Cake', price: 50 },
    { id:27, imgSrc: 'assets/img/brownie.png', name: 'Brownie', price: 50 }
  ]

  clients: any = [
    { id: 1, img: "assets/img/clients/avneet.jpg", name: "Avneet Kaur", feedback: "I just wanted to take a moment to express my sincere gratitude for the wonderful treats I ordered from your bakery. Not only were they beautifully presented, but they were also absolutely delicious! Your attention to detail and commitment to quality truly shine through in every bite. I'll definitely be returning for more and recommending your bakery to all my friends and family." },
    { id: 2, img: "assets/img/clients/siddharth.webp", name: "Siddharth", feedback: "I wanted to inform you that the cake I ordered for our anniversary was a huge success! It was not only exquisitely decorated but also exceptionally moist and flavorful. Your contribution made our special day even more unforgettable. Thank you!" },
    { id: 3, img: "assets/img/clients/client-2.jpg", name: "Trisha ", feedback: "I just wanted to take a moment to express my sincere gratitude for the wonderful treats I ordered from your bakery. Not only were they beautifully presented, but they were also absolutely delicious! Your attention to detail and commitment to quality truly shine through in every bite. I'll definitely be returning for more and recommending your bakery to all my friends and family." },
    { id: 4, img: "assets/img/clients/client-1.jpg", name: "MS Dhoni", feedback: "I wanted to inform you that the cake I ordered for our anniversary was a huge success! It was not only exquisitely decorated but also exceptionally moist and flavorful. Your contribution made our special day even more unforgettable. Thank you!" }
  ]

  disabledLeft: boolean = true;
  disabledRight: boolean = false;
  index: number = 0;
  clientEl: any = this.clients[this.index];

  back() {
    --this.index;
    this.clientEl = this.clients[this.index];
    this.disabledRight = false;
    if (this.index == 0) {
      this.disabledLeft = true;
    }
  }

  next() {
    ++this.index;
    this.clientEl = this.clients[this.index];
    this.disabledLeft = false;
    if (this.index == this.clients.length - 1) {
      this.disabledRight = true;
    }
  }

  cartItems: any[] = []

  cartShow(cartEl: any) {
    cartEl.style.display = 'block';
  }
  cartHide(cartEl: any) {
    cartEl.style.display = 'none';
  }

  addToCart(itemEl: any, badge:any) {
    let cloneItemEl = Object.assign({}, itemEl);
    cloneItemEl.fixedPrice = cloneItemEl.price;
    
    let checkItem = this.cartItems.some((item) => item.id == cloneItemEl.id);
    
    if(!checkItem) {
      this.cartItems.push(cloneItemEl);
      alert("Product Added in Shopping Cart");
    } else {
      alert("Already Added this Product in Shopping Cart");
    }
    this.totalAmount();
    if(this.cartItems.length > 0) {
      badge.style.display = 'flex';
    }
  }

  removeItem(trashEl: any, cartListEl:any, itemEl:any, badge:any) {
    cartListEl.removeChild(trashEl.parentElement);
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== itemEl); 
    this.totalAmount();
    if(this.cartItems.length == 0) {
      badge.style.display = 'none';
    }
  }

  total:number = 0;

  totalAmount() {
    this.total = 0;
    this.cartItems.forEach((cartItem) => {
      this.total += cartItem.price;
    });
  };

  orderNow(badge:any) {
    if(this.cartItems.length > 0) {
      let confirmBtn = confirm("Do You Order Now?");
      if(confirmBtn) {
        setTimeout(() => {
          alert("Order Successfully!");
          this.cartItems = [];
          this.totalAmount();
          badge.style.display = "none";
        },1500);
      }
    } 
    else {
      alert("First Add Product then Order now");
    }
  };
  
  
  quantityChange(index:number, quantity:any) {
    let fixedPrice:number = this.cartItems[index].fixedPrice;
    let total:number = fixedPrice * quantity.value;
    this.cartItems[index].price = total;  
    this.totalAmount();    
  };

  quantityInput(input: any) {
    if(input.value == 0 || input.value < 0 ) {
      input.value = 0;
    }
  };

  navActive(navLink:any) {
    navLink.classList.toggle('nav-link-active');
    console.dir(navLink);
  }
  
}
