function signup() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]" );
    var firstName = document.getElementById("firstName").value;
    // checklength(firstName);
    var isfirstNameValid = checklength(firstName, 3);
    if (isfirstNameValid== false) {
        document.getElementById("FirstNameError").innerHTML = "check your first name";
    }
    else { document.getElementById("FirstNameError").innerHTML = ""; }

    var lastName = document.getElementById("lastName").value;

    var islastnamevalid = checklength(lastName, 6);
    if (islastnamevalid == false) { document.getElementById("LastNameError").innerHTML = "LastNameError"; }
    else { document.getElementById("LastNameError").innerHTML = ""; }

    
    var email = document.getElementById("email").value;
    //var usersTab = JSON.parse(localStorage.getItem("users"));
    var ValidEmail= CheckEmail(usersTab,email);
    
    if(ValidEmail== false)
    {document.getElementById("ErrorEmail").innerHTML="email utilisée"}
    else{document.getElementById("ErrorEmail").innerHTML=""}


    var Tel = document.getElementById("Tel").value;
    var isTelvalid = lengthTel(Tel, 8);
    if (isTelvalid == false) {
        document.getElementById("TelError").innerHTML = "numéro incorrect";
    }
    else { document.getElementById("TelError").innerHTML = ""; }

    var PassWord = document.getElementById("PassWord").value;
    var confermation = document.getElementById("confermation").value;
    if (PassWord != confermation) {
        document.getElementById("passwordError").innerHTML = "check your password";
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
    }
   
    //var store=document.getElementById("store").value;
    if (isfirstNameValid && islastnamevalid && isTelvalid && ValidEmail) {
       // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

        var user = {
            id:generateId(usersTab)+1,
            firstname: firstName,
            lasttname: lastName,
            email: email,
            telephone: Tel,
            password: PassWord,
            confirmpassword: confermation,
            role:"client",
            satatu:"ok"
        }
        console.log(user);
    
        //     récupération des users de la BD
        //  chaine de caractere tansforme objet <> stringyfy de objet a chaine de caractere
        //var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        //récupérer la tableau 

        usersTab.push(user);
        //ajouter un utilisateur au tableau
        localStorage.setItem("users", JSON.stringify(usersTab));
        //ajouter dans le base de donnée local   
    }
}
function signupstore() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]" );
    var firstName = document.getElementById("firstNamestore").value;
    // checklength(firstName);
    var isfirstNameValid = checklength(firstName, 3);
    if (isfirstNameValid== false) {
        document.getElementById("FirstNameErrorstore").innerHTML = "check your first name";
    }
    else { document.getElementById("FirstNameErrorstore").innerHTML = ""; }

    var lastName = document.getElementById("lastNamestore").value;

    var islastnamevalid = checklength(lastName, 6);
    if (islastnamevalid == false) { document.getElementById("LastNameErrorstore").innerHTML = "LastNameError"; }
    else { document.getElementById("LastNameErrorstore").innerHTML = ""; }

    
    var email = document.getElementById("emailstore").value;
    //var usersTab = JSON.parse(localStorage.getItem("users"));
    var ValidEmail= CheckEmail(usersTab,email);
    
    if(ValidEmail== false)
    {document.getElementById("ErrorEmailstore").innerHTML="email utilisée"}
    else{document.getElementById("ErrorEmailstore").innerHTML=""}


    var Tel = document.getElementById("Telstore").value;
    var isTelvalid = lengthTel(Tel, 8);
    if (isTelvalid == false) {
        document.getElementById("TelErrorstore").innerHTML = "numéro incorrect";
    }
    else { document.getElementById("TelErrorstore").innerHTML = ""; }

    var PassWord = document.getElementById("PassWordstore").value;
    var confermation = document.getElementById("confermationstore").value;
    if (PassWord != confermation) {
        document.getElementById("passwordErrorstore").innerHTML = "check your password";
    }
    else {
        document.getElementById("passwordErrorstore").innerHTML = "";
    }
   var adresse=document.getElementById("adresse").value;
   var storeName=document.getElementById("storeName").value;
    //var store=document.getElementById("store").value;
    if (isfirstNameValid && islastnamevalid && isTelvalid && ValidEmail) {
       // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

        var user = {
            
            id:generateId(usersTab)+1,
            firstname: firstName,
            lasttname: lastName,
            email: email,
            telephone: Tel,
            password: PassWord,
            confirmpassword: confermation,
            role:"store",
            adresse:adresse,
            storeName:storeName,
            statu:"Nok"
        }
        console.log(user);
    
        //     récupération des users de la BD
        //  chaine de caractere tansforme objet <> stringyfy de objet a chaine de caractere
        //var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        //récupérer la tableau 

        usersTab.push(user);
        //ajouter un utilisateur au tableau
        localStorage.setItem("users", JSON.stringify(usersTab));
        //ajouter dans le base de donnée local   
    }
}
function loginstore(){
    var email = document.getElementById("loginEmailstore").value;
   var pwd = document.getElementById("PassWordstore").value;
   var storeTab = JSON.parse(localStorage.getItem("store"));
   var findUser=CheckUser(storeTab,email,pwd)
   if (findUser){
        location.replace("addProducts.html");
   }
   else{
    document.getElementById("loginErrorstore").innerHTML="check your pass or email"
   }
    // for (var i = 0; i < usersTab.length; i++) {
    //     if (usersTab[i].email == username && usersTab[i].password == password) {
            
    //         alert("connected")
    //     }
    //     else {
    //         alert("password ou email non valid")
    //     }
    // }
    localStorage.setItem("connectedstore", JSON.stringify(findUser.id));

}
    

