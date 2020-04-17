//Test

(function() {
  let loadItems = function(item, prices, names, desc, qty) {
    let products = document.querySelector('#products');
    let source = 'images/';

    for (let x = 0; x < qty; x++) {
      let cardBox = document.createElement('div');
      cardBox.setAttribute('class', 'col-lg-4 col-md-6 mb-4');

      let card = document.createElement('div');
      card.setAttribute('class', 'card h-100');

      let link = document.createElement('a');
      link.setAttribute('href', '#');

      let img = document.createElement('img');
      let src = source + item + x + '.jpeg';
      img.setAttribute('src', src);
      img.setAttribute('class', 'card-img-top');
      src = item + x;
      img.setAttribute('alt', src);
      link.appendChild(img);

      let cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');

      let namebox = document.createElement('h4');
      namebox.setAttribute('class', 'card-title');

      let itemname = document.createElement('a');
      itemname.setAttribute('href', '#');
      let text = document.createTextNode(names[x]);
      itemname.appendChild(text);

      namebox.appendChild(itemname);

      let pricetag = document.createElement('h5');
      let pricevalue = document.createTextNode(prices[x]);
      pricetag.appendChild(pricevalue);

      let descBox = document.createElement('p');
      descBox.setAttribute('class', 'card-text');
      let description = document.createTextNode(desc[x]);
      descBox.appendChild(description);

      let cardFooter = document.createElement('div');
      cardFooter.setAttribute('class', 'card-footer');

      let small = document.createElement('small');
      small.setAttribute('class', 'text-muted');
      small.innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9734;';

      cardFooter.appendChild(small);
      cardBody.appendChild(namebox);
      cardBody.appendChild(pricetag);
      cardBody.appendChild(descBox);
      card.appendChild(link);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      cardBox.appendChild(card);
      products.appendChild(cardBox);
    }
  };

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

  function clearProducts() {
    let content = document.querySelector('#products');
    let flag = true;
    content.innerHTML = '';
  }

  function setupMenuHandlers() {
    let all = document.querySelector('#All');
    all.onclick = function() {
      clearProducts();
      loadBaskets();
      loadBottles();
      loadUtensils();
      let listings = document.querySelector('.my-4');
      listings.innerHTML = 'All Products';
    };

    let bottles = document.querySelector('#Bottles');
    bottles.onclick = function() {
      clearProducts();
      loadBottles();
      let listings = document.querySelector('.my-4');
      listings.innerHTML = 'Bottles';
    };

    let baskets = document.querySelector('#Baskets');
    baskets.onclick = function() {
      clearProducts();
      loadBaskets();
      let listings = document.querySelector('.my-4');
      listings.innerHTML = 'Baskets';
    };

    let utensils = document.querySelector('#Utensils');
    utensils.onclick = function() {
      clearProducts();
      loadUtensils();
      let listings = document.querySelector('.my-4');
      listings.innerHTML = 'Utensils';
    };
  }

  function start() {
    setupMenuHandlers();
    loadBaskets();
    loadBottles();
    loadUtensils();
  }

  window.onload = function() {
    start();
  };
})();
