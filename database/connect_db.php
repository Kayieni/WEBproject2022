<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "webproject";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";
echo "<br>";  
$filepath = './newThing.json';
//read the json file contents
$jsondata = file_get_contents($filepath);
//convert json object to php associative array
$json_data = json_decode($jsondata, true);

$flpth = './export.geojson';
//read the json file contents
$jsndt = file_get_contents($flpth);
//convert json object to php associative array
$jsn_dt = json_decode($jsndt, true);



///////////////////////////////////////////////////////////////////////
//  PRODUCTS array inside json //
// use prepare statement for insert query
$stmt = $conn->prepare("INSERT INTO product(prodID, subID, product_name,storeID, original_price,disc_price,image_link) VALUES (?, ?, ?, ?, ?, ?, ?)");
// bind variables to insert query params
$stmt -> bind_param("ssssdds", $productID, $subcategory, $name,$storeID, $price, $disc_price, $image);
// loop through the products array
$products=$json_data['products'];
$inserted_rows=0;
$features=$jsn_dt['features'];
foreach ($features as $rw) {
foreach ($products as $row) {
  // get the products details
  $id = $row['id'];
  $productID = $id;
  $subcategory = $row['subcategory'];
  $name = $row['name'];
  $price = $row['price'];
  $disc_price = $price;
  $image = $row['image'];
  // $imagedata =  base64_encode(file_get_contents($image));
  var_dump($productID);   
  var_dump($subcategory);  
  var_dump($name); 
  var_dump($price);
  var_dump($disc_price);
  var_dump($image);
  $id = $rw['id']; 
  $storeID = $id;
  var_dump($storeID);
  echo "<br>";  
  //execute insert query
  $stmt -> execute(); //  <------------------------------
  $inserted_rows++;
  echo "<br>";
}
echo "<br>";
}

echo "<br><br>";
if(count($products)==$inserted_rows){
  echo "New records created (in product table) successfully <br>";
}else{
  echo "error";
}




///////////////////////////////////////////////////////////////////////
//  CATEGORIES array inside json //
// use prepare statement for insert query
$stmt = $conn->prepare("INSERT INTO categories(catID, category_name) VALUES (?, ?)");
// bind variables to insert query params
$stmt -> bind_param("ss", $id, $name);
// loop through the category array
$categories=$json_data['categories'];
$inserted_rows=0;
echo "<br>"; 
foreach ($categories as $row) {
  // get the product details
  $id = $row['id'];
  $name = $row['name']; 
  var_dump($id);     
  var_dump($name); 
  echo "<br>";  
  //execute insert query
  //$stmt -> execute();   //<------------------------------
  $inserted_rows++;
}
echo "<br>";
if(count($categories)==$inserted_rows){
  echo "New records(in categories table) created successfully <br>";
}else{
  echo "error";
}

///////////////////////////////////////////////////////////////////////
//  SUBCATEGORIES array inside json categories array //
// use prepare statement for insert query
$stmt = $conn->prepare("INSERT INTO subcategories(subID,catID,subcategory_name) VALUES (?, ?,?)");
// bind variables to insert query params
$stmt -> bind_param("sss", $uuid, $id, $name);
// loop through the category array
$inserted_rows=0;
echo "<br>";
foreach ($categories as $row) {
  $id = $row['id']; 
  foreach($row['subcategories'] as $subcategories){
  $name = $subcategories['name'];
  $uuid = $subcategories['uuid'];
  var_dump($id); 
  var_dump($name);
  var_dump($uuid);
  echo "<br>";
  //execute insert query
  // $stmt -> execute();   //<------------------------------
  $inserted_rows++;
  }
}
echo "<br>";




//close connection
//$conn->close();




// if ($conn->multi_query($sql) === TRUE) {
//   echo "New records created successfully";
// } else {
//   echo "Error: " . $stmt . "<br>" . $conn->error;
// }




//parse the above JSON array element one by one and store them into PHP variables
// $products = $json_data['products'][0]['id'];
// //var_dump($products)
// //insert into mysql table
//   $sql = "INSERT INTO product(prodID,product_name) VALUES('$products', '$json_data['products'][0]['id']')";
//  if ($conn->multi_query($sql) === TRUE) {
//   echo "New records created successfully";
// } else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
// }






// // Define function
// function print_recursive($arr){

//   foreach ($arr as $key => $val) {
//     if (is_array($val)) {
//       print_recursive($val);

//     } else {
//        echo("$key = $val <br/>");
//     }
//   }
// return;
// }
// // Call function
// print_recursive($json_data);




?> 