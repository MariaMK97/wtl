function checkRollno(e){
	
}

function checkname(e){
	var element=e.target;
	if(/[^a-zA-Z ]/.test(element.value))
	{
		alert("Invalid Name. only characters a-a,A-Z are allowed");
		element.value="";
		return false;
	}
	if(!/[a-zA-Z ]/.test(element.value))
	{
		alert("Invalid rollno. must also use a-z or A-Z ");
		element.value="";
		return false;
	}
	if(!/[0-9]/.test(element.value))
	{
		alert("Invalid rollno. must also use 0-9 characters");
		element.value="";
		return false;
	}
	if(element.value.length>8 || element.value.length<6)
	{
		alert("Invalid rollno!");
		element.value="";
		return false;
	}
	return true;


}


function checkAddress(e){
	var element=e.target;
	if(element.value.length<50){
		alert("Address is too short!");
		element.value="";
		return false;
	}
	return fasle;
}

var rollno=document.getElementById("rollno");
var sname=document.getElementById("sname");
var address=document.getElementById("address");

rollno.addEventListener('blur',checkRollno,false);
sname.addEventListener('blur',checksname,false);
address.addEventListener('blur',checkaddress,false);
