//cblank
var namecblank = `cblank`; // name

document.getElementById("index_hero_tmp_cblank").innerHTML = namecblank; //index

//tmp два мин чтобы работал рандом
var tmpcblankd1text = [`1`];
var tmpcblankd2text = [`2`];
var tmpcblankd3text = [`3`];
var tmpcblankd4text = [`4`];
var tmpcblankd5text = [`5`];
var tmpcblankd6text = [`6`];
var tmpcblankd7text = [`7`];
var tmpcblankd8text = [`8`];
var tmpcblankd9text = [`9`];
var tmpcblankd10text = [`10`];
var tmpcblankd11text = [`11`];
var tmpcblankd12text = [`12`];


//scr
var tmpscrcblankd1text = ``;
var tmpscrcblankd2text = ``;
var tmpscrcblankd3text = ``;
var tmpscrcblankd4text = ``;
var tmpscrcblankd5text = ``;
var tmpscrcblankd6text = ``;
var tmpscrcblankd7text = ``;
var tmpscrcblankd8text = ``;
var tmpscrcblankd9text = ``;
var tmpscrcblankd10text = ``;
var tmpscrcblankd11text = ``;
var tmpscrcblankd12text = ``;


// sce
var tmpscecblanktext = `<a class="link" href="#">cblank</a>`;



function cblankd1 () {
  heroReverse ();
  document.getElementById("defaultOpen1").click();
  tmpcblankd1 ();   
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
//  document.getElementById("defaultOpen4").style.display = "none"; // убр скр
//  document.getElementById("defaultOpen5").style.display = "none";
//  document.getElementById("defaultOpen6").style.display = "none";
//  document.getElementById("defaultOpen7").style.display = "none";
//  document.getElementById("defaultOpen8").style.display = "none";
//  document.getElementById("defaultOpen9").style.display = "none";
//  document.getElementById("defaultOpen10").style.display = "none";
//  document.getElementById("defaultOpen11").style.display = "none";
//  document.getElementById("defaultOpen12").style.display = "none";

// document.getElementById("modal_button_screenshowd1").classList.add("displaynone"); // убр скр
// document.getElementById("modal_button_screenshowd2").classList.add("displaynone"); // убр скр
// document.getElementById("modal_button_screenshowd3").classList.add("displaynone"); // убр скр

//   document.getElementById("defaultOpen1").innerHTML = tmpd1nameonly;
//   document.getElementById("defaultOpen2").innerHTML = tmpd2nameonly;
//   document.getElementById("defaultOpen3").innerHTML = tmpd3nameonly;

// document.getElementById("defaultOpen13").style.display = "none"; // убр доп



 // только яз скр 


 // выбор яз
  document.getElementById("defaultOpen1").addEventListener("click", tmpcblankd1);
  document.getElementById("defaultOpen2").addEventListener("click", tmpcblankd2);
  document.getElementById("defaultOpen3").addEventListener("click", tmpcblankd3);
  document.getElementById("defaultOpen4").addEventListener("click", tmpcblankd4);
  document.getElementById("defaultOpen5").addEventListener("click", tmpcblankd5);
  document.getElementById("defaultOpen6").addEventListener("click", tmpcblankd6);
  document.getElementById("defaultOpen7").addEventListener("click", tmpcblankd7);
  document.getElementById("defaultOpen8").addEventListener("click", tmpcblankd8);
  document.getElementById("defaultOpen9").addEventListener("click", tmpcblankd9);
  document.getElementById("defaultOpen10").addEventListener("click", tmpcblankd10);
  document.getElementById("defaultOpen11").addEventListener("click", tmpcblankd11);
  document.getElementById("defaultOpen12").addEventListener("click", tmpcblankd12);

// показать скр
  document.getElementById("modal_button_screenshowd1").addEventListener("click", tmptscrcblankd1);
  document.getElementById("modal_button_screenshowd2").addEventListener("click", tmptscrcblankd2);
  document.getElementById("modal_button_screenshowd3").addEventListener("click", tmptscrcblankd3);
  document.getElementById("modal_button_screenshowd4").addEventListener("click", tmptscrcblankd4);
  document.getElementById("modal_button_screenshowd5").addEventListener("click", tmptscrcblankd5);
  document.getElementById("modal_button_screenshowd6").addEventListener("click", tmptscrcblankd6);
  document.getElementById("modal_button_screenshowd7").addEventListener("click", tmptscrcblankd7);
  document.getElementById("modal_button_screenshowd8").addEventListener("click", tmptscrcblankd8);
  document.getElementById("modal_button_screenshowd9").addEventListener("click", tmptscrcblankd9);
  document.getElementById("modal_button_screenshowd10").addEventListener("click", tmptscrcblankd10);
  document.getElementById("modal_button_screenshowd11").addEventListener("click", tmptscrcblankd11);
  document.getElementById("modal_button_screenshowd12").addEventListener("click", tmptscrcblankd12);

// выбор сце
  document.getElementById("defaultOpen13").addEventListener("click", tmptscecblank);


  
}



//d1

function tmpcblankd1 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d1").innerHTML = tmpd1name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd1").innerHTML = tmpd1name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d1").innerHTML = tmpcblankd1text;  
  document.getElementById("modal_screenshotscblankd1").innerHTML = tmpscrcblankd1text;
}

  function tmptscrcblankd1 () {
  document.getElementById("modal_screenshots_show_d1").classList.toggle("displaynone");
}



