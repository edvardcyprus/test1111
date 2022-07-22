var navig = `<div class="displaynone" id="home_button"></div>
<div id="nav_search_index" class="nav_search_index">
  <form class="nav_search_index_form" id="nav_search_index_form">
    <input class="nav_search_index_input" id="nav_search_index_input" onkeyup="search_index()" type="text" name="search" placeholder="Search by keyword" autocomplete="off">
    </input><i class="fa fa-search" id="fa_search"></i>
  </form>
</div>
<div class="search_bloki" id="search_bloki">
  <div>
    <div class="search_blok">
      <div class="search_chat stylelist" id="chatSearch1">
        <div class="search_logo">CHT</div>
      </div>
      <div class="myBtnContainer" id="chatFilterContent">
        <a class="chat_btn chatfilteractive" onclick="chatfilterSelection('all')">Show all</a>
        <a class="chat_btn" onclick="chatfilterSelection('registration')">Registration</a>
        <a class="chat_btn" onclick="chatfilterSelection('verification')">Verification</a>
        <a class="chat_btn" onclick="chatfilterSelection('issue')">Issue</a>
        <a class="chat_btn" onclick="chatfilterSelection('promo')">Promo</a>
        <a class="chat_btn" onclick="chatfilterSelection('how')">How?</a>
        <a class="chat_btn" onclick="chatfilterSelection('where')">Where?</a>
        <a class="chat_btn" onclick="chatfilterSelection('change')">Change</a>
        <a class="chat_btn" onclick="chatfilterSelection('settings')">Settings</a>
        <a class="chat_btn" onclick="chatfilterSelection('bet')">Bet</a>
        <a class="chat_btn" onclick="chatfilterSelection('payments')">Payments</a>
        <a class="chat_btn" onclick="chatfilterSelection('sg')">SG</a>
        <a class="chat_btn" onclick="chatfilterSelection('request')">Request</a>
        <a class="chat_btn" onclick="chatfilterSelection('wrongdetails')">Wrong details</a>
        <a class="chat_btn" onclick="chatfilterSelection('aboutus')">About us</a>
        <a class="chat_btn" onclick="chatfilterSelection('other')">Other</a>
      </div>

      <ul class="favorites_chat" id="favorites_chat"></ul>

      <ul class="source_chat" id="source_chat">
      <li class="searchtemplate chat">
      <a class="index_hero_tmp" id="index_hero_tmp_c1" href="c1.html"></a
      ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
      ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
    </li>
    <li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c2" href="c2.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c3" href="c3.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c4" href="c4.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c5" href="c5.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c6" href="c6.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c7" href="c7.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c8" href="c8.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c9" href="c9.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c10" href="c10.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c11" href="c11.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c12" href="c12.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c13" href="c13.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c14" href="c14.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c15" href="c15.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c16" href="c16.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c17" href="c17.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c18" href="c18.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c19" href="c19.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>
<li class="searchtemplate chat">
  <a class="index_hero_tmp" id="index_hero_tmp_c20" href="c20.html"></a
  ><a class="add_chat"><i class="fa fa-star-o" aria-hidden="true"></i></a
  ><a class="remove_chat"><i class="fa fa-star" aria-hidden="true"></i></a>
</li>




    





      </ul>
    </div>
  </div>

  <div>
    <div class="search_blok">
      <div class="search_chat stylelist" id="chatSearch2">
        <div class="search_logo">EML</div>
      </div>
      <div class="myBtnContainer" id="emailFilterContent">
        <a class="email_btn emailfilteractive" onclick="emailfilterSelection('all')">Show all</a>
        <a class="email_btn" onclick="emailfilterSelection('verification')">Verification</a>
        <a class="email_btn" onclick="emailfilterSelection('newaccountsregister')">New accounts register</a>
        <a class="email_btn" onclick="emailfilterSelection('bet')">Bet</a>
        <a class="email_btn" onclick="emailfilterSelection('bonus')">Bonus</a>
        <a class="email_btn" onclick="emailfilterSelection('promo')">Promo</a>
        <a class="email_btn" onclick="emailfilterSelection('sg')">SG</a>
        <a class="email_btn" onclick="emailfilterSelection('payments')">Payments</a>
        <a class="email_btn" onclick="emailfilterSelection('restriction')">Restriction</a>
        <a class="email_btn" onclick="emailfilterSelection('request')">Request</a>
        <a class="email_btn" onclick="emailfilterSelection('Other')">Other</a>
      </div>

      <ul class="favorites_email" id="favorites_email"></ul>

      <ul class="source_email" id="source_email">
      <li class="searchtemplate email">
      <a class="index_hero_tmp" id="index_hero_tmp_e1" href="e1.html"></a
      ><a class="add_email"><i class="fa fa-star-o" aria-hidden="true"></i></a
      ><a class="remove_email"><i class="fa fa-star" aria-hidden="true"></i></a>
    </li>
    

    


      </ul>
    </div>
  </div>


  <div>
    <div class="search_blok">
      <div class="search_chat stylelist" id="chatSearch3">
        <div class="search_logo">SCN</div>
      </div>
      <div class="myBtnContainer" id="scenariosFilterContent">
        <a class="scenarios_btn scenariosfilteractive" onclick="scenariosfilterSelection('all')">Show all</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('verification')">Verification</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('bonus')">Bonus</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('promo')">Promo</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('sg')">SG</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('issue')">Issue</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('bet')">Bet</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('settings')">Settings</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('restriction')">Restriction</a>
        <a class="scenarios_btn" onclick="scenariosfilterSelection('Other')">Other</a>
      </div>

      <ul class="favorites_scenarios" id="favorites_scenarios"></ul>

      <ul class="source_scenarios" id="source_scenarios">

      <li class="searchtemplate scenarios">
      <a class="index_hero_tmp" id="index_hero_tmp_s1" href="s1.html"></a
      ><a class="add_scenarios"><i class="fa fa-star-o" aria-hidden="true"></i></a
      ><a class="remove_scenarios"><i class="fa fa-star" aria-hidden="true"></i></a>
    </li>
    




      </ul>
    </div>
  </div>


  <div>
    <div class="search_blok">
      <div class="search_chat stylelist" id="chatSearch4">
        <div class="search_logo">INS</div>
      </div>
      <div class="myBtnContainer" id="instructionsFilterContent">
        <a class="instructions_btn instructionsfilteractive" onclick="instructionsfilterSelection('all')">Show all</a>
        <a class="instructions_btn" onclick="instructionsfilterSelection('instructionsof')">Instructions</a>
        <a class="instructions_btn" onclick="instructionsfilterSelection('requesti')">Request</a>
        <a class="instructions_btn" onclick="instructionsfilterSelection('emaili')">Email</a>
        <a class="instructions_btn" onclick="instructionsfilterSelection('Other')">Other</a>
      </div>

      <ul class="favorites_instructions" id="favorites_instructions"></ul>

      <ul class="source_instructions" id="source_instructions">
    
      <li class="searchtemplate instructions">
      <a class="index_hero_tmp" id="index_hero_tmp_i1" href="i1.html"></a
      ><a class="add_instructions"
        ><i class="fa fa-star-o" aria-hidden="true"></i></a
      ><a class="remove_instructions"
        ><i class="fa fa-star" aria-hidden="true"></i
      ></a>
    </li>
    





      </ul>
    </div>
  </div>


</div>


`;


// выводить поиск
document.getElementById("nav").innerHTML = navig;
// выводить поиск




//отображение херо
var tabnamedev = `Select device and language:`
var tabnamesce = `Select:`
var tabnameins = `Skip to:`
var tmpd1nameonly = `EN`;
var tmpd2nameonly = `GR`;
var tmpd3nameonly = `RU`;
var tmpd1name = `DSK - EN`;
var tmpd2name = `DSK - GR`;
var tmpd3name = `DSK - RU`;
var tmpd4name = `MOB - EN`;
var tmpd5name = `MOB - GR`;
var tmpd6name = `MOB - RU`;
var tmpd7name = `AND - EN`;
var tmpd8name = `AND - GR`;
var tmpd9name = `AND - RU`;
var tmpd10name = `IOS - EN`;
var tmpd11name = `IOS - GR`;
var tmpd12name = `IOS - RU`;
var tmpscename = `Additional information:`;
var tmpscrname = `Screenshots`;
var tabhome = `<a href="index.html" class="home_button_click"></a>`