function addProduct() {
    var connectedUser=localStorage.getItem("connected");
    var Name = document.getElementById("Name").value;
    var NameValid = checklength(Name, 4);
    if (NameValid == false) {
        document.getElementById("NameErreur").innerHTML = "check your name";
    }
    else { document.getElementById("NameErreur").innerHTML = ""; }
    var price = document.getElementById("price").value;

    var validPrice = sup(price, 0);
    if (validPrice == false) {
        document.getElementById("price error").innerHTML = "price error"
    }
    else { document.getElementById("price error").innerHTML = "" }

    var stoke = document.getElementById("stoke").value;
    var validStoke = sup(stoke, 20);
    if (validStoke == false) {
        document.getElementById("stoke error").innerHTML = "stoke invalid"
    }
    else { document.getElementById("stoke error").innerHTML = "" }
    var category = document.getElementById("category").value;

    if (validPrice && NameValid && validStoke) {

    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var product = {
        id:generateId(productsTab)+1,
        Name: Name,
        price: price,
        stoke: stoke,
        category:category,
        storeId:connectedUser,

    }
    console.log(product);
    //var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    productsTab.push(product);
    localStorage.setItem("products", JSON.stringify(productsTab));
    }

}

function checklength(ch, x) {
    return (ch.length >= x)
}

function lengthTel(ch, x) {
    return (ch.length == x)
}

//function checklength2(ch){
//  if (ch.length<=3){alert("error")}}
function sup(x, n) {

    return (x > n);
}
function login(){
    
   var email = document.getElementById("loginEmail").value;
   var pwd = document.getElementById("PassWord").value;
   var usersTab = JSON.parse(localStorage.getItem("users"));
   var findedUser=CheckUser(usersTab,email,pwd)
   if(findedUser){
    localStorage.setItem("connected", findedUser.id);
    if(findedUser.role=="store"){
        location.replace("store.html");
        
    }
    else if(findedUser.role=="client"){
        location.replace("index.html");
       
    }
    else{
        location.replace("admin.html");
       
    }
   
}
else{
    document.getElementById("loginError").innerHTML="Check your Pass or your email"
}

}
   
    // for (var i = 0; i < usersTab.length; i++) {
    //     if (usersTab[i].email == username && usersTab[i].password == password) {
            
    //         alert("connected")
    //     }
    //     else {
    //         alert("password ou email non valid")
    //     }
    // }


