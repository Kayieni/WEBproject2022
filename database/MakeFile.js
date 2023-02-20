// fs (built-in Node.js)module: for working with the file system.
const fs = require('fs');

//arguments for createPriceList function.
const priceRange = [2, 4];
const deviation = 0.4;
const numSameAsOriginal = 0;




//to read the file.
// fs.readFile(file,callback)
// callback(error obj, data read from file (buffer object))
fs.readFile("products.json", (err, data) => {  // READ

  if (err) {
    return console.error(err);
  };

  // data is parsed into a JavaScript object.
  // toString(): Buffer object -> string
  // JSON.parse(): JSON string -> js object
  const myObj = JSON.parse(data.toString());

  var newObj = {};
  var prod = [];
  var cat = [];
  let counter = 0;

  for (let i = 0; i < myObj.categories.length; i++) {
    if (myObj.categories[i].id == "8e8117f7d9d64cf1a931a351eb15bd69" || myObj.categories[i].id == "a8ac6be68b53443bbd93b229e2f9cd34" || myObj.categories[i].id == "d41744460283406a86f8e4bd5010a66d" || myObj.categories[i].id == "ee0022e7b1b34eb2b834ea334cda52e7") {
      var sub_cat = [];
      for (let t = 0; t < 2; t++) {
        sub_cat.push
          ({
            name: myObj.categories[i].subcategories[t].name,
            uuid: myObj.categories[i].subcategories[t].uuid
          });

        let priceData = createPriceList(priceRange, deviation, numSameAsOriginal);
        for (let k = 0; k < (myObj.products.length); k++) {
          if (myObj.products[k].subcategory == myObj.categories[i].subcategories[t].uuid) {
            prod.push({
              id: myObj.products[k].id,
              name: myObj.products[k].name,
              category: myObj.products[k].category,
              subcategory: myObj.products[k].subcategory,
              image: myObj.products[k].image,
              price: priceData[counter],
            });
            counter = counter + 1;
          }
          if (counter > 4) { break; }
        } counter = 0;
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


  // JSON.stringify(): js object -> JSON string
  const myJSON_newObj = JSON.stringify(newObj);



  // Generate a list of 5 prices within a given price range with a specified deviation, with some of the prices being the same as the original price.
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




  // replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created.
  // fs.writeFile(file, data, callback function)
  var writeData = fs.writeFile("newThing.json", myJSON_newObj, (err, result) => {  // WRITE
    if (err) {
      return console.error(err);
    } else {
      console.log(result);
      console.log("Success");
    }

  });
});
// Placing the fs.writeFile() function inside the fs.readFile() function ensures that the write operation is performed only after the read operation has completed successfully and the data has been processed.