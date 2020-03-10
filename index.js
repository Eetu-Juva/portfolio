window.onload = function(){
  this.text_spasing_canger_init();
  this.type_efect_init()
}

var initspasing;
var maxspasing;
var direct;
var cursor= "_";

var texts_to_type = {"my_word": ["I probably should put something here",1]}


function text_spasing_canger_init(){
  var element = document.getElementById("lable1");
  var style = window.getComputedStyle(element);
  initspasing = parseInt( style.getPropertyValue("letter-spacing"))
  maxspasing = initspasing + 100;
  direct = 1;
  
  setInterval(text_spasing_canger , 40);

  //console.log(maxspasing + "px");
  //console.log(initspasing +"px");
}

function text_spasing_canger() {
  var element = document.getElementById("lable1");
  var style = window.getComputedStyle(element);
  var curent_text_spase = parseInt(style.getPropertyValue("letter-spacing"))
  
  if (curent_text_spase >= maxspasing && direct === 1) {
    direct = -1;
  }
  
  if (curent_text_spase <= initspasing && direct === -1) {
    direct = 1;
  }
  document.getElementById("lable1").style.letterSpacing  = (curent_text_spase + direct) + "px";
  document.getElementById("lable2").style.letterSpacing  = (curent_text_spase + direct) + "px";
  //console.log((curent_text_spase + direct) + "px");
}
