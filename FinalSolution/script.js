// JavaScript Document

function next(page, elementId){
	if(document.getElementById(elementId).checked){
		window.resultArray.push([elementId,getElementById(elementId).value]);	
	}
	window.location.href=page;
}
function previous(page elementId){
	if(document.getElementById(elementId).checked){
		window.resultArray.pop([elementId,getElementById(elementId).value]);	
	}
	window.location.href=page;
}
function begin() {
	
	window.location.href="Introduction.html";
	window.totalPoints=0;
	window.resultArray= [];
		setTimeout(function () {
	window.location.href="Timeout.html";}, 600000);
}
}
function countPoints(form, name) {
	var result=0;
	var points = form.elements[name];
	for (var i=0; len=points.length; i< len; i++) {
		if (points[i].checked) {
			result+=points[i].value;
			break;}
		return result;
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
function checkCompletion() {
}
