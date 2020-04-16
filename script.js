/** Add any JavaScript you need to this file. */

(function() {
  let loadItems = function(item, prices, names, desc, qty) {
    let products = document.querySelector('.productsContent');
    let source = 'images/';

    for (let x = 0; x < qty; x++) {
      let cardBox = document.createElement('div');
      cardBox.setAttribute('class', 'cardBox');

      let card = document.createElement('div');
      card.setAttribute('class', 'card');

      let img = document.createElement('img');
      let src = source + item + x + '.jpeg';
      img.setAttribute('src', src);
      src = item + x;
      img.setAttribute('alt', src);
      img.setAttribute('style', 'width: 100%');

      let bottle1 = document.createTextNode(names[x]);
      let name = document.createElement('h2');
      name.appendChild(bottle1);

      let text = document.createElement('p');
      text.setAttribute('class', 'price');
      let temp1 = document.createTextNode(prices[x]);
      text.appendChild(temp1);

      let text2 = document.createElement('p');
      text2.setAttribute('class', 'info');
      let temp3 = document.createTextNode(desc[x]);
      text2.appendChild(temp3);

      let press = document.createElement('p');
      let button = document.createElement('button');
      let temp2 = document.createTextNode('Add to Cart');
      button.appendChild(temp2);
      press.appendChild(button);

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(text);
      card.appendChild(text2);
      card.appendChild(press);
      cardBox.appendChild(card);
      products.appendChild(cardBox);
    }
  };

  function loadBaskets() {
    let item = 'basket';
    let qty = 2;
    let names = [];
    let desc = [];

    names[0] = 'Casual Mesh Bag';
    names[1] = 'Supermarket Shopping Bag';

    desc[0] = 'Perfect for casual trips anywhere. Comes in a set of three';
    desc[1] = 'For all of your supermarket needs';

    let prices = [];
    prices[0] = '$14.99';
    prices[1] = '$4.99';

    loadItems(item, prices, names, desc, qty);
  }

  let loadBottles = function() {
    let item = 'bottle';
    let qty = 5;
    let names = [];
    let desc = [];

    names[0] = 'Glass Hydro Tracker';
    names[1] = 'Clip on Bottle';
    names[2] = 'Classic Companion';
    names[3] = 'Hiking Bottle';
    names[4] = 'Simple Mason Jar';

    desc[0] = 'Ensure you get your daily intake with this handy bottle!';
    desc[1] = '100% recycled bottle. Comes with a clip';
    desc[2] = 'Sturdy metal bottle. Comes with a handle';
    desc[3] = 'Studry metal bottle. No handle';
    desc[4] = 'For all your iced cofee and tea needs';

    let prices = [];
    prices[0] = '$29.99';
    prices[1] = '$9.99';
    prices[2] = '$19.99';
    prices[3] = '$14.99';
    prices[4] = '$7.99';

    loadItems(item, prices, names, desc, qty);
    //at the end i need to append card to cardbox and append cardbox to productsContent
  };

  function loadUtensils() {
    let item = 'utensil';
    let qty = 3;
    let names = [];
    let desc = [];

    names[0] = 'Wooden Cutlery';
    names[1] = 'Metal Straw Set';
    names[2] = 'Cooking Utensils';

    desc[0] = 'Safe to use. 100% natural wood for meals';
    desc[1] = '3 10" metal straws. Comes with a cleaner';
    desc[2] = 'Safe to use. 100% natural wood for cooking';

    let prices = [];
    prices[0] = '$29.99';
    prices[1] = '$20.99';
    prices[2] = '$20.99';

    loadItems(item, prices, names, desc, qty);
  }

  function setupMenuHandlers() {
    let all = document.querySelector('#All');
    all.onclick = function() {
      clearProducts();
      loadBottles();
      loadBaskets();
      loadUtensils();
      clearUnderline();
      let temp = document.querySelector('#uText0');
      temp.style.textDecoration = 'underline';
    };

    let bottles = document.querySelector('#Bottles');
    bottles.onclick = function() {
      clearProducts();
      loadBottles();
      clearUnderline();
      let temp = document.querySelector('#uText1');
      temp.style.textDecoration = 'underline';
    };

    let baskets = document.querySelector('#Baskets');
    baskets.onclick = function() {
      clearProducts();
      loadBaskets();
      clearUnderline();
      let temp = document.querySelector('#uText2');
      temp.style.textDecoration = 'underline';
    };

    let utensils = document.querySelector('#Utensils');
    utensils.onclick = function() {
      clearProducts();
      loadUtensils();
      clearUnderline();
      let temp = document.querySelector('#uText3');
      temp.style.textDecoration = 'underline';
    };
  }
  function start() {
    setupMenuHandlers();
    loadBaskets();
    loadBottles();
    loadUtensils();
    loadLinks();
    loadbuttons();
  }

  function clearProducts() {
    let content = document.querySelector('.productsContent');
    let flag = true;

    while (flag === true) {
      let card = document.querySelector('.cardBox');
      console.log('card');
      if (card !== null) {
        content.removeChild(card);
      } else {
        flag = false;
      }
    }
  }

  function clearUnderline() {
    let u0 = document.querySelector('#uText0');
    u0.style.textDecoration = 'none';

    let u1 = document.querySelector('#uText1');
    u1.style.textDecoration = 'none';

    let u2 = document.querySelector('#uText2');
    u2.style.textDecoration = 'none';

    let u3 = document.querySelector('#uText3');
    u3.style.textDecoration = 'none';
  }

  function loadLinks() {
    let f = document.querySelector('#facebook');
    f.setAttribute('href', 'references.html');

    let i = document.querySelector('#instagram');
    i.setAttribute('href', 'references.html');
  }

  function loadbuttons() {
    let temp1 = document.querySelector('#question');
    temp1.onclick = function() {
      let field = document.querySelector('#orderNumber');
      field.setAttribute('type', 'text');
    };
  }

  window.onload = function() {
    start();
  };
})();

//References

//https://www.123rf.com/photo_106721134_eco-day-use-shopping-bag-with-vegetables-grocery-shopping-in-supermarket.html
//https://unsplash.com/photos/-lHZUkiWM74
//https://unsplash.com/photos/acKeoUAeAd8
//Logo from https://hatchful.shopify.com/
//Facebook icon https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F342116%2Ffacebook_media_set_shadow_social_icon&psig=AOvVaw1JGfhlH1WpguQiDWKF8LND&ust=1586304913581000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCd4LqE1egCFQAAAAAdAAAAABAD
//Instagram icon https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Finstagram-1865894&psig=AOvVaw3byKgo-NZTutst2mOvKc9R&ust=1586304962102000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj5s9GE1egCFQAAAAAdAAAAABAD