//шаблоны

let helloen = `Dear XXXXXXXX,

`;

let hellogr = `Αγαπητέ XXXXXXX,

`;

let helloru = `Уважаемый XXXXXXX,

`;

let greetingen = [`Thank you for contacting our company.

`,
  `Thank you for contacting Fonbet support.

`,
  `Thank you for contacting Fonbet.

`,
  `Thank you for contacting us.

`,
  `Thank you for getting in touch with us.

`
];

let greetinggr = [`Σας ευχαριστούμε που επικοινωνήσατε με την εταιρεία μας.

`,
  `Σας ευχαριστούμε που επικοινωνήσατε με την Υποστήριξη Πελατών της Fonbet.

`,
  `Σας ευχαριστούμε που επικοινωνήσατε με τη Fonbet.

`,
  `Σας ευχαριστούμε που επικοινωνήσατε μαζί μας.

`,
  `Σας ευχαριστούμε για την απάντησή σας.

`
];

let greetingru = [`Благодарим Вас за обращение.

`,
  `Спасибо за Ваше обращение,

`
];



let contactusen = [
  `
  
Should you require any further information, please do not hesitate to contact us.
  
`,
  `
  
Do not hesitate to contact us should you require any further assistance.
  
`,
  `
  
Do not hesitate to contact us should you require any additional information.
  
`,
  `
  
For any additional inquiries, please do not hesitate to contact us.
  
`,
  `
  
Should you require any further assistance, please do not hesitate to contact us.
  
`,
  `
  
Please do not hesitate to contact us should you require any further assistance.
  
`,
  `
  
If you have any additional questions, please don't hesitate to contact us.
  
`,
  `
  
If you require any further information, feel free to contact us.

`,
  `
  
If you require any further information, please let us know.
  
`,
  `
  
Should you need any further information, please do not hesitate to contact us.
  
`,
  `
  
We are at your disposal for any additional information and clarification.
  
`
];

let contactusgr = [
  `
    
Εάν χρειάζεστε περισσότερες πληροφορίες, παρακαλώ μη διστάσετε να επικοινωνήσετε μαζί μας.
    
`,
  `
    
Μη διστάσετε να επικοινωνήσετε μαζί μας εάν χρειάζεστε περαιτέρω βοήθεια.
    
`,
  `
    
Για οποιαδήποτε επιπλέον απορία, παρακαλώ μη διστάσετε να επικοινωνήσετε μαζί μας.
    
`,
  `
    
For any additional inquiries, please do not hesitate to contact us.
    
`,
  `
    
Παρακαλώ μη διστάσετε να επικοινωνήσετε μαζί μας, εάν χρειάζεστε περαιτέρω βοήθεια.
    
`,
  `
    
Εάν έχετε επιπλέον ερωτήσεις, παρακαλώ μη διστάσετε να επικοινωνήσετε μαζί μας.
    
`,
  `
    
Εάν χρειάζεστε περισσότερες πληροφορίες, παρακαλώ ενημερώστε μας.
    
`,
  `
    
Εάν χρειάζεστε περισσότερες πληροφορίες, μη διστάσετε να επικοινωνήσετε μαζί μας.
  
`,
  `
    
Είμαστε στη διάθεσή σας για οποιαδήποτε επιπλέον πληροφορία και διευκρίνιση.
    
`
];

let contactusru = [
  `
      
В случае возникновения дополнительных вопросов, пожалуйста, обращайтесь.
      
`,
  `
      
При возникновении любых вопросов, пожалуйста, обращайтесь.
      
`
];

let byeen =
  `Kind regards,
Fonbet Team`;

let byegr =
  `Θερμούς χαιρετισμούς,
Ομάδα Fonbet`;

let byeru =
  `С уважением,
Команда Фонбет`;





// смена девайса итд
function selectDevice(evt, deviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(deviceName).style.display = "block";
  evt.currentTarget.className += " active";
}

//поиск индекс

function search_index() {
  let input = document.getElementById('nav_search_index_input').value
  input = input.toLowerCase();
  let x = document.querySelectorAll('.searchtemplate');

  for (i = 0; i < x.length; i++) {
    if (!x[i].textContent.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "";
    }
  }
}

//поиск в сценариях

function search_sce() {
  let input = document.getElementById("nav_search_sce_input").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("collapsiblesce");

  for (i = 0; i < x.length; i++) {
    if (!x[i].textContent.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "";
    }
  }
}



// прячем в инструкциях по клику

var collinst = document.getElementsByClassName("collapsibleinst");
var i;

for (i = 0; i < collinst.length; i++) {
  collinst[i].addEventListener("click", function() {
    this.classList.toggle("activeinst");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// прячем в сценариях по клику

var collinst = document.getElementsByClassName("collapsiblesce");
var i;

for (i = 0; i < collinst.length; i++) {
  collinst[i].addEventListener("click", function() {
    this.classList.toggle("activeinst");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}





// копи кнопка

function Copytextfunction(textarea) {
  var value = document.getElementById("modal_content_tmp1d" + textarea).value;
  var copyText = document.createElement("textarea");
  copyText.value = value;
  copyText.style.position = "fixed";
  copyText.style.top = "-1000vh";
  document.body.append(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  console.log(value);
  copyText.remove();
}

// хоткеи

document.onkeydown = function escModal(e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  //   if (key===115){
  //       document.getElementById("modal").classList.add("displaynone");
  //       document.getElementById("hero").classList.remove("herorowereverse");
  // }
  if (key === 113) {
    document.getElementById('nav_search_index_input').focus();
  }
}


// фильтры
chatfilterSelection("all")

function chatfilterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("chat");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    chatRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) chatAddClass(x[i], "show");
  }
}

function chatAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function chatRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var chatbtnContainer = document.getElementById("chatFilterContent");
var chatbtns = chatbtnContainer.getElementsByClassName("chat_btn");
for (var i = 0; i < chatbtns.length; i++) {
  chatbtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("chatfilteractive");
    current[0].className = current[0].className.replace("chatfilteractive", "");
    this.className += " chatfilteractive";
  });
}

// email
emailfilterSelection("all")

function emailfilterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("email");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    emailRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) emailAddClass(x[i], "show");
  }
}

function emailAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function emailRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


var emailbtnContainer = document.getElementById("emailFilterContent");
var emailbtns = emailbtnContainer.getElementsByClassName("email_btn");
for (var i = 0; i < emailbtns.length; i++) {
  emailbtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("emailfilteractive");
    current[0].className = current[0].className.replace("emailfilteractive", "");
    this.className += " emailfilteractive";
  });
}

// scenarios
scenariosfilterSelection("all")

function scenariosfilterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("scenarios");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    scenariosRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) scenariosAddClass(x[i], "show");
  }
}

function scenariosAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function scenariosRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var scenariosbtnContainer = document.getElementById("scenariosFilterContent");
var scenariosbtns = scenariosbtnContainer.getElementsByClassName("scenarios_btn");
for (var i = 0; i < scenariosbtns.length; i++) {
  scenariosbtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("scenariosfilteractive");
    current[0].className = current[0].className.replace("scenariosfilteractive", "");
    this.className += " scenariosfilteractive";
  });
}

// instructions
instructionsfilterSelection("all")

function instructionsfilterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("instructions");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    instructionsRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) instructionsAddClass(x[i], "show");
  }
}

function instructionsAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function instructionsRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var instructionsbtnContainer = document.getElementById("instructionsFilterContent");
var instructionsbtns = instructionsbtnContainer.getElementsByClassName("instructions_btn");
for (var i = 0; i < instructionsbtns.length; i++) {
  instructionsbtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("instructionsfilteractive");
    current[0].className = current[0].className.replace("instructionsfilteractive", "");
    this.className += " instructionsfilteractive";
  });
}

// фильтры








// Фавориты
// favorites odin raz


