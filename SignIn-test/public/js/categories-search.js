$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/products",

        success: function (prodata) {
            $.ajax({
                type: "GET",
                url: "http://localhost:5000/sub-categories",
                
                success: function (catdata) {
                    console.log('ok', catdata[0]);

                    // append the categories in the dropdown
                    catdata[0].forEach(function (category) {
                        $('#category_select').append(
                            `<option value="${category.catID}"> ${category.category_name} </option>`
                        );
                        console.log(category.catID);
                        console.log(`<option value="${category.catID}"> ${category.category_name} </option>`);
                     });

                    //  display products function to show the products list
                    // Convert the PHP arrays into JavaScript variables
                    var categories = catdata[0]; // contains: catID, category_name
                    var subcategories = catdata[1]; // contains: catID, subID, subcategory_name 
                    var products = prodata[0]; // contains: counter, image_link, original_price, prodID, product_name, stock, storeID, subID
                    var filteredProducts = [];
                    
                    console.log("categories",categories);
                    console.log("subcategories",subcategories);
                    console.log("products",products);
                    console.log("filteredProducts", filteredProducts);
                    
                    function openDiscountForm(counter) {
                        var formContainer = document.getElementById("discount_form_container");
                        formContainer.innerHTML = "";
                        formContainer.style.display = "block";
                        formContainer.innerHTML +=
                            "<form id='discount_form'>" +
                            "<label for='disc_price'>Enter the new discounted price:</label>" +
                            "<input type='text' id='disc_price' name='disc_price'>" +
                            "<input type='hidden' id='counter' name='counter' value='" + counter + "'>" +
                            "<input type='button' value='Save' onclick='saveDiscount()'>" +
                            "</form>";
                    }

                    function saveDiscount() {
                        var formData = new FormData(document.getElementById("discount_form"));
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", "save_discount.php", true);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                if (xhr.responseText !== "")
                                    alert(xhr.responseText);
                                else
                                    alert("Discount was saved successfully");
                                document.getElementById("discount_form_container").style.display = "none";
                            }
                        };
                        xhr.setRequestHeader("Content-type", "application/json");
                        var data = {
                            counter: formData.get("counter"),
                            disc_price: formData.get("disc_price"),
                            original_price: formData.get("original_price")
                        };
                        xhr.send(JSON.stringify(data));
                    }


                    function displayProducts() {
                        var productsList = document.getElementById("products_list");
                        productsList.innerHTML = "";
                        var searchInput = document.getElementById("search_input").value.toLowerCase();
                        filteredProducts.forEach(function (product) {
                            if (product.product_name.toLowerCase().indexOf(searchInput) !== -1) {
                                // productsList.innerHTML += "<li>" + product.product_name + " - " + product.store_name + " - " + product.original_price + "€" + "</li>" + "<button id='addDiscount' onclick='openDiscountForm(" + product.counter + ")'>Add Discount</button>" + "</li>";
                                if (product.product_name.toLowerCase().indexOf(searchInput) !== -1) {
                                    let li = document.createElement("li");
                                    li.innerHTML = product.product_name + " - " + product.store_name + " - " + product.original_price + "€" + "  ";
                                    // +  product.disc_price + "€"
                                    let button = document.createElement("button");
                                    button.innerHTML = "Add Discount";
                                    button.id = "addDiscount";
                                    button.onclick = function () { openDiscountForm(product.counter) };
                                    //button.addEventListener("click", openDiscountForm(product.counter) );
                                    li.appendChild(button);
                                    productsList.appendChild(li);
                                }


                            }
                        });


                        if (productsList.innerHTML === "") {
                            productsList.innerHTML = "No products found";
                        }
                    }


                    function init() {
                        console.log("----------------");
                        // Add an event listener to the first drop-down menu
                        document.getElementById("category_select").addEventListener("change", function () {
                            // Get the selected option value
                            var selected_catID = this.value;
                            var subcategory_select = document.getElementById("subcategory_select");
                            var productsList = document.getElementById("products_list");
                            var messageContainer = document.getElementById("message_container");
                            if (selected_catID) {
                                // filter the subcategories and display only the ones that belong to the selected category
                                subcategory_select.innerHTML = "";
                                subcategory_select.innerHTML += "<option value='' disabled selected>Select</option>";
                                filteredSubcategories = subcategories.filter(function (subcategory) {
                                    if (subcategory.catID == selected_catID) {
                                        subcategory_select.innerHTML += "<option value='" + subcategory.subID + "'>" + subcategory.subcategory_name + "</option>";
                                        return true;
                                    }
                                    return false;
                                });
                                subcategory_select.disabled = false;
                                productsList.innerHTML = "";
                                filteredProducts = [];
                                productsList.style.display = "none";
                                messageContainer.innerHTML = "";

                            } else {
                                subcategory_select.innerHTML = "";
                                subcategory_select.disabled = true;
                                productsList.innerHTML = "";
                                filteredProducts = [];
                                productsList.style.display = "none";
                                messageContainer.innerHTML = "";
                            }
                        });

                        // Add event listener to the second drop-down menu
                        document.getElementById("subcategory_select").addEventListener("change", function () {
                        // $("#subcategory_select").addEventListener("change", function () {
                            // Get the selected option value
                            console.log("----------------");
                            var selected_subID = this.value;
                            var search_input = document.getElementById("search_input").value;
                            var productsList = document.getElementById("products_list");
                            var messageContainer = document.getElementById("message_container");
                            productsList.innerHTML = "";
                            // filter the products and display only the ones that match the selected subcategory and the search input
                            filteredProducts = products.filter(function (product) {
                                if (product.subID == selected_subID && product.product_name.toLowerCase().includes(search_input.toLowerCase())) {
                                    return true;
                                }
                                return false;
                            });
                            if (filteredProducts.length > 0) {
                                productsList.style.display = "block";
                                messageContainer.innerHTML = "";
                                displayProducts();
                            } else {
                                productsList.style.display = "none";
                                messageContainer.innerHTML = "No products found";
                            }
                        });

                        // Add a search bar event listener
                        document.getElementById("search_input").addEventListener("input", function () {
                            // Get the selected option value
                            var selected_subID = document.getElementById("subcategory_select").value;
                            var search_input = this.value;
                            var productsList = document.getElementById("products_list");
                            var messageContainer = document.getElementById("message_container");
                            productsList.innerHTML = "";
                            // filter the products and display only the ones that match the selected subcategory and the search input
                            filteredProducts = products.filter(function (product) {
                                if (product.subID == selected_subID && product.product_name.toLowerCase().includes(search_input.toLowerCase())) {
                                    return true;
                                }
                                return false;
                            });
                            if (filteredProducts.length > 0) {
                                productsList.style.display = "block";
                                messageContainer.innerHTML = "";
                                displayProducts();
                            } else {
                                productsList.style.display = "none";
                                messageContainer.innerHTML = "No products found";
                            }
                        });



                    }


                    init();
                    // $(window).load(init());

                }

            });
        }

    });
})