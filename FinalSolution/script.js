// JavaScript Document

function nextSection(number, elementId){
		alert("lets, go");
	document.getElementsByClassName('section')[number].style.display = "block";
	//if(document.getElementById(elementId).checked){
	//	window.resultArray.push([elementId,getElementById(elementId).value]);	
	//}
	
}
function previous(page, elementId){
	if(document.getElementById(elementId).checked){
		window.resultArray.pop([elementId,getElementById(elementId).value]);	
	}
	window.location.href=page;
}
function begin() {
	alert("hi");
	document.getElementsByClassName('section')[0].style.display = "block";
	window.totalPoints=0;
	window.resultArray= [];
		setTimeout(function () {
	window.location.href="Timeout.html";}, 600000);
}

function countPoints(form, name) {
	var result=0;
	var len=points.length;
	var points = form.elements[name];
	for (var i=0; i<len; i++) {
		if (points[i].checked) {
			result+=points[i].value;
			break;}
		return result;
}
}
function showResult() {

var result = 0;
for (var i = 0; i < window.resultArray.length; i++) {
    var innerArrayLength = resultArray[i].length;
    for (var j = 0; j < innerArrayLength; j++) {
        if(j = 0){
			result+=resultArray[i][j];        
        }
    }
}
}