window.onload = () => {
  document
    .querySelectorAll("li.chat")
    .forEach(function(element_chat, index) {
      if (localStorage.getItem("append_chat" + index) === "true") {
        appendIt_chat(index)();
      }
    });
  document
    .querySelectorAll("li.chat")
    .forEach(function(element_chat, index) {
      if (localStorage.getItem("remove_chat" + index) === "false") {
        removeIt_chat(index)();
      }
    });
  document
    .querySelectorAll("li.email")
    .forEach(function(element_email, index) {
      if (localStorage.getItem("append_email" + index) === "true") {
        appendIt_email(index)();
      }
    });
  document
    .querySelectorAll("li.email")
    .forEach(function(element_email, index) {
      if (localStorage.getItem("remove_email" + index) === "false") {
        removeIt_email(index)();
      }
    });
  document
    .querySelectorAll("li.scenarios")
    .forEach(function(element_scenarios, index) {
      if (localStorage.getItem("append_scenarios" + index) === "true") {
        appendIt_scenarios(index)();
      }
    });
  document
    .querySelectorAll("li.scenarios")
    .forEach(function(element_scenarios, index) {
      if (localStorage.getItem("remove_scenarios" + index) === "false") {
        removeIt_scenarios(index)();
      }
    });
  document
    .querySelectorAll("li.instructions")
    .forEach(function(element_instructions, index) {
      if (localStorage.getItem("append_instructions" + index) === "true") {
        appendIt_instructions(index)();
      }
    });
  document
    .querySelectorAll("li.instructions")
    .forEach(function(element_instructions, index) {
      if (localStorage.getItem("remove_instructions" + index) === "false") {
        removeIt_instructions(index)();
      }
    });
};



// chat favorites


function appendIt_chat(index) {
  const element_chat = document.querySelectorAll("li.chat")[index];
  return function() {
    localStorage.setItem("append_chat" + index, "true");
    document.getElementById("favorites_chat").appendChild(element_chat);
  };

}

function removeIt_chat(index) {
  const element_chat = document.querySelectorAll("li.chat")[index];
  return function() {
    localStorage.setItem("append_chat" + index, "false");
    document.getElementById("source_chat").appendChild(element_chat);
  };
}


document.querySelectorAll("a.add_chat")
  .forEach(function(element_chat, index) {
    element_chat.addEventListener("click", appendIt_chat(index));
  });

document.querySelectorAll("a.remove_chat")
  .forEach(function(element_chat, index) {
    element_chat.addEventListener("click", removeIt_chat(index));
  });


// chat favorites

//  email



function appendIt_email(index) {
  const element_email = document.querySelectorAll("li.email")[index];
  return function() {
    localStorage.setItem("append_email" + index, "true");
    document.getElementById("favorites_email").appendChild(element_email);
  };
}

function removeIt_email(index) {
  const element_email = document.querySelectorAll("li.email")[index];
  return function() {
    localStorage.setItem("append_email" + index, "false");
    document.getElementById("source_email").appendChild(element_email);
  };
}



document.querySelectorAll("a.add_email")
  .forEach(function(element_email, index) {
    element_email.addEventListener("click", appendIt_email(index));
  });


document.querySelectorAll("a.remove_email")
  .forEach(function(element_email, index) {
    element_email.addEventListener("click", removeIt_email(index));
  });


//  email

// scenarios



function appendIt_scenarios(index) {
  const element_scenarios = document.querySelectorAll("li.scenarios")[index];
  return function() {
    localStorage.setItem("append_scenarios" + index, "true");
    document.getElementById("favorites_scenarios").appendChild(element_scenarios);
  };
}

function removeIt_scenarios(index) {
  const element_scenarios = document.querySelectorAll("li.scenarios")[index];
  return function() {
    localStorage.setItem("append_scenarios" + index, "false");
    document.getElementById("source_scenarios").appendChild(element_scenarios);
  };
}



document.querySelectorAll("a.add_scenarios")
  .forEach(function(element_scenarios, index) {
    element_scenarios.addEventListener("click", appendIt_scenarios(index));
  });


document.querySelectorAll("a.remove_scenarios")
  .forEach(function(element_scenarios, index) {
    element_scenarios.addEventListener("click", removeIt_scenarios(index));
  });


// scenarios


// instructions


function appendIt_instructions(index) {
  const element_instructions = document.querySelectorAll("li.instructions")[index];
  return function() {
    localStorage.setItem("append_instructions" + index, "true");
    document.getElementById("favorites_instructions").appendChild(element_instructions);
  };
}

function removeIt_instructions(index) {
  const element_instructions = document.querySelectorAll("li.instructions")[index];
  return function() {
    localStorage.setItem("append_instructions" + index, "false");
    document.getElementById("source_instructions").appendChild(element_instructions);
  };
}


document.querySelectorAll("a.add_instructions")
  .forEach(function(element_instructions, index) {
    element_instructions.addEventListener("click", appendIt_instructions(index));
  });

document.querySelectorAll("a.remove_instructions")
  .forEach(function(element_instructions, index) {
    element_instructions.addEventListener("click", removeIt_instructions(index));
  });

// instructions
// Фавориты

// ню акк регистр

function openAll() {
  const nodeList = document.querySelectorAll(".contentinst");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.toggle("contentinstshow");
  }
}

//шаблоны

//формат поиска после клика
function showHome() {
  document.getElementById("home_button").classList.remove("displaynone");
}

function shiftNav() {

  document.getElementById("search_bloki").classList.add("flex-dir-col");
  document.getElementById("search_bloki").style.marginTop = '-13px';
  document.getElementById("fa_search").style.display = "none";
  document.getElementById("chatSearch1").style.width = '94%';
  document.getElementById("chatSearch2").style.width = '94%';
  document.getElementById("chatSearch3").style.width = '94%';
  document.getElementById("chatSearch4").style.width = '94%';
  document.getElementById("chatSearch1").style.backgroundColor = '#ecc7a5';
  document.getElementById("chatSearch2").style.backgroundColor = '#ecc7a5';
  document.getElementById("chatSearch3").style.backgroundColor = '#ecc7a5';
  document.getElementById("chatSearch4").style.backgroundColor = '#ecc7a5';
  document.getElementById("chatSearch1").style.borderRadius = '0px';
  document.getElementById("chatSearch2").style.borderRadius = '0px';
  document.getElementById("chatSearch3").style.borderRadius = '0px';
  document.getElementById("chatSearch4").style.borderRadius = '0px';
  document.getElementById("nav_search_index_input").style.width = "220px";
}

function heroReverse() {
  document.getElementById("hero").classList.add("herorowereverse");
}

//формат поиска после клика










//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 

// s main

//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 

function scen() {
  heroReverse();
  showHome();
  shiftNav();
  tmptinss1();
}

function tmptinss1() {
  document.getElementById("tabhome").innerHTML = tabhome;
  document.getElementById("tabname").style.display = "none";
}

// s1
names1 = `TESTING s1`
document.getElementById("index_hero_tmp_s1").innerHTML = names1; //index

function s2topName () {
  document.getElementById("modal_nameinss2").innerHTML = names2; //index
}





//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 

// i main

//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 

// i1 main
function inst() {
  heroReverse();
  showHome();
  shiftNav();
  tmptinsi1();
}

function tmptinsi1() {
  document.getElementById("tabhome").innerHTML = tabhome;
  document.getElementById("tabname").style.display = "none";
}

// i1
namei1 = `TESTING i1`
document.getElementById("index_hero_tmp_i1").innerHTML = namei1; //index

function i1topName () {
  document.getElementById("modal_nameinsi1").innerHTML = namei1; //topname
}




//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 

// e main

//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 



//e1
var namee1 = `Account closure confirmed`; // name

document.getElementById("index_hero_tmp_e1").innerHTML = namee1; //index

//tmp два мин чтобы работал рандом
var tmpe1d1text = [`We are sorry to hear that you would like your account to be closed.

This is a confirmation that your account has been successfully closed.`];
var tmpe1d2text = [`Λυπούμαστε που θα θέλατε να κλείσετε τον λογαριασμό σας.

Αυτή είναι μια επιβεβαίωση ότι ο λογαριασμός σας έχει κλείσει.`];
var tmpe1d3text = [`Сожалеем о Вашем решении закрыть счет.

Это подтверждение того, что ваша учетная запись была успешно закрыта.`];
var tmpe1d4text = [`4`];
var tmpe1d5text = [`5`];
var tmpe1d6text = [`6`];
var tmpe1d7text = [`7`];
var tmpe1d8text = [`8`];
var tmpe1d9text = [`9`];
var tmpe1d10text = [`10`];
var tmpe1d11text = [`11`];
var tmpe1d12text = [`12`];


