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
$filepath = './export.geojson';
//read the json file contents
$jsondata = file_get_contents($filepath);
//convert json object to php associative array
$json_data = json_decode($jsondata, true);




///////////////////////////////////////////////////////////////////////
function get_random_weekday(){
    $weekdays = array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    return $weekdays[array_rand($weekdays)];
}
///////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////
// use prepare statement for insert query
$stmt = $conn->prepare("INSERT INTO stores(storeID,store_name,store_latitude,store_longtitude,store_type,disc_weekday) VALUES (?, ?, ?, ?,?,?)");
// bind variables to insert query params
$stmt -> bind_param("ssddss", $id, $name,$latitude,$longtitude, $shop, $disc_weekday);
// loop through the features array
$inserted_rows=0;
echo "<br>";

$nameArray =[];
$weekdayArray=[];
$features=$json_data['features'];
foreach ($features as $row) {
  // Check if name is Unfinied and handle it
  if(!isset($row['properties']['name'])){
    $name='undefined';
  } else{
    $name = $row['properties']['name'];
  }
  var_dump($name);
  $id = $row['id']; 
  var_dump($id);
  $shop = $row['properties']['shop'];
  var_dump($shop);
  $latitude = $row['geometry']['coordinates'][0];
  var_dump($latitude);
  $longtitude = $row['geometry']['coordinates'][1];
  var_dump($longtitude);
  // Chech if we saw the same store name
  if(in_array($name,$nameArray,FALSE)){
    $index = array_search($name, $nameArray);
    $disc_weekday=$weekdayArray[$index];
  }else{
    $temp=get_random_weekday();
    array_push($nameArray,$name);
    array_push($weekdayArray,$temp);
    $disc_weekday=$temp;
    $temp=0;
  }
  var_dump($disc_weekday);
  echo "<br><br><br>";

  //execute insert query
  // $stmt -> execute();   //<------------------------------
  $inserted_rows++;
  }
var_dump($nameArray);
echo "<br><br>";
var_dump($weekdayArray);
echo "<br><br>";
var_dump($inserted_rows);
echo "<br><br>";
if(count($features)==$inserted_rows){
  echo "New records(in stores table) created successfully <br>";
}else{
  echo "error";
}
echo "<br>";
?> 