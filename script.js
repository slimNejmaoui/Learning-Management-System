function signup_student() {

  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");

  var FnaMe = document.getElementById("firstname").value;
  var isvalidfname = checklength(FnaMe, 3)
  if (isvalidfname == false) {
    document.getElementById("fnameerror").innerHTML = "check your firstname";
    document.getElementById('fnameerror').style.color = "red"
  }
  else {
    document.getElementById("fnameerror").innerHTML = "";
  }
  var LnaMe = document.getElementById("lastname").value;
  var isvalidlname = checklength(LnaMe, 5)
  if (isvalidlname == false) {
    document.getElementById("lnameerror").innerHTML = "check your lastname";
    document.getElementById('lnameerror').style.color = "red"

  }
  else {
    document.getElementById("lnameerror").innerHTML = "";
  }
  var Email = document.getElementById("email").value;
  var verifEmail = validateEmail(Email)
  if (!verifEmail) {
    document.getElementById('emailError').innerHTML = "email invalide"
    document.getElementById('emailError').style.color = "red"
    test = false

  } else {
    document.getElementById('emailError').innerHTML = "";

  }
  var PassWord = document.getElementById("Pwds").value;
  var verifpassword = checklength(PassWord, 8)
  if (verifpassword == false) {
    document.getElementById('passewordError').innerHTML = "passeword invalide"
    document.getElementById('passewordError').style.color = "red"


  } else {

    document.getElementById('passewordError').innerHTML = "";
  }
  var ConfirmepaasWord = document.getElementById("Cfpwds").value;
  var isvalidpasword = password_validation(PassWord, ConfirmepaasWord)
  if (isvalidpasword == false) {
    document.getElementById('confirmPassewordError').innerHTML = "confirme passeword invalide"
    document.getElementById('confirmPassewordError').style.color = "red"
  }
  else {
    document.getElementById('confirmPassewordError').innerHTML = "";

  }
  var Adresse = document.getElementById("adrese").value;
  var CIN = document.getElementById("cin").value;
  var isvalidCin = CINvalid(CIN, 8)
  if (isvalidCin == true) {
    document.getElementById('cinerror').innerHTML = "";

  }
  else {

    document.getElementById('cinerror').innerHTML = "CIN invalide"
    document.getElementById('cinerror').style.color = "red"

  }
  var Cité = document.getElementById("cite").value;


  var user = {

    id: generateId(UserTab) + 1,
    Firstname: FnaMe,
    Lastname: LnaMe,
    Email: Email,
    password: PassWord,
    ConfirmepaasWord: ConfirmepaasWord,
    adrese: Adresse,
    CIN: CIN,
    Cité: Cité,
    role: "student",
    statut: "ok",
  }
  console.log(user);


  UserTab.push(user);
  localStorage.setItem("users", JSON.stringify(UserTab));




}
function signup_professor() {

  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");
  var FnaMeprof = document.getElementById("fnameprof").value;
  var isvalidfname = checklength(FnaMeprof, 3)
  if (isvalidfname == false) {
    document.getElementById("fnameproferror").innerHTML = "check your firstname";
    document.getElementById('fnameproferror').style.color = "red"

  }
  else {
    document.getElementById("fnameproferror").innerHTML = "";
  }
  var LnaMeprof = document.getElementById("lnameprof").value;
  var isvalidlname = checklength(LnaMeprof, 5)
  if (isvalidlname == false) {
    document.getElementById("lnameproferror").innerHTML = "check your lastname";
    document.getElementById('lnameproferror').style.color = "red"

  }
  else {
    document.getElementById("lnameproferror").innerHTML = "";
  }
  var Emailprof = document.getElementById("emailprof").value;
  var verifEmail = validateEmail(Emailprof)
  if (!verifEmail) {
    document.getElementById('emailprofError').innerHTML = "email invalide"
    document.getElementById('emailprofError').style.color = "red"
    test = false

  } else {
    document.getElementById('emailprofError').innerHTML = "";

  }
  var PassWordprof = document.getElementById("Pwdsprof").value;
  var verifpassword = checklength(PassWordprof, 8)
  if (verifpassword == false) {
    document.getElementById('passewordprofError').innerHTML = "passeword invalide"
    document.getElementById('passewordprofError').style.color = "red"


  } else {

    document.getElementById('passewordprofError').innerHTML = "";
  }
  var ConfirmepaasWordprof = document.getElementById("Cfpwdsprof").value;
  var isvalidpasword = password_validation(PassWordprof, ConfirmepaasWordprof)
  if (isvalidpasword == false) {
    document.getElementById('confirmPassewordprofError').innerHTML = "confirme passeword invalide"
    document.getElementById('confirmPassewordprofError').style.color = "red"
  }
  else {
    document.getElementById('confirmPassewordprofError').innerHTML = "";

  }
  var Adresseprof = document.getElementById("adreseprof").value;
  var Experience = document.getElementById("experience").value;
  var specialité = document.getElementById("specialité").value;
  if (isvalidfname && verifEmail && isvalidpasword) {



    var user = {

      id: generateId(UserTab) + 1,

      Firstname: FnaMeprof,
      Lastname: LnaMeprof,
      Email: Emailprof,
      password: PassWordprof,
      ConfirmepaasWordprof: ConfirmepaasWordprof,
      adrese: Adresseprof,
      Experience: Experience,
      specialité: specialité,
      role: "professor",
      statut: "Nok",
    }
    console.log(user);



    UserTab.push(user);
    localStorage.setItem("users", JSON.stringify(UserTab));


    location.replace("login.html");
  }
}



