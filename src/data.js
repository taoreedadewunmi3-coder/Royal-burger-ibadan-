export const menu = [
 {id:'classic',name:'Royal Classic',category:'Burgers',price:5500,description:'Beef patty, cheddar, lettuce, tomato, pickles and Royal sauce.',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',tag:'Best seller'},
 {id:'double',name:'Royal Double',category:'Burgers',price:7500,description:'Two juicy beef patties, double cheddar, onions and signature sauce.',image:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85',tag:'Loaded'},
 {id:'chicken',name:'Crispy Chicken',category:'Burgers',price:6000,description:'Crunchy chicken fillet, slaw, cheese and creamy Royal mayo.',image:'https://images.unsplash.com/photo-1615297928064-24977384d0d4?auto=format&fit=crop&w=900&q=85',tag:'Crispy'},
 {id:'royal',name:'The Royal Burger',category:'Burgers',price:8500,description:'Our signature stack with beef, bacon, cheese, fresh greens and Royal sauce.',image:'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=85',tag:'Signature'},
 {id:'fries',name:'Royal Fries',category:'Sides',price:2500,description:'Golden, crispy fries seasoned to perfection.',image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85'},
 {id:'loaded',name:'Loaded Fries',category:'Sides',price:4500,description:'Crispy fries topped with cheese, sauce and smoky beef bits.',image:'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85'},
 {id:'shake',name:'Royal Shake',category:'Drinks',price:3000,description:'Cold, creamy vanilla shake with a rich finish.',image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85'},
 {id:'chapman',name:'Royal Chapman',category:'Drinks',price:2500,description:'Fruity, chilled and refreshing.',image:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85'}
];
export const categories=['All','Burgers','Sides','Drinks'];
export const money = n => new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(n);
