	function showPremium(){
		var x = document.getElementById("selectPremOption").value;
	if (x=="val1"){
		document.getElementById("chunky").style.display="block";
	}
	else{
	document.getElementById("chunky").style.display="none";	
	}
	
	}
$(document).ready(function(){

	$("#selectPremOption").change(function(){
		showPremium();
	});
});