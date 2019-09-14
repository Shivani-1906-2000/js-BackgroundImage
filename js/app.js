// immediate invoked function expression

(function() { 
var counter=0;
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  var btn=document.querySelectorAll(".btn");
  btn.forEach( function(event){
   event.addEventListener("click", function(e){
     const value=e.target;
     if(value.classList.contains("btn-left")) {
counter--;
if(counter<0)
{
  counter=pictures.length-1;
}
document.querySelector(".img-container").style.backgroundImage=`url(img/${pictures[counter]}.jpeg)`
}
     if(value.classList.contains("btn-right")) {
      counter++;
      if(counter>pictures.length-1)
      {
        counter=0;
      }
          document.querySelector(".img-container").style.backgroundImage=`url(img/${pictures[counter]}.jpeg)`
  }
   }
 )
  })
})();