function CheckUser(T,email,pass) {
    var findUser;
    for (var i = 0; i < T.length; i++) {
        if (T[i].email == email && T[i].password == pass) {
            findUser=T[i];
            break;
         
        }
    }
   return findUser; 
}

function generateId(T) {
    var max;
    if (T.length==0){
        max=0;
    }
      else{  max= T[0].id;
        for (var i = 1; i < T.length; i++) {

            if(T[i].id>max){
                max=T[i].id;
                }
        }}
     return(max);   
    }
    
function CheckEmail(T,email) {
    var findEmail=true;
    for (var i = 0; i < T.length ; i++) {
        if(T[i].email==email){   
            findEmail=false;
            break;
        }
       
    }
    return(findEmail);
}
function category() {
   var category = document.getElementById("category").value;
   var isValidcategory = checklength(category,2);
   var categorytab = JSON.parse(localStorage.getItem("categories") || "[]");
   var findcat=CheckCAT(categorytab,category);
   
   if (isValidcategory == false){document.getElementById("category error").innerHTML="check category ";}
   
   else if (findcat== true){document.getElementById("category error").innerHTML="category or exist";
   document.getElementById("category error").innerHTML="category exist";
}
else{document.getElementById("category error").innerHTML="";
   }

   var cat = {
    id:generateId(categorytab)+1,
    category:category,
    
}
   categorytab.push(cat);
   localStorage.setItem("categories", JSON.stringify(categorytab));
}
function CheckCAT(T,C) {
    var findcateg=false;
    for (var i = 0; i < T.length ; i++) {
    if(T[i].category==C){   
            findcateg=true;
            break;
        }
       
    }
    return(findcateg);
}


function displayproducts() {
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var content="";
for (var i = 0; i < productsTab.length; i++) {
content=content+`<div class="col-lg-3 col-md-6">
<div class="single-product">
    <img class="img-fluid" src="img/product/p8.jpg" alt="">
    <div class="product-details">
        <h6>${productsTab[i].Name}</h6>
        <div class="price">
            <h6>${productsTab[i].price}</h6>
            <h6 class="l-through">$210.00</h6>
        </div>
        <div class="prd-bottom">

            <a href="" class="social-info">
                <span class="ti-bag"></span>
                <p class="hover-text">add to bag</p>
            </a>
            <a href="" class="social-info">
                <span class="lnr lnr-heart"></span>
                <p class="hover-text">Wishlist</p>
            </a>
            <a href="" class="social-info">
                <span class="lnr lnr-sync"></span>
                <p class="hover-text">compare</p>
            </a>
            <a href="" class="social-info">
                <span class="lnr lnr-move"></span>
                <p class="hover-text">view more</p>
            </a>
        </div>
    </div>
</div>
<button class="primary-btn" type="submit" value="submit" onclick="displayprod(${productsTab[i].id})">DISPLAY</button>
</div>`
}
document.getElementById("productex").innerHTML=content;
    
}

function displaycategory() {
    var categorytab = JSON.parse(localStorage.getItem("categories") || "[]");
    
    var content="";
for (var i = 0; i < categorytab.length; i++) {
content=content + `<option>${categorytab[i].category}</option>`
}
document.getElementById("category").innerHTML=content;
    
}


function displayprod(id) {
    localStorage.setItem("displayedproducts",id);
    alert(id);
    location.replace("single-product.html");  
}

function gotodisplayproduct() {
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var displayprodtab= JSON.parse(localStorage.getItem("displayedproducts"));
    var findedProduct;

    for (var i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id==displayprodtab){
            findedProduct=productsTab[i];
            break;
        } 
    }
    document.getElementById("findedproductname").innerHTML=findedProduct.Name;
    document.getElementById("findedproductprice").innerHTML=findedProduct.price;
    document.getElementById("findedproductcategory").innerHTML=findedProduct.category;
    if(findedProduct.stoke > 0){document.getElementById("findedstoke").innerHTML="in stoke"}
    else{document.getElementById("findedstoke").innerHTML="invalid"}
}