//scr
var tmpscre1d1text = ``;
var tmpscre1d2text = ``;
var tmpscre1d3text = ``;
var tmpscre1d4text = ``;
var tmpscre1d5text = ``;
var tmpscre1d6text = ``;
var tmpscre1d7text = ``;
var tmpscre1d8text = ``;
var tmpscre1d9text = ``;
var tmpscre1d10text = ``;
var tmpscre1d11text = ``;
var tmpscre1d12text = ``;


// sce
var tmpscee1text = `<a class="link" href="#">e1</a>`;



function e1d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpe1d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpe1d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpe1d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpe1d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpe1d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpe1d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpe1d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpe1d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpe1d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpe1d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpe1d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpe1d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpe1d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscre1d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscre1d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscre1d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscre1d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscre1d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscre1d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscre1d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscre1d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscre1d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscre1d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscre1d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscre1d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscee1);


  
}



//d1

function tmpe1d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namee1;  
  document.getElementById("modal_namescre1d1").innerHTML = tmpd1name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d1text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d1").innerHTML = tmpscre1d1text;
}

  function tmptscre1d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpe1d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namee1;  
  document.getElementById("modal_namescre1d2").innerHTML = tmpd2name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = hellogr + greetinggr[Math.floor(Math.random()*greetinggr.length)] + tmpe1d2text + contactusgr[Math.floor(Math.random()*contactusgr.length)] + byegr;  
  document.getElementById("modal_screenshotse1d2").innerHTML = tmpscre1d2text;
}

  function tmptscre1d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpe1d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namee1;  
  document.getElementById("modal_namescre1d3").innerHTML = tmpd3name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = helloru + greetingru[Math.floor(Math.random()*greetingru.length)] + tmpe1d3text + contactusru[Math.floor(Math.random()*contactusru.length)] + byeru;  
  document.getElementById("modal_screenshotse1d3").innerHTML = tmpscre1d3text;
}

  function tmptscre1d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpe1d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namee1;  
  document.getElementById("modal_namescre1d4").innerHTML = tmpd4name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d4text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d4").innerHTML = tmpscre1d4text;
}

  function tmptscre1d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpe1d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namee1;  
  document.getElementById("modal_namescre1d5").innerHTML = tmpd5name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d5text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d5").innerHTML = tmpscre1d5text;
}

  function tmptscre1d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpe1d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namee1;  
  document.getElementById("modal_namescre1d6").innerHTML = tmpd6name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d6text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d6").innerHTML = tmpscre1d6text;
}

  function tmptscre1d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpe1d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namee1;  
  document.getElementById("modal_namescre1d7").innerHTML = tmpd7name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d7text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d7").innerHTML = tmpscre1d7text;
}

  function tmptscre1d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpe1d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namee1;  
  document.getElementById("modal_namescre1d8").innerHTML = tmpd8name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d8text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d8").innerHTML = tmpscre1d8text;
}

  function tmptscre1d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpe1d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namee1;  
  document.getElementById("modal_namescre1d9").innerHTML = tmpd9name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d9text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d9").innerHTML = tmpscre1d9text;
}

  function tmptscre1d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpe1d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namee1;  
  document.getElementById("modal_namescre1d10").innerHTML = tmpd10name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d10text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d10").innerHTML = tmpscre1d10text;
}

  function tmptscre1d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpe1d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namee1;  
  document.getElementById("modal_namescre1d11").innerHTML = tmpd11name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d11text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d11").innerHTML = tmpscre1d11text;
}

  function tmptscre1d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpe1d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namee1;  
  document.getElementById("modal_namescre1d12").innerHTML = tmpd12name + ": Screenshots: " + namee1;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpe1d12text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotse1d12").innerHTML = tmpscre1d12text;
}

  function tmptscre1d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscee1 () {
  document.getElementById("modal_namescee1").innerHTML = "Additional information: " + namee1;
  document.getElementById("modal_content_tmptscee1").innerHTML = tmpscee1text;
  }

















//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 

// c main

//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////// 





//c1
var namec1 = `Available promotions`; // name

document.getElementById("index_hero_tmp_c1").innerHTML = namec1; //index

//tmp два мин чтобы работал рандом
var tmpc1d1text = [`To view our available promotions, please visit our Promotions page:
https://www.fonbet.com.cy/#!/pages/promo`];
var tmpc1d2text = [`Για να δείτε τις διαθέσιμες προσφορές μας, παρακαλώ επισκεφθείτε τη σελίδα Προσφορών μας:
https://www.fonbet.com.cy/#!/pages/promo`];
var tmpc1d3text = [`3`];
var tmpc1d4text = [`4`];
var tmpc1d5text = [`5`];
var tmpc1d6text = [`6`];
var tmpc1d7text = [`7`];
var tmpc1d8text = [`8`];
var tmpc1d9text = [`9`];
var tmpc1d10text = [`10`];
var tmpc1d11text = [`11`];
var tmpc1d12text = [`12`];


//scr
var tmpscrc1d1text = ``;
var tmpscrc1d2text = ``;
var tmpscrc1d3text = ``;
var tmpscrc1d4text = ``;
var tmpscrc1d5text = ``;
var tmpscrc1d6text = ``;
var tmpscrc1d7text = ``;
var tmpscrc1d8text = ``;
var tmpscrc1d9text = ``;
var tmpscrc1d10text = ``;
var tmpscrc1d11text = ``;
var tmpscrc1d12text = ``;


// sce
var tmpscec1text = `<a class="link" href="#">c1</a>`;



function c1d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc1d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc1d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc1d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc1d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc1d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc1d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc1d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc1d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc1d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc1d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc1d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc1d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc1d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc1d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc1d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc1d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc1d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc1d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc1d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc1d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc1d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc1d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc1d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc1d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc1d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec1);


  
}



//d1

function tmpc1d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec1;  
  document.getElementById("modal_namescrc1d1").innerHTML = tmpd1name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc1d1text;  
  document.getElementById("modal_screenshotsc1d1").innerHTML = tmpscrc1d1text;
}

  function tmptscrc1d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc1d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec1;  
  document.getElementById("modal_namescrc1d2").innerHTML = tmpd2name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc1d2text;  
  document.getElementById("modal_screenshotsc1d2").innerHTML = tmpscrc1d2text;
}

  function tmptscrc1d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc1d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec1;  
  document.getElementById("modal_namescrc1d3").innerHTML = tmpd3name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc1d3text;  
  document.getElementById("modal_screenshotsc1d3").innerHTML = tmpscrc1d3text;
}

  function tmptscrc1d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc1d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec1;  
  document.getElementById("modal_namescrc1d4").innerHTML = tmpd4name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc1d4text;  
  document.getElementById("modal_screenshotsc1d4").innerHTML = tmpscrc1d4text;
}

  function tmptscrc1d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc1d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec1;  
  document.getElementById("modal_namescrc1d5").innerHTML = tmpd5name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc1d5text;  
  document.getElementById("modal_screenshotsc1d5").innerHTML = tmpscrc1d5text;
}

  function tmptscrc1d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc1d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec1;  
  document.getElementById("modal_namescrc1d6").innerHTML = tmpd6name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc1d6text;  
  document.getElementById("modal_screenshotsc1d6").innerHTML = tmpscrc1d6text;
}

  function tmptscrc1d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc1d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec1;  
  document.getElementById("modal_namescrc1d7").innerHTML = tmpd7name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc1d7text;  
  document.getElementById("modal_screenshotsc1d7").innerHTML = tmpscrc1d7text;
}

  function tmptscrc1d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc1d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec1;  
  document.getElementById("modal_namescrc1d8").innerHTML = tmpd8name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc1d8text;  
  document.getElementById("modal_screenshotsc1d8").innerHTML = tmpscrc1d8text;
}

  function tmptscrc1d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc1d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec1;  
  document.getElementById("modal_namescrc1d9").innerHTML = tmpd9name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc1d9text;  
  document.getElementById("modal_screenshotsc1d9").innerHTML = tmpscrc1d9text;
}

  function tmptscrc1d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc1d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec1;  
  document.getElementById("modal_namescrc1d10").innerHTML = tmpd10name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc1d10text;  
  document.getElementById("modal_screenshotsc1d10").innerHTML = tmpscrc1d10text;
}

  function tmptscrc1d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc1d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec1;  
  document.getElementById("modal_namescrc1d11").innerHTML = tmpd11name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc1d11text;  
  document.getElementById("modal_screenshotsc1d11").innerHTML = tmpscrc1d11text;
}

  function tmptscrc1d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc1d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec1;  
  document.getElementById("modal_namescrc1d12").innerHTML = tmpd12name + ": Screenshots: " + namec1;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc1d12text;  
  document.getElementById("modal_screenshotsc1d12").innerHTML = tmpscrc1d12text;
}

  function tmptscrc1d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec1 () {
  document.getElementById("modal_namescec1").innerHTML = "Additional information: " + namec1;
  document.getElementById("modal_content_tmptscec1").innerHTML = tmpscec1text;
  }
  

