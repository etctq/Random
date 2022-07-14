

let m = []
let z = []

for(i = 1; i <= 100; i++){
    if(i == 86 || i == 97) {
        continue;
}
    a = m.push(Math.floor(Math.random() * 100))
}
for (i of m){

let p = document.createElement("img")
p.src = 'https://picsum.photos/id/'+ i + '/150/100'
z.push(p)


p.onclick = function(event) {
window.location.href = "file:///C:/Users/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C/Desktop/javascipt/timer/a.html"
}
document.getElementById('di').append(p);
p.style.boxShadow = "10px 5px 5px black";
p.style.opacity = '100%'
p.style.filter = 'grayscale(1)'
p.style.transition = '1s'
p.onmouseover = function() {
   this.style.opacity = '100%' 
 this.style.transform = "scale(1)"
 this.style.boxShadow = "none";
    this.style.transition = "all 1s ease"
    this.style.filter = 'grayscale(0)'

}
p.onmouseout = function() {
this.style.transform = "none"
 this.style.boxShadow = "10px 5px 5px black";
}
}
let x = 0;
let zz = false;


function dvish(e){
    
    let dv = z[x]
    
    

    switch(e.key){
        case "ArrowRight":

        function jean(m, x) {
            if (m == true){

                
        b = dv.style.opacity = "100%"
            dv.style.filter = 'grayscale(0)'
            
            zz = false;
            
            return zz;
          } 
            

       
}
    if (zz == false) {
     
     
    dv.style.opacity = "100%"
    dv.style.filter = 'grayscale(0)'

    
    zz = true;
}else {
    x++
    jean(zz, x)



    }

break;
case "ArrowLeft":

        function jean(m, x) {
            if (m == true){

                
            let b = dv.style.opacity = "100%"
            zz = false;
            
            return zz;
          } 
            

       
}
    if (zz == false) {
     
   
    dv.style.opacity = "100%"
    
    zz = true;
}else {
    if (x <= 0) {
        dv.style.opacity = "100%"
    }
    else {
        x--
    jean(zz, x)
}


    }
break;
    }
}

addEventListener("keydown", dvish)