//
function addToBasket(){
    var qty= document.getElementById("quantité").value;
    var connectedUser = localStorage.getItem("connected");
    var productId= localStorage.getItem("displayedproducts");
    var orderstab= JSON.parse(localStorage.getItem("orders") || "[]");

    var order = {
        id:generateId(orderstab)+1,
        qty:qty,
        productId:productId,
        userId:connectedUser,
    }
    orderstab.push(order);
    localStorage.setItem("orders", JSON.stringify(orderstab));
}

function displayOrder() {
    var connectedUserId= localStorage.getItem("connected");
    var orderstab= JSON.parse(localStorage.getItem("orders") || "[]");
    var orders1=[];
    var content="";
    for (var i = 0; i < orderstab.length; i++) {
        if(orderstab[i].userId==connectedUserId){
            orders1.push(orderstab[i]);
        }   
    } 
    
    for (var i = 0; i < orders1.length; i++) {
        content=content+`<tr>                                
        <td>${orders1[i].id }</td>
        <td> ${searchObj(orders1[i].userId,"users").firstname} </td>
        <td> ${orders1[i].productId} </td>
        <td> ${orders1[i].userId} </td>
        <td> ${searchProduct(orders1[i].productId).Name} </td>
        <td> ${searchProduct(orders1[i].productId).price}   </td>
        <td> ${orders1[i].qty} </td>
        <td><button onclick="Deleteorder(${orderstab[i].id})">DELECTE</button></td>

    </tr>`
    }
    document.getElementById("ordererror").innerHTML=content;
}

function searchUser(id) {
    var usersTab=JSON.parse(localStorage.getItem("users")||"[]");
    var findedUser;
    for (let i = 0; i < usersTab.length; i++) {
       if(usersTab[i].id==id){
        findedUser=usersTab[i];
        break;
       }
        
    }
   return(findedUser); 
}
function searchProduct(id) {
    var productsTab=JSON.parse(localStorage.getItem("products")||"[]");
    var findedProduct;
    for (let i = 0; i < productsTab.length; i++) {
       if(productsTab[i].id==id){
        findedProduct=productsTab[i];
        break;
       }
        
    }
   return(findedProduct);
}
function searchObj(id,key) {

    var T = JSON.parse(localStorage.getItem(key) || "[]");
    var finded;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            finded = T[i];
            break;
        }

    }
    return (finded);
}


 function Deleteorder(id) {
    var orderstab= JSON.parse(localStorage.getItem("orders") || "[]");
    for (var i = 0; i < orderstab.length; i++) {
          if (orderstab[i].id==id){
            orderstab.splice(i,1);
          }    
    } 
    localStorage.setItem("orders", JSON.stringify(orderstab));  
    location.reload();
 }
 function displayallOrder() {
    var orderstab= JSON.parse(localStorage.getItem("orders") || "[]");
    var ch="";   
    for (var i = 0; i < orderstab.length; i++) {
        ch=ch+`<tr>                                
        <td>${orderstab[i].id }</td>
        <td> ${searchProduct(orderstab[i].productId).Name}</td>
        <td> ${orderstab[i].productId}</td>
        <td> ${orderstab[i].userId}</td> 
        <td> ${searchProduct(orderstab[i].productId).price}</td>
        <td> ${orderstab[i].qty}</td>
        <td><button class= "btn-danger"onclick="DeleteOrder2(${i})">delete</button></td>   
          
    </tr>`
    }
    document.getElementById("allOrder").innerHTML=ch;
}
    
function DeleteOrder2(i) {
    var orderstab= JSON.parse(localStorage.getItem("orders") || "[]");
    orderstab.splice(i, 1);
    localStorage.setItem("orders", JSON.stringify(orderstab));
    location.reload();
}
function displayallUsers() {
    var usertab = JSON.parse(localStorage.getItem("users") || "[]");
    content="";
    for (var i = 0; i < usertab.length; i++) {
        content=content+`<tr>
        <td>${usertab[i].id}</td>
        <td>${usertab[i].firstname}</td>
        <td>${usertab[i].lasttname} </td>
        <td>${usertab[i].email} </td>
        <td>${usertab[i].telephone}</td>
        <td>${usertab[i].password}</td>
        <td><button class= "btn-danger" onclick="Deleteusers(${i})">delete</button></td>
    </tr>`
        
    }
  document.getElementById("displayuser").innerHTML=content;
}

