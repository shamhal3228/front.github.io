//var name=prompt("WHAT A HELL ARE YOU TWO DOING HERE?");
//alert(name);
//console.log("Checking...");

//var name=confirm("Gay?");
//if (name)
//{
	//alert("YES, SIR");
//}
//else
//{	
	//alert("WTF DansGame");
//}

var words=["v", "vi", "vita", "vitalya", "victor", "valet", "valter", "janix", "vityachock", "mrv"];
var word= words[Math.floor(Math.random()*words.length)];
var answer=[];
for (var i=0; i<word.length; i++)
	answer[i]="_";
var remains=word.length;

while (remains>0)
{
	alert(answer.join(" "));
	var playerAnswer=prompt("So?");
	if (playerAnswer===null)
		break;
	else 
		if(playerAnswer.length!==1)
			alert("Try again");
		else
		{
			var flag=true;
			for (var j=0; j<word.length; j++)
				if (playerAnswer===word[j])
				{
					flag=false;
					answer[j]=playerAnswer;
					remains--;
				}
			if (flag===true)
				alert("Try again");
		}
}
alert(answer.join(""));
alert("YOU LOST");