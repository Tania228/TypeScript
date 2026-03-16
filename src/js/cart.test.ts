import Cart from './card';

test('testing class Cart', () => {
    const cart = new Cart();

    const movie1 = {
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
    };

    const movie2 = {
        id: 2,
        title: "Титаник",
        year: 1997,
        country: "США",
        slogan: "Nothing on Earth could come between them.",
        genre: "драма, мелодрама",
        time: "194 мин.",
        price: 800,
        discount: 5,
    };

    cart.add(movie1);
    cart.add(movie2);
    
    expect(cart.getAll().length).toBe(2);
    
    expect(cart.getSumPrice()).toBe(1800);
    
    expect(cart.getDiscountPrice(10)).toBe(1620); 
    
    cart.remoteProduct(1);
    
    expect(cart.getAll().length).toBe(1);
    expect(cart.getSumPrice()).toBe(800); 
    
    expect(cart.getDiscountPrice(10)).toBe(720); 
});