


function text_spasing_canger(){
    var element = document.getElementById("lable");
    var style = window.getComputedStyle(element);
    var initspasing = parseInt( style.getPropertyValue("letter-spacing"))
    var maxspasing = initspasing + 40;
  // while(1){
  //  for(;)
  // }
  console.log(maxspasing + "px");
  console.log(initspasing +"px");
}