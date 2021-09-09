/*var dog = {
	name: "Bobik",
	legs:4,
	isAwesome:true,
	sound:"NIIAAA",
	speak:speak
}

dog.age=4;
dog.bark=function(){
	console.log("Gav, gav! My name is "+this.name);
}
//dog;
//dog.bark();

var cat={
	name:"Snejok",
	sound:"meow",
	speak:speak
}

var cow={
	name:"Burenka",
	sound:"mooo",
	speak:speak
}

var cock={
	name:"Petuch",
	sound:"Kukareku",
	speak:speak
}

var speak=function(){
	 console.log(this.sound+ "! Меня зовут "+this.name +"!");
}

cat.speak();
dog.speak();
cow.speak();
cock.speak();*/

var Car= function(x, y){
	this.x=x;
	this.y=y;
}

var drawCar=function(car){
	var carHTML= '<img src="car.png">';
	var carElement= $(carHTML);
	carElement.css({
		position:"absolute";
		left:car.x;
		top:car.y;
	});
	$("body").append(carEleemnt);
}

var Tesla= new Car(10, 20);
var BMW= new Car(50, 50);
drawCar(Tesla);
drawCar(BMW);