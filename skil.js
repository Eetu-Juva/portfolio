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
    for(var i=0;i<this.skilsarr.length;i++){
      this.animate_init(this.skilsarr[i][0],this.skilsarr[i][1])
    }

    this.init();
}

function animate_init(elemid,finalw) {  
    var element = document.getElementById(elemid); 
    var width = element.style.width;
    //console.log("width");
    var id = setInterval(animate, 10,finalw);
  
    function animate(finalwidth) {
  
      if (width >= finalwidth) {
        clearInterval(id);
      } else {
        width++; 
        element.style.width = width + '%'; 
        element.innerHTML = width * 1  + '%';
      }
  
    }
    
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