//c2
var namec2 = `Are you Fonbet?`; // name

document.getElementById("index_hero_tmp_c2").innerHTML = namec2; //index

//tmp два мин чтобы работал рандом
var tmpc2d1text = [`Company Fortune Entertainment is working under the Fonbet brand.

If you have any further queries please email us at support@fonbet.com.cy`];
var tmpc2d2text = [`Η εταιρεία Fortune Entertainment λειτουργεί με την επωνυμία Fonbet.

Εάν έχετε περαιτέρω απορίες, στείλτε μας email στο support@fonbet.com.cy`];
var tmpc2d3text = [`3`];
var tmpc2d4text = [`4`];
var tmpc2d5text = [`5`];
var tmpc2d6text = [`6`];
var tmpc2d7text = [`7`];
var tmpc2d8text = [`8`];
var tmpc2d9text = [`9`];
var tmpc2d10text = [`10`];
var tmpc2d11text = [`11`];
var tmpc2d12text = [`12`];


//scr
var tmpscrc2d1text = ``;
var tmpscrc2d2text = ``;
var tmpscrc2d3text = ``;
var tmpscrc2d4text = ``;
var tmpscrc2d5text = ``;
var tmpscrc2d6text = ``;
var tmpscrc2d7text = ``;
var tmpscrc2d8text = ``;
var tmpscrc2d9text = ``;
var tmpscrc2d10text = ``;
var tmpscrc2d11text = ``;
var tmpscrc2d12text = ``;


// sce
var tmpscec2text = `<a class="link" href="#">c2</a>`;



function c2d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc2d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc2d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc2d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc2d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc2d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc2d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc2d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc2d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc2d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc2d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc2d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc2d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc2d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc2d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc2d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc2d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc2d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc2d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc2d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc2d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc2d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc2d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc2d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc2d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc2d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec2);


  
}



//d1

function tmpc2d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec2;  
  document.getElementById("modal_namescrc2d1").innerHTML = tmpd1name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc2d1text;  
  document.getElementById("modal_screenshotsc2d1").innerHTML = tmpscrc2d1text;
}

  function tmptscrc2d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc2d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec2;  
  document.getElementById("modal_namescrc2d2").innerHTML = tmpd2name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc2d2text;  
  document.getElementById("modal_screenshotsc2d2").innerHTML = tmpscrc2d2text;
}

  function tmptscrc2d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc2d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec2;  
  document.getElementById("modal_namescrc2d3").innerHTML = tmpd3name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc2d3text;  
  document.getElementById("modal_screenshotsc2d3").innerHTML = tmpscrc2d3text;
}

  function tmptscrc2d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc2d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec2;  
  document.getElementById("modal_namescrc2d4").innerHTML = tmpd4name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc2d4text;  
  document.getElementById("modal_screenshotsc2d4").innerHTML = tmpscrc2d4text;
}

  function tmptscrc2d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc2d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec2;  
  document.getElementById("modal_namescrc2d5").innerHTML = tmpd5name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc2d5text;  
  document.getElementById("modal_screenshotsc2d5").innerHTML = tmpscrc2d5text;
}

  function tmptscrc2d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc2d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec2;  
  document.getElementById("modal_namescrc2d6").innerHTML = tmpd6name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc2d6text;  
  document.getElementById("modal_screenshotsc2d6").innerHTML = tmpscrc2d6text;
}

  function tmptscrc2d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc2d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec2;  
  document.getElementById("modal_namescrc2d7").innerHTML = tmpd7name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc2d7text;  
  document.getElementById("modal_screenshotsc2d7").innerHTML = tmpscrc2d7text;
}

  function tmptscrc2d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc2d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec2;  
  document.getElementById("modal_namescrc2d8").innerHTML = tmpd8name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc2d8text;  
  document.getElementById("modal_screenshotsc2d8").innerHTML = tmpscrc2d8text;
}

  function tmptscrc2d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc2d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec2;  
  document.getElementById("modal_namescrc2d9").innerHTML = tmpd9name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc2d9text;  
  document.getElementById("modal_screenshotsc2d9").innerHTML = tmpscrc2d9text;
}

  function tmptscrc2d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc2d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec2;  
  document.getElementById("modal_namescrc2d10").innerHTML = tmpd10name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc2d10text;  
  document.getElementById("modal_screenshotsc2d10").innerHTML = tmpscrc2d10text;
}

  function tmptscrc2d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc2d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec2;  
  document.getElementById("modal_namescrc2d11").innerHTML = tmpd11name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc2d11text;  
  document.getElementById("modal_screenshotsc2d11").innerHTML = tmpscrc2d11text;
}

  function tmptscrc2d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc2d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec2;  
  document.getElementById("modal_namescrc2d12").innerHTML = tmpd12name + ": Screenshots: " + namec2;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc2d12text;  
  document.getElementById("modal_screenshotsc2d12").innerHTML = tmpscrc2d12text;
}

  function tmptscrc2d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec2 () {
  document.getElementById("modal_namescec2").innerHTML = "Additional information: " + namec2;
  document.getElementById("modal_content_tmptscec2").innerHTML = tmpscec2text;
  }
  
//c3
var namec3 = `Calling from abroad`; // name

document.getElementById("index_hero_tmp_c3").innerHTML = namec3; //index

//tmp два мин чтобы работал рандом
var tmpc3d1text = [`If you're calling from abroad you can call us at +357 22267720.`];
var tmpc3d2text = [`Εάν καλείτε από το εξωτερικό μπορείτε να μας καλέσετε στο +357 22267720.`];
var tmpc3d3text = [`3`];
var tmpc3d4text = [`4`];
var tmpc3d5text = [`5`];
var tmpc3d6text = [`6`];
var tmpc3d7text = [`7`];
var tmpc3d8text = [`8`];
var tmpc3d9text = [`9`];
var tmpc3d10text = [`10`];
var tmpc3d11text = [`11`];
var tmpc3d12text = [`12`];


//scr
var tmpscrc3d1text = ``;
var tmpscrc3d2text = ``;
var tmpscrc3d3text = ``;
var tmpscrc3d4text = ``;
var tmpscrc3d5text = ``;
var tmpscrc3d6text = ``;
var tmpscrc3d7text = ``;
var tmpscrc3d8text = ``;
var tmpscrc3d9text = ``;
var tmpscrc3d10text = ``;
var tmpscrc3d11text = ``;
var tmpscrc3d12text = ``;


// sce
var tmpscec3text = `<a class="link" href="#">c3</a>`;



function c3d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc3d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc3d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc3d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc3d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc3d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc3d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc3d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc3d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc3d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc3d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc3d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc3d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc3d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc3d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc3d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc3d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc3d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc3d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc3d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc3d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc3d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc3d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc3d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc3d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc3d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec3);


  
}



//d1