function displayAllProducts(){
    var producttab= JSON.parse(localStorage.getItem("products") || "[]");
    var content="";
    for (var i = 0; i < producttab.length; i++) {
        content=content+`<tr>
        <td>${producttab[i].id}</td>
        <td>${producttab[i].Name}</td>
        <td>${producttab[i].price}</td>
        <td>${producttab[i].stoke}</td>
        <td>${producttab[i].category}</td>
        <td><button class= "btn-danger"onclick="DeleteProduct(${i})">delete</button></td>	
        
    </tr>`
    }
    document.getElementById("displatyallprod").innerHTML=content;
}

function Deleteusers(i) {


    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    usersTab.splice(i, 1);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.reload();

}
function DeleteProduct(i) {
    var producttab= JSON.parse(localStorage.getItem("products") || "[]");
    producttab.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(producttab));
    location.reload();
    
}

function DisplayStoreProduct() {
    var producttab= JSON.parse(localStorage.getItem("products") || "[]");
    var storeId=localStorage.getItem("connected");
    var products=[];
    var content="";
    for (let i = 0; i < producttab.length; i++) {
        if(producttab[i].storeId==storeId){
            products.push(producttab[i]);
        }    
    }
    for (var i = 0; i < products.length; i++) {
        content=content+`<tr>                                
        <td>${products[i].id }</td>
        <td>${products[i].Name }</td>
        <td>${products[i].price }</td>
        <td>${products[i].category}</td>
        <td>${products[i].stoke }</td>
        <td><button class= "btn-danger"onclick="displayprod(${products[i].id})">DiSPLAY</button></td>
        <td><button class= "btn-danger"onclick="updateProduct(${products[i].id})">UPDATE</button></td>
        <td><button class= "btn-danger"onclick=" Deletestoreorder(${products[i].id})">DELETE</button></td>
        
    </tr>`
    }
    document.getElementById("displaystoreprod").innerHTML=content;
}
function updateProduct(id) {
    var content = "";
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");

    for (var i = 0; i < productsTab.length; i++) {
        var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
        if (productsTab[i].id == id) {
            content = content + `
            
            <form class="row login_form" >
            <div class="col-md-4" ></div>
            <div class="col-md-4" >
                            <div class=" form-group">
                                <input type="text" class="form-control" id="newName" value=${productsTab[i].Name} name="Name Of Product"
                                    placeholder="Name Of Product" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'name of product'">
                            </div>
                             <span id="nameError"></span>
                            <div class="form-group">
                                <input type="text" class="form-control" id="newPrice" value=${productsTab[i].price} name="Price"
                                    placeholder="Price" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Price'">
                            </div>
                          <span id="priceError"></span>
                            <div class="form-group">
                                <input type="text" class="form-control" id="newStock" value=${productsTab[i].stoke} name="Stock" placeholder="Stock"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'stock'">
                            </div>
                            <span id="stockError"></span>
                        
                            <div class=" form-group">
                                <button type="submit" value="submit" class="primary-btn" onclick="updateNew(${productsTab[i].id})">UPDATE</button>

                            </div>
                        </div>
                        </form>    
            `
            break;
        }
    }
    document.getElementById("updateForm").innerHTML = content;
}

function updateNew(id) {
    var name=document.getElementById("newName").value;
    var price=document.getElementById("newPrice").value;
    var stoke=document.getElementById("newStock").value;
    var productsTab=JSON.parse(localStorage.getItem("products"));
     for (let i = 0; i < productsTab.length; i++) {
        if(productsTab[i].id==id){
            productsTab[i].Name=name;
            productsTab[i].price=price;
            productsTab[i].stoke=stoke;
        localStorage.setItem("products", JSON.stringify(productsTab));
        location.reload()
        }
        
     }
    
}

