$(document).ready(function(){
  let a=$("div.black");
  let x="background-color";
  for(var i=0; i<a.length;i++){
    let b=a.eq(i),c=32*i;
    b=a.eq(i),b.css(x,`rgb(${c},${c},${c})`)
  }
  
  let b=$("div.red");
  for(var i=0; i<b.length; i++) {
    let a=b.eq(i),c=32*i;
    a=b.eq(i),a.css(x,`rgb(${c},00,00)`)
  }
  
  let c=$("div.green");
  for(var i=0; i<c.length; i++){
    let a=c.eq(i),b=32*i;
    a=c.eq(i),a.css(x,`rgb(00,${b},00)`)
  }
  
  let d=$("div.blue");
  for(var i=0; i<d.length; i++){
    let a=d.eq(i),b=32*i;
    a=d.eq(i),a.css(x,`rgb(00,00,${b})`)}
  }
)
