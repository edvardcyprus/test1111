//eblank
var nameeblank = `eblank`; // name

document.getElementById("index_hero_tmp_eblank").innerHTML = nameeblank; //index

//tmp два мин чтобы работал рандом
var tmpeblankd1text = [`1`];
var tmpeblankd2text = [`2`];
var tmpeblankd3text = [`3`];
var tmpeblankd4text = [`4`];
var tmpeblankd5text = [`5`];
var tmpeblankd6text = [`6`];
var tmpeblankd7text = [`7`];
var tmpeblankd8text = [`8`];
var tmpeblankd9text = [`9`];
var tmpeblankd10text = [`10`];
var tmpeblankd11text = [`11`];
var tmpeblankd12text = [`12`];


//scr
var tmpscreblankd1text = ``;
var tmpscreblankd2text = ``;
var tmpscreblankd3text = ``;
var tmpscreblankd4text = ``;
var tmpscreblankd5text = ``;
var tmpscreblankd6text = ``;
var tmpscreblankd7text = ``;
var tmpscreblankd8text = ``;
var tmpscreblankd9text = ``;
var tmpscreblankd10text = ``;
var tmpscreblankd11text = ``;
var tmpscreblankd12text = ``;


// sce
var tmpsceeblanktext = `<a class="link" href="#">eblank</a>`;



function eblankd1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpeblankd1 ();   
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
  document.getElementById("defaultOpen1").addEventListener("click", tmpeblankd1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpeblankd2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpeblankd3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpeblankd4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpeblankd5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpeblankd6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpeblankd7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpeblankd8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpeblankd9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpeblankd10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpeblankd11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpeblankd12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscreblankd1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscreblankd2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscreblankd3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscreblankd4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscreblankd5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscreblankd6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscreblankd7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscreblankd8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscreblankd9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscreblankd10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscreblankd11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscreblankd12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptsceeblank);


  
}



//d1

function tmpeblankd1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1nameonly + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd1").innerHTML = tmpd1name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpeblankd1text;  
  document.getElementById("modal_screenshotseblankd1").innerHTML = tmpscreblankd1text;
}

  function tmptscreblankd1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpeblankd2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2nameonly + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd2").innerHTML = tmpd2name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpeblankd2text;  
  document.getElementById("modal_screenshotseblankd2").innerHTML = tmpscreblankd2text;
}

  function tmptscreblankd2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpeblankd3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3nameonly + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd3").innerHTML = tmpd3name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpeblankd3text;  
  document.getElementById("modal_screenshotseblankd3").innerHTML = tmpscreblankd3text;
}

  function tmptscreblankd3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpeblankd4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd4").innerHTML = tmpd4name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd4text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd4").innerHTML = tmpscreblankd4text;
}

  function tmptscreblankd4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpeblankd5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd5").innerHTML = tmpd5name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd5text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd5").innerHTML = tmpscreblankd5text;
}

  function tmptscreblankd5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpeblankd6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd6").innerHTML = tmpd6name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd6text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd6").innerHTML = tmpscreblankd6text;
}

  function tmptscreblankd6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpeblankd7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd7").innerHTML = tmpd7name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd7text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd7").innerHTML = tmpscreblankd7text;
}

  function tmptscreblankd7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpeblankd8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd8").innerHTML = tmpd8name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd8text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd8").innerHTML = tmpscreblankd8text;
}

  function tmptscreblankd8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpeblankd9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd9").innerHTML = tmpd9name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd9text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd9").innerHTML = tmpscreblankd9text;
}

  function tmptscreblankd9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpeblankd10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd10").innerHTML = tmpd10name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd10text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd10").innerHTML = tmpscreblankd10text;
}

  function tmptscreblankd10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpeblankd11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd11").innerHTML = tmpd11name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd11text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd11").innerHTML = tmpscreblankd11text;
}

  function tmptscreblankd11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpeblankd12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + nameeblank;  
  document.getElementById("modal_namescreblankd12").innerHTML = tmpd12name + ": Screenshots: " + nameeblank;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = helloen + greetingen[Math.floor(Math.random()*greetingen.length)] + tmpeblankd12text + contactusen[Math.floor(Math.random()*contactusen.length)] + byeen;  
  document.getElementById("modal_screenshotseblankd12").innerHTML = tmpscreblankd12text;
}

  function tmptscreblankd12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptsceeblank () {
  document.getElementById("modal_namesceeblank").innerHTML = "Additional information: " + nameeblank;
  document.getElementById("modal_content_tmptsceeblank").innerHTML = tmpsceeblanktext;
  }