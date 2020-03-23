window.onload = function(){
    animate_init('skil_js',65);
    animate_init('skil_py',42);
    animate_init('skil_c#',35);
    animate_init('skil_jav',30);

    animate_init('skil_c',75);
    animate_init('skil_c++',87);
    animate_init('skil_asm',10);

    animate_init('skil_lin',43);
    animate_init('skil_win',44);

    animate_init('skil_dig',76);
    animate_init('skil_ana',30);

    animate_init('skil_fi',95);
    animate_init('skil_en',75);


    animate_init('skil_js1',65);
    animate_init('skil_py1',42);
    animate_init('skil_c#1',35);
    animate_init('skil_jav1',30);

    animate_init('skil_c1',75);
    animate_init('skil_c++1',87);
    animate_init('skil_asm1',10);

    animate_init('skil_lin1',43);
    animate_init('skil_win1',44);

    animate_init('skil_dig1',76);
    animate_init('skil_ana1',30);

    animate_init('skil_fi1',95);
    animate_init('skil_en1',75);

    this.init();
}

function animate_init(elemid,finalw) {  
    var element = document.getElementById(elemid); 
    var width = element.style.width;
    console.log("width");
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