function tmpc3d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec3;  
  document.getElementById("modal_namescrc3d1").innerHTML = tmpd1name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc3d1text;  
  document.getElementById("modal_screenshotsc3d1").innerHTML = tmpscrc3d1text;
}

  function tmptscrc3d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc3d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec3;  
  document.getElementById("modal_namescrc3d2").innerHTML = tmpd2name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc3d2text;  
  document.getElementById("modal_screenshotsc3d2").innerHTML = tmpscrc3d2text;
}

  function tmptscrc3d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc3d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec3;  
  document.getElementById("modal_namescrc3d3").innerHTML = tmpd3name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc3d3text;  
  document.getElementById("modal_screenshotsc3d3").innerHTML = tmpscrc3d3text;
}

  function tmptscrc3d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc3d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec3;  
  document.getElementById("modal_namescrc3d4").innerHTML = tmpd4name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc3d4text;  
  document.getElementById("modal_screenshotsc3d4").innerHTML = tmpscrc3d4text;
}

  function tmptscrc3d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc3d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec3;  
  document.getElementById("modal_namescrc3d5").innerHTML = tmpd5name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc3d5text;  
  document.getElementById("modal_screenshotsc3d5").innerHTML = tmpscrc3d5text;
}

  function tmptscrc3d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc3d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec3;  
  document.getElementById("modal_namescrc3d6").innerHTML = tmpd6name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc3d6text;  
  document.getElementById("modal_screenshotsc3d6").innerHTML = tmpscrc3d6text;
}

  function tmptscrc3d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc3d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec3;  
  document.getElementById("modal_namescrc3d7").innerHTML = tmpd7name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc3d7text;  
  document.getElementById("modal_screenshotsc3d7").innerHTML = tmpscrc3d7text;
}

  function tmptscrc3d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc3d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec3;  
  document.getElementById("modal_namescrc3d8").innerHTML = tmpd8name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc3d8text;  
  document.getElementById("modal_screenshotsc3d8").innerHTML = tmpscrc3d8text;
}

  function tmptscrc3d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc3d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec3;  
  document.getElementById("modal_namescrc3d9").innerHTML = tmpd9name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc3d9text;  
  document.getElementById("modal_screenshotsc3d9").innerHTML = tmpscrc3d9text;
}

  function tmptscrc3d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc3d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec3;  
  document.getElementById("modal_namescrc3d10").innerHTML = tmpd10name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc3d10text;  
  document.getElementById("modal_screenshotsc3d10").innerHTML = tmpscrc3d10text;
}

  function tmptscrc3d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc3d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec3;  
  document.getElementById("modal_namescrc3d11").innerHTML = tmpd11name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc3d11text;  
  document.getElementById("modal_screenshotsc3d11").innerHTML = tmpscrc3d11text;
}

  function tmptscrc3d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc3d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec3;  
  document.getElementById("modal_namescrc3d12").innerHTML = tmpd12name + ": Screenshots: " + namec3;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc3d12text;  
  document.getElementById("modal_screenshotsc3d12").innerHTML = tmpscrc3d12text;
}

  function tmptscrc3d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec3 () {
  document.getElementById("modal_namescec3").innerHTML = "Additional information: " + namec3;
  document.getElementById("modal_content_tmptscec3").innerHTML = tmpscec3text;
  }
  
  //c4
var namec4 = `Can you review my documents?`; // name

document.getElementById("index_hero_tmp_c4").innerHTML = namec4; //index

//tmp два мин чтобы работал рандом
var tmpc4d1text = [`Unfortunately, live-chat agents are unable to review your verification documents. However, our verification department will review your documents and respond shortly.`];
var tmpc4d2text = [`Δυστυχώς, οι λειτουργοί ζωντανής συνομιλίας δεν μπορούν να ελέγξουν τα έγγραφα επαλήθευσης σας. Ωστόσο, το τμήμα επαλήθευσης θα εξετάσει τα έγγραφά σας και θα απαντήσει σύντομα.`];
var tmpc4d3text = [`3`];
var tmpc4d4text = [`4`];
var tmpc4d5text = [`5`];
var tmpc4d6text = [`6`];
var tmpc4d7text = [`7`];
var tmpc4d8text = [`8`];
var tmpc4d9text = [`9`];
var tmpc4d10text = [`10`];
var tmpc4d11text = [`11`];
var tmpc4d12text = [`12`];


//scr
var tmpscrc4d1text = ``;
var tmpscrc4d2text = ``;
var tmpscrc4d3text = ``;
var tmpscrc4d4text = ``;
var tmpscrc4d5text = ``;
var tmpscrc4d6text = ``;
var tmpscrc4d7text = ``;
var tmpscrc4d8text = ``;
var tmpscrc4d9text = ``;
var tmpscrc4d10text = ``;
var tmpscrc4d11text = ``;
var tmpscrc4d12text = ``;


// sce
var tmpscec4text = `<a class="link" href="#">c4</a>`;



function c4d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc4d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc4d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc4d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc4d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc4d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc4d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc4d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc4d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc4d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc4d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc4d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc4d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc4d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc4d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc4d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc4d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc4d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc4d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc4d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc4d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc4d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc4d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc4d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc4d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc4d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec4);


  
}



//d1

function tmpc4d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec4;  
  document.getElementById("modal_namescrc4d1").innerHTML = tmpd1name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc4d1text;  
  document.getElementById("modal_screenshotsc4d1").innerHTML = tmpscrc4d1text;
}

  function tmptscrc4d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc4d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec4;  
  document.getElementById("modal_namescrc4d2").innerHTML = tmpd2name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc4d2text;  
  document.getElementById("modal_screenshotsc4d2").innerHTML = tmpscrc4d2text;
}

  function tmptscrc4d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc4d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec4;  
  document.getElementById("modal_namescrc4d3").innerHTML = tmpd3name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc4d3text;  
  document.getElementById("modal_screenshotsc4d3").innerHTML = tmpscrc4d3text;
}

  function tmptscrc4d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc4d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec4;  
  document.getElementById("modal_namescrc4d4").innerHTML = tmpd4name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc4d4text;  
  document.getElementById("modal_screenshotsc4d4").innerHTML = tmpscrc4d4text;
}

  function tmptscrc4d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc4d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec4;  
  document.getElementById("modal_namescrc4d5").innerHTML = tmpd5name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc4d5text;  
  document.getElementById("modal_screenshotsc4d5").innerHTML = tmpscrc4d5text;
}

  function tmptscrc4d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc4d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec4;  
  document.getElementById("modal_namescrc4d6").innerHTML = tmpd6name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc4d6text;  
  document.getElementById("modal_screenshotsc4d6").innerHTML = tmpscrc4d6text;
}

  function tmptscrc4d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc4d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec4;  
  document.getElementById("modal_namescrc4d7").innerHTML = tmpd7name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc4d7text;  
  document.getElementById("modal_screenshotsc4d7").innerHTML = tmpscrc4d7text;
}

  function tmptscrc4d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc4d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec4;  
  document.getElementById("modal_namescrc4d8").innerHTML = tmpd8name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc4d8text;  
  document.getElementById("modal_screenshotsc4d8").innerHTML = tmpscrc4d8text;
}

  function tmptscrc4d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc4d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec4;  
  document.getElementById("modal_namescrc4d9").innerHTML = tmpd9name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc4d9text;  
  document.getElementById("modal_screenshotsc4d9").innerHTML = tmpscrc4d9text;
}

  function tmptscrc4d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc4d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec4;  
  document.getElementById("modal_namescrc4d10").innerHTML = tmpd10name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc4d10text;  
  document.getElementById("modal_screenshotsc4d10").innerHTML = tmpscrc4d10text;
}

  function tmptscrc4d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc4d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec4;  
  document.getElementById("modal_namescrc4d11").innerHTML = tmpd11name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc4d11text;  
  document.getElementById("modal_screenshotsc4d11").innerHTML = tmpscrc4d11text;
}

  function tmptscrc4d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc4d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec4;  
  document.getElementById("modal_namescrc4d12").innerHTML = tmpd12name + ": Screenshots: " + namec4;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc4d12text;  
  document.getElementById("modal_screenshotsc4d12").innerHTML = tmpscrc4d12text;
}

  function tmptscrc4d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec4 () {
  document.getElementById("modal_namescec4").innerHTML = "Additional information: " + namec4;
  document.getElementById("modal_content_tmptscec4").innerHTML = tmpscec4text;
  }

//c5
var namec5 = `Cancel a bet`; // name

document.getElementById("index_hero_tmp_c5").innerHTML = namec5; //index

//tmp два мин чтобы работал рандом
var tmpc5d1text = [`Once you have placed and confirmed your bet, it cannot be cancelled. You should ensure that all your bet details are correct before placing a bet.`];
var tmpc5d2text = [`Όταν τοποθετήσετε και επιβεβαιώσετε το στοίχημά σας, δεν μπορεί να ακυρωθεί. Πρέπει να βεβαιωθείτε ότι όλες οι λεπτομέρειες του στοιχήματός σας είναι σωστές πριν τοποθετήσετε ένα στοίχημα.`];
var tmpc5d3text = [`3`];
var tmpc5d4text = [`4`];
var tmpc5d5text = [`5`];
var tmpc5d6text = [`6`];
var tmpc5d7text = [`7`];
var tmpc5d8text = [`8`];
var tmpc5d9text = [`9`];
var tmpc5d10text = [`10`];
var tmpc5d11text = [`11`];
var tmpc5d12text = [`12`];