function displayStoreOrders() {
    var connectedStoreId = localStorage.getItem ('connected');
    var productsTab = JSON.parse (localStorage.getItem ('products'));
    var ordersTab = JSON.parse (localStorage.getItem ('orders') || '[]');
    var allOrderedProducts = [];
    var allOrderes = [];
    var content = '';
    for (var i = 0; i < productsTab.length; i++) {
      if (productsTab[i].storeId == connectedStoreId) {
        allOrderedProducts.push (productsTab[i]);
      }
    }
    for (var i = 0; i < allOrderedProducts.length; i++) {
      for (var j = 0; j < ordersTab.length; j++) {
        if (allOrderedProducts[i].id == ordersTab[j].productId) {
          allOrderes.push (ordersTab[j]);
        }
      }
    }
    for (var k = 0; k < allOrderes.length; k++) {
      content=content+`<tr> 
      <td>${allOrderes[k].id}</td>
      <td>${searchObj (allOrderes[k].userId, 'users').firstname}</td>
      <td> ${allOrderes[k].productId} </td>
      <td> ${searchObj(allOrderes[k].productId, 'products').Name} </td>
      <td> ${searchObj(allOrderes[k].productId, 'products').storeId} </td>
      <td> ${searchObj(allOrderes[k].productId, 'products').price}   </td>
      <td> ${allOrderes[k].qty} </td>
      <td><a class="primary-btn btn" onclick="DeleteOrderstore(${k})" >Delete Item</a></td>
      
  </tr>`
      
    }
    document.getElementById("displayOrdersstoreid").innerHTML=content;
    console.log()
}

function DeleteOrderstore(i) {
    var orderstab= JSON.parse(localStorage.getItem("orders") || "[]");
    orderstab.splice(i, 1);
    localStorage.setItem("orders", JSON.stringify(orderstab));
    location.reload();
}
function generateHeader() {
    var connectedUserId=localStorage.getItem("connected");
    var connectedUser=searchObj(connectedUserId,"users");
    var content="";
     if(connectedUserId){
        //alert(connectedUser.role)
        if(connectedUser.role=="client"){
         content=`
         <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
         <li class="nav-item"><a class="nav-link" href="#">Welcome ${connectedUser.firstname}${connectedUser.lasttname}</a></li>
         <li class="nav-item"><a class="nav-link" href="product.html">Products</a></li>
         <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
         <li class="nav-item"><a class="nav-link" onclick="logout()">Logout</a></li>
         `
        }
        else if(connectedUser.role=="store"){
         content=`
         <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
         <li class="nav-item"><a class="nav-link" href="#">Welcome ${connectedUser.firstname}${connectedUser.lasttname}</a></li>
 
         <li class="nav-item"><a class="nav-link" href="store.html">Store</a></li>
         <li class="nav-item"><a class="nav-link" href="addProduct.html">addproduct</a></li>
         <li class="nav-item"><a class="nav-link" href="addcategory.html">addproduct</a></li>
         <li class="nav-item"><a class="nav-link" href="product.html">Products</a></li>
         <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
         <li class="nav-item"><a class="nav-link" onclick="logout()">Logout</a></li>
         `
        }
        else{
         content=`
         <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
         <li class="nav-item"><a class="nav-link" href="#">Welcome ${connectedUser.firstName}${connectedUser.lasttname}</a></li>
         <li class="nav-item"><a class="nav-link" href="admin.html">Administration</a></li>
         <li class="nav-item"><a class="nav-link" href="basket.html">Basket</a></li>
         <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
         <li class="nav-item"><a class="nav-link" onclick="logout()">Logout</a></li>
         `
        }
 
     }
     else{
      content=`
      <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
      <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
      <li class="nav-item">Vous etes?<a class="nav-link" href="signupStore.html">Store</a>Ou<a class="nav-link" href="signup.html">Client</a></li>
 
      `
     }
     document.getElementById("headerId").innerHTML=content;
 }
 
 function logout() {
     localStorage.removeItem("connected");
     location.replace("index.html")
 }



        


