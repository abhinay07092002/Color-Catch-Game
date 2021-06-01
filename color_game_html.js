var button=document.querySelector("button");
var ok=document.querySelector("#ok");
var h1=document.querySelector("h1");
var square=document.querySelectorAll(".square");
var colors=generaterandomcolors(6);
var val=colorgenerator();
var two=document.querySelector("#two");
var hbt=document.querySelector("#hbt");
var ebt=document.querySelector("#ebt");
var count=6;
hbt.addEventListener("click",function(){
	count=6;
	hbt.classList.add("selected");
	ebt.classList.remove("selected");
	colors=generaterandomcolors(6);
	val=colorgenerator();
    ok.textContent=val;
    h1.style.backgroundColor="blue";
    for(var i=0;i<square.length;i++){
    	square[i].style.backgroundColor=colors[i];
    	square[i].style.display="block";
    }
    two.textContent="";
})
ebt.addEventListener("click",function(){
	count=3;
	hbt.classList.remove("selected");
	ebt.classList.add("selected");
	colors=generaterandomcolors(3);
	val=colorgenerator();
    ok.textContent=val;
    h1.style.backgroundColor="blue";
    for(var i=0;i<square.length;i++){
    	if(i<colors.length) {
    		square[i].style.backgroundColor=colors[i];
    	}
    	else{
    		square[i].style.display="none";
    	}
    }
    two.textContent="";
})
ok.textContent=val;
for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
}
button.addEventListener("click",function(){
	colors=generaterandomcolors(count);
	val=colorgenerator();
    ok.textContent=val;
    h1.style.backgroundColor="blue";
    for(var i=0;i<square.length;i++){
    	square[i].style.backgroundColor=colors[i];
    }
    two.textContent="";
})
for(var i=0;i<square.length;i++){
	square[i].addEventListener("click",function(){
		var cc=this.style.backgroundColor;
		if(cc!=val){
			this.style.backgroundColor="#232323";
			two.textContent="Try Again";
		}
		else{
           two.textContent="Correct";
           h1.style.backgroundColor=cc;
           changeall();
           ok.textContent="Play again?"
		}
	})
}
function changeall(){
	for(var i=0;i<square.length;i++){
       square[i].style.backgroundColor=val;
	}
}
function colorgenerator(){
	var temp=Math.floor(Math.random()*colors.length);
    return colors[temp];
}
function generaterandomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
       arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r+", "+g+", "+b+")";
}