function signup_admin() {
  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");
  var fnameadmin = document.getElementById("fnmameadmin").value;
  var isvalidfname = checklength(fnameadmin, 3)
  if (isvalidfname == false) {
    document.getElementById("fnameadminerror").innerHTML = "check your firstname";
    document.getElementById('fnameadminerror').style.color = "red"

  }
  else {
    document.getElementById("fnameadminerror").innerHTML = "";
  }
  var lnameadmin = document.getElementById("lnmameadmin").value;
  var isvalidfname = checklength(lnameadmin, 3)
  if (isvalidfname == false) {
    document.getElementById("lnameadminerror").innerHTML = "check your firstname";
    document.getElementById('lnameadminerror').style.color = "red"

  }
  else {
    document.getElementById("lnameadminerror").innerHTML = "";
  }
  var emailadmin = document.getElementById("emailadmin").value;
  var verifEmail = validateEmail(emailadmin)
  if (!verifEmail) {
    document.getElementById('emailadminError').innerHTML = "email invalide"
    document.getElementById('emailadminError').style.color = "red"
    test = false

  } else {
    document.getElementById('emailadminError').innerHTML = "";

  }
  var passwrdadmin = document.getElementById("pwdsadmin").value;
  var verifpassword = checklength(passwrdadmin, 8)
  if (verifpassword == false) {
    document.getElementById('passewordadminError').innerHTML = "passeword invalide"
    document.getElementById('passewordadminError').style.color = "red"


  } else {

    document.getElementById('passewordadminError').innerHTML = "";
  }
  var confadmin = document.getElementById("cnfadmin").value;
  var isvalidpasword = password_validation(passwrdadmin, confadmin)
  if (isvalidpasword == false) {
    document.getElementById('confirmPassewordadminError').innerHTML = "confirme passeword invalide"
    document.getElementById('confirmPassewordadminError').style.color = "red"
  }
  else {
    document.getElementById('confirmPassewordadminError').innerHTML = "";

  }


  var user = {
    id: generateId(UserTab) + 1,

    Firstname: fnameadmin,
    Lastname: lnameadmin,
    Email: emailadmin,
    password: passwrdadmin,
    Confadmin: confadmin,
    role: "admin",

  }
  console.log(user);




  UserTab.push(user);
  localStorage.setItem("users", JSON.stringify(UserTab));
  location.replace("login.html");


}
function checklength(ch, x) {
  return (ch.length >= x)
}
function checkCin(x, y) {
  return x == y;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function CINvalid(x, y) {
  return x == y;
}


// function password_validation(password)
//     {
// 	var result =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
//         return result.test(password)
//     }
function password_validation(pass1, pass2) {

  if (pass1 == pass2) {

    return (true)

  }
  else {
    return (false);
  }

}
function checkCIN(y, x) {
  return (y == x);


}

function login() {


  var Email = document.getElementById("emailog").value;
  var password = document.getElementById("pwdslog").value;
  var UserTab = JSON.parse(localStorage.getItem("users"));
  var findUser = CheckUser(UserTab, Email, password)


  if (findUser) {
    // localStorage.setItem("connected", JSON.stringify(findUser.id));


    if (findUser.role == "professor") {
      location.replace("index.html");

    }

    else if (findUser.role == "student") {
      location.replace("index.html");

    }
    else {

      location.replace("Admin.html");

    }

  }
  else {
    document.getElementById("loginError").innerHTML = "Check your Pass or your email"
  }







  localStorage.setItem("connected", JSON.stringify(findUser.id));

}





// function login() {

//   var email = document.getElementById("emailog").value;
//   var password = document.getElementById("pwdslog").value;
//   var UserTab =JSON.parse(localStorage.getItem("users"));
//   var finduser = CheckUser(UserTab, email, password);
//   if (finduser) {
//       location.replace("index.html");
//   }
//   else {

//       document.getElementById("loginError").innerHTML = "check your pass or you email"
//   }

// }


function generateId(T) {
  var max;
  if (T.length == 0) {
    max = 0;
  }
  else {
    max = T[0].id;
    for (var i = 1; i < T.length; i++) {

      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return (max);
}




function CheckUser(T, email, pass) {
  var findUser;
  for (var i = 0; i < T.length; i++) {
    if (T[i].Email == email && T[i].password == pass) {
      findUser = T[i];
      break;

    }
  }
  return findUser;
}

function verifid(t, id) {
  var exist = false;
  for (var i = 0; i < t.length; i++) {
    if (t[i].id == id) {
      exist = true;

      break;
    }


  }
  return (exist);

}

function Addformation() {

  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  var profid = localStorage.getItem("connected");

  var name = document.getElementById("name_f").value;
  var isNameValid = checklength(name, 4);
  if (isNameValid == false) {
    document.getElementById('nameError').innerHTML =
      "check your formation name";
    document.getElementById('nameError').style.color = "red"

  } else {
    document.getElementById('nameError').innerHTML = '';
  }
  var price = document.getElementById("price_f").value;
  var ispricevalid = checkprice(price, 0);
  if (ispricevalid == false) {
    document.getElementById('priceError').innerHTML = 'check price!';
    document.getElementById('priceError').style.color = "red"

  } else {
    document.getElementById('priceError').innerHTML = '';
  }
  var nbrhours = document.getElementById("nbhours").value;
  var ihoursvalid = checkprice(nbrhours, 0);
  if (ihoursvalid == false) {
    document.getElementById('hoursError').innerHTML = 'check number hours';
    document.getElementById('hoursError').style.color = "red"

  } else {
    document.getElementById('hoursError').innerHTML = '';
  }
  var nbrplace = document.getElementById("nbrplace").value;
  var isplacevalid = checkprice(nbrplace, 0);
  if (isplacevalid == false) {
    document.getElementById('placeError').innerHTML = 'check number place';
    document.getElementById('placeError').style.color = "red"
  } else {
    document.getElementById('placeError').innerHTML = '';
  }
  var exeerciceone = document.getElementById("exerone").value;
  var exeercicetwo = document.getElementById("exertwoe").value;
  var exeercicethree = document.getElementById("exerthree").value;
  if (ispricevalid && ihoursvalid && isNameValid && isplacevalid) {

    var formation = {

      id: generateId(formationsTab) + 1,
      name: name,
      price: price,
      nbrhours: nbrhours,
      nbrplace: nbrplace,
      exeerciceone: exeerciceone,
      exeercicetwo: exeercicetwo,
      exeercicethree: exeercicethree,
      profId: profid,


    }
    console.log(formation);


    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

    formationsTab.push(formation);

    localStorage.setItem("formations", JSON.stringify(formationsTab));

  }
}


function checkprice(w, e) {
  return w > e;
}

// function Addexercices(){

//   var exercicestab = JSON.parse(localStorage.getItem("exercices")||"[]");
//   var profid=localStorage.getItem("connected");

//   var exeerciceone=document.getElementById("exerone").value;
//   var exeercicetwo=document.getElementById("exertwoe").value;
//   var exeercicethree=document.getElementById("exerthree").value;


// var exercice ={

// id:generateId(exercicestab)+1,
// exeerciceone:exeerciceone,
// exeercicetwo:exeercicetwo,
// exeercicethree:exeercicethree,
// profId:profid,



// }
// console.log(exercice);


// var exercicestab = JSON.parse(localStorage.getItem("exercices")||"[]");

// exercicestab.push(exercice);

// localStorage.setItem("exercices",JSON.stringify(exercicestab));


// }

function displayformations() {


  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

  var ch = "";
  for (var i = 0; i < formationsTab.length; i++) {

    ch = ch + `<div class="col-md-6 d-flex align-items-stretch ftco-animate">
    <div class="project-wrap">
      <a href="#" class="img" style="background-image: url(images/work-2.jpg);">
        <span class="price">${formationsTab[i].name}</span>
      </a>
      <div class="text p-4">
        <h3>${formationsTab[i].name}</h3>
       
        <ul class="d-flex justify-content-between">
          
          <li class="price">${formationsTab[i].price}dt</li>
        </ul>
      </div>
                      <div class="form-group d-flex justify-content-end mt-4">
                          <button
                            type="submit"
                            onclick="displayformation(${formationsTab[i].id})"
                            class="btn btn-primary submit"
                          >
                            display formation
                          </button>
                        </div>
    </div>
                
  </div>
  `

  }



  document.getElementById("disp_formation").innerHTML = ch;


}


function displayformation(id) {

  localStorage.setItem("formationid", id)


  location.replace("formation_detail.html");
}



function gotodisplayformation() {


  var formationId = localStorage.getItem("formationid");
  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  var findformation;
  for (i = 0; i < formationsTab.length; i++) {

    if (formationsTab[i].id == formationId) {

      findformation = formationsTab[i];
      break;
    }

  }
  document.getElementById("findformation_name").innerHTML = findformation.name;
  document.getElementById("findformation_price").innerHTML = findformation.price;
  document.getElementById("findformation_nbrhours").innerHTML = findformation.nbrhours;
  document.getElementById("findformation_nbrplace").innerHTML = findformation.nbrplace;
  document.getElementById("findformation_testone").innerHTML = findformation.exeerciceone;
  document.getElementById("findformation_testtwo").innerHTML = findformation.exeercicetwo;
  document.getElementById("findformation_testthree").innerHTML = findformation.exeercicethree;


}
function fotmationparticipate() {

  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");

  var connected_user = localStorage.getItem("connected");
  var formationid = localStorage.getItem("formationid");

  var formation_particpant = {

    id: generateId(partipantTab) + 1,
    connectedUser: connected_user,
    formationid: formationid,



  }
  console.log(formation_particpant);

  partipantTab.push(formation_particpant);
  localStorage.setItem("partipants", JSON.stringify(partipantTab));



}


function display_partipant() {

  var connectedid = localStorage.getItem("connected");

  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");

  var particepant = [];
  var content = "";
  for (var i = 0; i < partipantTab.length; i++) {

    if (partipantTab[i].connectedUser == connectedid) {

      particepant.push(partipantTab[i]);

    }
  }
  for (i = 0; i < particepant.length; i++) {

    content = content + `   <tr>
   <td>${particepant[i].id}</td>
   <td>${searchobj(particepant[i].connectedUser, "users").Firstname}</td>
   <td>${particepant[i].formationid}</td>
   <td>${searchobj(particepant[i].formationid, "formations").name}</td>
   <td>${searchobj(particepant[i].formationid, "formations").price}</td>
   <td>${searchobj(particepant[i].formationid, "formations").nbrhours}</td>
   <td><button class= "btn-danger" onclick="deleteformation(${partipantTab[i].id})">delete</button></td>
   <td><button class= "btn-success" onclick="studentavis(${partipantTab[i].id})">feedback</button></td>
   
 </tr>
 
   
   `

  }


  document.getElementById("formation_id").innerHTML = content;

}


function searchUser(id) {
  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");
  var findedUser;
  for (let i = 0; i < UserTab.length; i++) {
    if (UserTab[i].id == id) {
      findedUser = UserTab[i];
      break;
    }

  }
  return (findedUser);
}





function searchobj(id, key) {

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


function deleteformation(id) {


  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");


  for (i = 0; i < partipantTab.length; i++) {

    if (partipantTab[i].id == id) {


      partipantTab.splice(i, 1);

    }

  }

  localStorage.setItem("partipants", JSON.stringify(partipantTab));
  location.reload();

}

function professorformation() {


  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  var profid = localStorage.getItem("connected");

  var prof = [];
  var content = "";
  for (var i = 0; i < formationsTab.length; i++) {
    if (formationsTab[i].profId == profid) {
      prof.push(formationsTab[i]);
    }
  }
  for (var i = 0; i < prof.length; i++) {

    content = content + `     <tr>
  <td>${prof[i].id}</td>
  <td>${prof[i].name}</td>
  <td>${prof[i].price}</td>
  <td>${prof[i].nbrhours}</td>
  <td>${prof[i].nbrplace}</td>
  <td><button class= "btn-danger" onclick="deletformations(${i})">delete</button></td>
  <td><button class= "btn-primary" onclick="displayformation(${formationsTab[i].id})">display</button></td>
  <td><button class= "btn-success" onclick="updateformation(${formationsTab[i].id})">update</button></td>
 

</tr>
  
  `

  }

  document.getElementById("profid").innerHTML = content;


}

function displayprof_participants() {
  var connected_user = localStorage.getItem('connected');
  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");
  var allformations = [];
  var allparticpants = [];
  var content = '';
  for (var i = 0; i < formationsTab.length; i++) {
    if (formationsTab[i].profId == connected_user) {
      allformations.push(formationsTab[i]);
    }
  }
  for (var i = 0; i < allformations.length; i++) {
    for (var j = 0; j < partipantTab.length; j++) {
      if (allformations[i].id == partipantTab[j].formationid) {
        allparticpants.push(partipantTab[j]);
      }
    }
  }
  for (var k = 0; k < allparticpants.length; k++) {
    content = content + `<tr> 
    <td>${allparticpants[k].id}</td>
    <td>${allparticpants[k].connectedUser}</td>
    <td>${searchobj(allparticpants[k].connectedUser, 'users').Firstname}</td>
    <td> ${allparticpants[k].formationid} </td>
    <td> ${searchobj(allparticpants[k].formationid, 'formations').name} </td>
    <td> ${searchobj(allparticpants[k].formationid, 'formations').price} </td>
    <td> ${searchobj(allparticpants[k].formationid, 'formations').nbrhours}   </td>
    <td> ${searchobj(allparticpants[k].formationid, 'formations').nbrplace}   </td>
    <td><button class= "btn-danger" onclick="deleteformation(${allparticpants[k].id})">delete</button></td>
    <td><button class= "btn-success" onclick="professoravis(${allparticpants[k].id})">feedback</button></td>
   
  
  
    
</tr>`

  }
  document.getElementById("displayformation_prof").innerHTML = content;
  console.log()
}

function Allparticipants_admin() {



  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");

  var content = "";


  for (let i = 0; i < partipantTab.length; i++) {

    content = content + `
  
  <tr>
  <td>${partipantTab[i].id}</td>
  <td>${searchobj(partipantTab[i].connectedUser, 'users').Firstname}</td>
  <td>${partipantTab[i].connectedUser}</td>
  <td>${partipantTab[i].formationid}</td>
  <td>${searchobj(partipantTab[i].formationid, "formations").name}</td>
  <td>${searchobj(partipantTab[i].formationid, "formations").price}</td>
  <td>${searchobj(partipantTab[i].formationid, "formations").nbrhours}</td>
  <td>${searchobj(partipantTab[i].formationid, "formations").nbrplace}</td>

  <td><button class= "btn-danger" onclick="deleteformation(${partipantTab[i].id})">delete</button></td>

</tr>`


  }
  document.getElementById("adminid").innerHTML = content;

}
function adminallformations() {

  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  var ch = "";
  for (var i = 0; i < formationsTab.length; i++) {
    ch = ch + `<tr> 
      <th scope="col">${formationsTab[i].id}</th>
      <th scope="col">${formationsTab[i].name}</th>
      <th scope="col">${formationsTab[i].price}</th>
      <th scope="col">${formationsTab[i].nbrhours}</th>
      <th scope="col">${formationsTab[i].nbrplace}</th>
      


      <td><button class= "btn-danger" onclick="deletformations(${i})">delete</button></td>
      <td><button class= "btn-success" onclick="updateformation(${formationsTab[i].id})">update</button></td>

  </tr>
 `
  }
  document.getElementById("idform").innerHTML = ch;
}

function allusersadmin() {



  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");
  var content = "";
  for (i = 0; i < UserTab.length; i++) {


    content = content + `<tr>
<td>${UserTab[i].id}</td>
<td>${UserTab[i].Firstname}</td>
<td>${UserTab[i].Lastname} </td>
<td>${UserTab[i].Email} </td>
<td>${UserTab[i].adrese}</td>
<td>${UserTab[i].password}</td>

<td><button class= "btn-danger" onclick="deletusers(${i})">delete</button></td>
</tr>`


  }

  document.getElementById("useradmin").innerHTML = content;

}




function deletformations(i) {


  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

  formationsTab.splice(i, 1);


  localStorage.setItem("formations", JSON.stringify(formationsTab));
  location.reload();

}

function deletusers(i) {

  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");

  UserTab.splice(i, 1);


  localStorage.setItem("users", JSON.stringify(UserTab));
  location.reload();

}
function deletparticiapnts(i) {

  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");

  partipantTab.splice(i, 1);


  localStorage.setItem("partipants", JSON.stringify(partipantTab));
  location.reload();

}



function updateformation(id) {
  var content = "";
  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

  for (var i = 0; i < formationsTab.length; i++) {
    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
    if (formationsTab[i].id == id) {
      content = content + `
          
          <form class="row login_form" >
          <div class="col-md-4" ></div>
          <div class="col-md-4" >
                          <div class=" form-group">
                              <input type="text" class="form-control" id="newName" value=${formationsTab[i].name} name="Name Of formation"
                                  placeholder="Name Of Product" onfocus="this.placeholder = ''"
                                  onblur="this.placeholder = 'name of product'">
                          </div>
                          
                          <div class="form-group">
                              <input type="text" class="form-control" id="newPrice" value=${formationsTab[i].price} name="Price"
                                  placeholder="Price" onfocus="this.placeholder = ''"
                                  onblur="this.placeholder = 'Price'">
                          </div>
                        
                          <div class="form-group">
                              <input type="text" class="form-control" id="newhours" value=${formationsTab[i].nbrhours} name="Stock" placeholder="number hours"
                                  onfocus="this.placeholder = ''" onblur="this.placeholder = 'number hours'">
                          </div>
                          <span id="nbrhoursError"></span>
                          <div class="form-group">
                          <input type="text" class="form-control" id="newplace" value=${formationsTab[i].nbrplace} name="Stock" placeholder="number place"
                              onfocus="this.placeholder = ''" onblur="this.placeholder = 'number place'">
                      </div>
                      
                          <div class=" form-group">
                              
                              <button class= "btn-success" onclick="updateNewformation(${formationsTab[i].id})">Update</button>
                          </div>
                      </div>
                      </form>    
          `
      break;
    }
  }
  document.getElementById("updateFormation").innerHTML = content;
}

function updateNewformation(id) {
  var name = document.getElementById("newName").value;
  var price = document.getElementById("newPrice").value;
  var newhours = document.getElementById("newhours").value;
  var newplace = document.getElementById("newplace").value;
  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

  for (let i = 0; i < formationsTab.length; i++) {
    if (formationsTab[i].name = name) {
      formationsTab[i].price = price;
      formationsTab[i].newhours = newhours;
      formationsTab[i].newplace = newplace;
      localStorage.setItem("formations", JSON.stringify(formationsTab));
      location.reload()
    }

  }

}
function professoravis(id) {
  var content = "";
  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");

  for (var i = 0; i < partipantTab.length; i++) {
    var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");
    if (partipantTab[i].id == id) {
      content = content + `
          
          <form class="row login_form" >
          <div class="col-md-4" ></div>
          <div class="col-md-4" >
        
                          <div class=" form-group">
                          <label for="formGroupExampleInput">mon avi</label>
                              <input type="text" class="form-control" id="avissend" value= 
                                  >
                          </div>
                          
                          <div class="form-group">
                          <label for="formGroupExampleInput">note</label>
                              <input type="text" class="form-control" id="notesend" value= 
                                  >
                          </div>
                          <div class=" form-group">
                              
                              <button class= "btn-success" onclick="sendAvis(${partipantTab[i].id})">Send </button>
                          </div>
                      </div>
                      </form>    
                       
          `

    }
  }
  document.getElementById("aviprof").innerHTML = content;
}


function generateHeader() {
  var connected = localStorage.getItem("connected");
  var connected = searchobj(connected, "users");
  var content = "";
  if (connected) {

    if (connected.role == "student") {
      content = `
       <li class="nav-item "><a class="nav-link " href="index.html">Home</a></li>
       <li class="nav-item"><a class="nav-link" href="#">Welcome ${connected.Firstname}${connected.Lastname}</a></li>
       <li class="nav-item"><a class="nav-link" href="courses.html">courses</a></li>
       <li class="nav-item"><a class="nav-link" href="students.html">Dashboard</a></li>       
       <li class="nav-item"><a class="nav-link" href="Profile.html">Profile</a></li>   
       <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
       <li class="nav-item"><a class="nav-link" href="index.html" onclick="logout()">Logout</a></li>
       `
    }
    else if (connected.role == "professor") {
      content = `
       <li class="nav-item "><a class="nav-link" href="index.html">Home</a></li>
       <li class="nav-item"><a class="nav-link" href="#">Welcome ${connected.Firstname}${connected.Lastname}</a></li>
       <li class="nav-item"><a class="nav-link" href=" profileProfessor.html">Profile</a></li>
       <li class="nav-item"><a class="nav-link" href="professor.html">Dashboard</a></li>
       <li class="nav-item"><a class="nav-link" href="exercices.html">exercices</a></li>
       <li class="nav-item"><a class="nav-link" href="addcourse.html">AddCourse</a></li>
       <li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
       <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
       <li class="nav-item"><a class="nav-link" href="index.html" onclick="logout()">Logout</a></li>
       `
    }
    else {
      content = `
       <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
       <li class="nav-item"><a class="nav-link" href="#">Welcome ${connected.Firstname}${connected.Lastname}</a></li>
       <li class="nav-item"><a class="nav-link" href="admin.html">Dashboard</a></li>
       <li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
       <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
       <li class="nav-item"><a class="nav-link"href="index.html" onclick="logout()">Logout</a></li>
       `
    }

  }
  else {
    content = `
    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="courses.html">courses</a></li>
    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
    <li class="nav-item"><div class="dropdown mt-3">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
      Signup
    </a>
  
    <div class="dropdown-menu">
      <a class="dropdown-item text-primary" href="signupstudent.html">Student</a>
      <a class="dropdown-item text-primary" href="signupprofessor.html">Professor</a>
      <a class="dropdown-item text-primary" href="signupadmin.html">Admin</a>
    
    </div>
  </div></li>

    `
  }
  document.getElementById("headerId").innerHTML = content;
}

function home() {
  var connected = localStorage.getItem("connected");
  var connected = searchobj(connected, "users");
  var content = "";
  if (!connected) {

    content = `
    

  
    <div class="row">
      <div class="col-md-7"></div>
      <div class="col-md-5 order-md-last">
        <div class="login-wrap p-4 p-md-5">
          <h3 class="mb-4">Register Now</h3>
          <form action="#" class="signup-form">
            <div class="form-group">
              <label class="label" for="name">Full Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="John Doe"
              />
            </div>
            <div class="form-group">
              <label class="label" for="email">Email Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div class="form-group">
              <label class="label" for="password">Password</label>
              <input
                id="password-field"
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label class="label" for="password">Confirm Password</label>
              <input
                id="password-field"
                type="password"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div class="form-group d-flex justify-content-end mt-4">
              <button type="submit" class="btn btn-primary submit">
                <span class="fa fa-paper-plane"></span>
              </button>
            </div>
          </form>
          <p class="text-center">
            Already have an account? <a href="#signin">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  

       `


  }


  document.getElementById("homeId").innerHTML = content;

}

function logout() {
  localStorage.removeItem("connected");
  location.replace("index.html")
}


function sendAvis(id) {

  var myavis = document.getElementById("avissend").value;
  var note = document.getElementById("notesend").value;
  var avisTab = JSON.parse(localStorage.getItem("avisprofessor") || "[]");
  var connectedUserId = localStorage.getItem("connected");
  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");
  for (var i = 0; i < partipantTab.length; i++) {
    if (partipantTab[i].id == id) {

      var avi = {
        id: generateId(avisTab) + 1,
        myavis: myavis,
        note: Number(note),
        profId: connectedUserId,
        StudentId: partipantTab[i].connectedUser,
        formationId: partipantTab[i].formationid,


      }
      avisTab.push(avi);
      localStorage.setItem("avisprofessor", JSON.stringify(avisTab));
      location.reload();
      console.log(avi);
    }
  }
}



function avi_student(id) {
  var content = "";
  var avisTab = JSON.parse(localStorage.getItem("avisprofessor") || "[]");
  connecte_student = localStorage.getItem("connected")
  var findstudent;
  for (var i = 0; i < avisTab.length; i++) {
    if (avisTab[i].StudentId == connecte_student) {

      findstudent = avisTab[i];

      content = content + ` 

        <div class="item">
        <div class="testimony-wrap py-4">
          <div class="text">
            <p class="star">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </p>
            <p class="mb-4">
           Note: ${avisTab[i].note}
            </p>
            <p class="mb-4">
           avis: ${avisTab[i].myavis}
            </p>
            <div class="d-flex align-items-center">
              <div class="user-img" style="background-image: url(images/person_1.jpg)"></div>
              <div class="pl-3">
                <p class="name"> ${searchobj(avisTab[i].profId, 'users').Firstname} ${searchobj(avisTab[i].profId, 'users').Lastname}</p>
                <span class="position">${searchobj(avisTab[i].formationId, 'formations').name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
          
        
                      
          `

    }

  }
  document.getElementById("aviprof").innerHTML = content;
}


function sendAvisprof(id) {

  var myavisprof = document.getElementById("avissendprof").value;
  var reponse_one = document.getElementById("rep_one").value;
  var reponse_two = document.getElementById("rep_two").value;
  var reponse_thre = document.getElementById("rep_thre").value;
  var avis_Tabprof = JSON.parse(localStorage.getItem("avistudents") || "[]");
  var connectedUserId = localStorage.getItem("connected");
  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  for (var i = 0; i < formationsTab.length; i++) {
    if (formationsTab[i].id == id) {

      var avi_prof = {
        id: generateId(avis_Tabprof) + 1,
        myavisprof: myavisprof,
        reponse_one: reponse_one,
        reponse_two: reponse_two,
        reponse_thre: reponse_thre,
        connected_student: connectedUserId,
        prof_Id: formationsTab[i].profId,

      }
      avis_Tabprof.push(avi_prof);
      localStorage.setItem("avistudents", JSON.stringify(avis_Tabprof));
      location.reload();
      console.log(avi_prof);
    }
  }
}
function studentavis(id) {
  var content = "";
  var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");

  for (var i = 0; i < partipantTab.length; i++) {
    var partipantTab = JSON.parse(localStorage.getItem("partipants") || "[]");
    if (partipantTab[i].id == id) {
      content = content + `
          
          <form class="row login_form" >
          <div class="col-md-4" ></div>
          <div class="col-md-4" >
          
        
                          <div class=" form-group">
                          <label for="formGroupExampleInput">mon avi</label>
                              <input type="text" class="form-control" id="avissendprof" value= 
                                  >
                          </div>
                          <div class=" form-group">
                          <label for="formGroupExampleInput">reponse 1</label>
                              <input type="text" class="form-control" id="rep_one" value= 
                                  >
                          </div>
                          <div class=" form-group">
                          <label for="formGroupExampleInput">reponse 1</label>
                              <input type="text" class="form-control" id="rep_two" value= 
                                  >
                          </div>
                          <div class=" form-group">
                          <label for="formGroupExampleInput">reponse 1</label>
                              <input type="text" class="form-control" id="rep_thre" value= 
                                  >
                          </div>
                        
                          
                          
                              
                              <button class= "btn-success" onclick="sendAvisprof(${partipantTab[i].id})">Send </button>
                          </div>
                      </div>
                      </form>    
                       
          `


    }
  }
  document.getElementById("avistudent").innerHTML = content;
}

function avi_forprof(id) {

  var content = "";
  var avis_Tabprof = JSON.parse(localStorage.getItem("avistudents") || "[]");
  connecte_prof = localStorage.getItem("connected");
  var findprof;
  for (var i = 0; i < avis_Tabprof.length; i++) {
    if (avis_Tabprof[i].prof_Id == connecte_prof) {

      findprof = avis_Tabprof[i];

      content = content + `

        <div class="item">
        <div class="testimony-wrap py-1">
          <div class="text">
            <p class="star">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </p>
            <p class="mb-4">
              Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind
              texts.
            </p>
            <div class="d-flex align-items-center">
              <div class="user-img" style="background-image: url(images/person_1.jpg)"></div>
              <div class="pl-3">
                <p class="name">${searchobj(avis_Tabprof[i].connected_student, 'users').Firstname}  ${searchobj(avis_Tabprof[i].connected_student, 'users').Lastname}</p>
                <span class="position">${avis_Tabprof[i].myavisprof}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
          
                  
                      
          `
    }

  }
  document.getElementById("avi_student").innerHTML = content;
}

function display_reponseone(id) {

  var content = "";
  var avis_Tabprof = JSON.parse(localStorage.getItem("avistudents") || "[]");
  connecte_prof = localStorage.getItem("connected");
  var findtestone;
  for (var i = 0; i < avis_Tabprof.length; i++) {
    if (avis_Tabprof[i].prof_Id == connecte_prof) {

      findtestone = avis_Tabprof[i];

      content = content + `<li class="comment">
         
          
          <div class="comment-body">
          <h5 class="text-primary"> Name student: ${searchobj(avis_Tabprof[i].connected_student, 'users').Firstname}  ${searchobj(avis_Tabprof[i].connected_student, 'users').Lastname}</h5>
           
            <div class="meta "><h5 class="text-dark">reponse 1 : ${avis_Tabprof[i].reponse_one}</h5></div>
           
  
          </div>
          
        </li>
          
                  
                      
          `
    }

  }
  document.getElementById("solutionone").innerHTML = content;
}
function display_reponsetwo(id) {

  var content = "";
  var avis_Tabprof = JSON.parse(localStorage.getItem("avistudents") || "[]");
  connecte_prof = localStorage.getItem("connected");
  var findtestwo;
  for (var i = 0; i < avis_Tabprof.length; i++) {
    if (avis_Tabprof[i].prof_Id == connecte_prof) {

      findtestwo = avis_Tabprof[i];

      content = content + `<li class="comment">
          
          
          <div class="comment-body">
          <h5 class="text-primary"> Name student: ${searchobj(avis_Tabprof[i].connected_student, 'users').Firstname}  ${searchobj(avis_Tabprof[i].connected_student, 'users').Lastname}</h5>
           
            <div class="meta "><h5 class="text-dark">reponse 2 : ${avis_Tabprof[i].reponse_two}</h5></div>
           
  
          </div>
          
        </li>
          
                  
                      
          `
    }

  }
  document.getElementById("solutiontwo").innerHTML = content;
}
function display_reponsethree(id) {

  var content = "";
  var avis_Tabprof = JSON.parse(localStorage.getItem("avistudents") || "[]");
  connecte_prof = localStorage.getItem("connected");
  var findtesthre;
  for (var i = 0; i < avis_Tabprof.length; i++) {
    if (avis_Tabprof[i].prof_Id == connecte_prof) {

      findtesthre = avis_Tabprof[i];

      content = content + `<li class="comment">
         
          <div class="comment-body">
          <h5 class="text-primary"> Name student: ${searchobj(avis_Tabprof[i].connected_student, 'users').Firstname}  ${searchobj(avis_Tabprof[i].connected_student, 'users').Lastname}</h5>
           
            <div class="meta "><h5 class="text-dark">reponse 3 : ${avis_Tabprof[i].reponse_thre}</h5></div>
           
  
          </div>
          
        </li>
          
                  
                      
          `
    }

  }
  document.getElementById("solutionthree").innerHTML = content;
}


function display_nameprof() {



  var UserTab = JSON.parse(localStorage.getItem("users") || "[]");
  var connected_prof = localStorage.getItem("connected");
  var findnameprof;
  for (var i = 0; i < UserTab.length; i++) {
    if (UserTab[i].id == connected_prof) {

      findnameprof = UserTab[i];
      break;
    }

  }
  document.getElementById("findprof_name").innerHTML = findnameprof.Firstname;
  document.getElementById("findprof_last").innerHTML = findnameprof.Lastname;
  document.getElementById("findprof_Name").innerHTML = findnameprof.Firstname;
  document.getElementById("findprof-specialite").innerHTML = findnameprof.specialité;
  document.getElementById("findprof-Specialite").innerHTML = findnameprof.specialité;
  document.getElementById("findprof-experience").innerHTML = findnameprof.Experience;


}

function display_namestudent() {
  var content = "";
  var avisTab = JSON.parse(localStorage.getItem("avisprofessor") || "[]");
  connecte_student = localStorage.getItem("connected")
  var findstudentname;
  for (var i = 0; i < avisTab.length; i++) {
    if (avisTab[i].StudentId == connecte_student) {

      findstudentname = avisTab[i];

      content = content + `    <h3 class="text-primary">${searchobj(avisTab[i].StudentId, 'users').Firstname}  ${searchobj(avisTab[i].StudentId, 'users').Lastname}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
        
                      
          `

    }
    break;

  }
  document.getElementById("namestudent").innerHTML = content;
}




function display_test() {



  var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
  var ProfId = localStorage.getItem("connected");
  var findtest;
  for (var i = 0; i < formationsTab.length; i++) {
    if (formationsTab[i].profId == ProfId) {

      findtest = formationsTab[i];
      break;
    }

  }
  document.getElementById("findtestone").innerHTML = findtest.exeerciceone;
  document.getElementById("findtesttwo").innerHTML = findtest.exeercicetwo;
  document.getElementById("findtestthre").innerHTML = findtest.exeercicethree;
  document.getElementById("findtformation1").innerHTML = findtest.name;
  document.getElementById("findtformation2").innerHTML = findtest.name;
  document.getElementById("findtformation3").innerHTML = findtest.name;


}




function display_note() {

  var connectedid = localStorage.getItem("connected");

  var avisTab = JSON.parse(localStorage.getItem("avisprofessor") || "[]");

  var notetab = [];

  var content = "";
  for (var i = 0; i < avisTab.length; i++) {

    if (avisTab[i].profId == connectedid) {

      notetab.push(avisTab[i]);

    }
  }

  var x;

  for (var i = 0; i < notetab.length - 1; i++) {
    for (var j = i + 1; j < notetab.length; j++) {
      if (Number(notetab[i].note) < Number(notetab[j].note)) {
        x = notetab[i];
        notetab[i] = notetab[j];
        notetab[j] = x;
      }

    }
  }

  for (var i = 0; i < notetab.length; i++) {

    content = content +
      `   <tr>
     <td>${notetab[i].id}</td>
     <td>${searchobj(notetab[i].StudentId, "users").Firstname}</td>
     <td>${notetab[i].formationId}</td>
     <td>${searchobj(notetab[i].formationId, "formations").name}</td>
     <td>${notetab[i].note}</td>
    
     
   </tr>
   
     
     `

  }



  document.getElementById("notestudent").innerHTML = content;

}