<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Insert Page page</title>
</head>
<body>


  <?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "webproject";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }
// Get the data from the form data (input)
$float_field =  $_REQUEST['float_field'];
// Performing insert query execution
$sql = "INSERT INTO table_name (float_field) VALUES ('$float_field')";
if(mysqli_query($conn, $sql)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";
            echo nl2br("\n$float_field");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }
        // Close connection
        mysqli_close($conn);
  ?>
</body>
</html>