//d2

function tmpcblankd2 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d2").innerHTML = tmpd2name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd2").innerHTML = tmpd2name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d2").innerHTML = tmpcblankd2text;  
  document.getElementById("modal_screenshotscblankd2").innerHTML = tmpscrcblankd2text;
}

  function tmptscrcblankd2 () {
  document.getElementById("modal_screenshots_show_d2").classList.toggle("displaynone");
}

//d3

function tmpcblankd3 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d3").innerHTML = tmpd3name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd3").innerHTML = tmpd3name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d3").innerHTML = tmpcblankd3text;  
  document.getElementById("modal_screenshotscblankd3").innerHTML = tmpscrcblankd3text;
}

  function tmptscrcblankd3 () {
  document.getElementById("modal_screenshots_show_d3").classList.toggle("displaynone");
}

//d4

function tmpcblankd4 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d4").innerHTML = tmpd4name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd4").innerHTML = tmpd4name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d4").innerHTML = tmpcblankd4text;  
  document.getElementById("modal_screenshotscblankd4").innerHTML = tmpscrcblankd4text;
}

  function tmptscrcblankd4 () {
  document.getElementById("modal_screenshots_show_d4").classList.toggle("displaynone");
}

//d5

function tmpcblankd5 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d5").innerHTML = tmpd5name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd5").innerHTML = tmpd5name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d5").innerHTML = tmpcblankd5text;  
  document.getElementById("modal_screenshotscblankd5").innerHTML = tmpscrcblankd5text;
}

  function tmptscrcblankd5 () {
  document.getElementById("modal_screenshots_show_d5").classList.toggle("displaynone");
}


//d6

function tmpcblankd6 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d6").innerHTML = tmpd6name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd6").innerHTML = tmpd6name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d6").innerHTML = tmpcblankd6text;  
  document.getElementById("modal_screenshotscblankd6").innerHTML = tmpscrcblankd6text;
}

  function tmptscrcblankd6 () {
  document.getElementById("modal_screenshots_show_d6").classList.toggle("displaynone");
}

//d7

function tmpcblankd7 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d7").innerHTML = tmpd7name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd7").innerHTML = tmpd7name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d7").innerHTML = tmpcblankd7text;  
  document.getElementById("modal_screenshotscblankd7").innerHTML = tmpscrcblankd7text;
}

  function tmptscrcblankd7 () {
  document.getElementById("modal_screenshots_show_d7").classList.toggle("displaynone");
}


//d8

function tmpcblankd8 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d8").innerHTML = tmpd8name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd8").innerHTML = tmpd8name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d8").innerHTML = tmpcblankd8text;  
  document.getElementById("modal_screenshotscblankd8").innerHTML = tmpscrcblankd8text;
}

  function tmptscrcblankd8 () {
  document.getElementById("modal_screenshots_show_d8").classList.toggle("displaynone");
}


//d9

function tmpcblankd9 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d9").innerHTML = tmpd9name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd9").innerHTML = tmpd9name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d9").innerHTML = tmpcblankd9text;  
  document.getElementById("modal_screenshotscblankd9").innerHTML = tmpscrcblankd9text;
}

  function tmptscrcblankd9 () {
  document.getElementById("modal_screenshots_show_d9").classList.toggle("displaynone");
}


//d10

function tmpcblankd10 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d10").innerHTML = tmpd10name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd10").innerHTML = tmpd10name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d10").innerHTML = tmpcblankd10text;  
  document.getElementById("modal_screenshotscblankd10").innerHTML = tmpscrcblankd10text;
}

  function tmptscrcblankd10 () {
  document.getElementById("modal_screenshots_show_d10").classList.toggle("displaynone");
}


//d11

function tmpcblankd11 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d11").innerHTML = tmpd11name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd11").innerHTML = tmpd11name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d11").innerHTML = tmpcblankd11text;  
  document.getElementById("modal_screenshotscblankd11").innerHTML = tmpscrcblankd11text;
}

  function tmptscrcblankd11 () {
  document.getElementById("modal_screenshots_show_d11").classList.toggle("displaynone");
}


//d12

function tmpcblankd12 () {
  // стат
  document.getElementById("tabname").innerHTML = tabnamedev;  
  document.getElementById("tabhome").innerHTML = tabhome; 
  document.getElementById("modal_nametmp1d12").innerHTML = tmpd12name + ": " + namecblank;  
  document.getElementById("modal_namescrcblankd12").innerHTML = tmpd12name + ": Screenshots: " + namecblank;
  // перем
  document.getElementById("modal_content_tmp1d12").innerHTML = tmpcblankd12text;  
  document.getElementById("modal_screenshotscblankd12").innerHTML = tmpscrcblankd12text;
}

  function tmptscrcblankd12 () {
  document.getElementById("modal_screenshots_show_d12").classList.toggle("displaynone");
}


//sce

function tmptscecblank () {
  document.getElementById("modal_namescecblank").innerHTML = "Additional information: " + namecblank;
  document.getElementById("modal_content_tmptscecblank").innerHTML = tmpscecblanktext;
  }
  