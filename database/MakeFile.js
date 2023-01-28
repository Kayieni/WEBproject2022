// create a file
// const fs = require('fs');
// fs.writeFile('thing.json', "", err => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log('File succesfully written!');
//   }
// } ); 

// const fs = require('fs')
// // create an empty file
// fs.open('thing.json', 'w', (err, file) => {
//   if (err) {
//     throw err
//   }

//   console.log('File is created.')
// })

const fs = require('fs');


const priceRange = [2, 4];
    const deviation = 0.4;
    const numSameAsOriginal = 0;


fs.readFile("products.json", (err, data) => {  // READ
    if (err) {
        return console.error(err);
    };

    const myObj = JSON.parse(data.toString());
var newObj={}; 
var prod =[];  
var cat = [];
let counter = 0;
let text1 = "";
for (let i = 0; i < myObj.categories.length; i++) {
  if (myObj.categories[i].id == "8e8117f7d9d64cf1a931a351eb15bd69" || myObj.categories[i].id == "a8ac6be68b53443bbd93b229e2f9cd34") {
  var sub_cat = [];
    for (let t = 0; t < 2; t++)
      {
      sub_cat.push
      ({
        name: myObj.categories[i].subcategories[t].name,
        uuid: myObj.categories[i].subcategories[t].uuid
      });
      
      text1 += "id = " + myObj.categories[i].id + ",<br> " + "name = " + myObj.categories[i].name + ", <br>" + "subcategorie name = " + myObj.categories[i].subcategories[t].name + ", <br>" + "subcategorie uuid = " + myObj.categories[i].subcategories[t].uuid + ",<br> ";
      let priceData = createPriceList(priceRange, deviation, numSameAsOriginal);
      for (let k = 0; k < (myObj.products.length); k++) {
        if (myObj.products[k].subcategory == myObj.categories[i].subcategories[t].uuid) {
          prod.push({
            id: myObj.products[k].id,
            name: myObj.products[k].name,
            category: myObj.products[k].category,
            subcategory : myObj.products[k].subcategory,
            image : myObj.products[k].image,
            price: priceData[counter],
          });
          text1 += "product name = " + myObj.products[k].name + ", <br>";
          text1 += "product image = " + myObj.products[k].image + ", <br>";
          text1 += "product price = " + priceData[counter] + ", <br>";
          counter = counter + 1;
        }
        if (counter > 4) { break; }
      } text1 += "<br><br>"; counter = 0;
    }
    cat.push({
      id: myObj.categories[i].id,
      name: myObj.categories[i].name,
      subcategories: sub_cat
    });
  }
}
newObj['products'] = prod;
newObj['categories'] = cat;

//document.getElementById("demo1").innerHTML = text1;
const myJSON_newObj = JSON.stringify(newObj);
const myJSON_cat = JSON.stringify(cat);
const myJSON_prod = JSON.stringify(prod);
const myJSON_sub_cat = JSON.stringify(sub_cat);
//document.getElementById("demo2").innerHTML = myJSON_newObj;
const myJSON_myObj = JSON.stringify(myObj);
//document.getElementById("demo3").innerHTML = myJSON_myObj;

function createPriceList(priceRange, deviation, numSameAsOriginal) {
      const originalPrice = Math.round(Math.random() * (priceRange[1] - priceRange[0]) + priceRange[0]) * 100 / 100;
      const priceList = [];
      while (priceList.length < 5) {
        if (priceList.length < numSameAsOriginal) {
          priceList.push(originalPrice);
        } else {
          let price = originalPrice + Math.random() * deviation * 2 - deviation;
          // Ensure the price is positive and not zero
          if (price <= 0) {
            price = originalPrice;
          }
          // Round the price to 2 decimal places
          price = Math.round(price * 100) / 100;
          priceList.push(price);
        }
      }
      return priceList.sort(() => Math.random() - 0.5);
    }
    
    
    // let priceData = createPriceList(priceRange, deviation, numSameAsOriginal);


    
    var writeData = fs.writeFile("newThing.json", myJSON_newObj, (err, result) => {  // WRITE
        if (err) {
            return console.error(err);
        } else {
            console.log(result);
            console.log("Success");
        }

    });
});
