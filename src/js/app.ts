import Cart from './card';

const cart = new Cart;

cart.add({
    id: 1,
    title: "Мстители",
    year: 2012,
    country: "США",
    slogan: "Avengers Assemble!",
    genre: "фантастика, боевик, фэнтези, приключения",
    time: "137 мин.",
    price: 1000,
    originalTitle: "The Avengers",
    discount: 10,
})

// cart.remoteProduct(1)