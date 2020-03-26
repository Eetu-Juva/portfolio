var skilsarr = [
  ['skil_js',65],
  ['skil_py',42],
  ['skil_c#',35],
  ['skil_jav',30],
  
  ['skil_c',75],
  ['skil_c++',87],
  ['skil_asm',10],
  
  ['skil_lin',43],
  ['skil_win',44],
  
  ['skil_dig',76],
  ['skil_ana',30],
  
  ['skil_fi',95],
  ['skil_en',75],
  
  
  ['skil_js1',65],
  ['skil_py1',42],
  ['skil_c#1',35],
  ['skil_jav1',30],

  ['skil_c1',75],
  ['skil_c++1',87],
  ['skil_asm1',10],
  
  ['skil_lin1',43],
  ['skil_win1',44],
  
  ['skil_dig1',76],
  ['skil_ana1',30],
  
  ['skil_fi1',95],
  ['skil_en1',75]
];

window.onload = function(){
  this.animate_init();
  this.init();
}

function animate_init(){
  for(var i=0;i<this.skilsarr.length;i++){
    this.animate_setup(this.skilsarr[i][0],this.skilsarr[i][1])
  }
}

function animate_setup(elemid,finalw) {  
    var element = document.getElementById(elemid); 
    var timestep = element.style.width;
    //console.log("width");
    var id = setInterval(animate, 10,finalw);
  
    function animate(finalwidth) {
  
      if (timestep >= 60) {
        clearInterval(id);
      } else {
        timestep++; 
        element.style.width = Generalised_Logistic(finalwidth,timestep) + '%'; 
        element.innerHTML = Math.round( Generalised_Logistic(finalwidth,timestep)) * 1  + '%';
      }
  
    }
    
}

function Generalised_Logistic(maximum,timestep){
  var a=0;
  var C=1;
  var Q=5;
  var B=0.2;

  var res = a+( (maximum-a) / Math.pow( (C + Q*Math.exp(-B*timestep)),1/0.1 ) );
  return res;
}
/*
skil_js
skil_py
skil_c#
skil_jav

skil_c
skil_c++
skil_asm

skil_lin
skil_win

skil_dig
skil_ana

skil_fi
skil_en*/