//scr
var tmpscrc5d1text = ``;
var tmpscrc5d2text = ``;
var tmpscrc5d3text = ``;
var tmpscrc5d4text = ``;
var tmpscrc5d5text = ``;
var tmpscrc5d6text = ``;
var tmpscrc5d7text = ``;
var tmpscrc5d8text = ``;
var tmpscrc5d9text = ``;
var tmpscrc5d10text = ``;
var tmpscrc5d11text = ``;
var tmpscrc5d12text = ``;


// sce
var tmpscec5text = `<a class="link" href="#">c5</a>`;



function c5d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc5d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc5d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc5d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc5d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc5d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc5d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc5d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc5d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc5d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc5d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc5d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc5d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc5d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc5d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc5d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc5d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc5d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc5d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc5d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc5d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc5d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc5d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc5d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc5d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc5d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec5);


  
}



//d1

function tmpc5d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec5;  
  document.getElementById("modal_namescrc5d1").innerHTML = tmpd1name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc5d1text;  
  document.getElementById("modal_screenshotsc5d1").innerHTML = tmpscrc5d1text;
}

  function tmptscrc5d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc5d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec5;  
  document.getElementById("modal_namescrc5d2").innerHTML = tmpd2name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc5d2text;  
  document.getElementById("modal_screenshotsc5d2").innerHTML = tmpscrc5d2text;
}

  function tmptscrc5d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc5d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec5;  
  document.getElementById("modal_namescrc5d3").innerHTML = tmpd3name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc5d3text;  
  document.getElementById("modal_screenshotsc5d3").innerHTML = tmpscrc5d3text;
}

  function tmptscrc5d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc5d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec5;  
  document.getElementById("modal_namescrc5d4").innerHTML = tmpd4name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc5d4text;  
  document.getElementById("modal_screenshotsc5d4").innerHTML = tmpscrc5d4text;
}

  function tmptscrc5d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc5d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec5;  
  document.getElementById("modal_namescrc5d5").innerHTML = tmpd5name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc5d5text;  
  document.getElementById("modal_screenshotsc5d5").innerHTML = tmpscrc5d5text;
}

  function tmptscrc5d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc5d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec5;  
  document.getElementById("modal_namescrc5d6").innerHTML = tmpd6name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc5d6text;  
  document.getElementById("modal_screenshotsc5d6").innerHTML = tmpscrc5d6text;
}

  function tmptscrc5d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc5d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec5;  
  document.getElementById("modal_namescrc5d7").innerHTML = tmpd7name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc5d7text;  
  document.getElementById("modal_screenshotsc5d7").innerHTML = tmpscrc5d7text;
}

  function tmptscrc5d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc5d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec5;  
  document.getElementById("modal_namescrc5d8").innerHTML = tmpd8name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc5d8text;  
  document.getElementById("modal_screenshotsc5d8").innerHTML = tmpscrc5d8text;
}

  function tmptscrc5d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc5d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec5;  
  document.getElementById("modal_namescrc5d9").innerHTML = tmpd9name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc5d9text;  
  document.getElementById("modal_screenshotsc5d9").innerHTML = tmpscrc5d9text;
}

  function tmptscrc5d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc5d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec5;  
  document.getElementById("modal_namescrc5d10").innerHTML = tmpd10name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc5d10text;  
  document.getElementById("modal_screenshotsc5d10").innerHTML = tmpscrc5d10text;
}

  function tmptscrc5d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc5d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec5;  
  document.getElementById("modal_namescrc5d11").innerHTML = tmpd11name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc5d11text;  
  document.getElementById("modal_screenshotsc5d11").innerHTML = tmpscrc5d11text;
}

  function tmptscrc5d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc5d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec5;  
  document.getElementById("modal_namescrc5d12").innerHTML = tmpd12name + ": Screenshots: " + namec5;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc5d12text;  
  document.getElementById("modal_screenshotsc5d12").innerHTML = tmpscrc5d12text;
}

  function tmptscrc5d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec5 () {
  document.getElementById("modal_namescec5").innerHTML = "Additional information: " + namec5;
  document.getElementById("modal_content_tmptscec5").innerHTML = tmpscec5text;
  }

  
//c6
var namec6 = `Cash-out unavailable`; // name

document.getElementById("index_hero_tmp_c6").innerHTML = namec6; //index

//tmp два мин чтобы работал рандом
var tmpc6d1text = [`The markets for which cash out is available are determined by the Company. The Company does not guarantee that all markets will facilitate the cash out option. The customer can see cash out availability after the bet has been placed.`];
var tmpc6d2text = [`Οι αγορές για το κλείσιμο στοιχήματος καθορίζονται από την Εταιρεία. Η Εταιρεία δεν εγγυάται ότι όλες οι αγορές θα διαθέτουν την επιλογή για το κλείσιμο του στοιχήματος. Ο πελάτης μπορεί να δει την διαθεσιμότητα για το κλείσιμο στοιχήματος μετά την τοποθέτηση του στοιχήματος.`];
var tmpc6d3text = [`3`];
var tmpc6d4text = [`4`];
var tmpc6d5text = [`5`];
var tmpc6d6text = [`6`];
var tmpc6d7text = [`7`];
var tmpc6d8text = [`8`];
var tmpc6d9text = [`9`];
var tmpc6d10text = [`10`];
var tmpc6d11text = [`11`];
var tmpc6d12text = [`12`];


//scr
var tmpscrc6d1text = ``;
var tmpscrc6d2text = ``;
var tmpscrc6d3text = ``;
var tmpscrc6d4text = ``;
var tmpscrc6d5text = ``;
var tmpscrc6d6text = ``;
var tmpscrc6d7text = ``;
var tmpscrc6d8text = ``;
var tmpscrc6d9text = ``;
var tmpscrc6d10text = ``;
var tmpscrc6d11text = ``;
var tmpscrc6d12text = ``;


// sce
var tmpscec6text = `<a class="link" href="#">c6</a>`;



function c6d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc6d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc6d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc6d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc6d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc6d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc6d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc6d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc6d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc6d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc6d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc6d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc6d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc6d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc6d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc6d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc6d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc6d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc6d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc6d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc6d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc6d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc6d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc6d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc6d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc6d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec6);


  
}



//d1

function tmpc6d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec6;  
  document.getElementById("modal_namescrc6d1").innerHTML = tmpd1name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc6d1text;  
  document.getElementById("modal_screenshotsc6d1").innerHTML = tmpscrc6d1text;
}

  function tmptscrc6d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc6d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec6;  
  document.getElementById("modal_namescrc6d2").innerHTML = tmpd2name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc6d2text;  
  document.getElementById("modal_screenshotsc6d2").innerHTML = tmpscrc6d2text;
}

  function tmptscrc6d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc6d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec6;  
  document.getElementById("modal_namescrc6d3").innerHTML = tmpd3name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc6d3text;  
  document.getElementById("modal_screenshotsc6d3").innerHTML = tmpscrc6d3text;
}

  function tmptscrc6d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc6d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec6;  
  document.getElementById("modal_namescrc6d4").innerHTML = tmpd4name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc6d4text;  
  document.getElementById("modal_screenshotsc6d4").innerHTML = tmpscrc6d4text;
}

  function tmptscrc6d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc6d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec6;  
  document.getElementById("modal_namescrc6d5").innerHTML = tmpd5name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc6d5text;  
  document.getElementById("modal_screenshotsc6d5").innerHTML = tmpscrc6d5text;
}

  function tmptscrc6d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc6d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec6;  
  document.getElementById("modal_namescrc6d6").innerHTML = tmpd6name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc6d6text;  
  document.getElementById("modal_screenshotsc6d6").innerHTML = tmpscrc6d6text;
}

  function tmptscrc6d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc6d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec6;  
  document.getElementById("modal_namescrc6d7").innerHTML = tmpd7name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc6d7text;  
  document.getElementById("modal_screenshotsc6d7").innerHTML = tmpscrc6d7text;
}

  function tmptscrc6d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc6d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec6;  
  document.getElementById("modal_namescrc6d8").innerHTML = tmpd8name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc6d8text;  
  document.getElementById("modal_screenshotsc6d8").innerHTML = tmpscrc6d8text;
}

  function tmptscrc6d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc6d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec6;  
  document.getElementById("modal_namescrc6d9").innerHTML = tmpd9name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc6d9text;  
  document.getElementById("modal_screenshotsc6d9").innerHTML = tmpscrc6d9text;
}

  function tmptscrc6d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc6d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec6;  
  document.getElementById("modal_namescrc6d10").innerHTML = tmpd10name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc6d10text;  
  document.getElementById("modal_screenshotsc6d10").innerHTML = tmpscrc6d10text;
}

  function tmptscrc6d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc6d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec6;  
  document.getElementById("modal_namescrc6d11").innerHTML = tmpd11name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc6d11text;  
  document.getElementById("modal_screenshotsc6d11").innerHTML = tmpscrc6d11text;
}

  function tmptscrc6d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc6d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec6;  
  document.getElementById("modal_namescrc6d12").innerHTML = tmpd12name + ": Screenshots: " + namec6;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc6d12text;  
  document.getElementById("modal_screenshotsc6d12").innerHTML = tmpscrc6d12text;
}

  function tmptscrc6d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec6 () {
  document.getElementById("modal_namescec6").innerHTML = "Additional information: " + namec6;
  document.getElementById("modal_content_tmptscec6").innerHTML = tmpscec6text;
  }

  //c7
var namec7 = `Change currency`; // name

document.getElementById("index_hero_tmp_c7").innerHTML = namec7; //index

//tmp два мин чтобы работал рандом
var tmpc7d1text = [`Unfortunately, the currency cannot be changed as Fonbet only operates in Euros.`];
var tmpc7d2text = [`Δυστυχώς, το νόμισμα δεν μπορεί να αλλάξει καθώς η Fonbet λειτουργεί μόνο σε ευρώ.`];
var tmpc7d3text = [`3`];
var tmpc7d4text = [`4`];
var tmpc7d5text = [`5`];
var tmpc7d6text = [`6`];
var tmpc7d7text = [`7`];
var tmpc7d8text = [`8`];
var tmpc7d9text = [`9`];
var tmpc7d10text = [`10`];
var tmpc7d11text = [`11`];
var tmpc7d12text = [`12`];


//scr
var tmpscrc7d1text = ``;
var tmpscrc7d2text = ``;
var tmpscrc7d3text = ``;
var tmpscrc7d4text = ``;
var tmpscrc7d5text = ``;
var tmpscrc7d6text = ``;
var tmpscrc7d7text = ``;
var tmpscrc7d8text = ``;
var tmpscrc7d9text = ``;
var tmpscrc7d10text = ``;
var tmpscrc7d11text = ``;
var tmpscrc7d12text = ``;


// sce
var tmpscec7text = `<a class="link" href="#">c7</a>`;



function c7d1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpc7d1 ();   
  showHome (); 
  shiftNav ();


  document.getElementById("defaultOpen1").innerHTML = tmpd1name;
  document.getElementById("defaultOpen2").innerHTML = tmpd2name;
  document.getElementById("defaultOpen3").innerHTML = tmpd3name;
  document.getElementById("defaultOpen4").innerHTML = tmpd4name;
  document.getElementById("defaultOpen5").innerHTML = tmpd5name;
  document.getElementById("defaultOpen6").innerHTML = tmpd6name;
  document.getElementById("defaultOpen7").innerHTML = tmpd7name;
  document.getElementById("defaultOpen8").innerHTML = tmpd8name;
  document.getElementById("defaultOpen9").innerHTML = tmpd9name;
  document.getElementById("defaultOpen10").innerHTML = tmpd10name;
  document.getElementById("defaultOpen11").innerHTML = tmpd11name;
  document.getElementById("defaultOpen12").innerHTML = tmpd12name;


  document.getElementById("defaultOpen13").innerHTML = tmpscename;

 // только яз скр 
 document.getElementById("defaultOpen4").style.display = "none"; // убр скр
 document.getElementById("defaultOpen5").style.display = "none";
 document.getElementById("defaultOpen6").style.display = "none";
 document.getElementById("defaultOpen7").style.display = "none";
 document.getElementById("defaultOpen8").style.display = "none";
 document.getElementById("defaultOpen9").style.display = "none";
 document.getElementById("defaultOpen10").style.display = "none";
 document.getElementById("defaultOpen11").style.display = "none";
 document.getElementById("defaultOpen12").style.display = "none";

document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

  document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
  document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
  document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpc7d1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpc7d2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpc7d3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpc7d4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpc7d5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpc7d6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpc7d7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpc7d8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpc7d9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpc7d10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpc7d11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpc7d12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrc7d1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrc7d2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrc7d3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrc7d4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrc7d5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrc7d6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrc7d7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrc7d8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrc7d9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrc7d10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrc7d11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrc7d12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscec7);


  
}



//d1

function tmpc7d1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + namec7;  
  document.getElementById("modal_namescrc7d1").innerHTML = tmpd1name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpc7d1text;  
  document.getElementById("modal_screenshotsc7d1").innerHTML = tmpscrc7d1text;
}

  function tmptscrc7d1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpc7d2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + namec7;  
  document.getElementById("modal_namescrc7d2").innerHTML = tmpd2name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpc7d2text;  
  document.getElementById("modal_screenshotsc7d2").innerHTML = tmpscrc7d2text;
}

  function tmptscrc7d2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpc7d3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + namec7;  
  document.getElementById("modal_namescrc7d3").innerHTML = tmpd3name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpc7d3text;  
  document.getElementById("modal_screenshotsc7d3").innerHTML = tmpscrc7d3text;
}

  function tmptscrc7d3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpc7d4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namec7;  
  document.getElementById("modal_namescrc7d4").innerHTML = tmpd4name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpc7d4text;  
  document.getElementById("modal_screenshotsc7d4").innerHTML = tmpscrc7d4text;
}

  function tmptscrc7d4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpc7d5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namec7;  
  document.getElementById("modal_namescrc7d5").innerHTML = tmpd5name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpc7d5text;  
  document.getElementById("modal_screenshotsc7d5").innerHTML = tmpscrc7d5text;
}

  function tmptscrc7d5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpc7d6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namec7;  
  document.getElementById("modal_namescrc7d6").innerHTML = tmpd6name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpc7d6text;  
  document.getElementById("modal_screenshotsc7d6").innerHTML = tmpscrc7d6text;
}

  function tmptscrc7d6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpc7d7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namec7;  
  document.getElementById("modal_namescrc7d7").innerHTML = tmpd7name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpc7d7text;  
  document.getElementById("modal_screenshotsc7d7").innerHTML = tmpscrc7d7text;
}

  function tmptscrc7d7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpc7d8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namec7;  
  document.getElementById("modal_namescrc7d8").innerHTML = tmpd8name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpc7d8text;  
  document.getElementById("modal_screenshotsc7d8").innerHTML = tmpscrc7d8text;
}

  function tmptscrc7d8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpc7d9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namec7;  
  document.getElementById("modal_namescrc7d9").innerHTML = tmpd9name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpc7d9text;  
  document.getElementById("modal_screenshotsc7d9").innerHTML = tmpscrc7d9text;
}

  function tmptscrc7d9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpc7d10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namec7;  
  document.getElementById("modal_namescrc7d10").innerHTML = tmpd10name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpc7d10text;  
  document.getElementById("modal_screenshotsc7d10").innerHTML = tmpscrc7d10text;
}

  function tmptscrc7d10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpc7d11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namec7;  
  document.getElementById("modal_namescrc7d11").innerHTML = tmpd11name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpc7d11text;  
  document.getElementById("modal_screenshotsc7d11").innerHTML = tmpscrc7d11text;
}

  function tmptscrc7d11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpc7d12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namec7;  
  document.getElementById("modal_namescrc7d12").innerHTML = tmpd12name + ": Screenshots: " + namec7;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpc7d12text;  
  document.getElementById("modal_screenshotsc7d12").innerHTML = tmpscrc7d12text;
}

  function tmptscrc7d12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscec7 () {
  document.getElementById("modal_namescec7").innerHTML = "Additional information: " + namec7;
  document.getElementById("modal_content_tmptscec7").innerHTML = tmpscec7text;
  }
  