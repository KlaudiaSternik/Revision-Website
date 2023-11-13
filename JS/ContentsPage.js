"use strict";

/*-------------------------------------------------------------------------------*/
/*Contents Page*/
/*-------------------------------------------------------------------------------*/

//Variables
var questionsLoaded = [];
var elementNumber = 0;

//Functions
function loadContentsPage()
{
    loadRevisionData();
	loadCategoryChoice();
	loadCategoryName();
	loadQAsubcategories();
	loadQApairs();
	//testFunction();
}

function homeButton()
{
	saveContentsPage();
	document.location='HomePage.html';
}

function testFunction()
{
	test.innerHTML = `${elementNumber} <br> ${questionsLoaded}`;
}

function loadCategoryName()
{
	let loadCategory = document.getElementById("categoryID");
	loadCategory.setAttribute("value",revisionData[currentCategory].categoryName);
}

function loadQAsubcategories()
{
	let loadQuestionSub = document.getElementById("subQuestionID");
	let loadAnswerSub = document.getElementById("subAnswerID");
	loadQuestionSub.setAttribute("value", revisionData[currentCategory].subcategoryQuestion);
	loadAnswerSub.setAttribute("value", revisionData[currentCategory].subcategoryAnswer);
}

function loadQApairs()
{
	let parent = document.getElementById("QAcontainer");
	let index = revisionData[currentCategory].questionSet.length - 1;
	for(let i=0;i<=index;i++){
		createRow(i,i,parent);
		questionsLoaded.push(i);
		elementNumber++;
	}

}

function removeRow(selectRow)
{
	saveContentsPage();
	let parent = document.getElementById("QAcontainer");
	const removeDiv = document.getElementById(`divID${selectRow}`);
	parent.removeChild(removeDiv);
	removeQApair(currentCategory, questionsLoaded.indexOf(selectRow));
	questionsLoaded.splice(questionsLoaded.indexOf(selectRow),1);
	saveRevisionData();
}

function newRow()
{
	saveContentsPage();
	addQApair(currentCategory);
	let index = revisionData[currentCategory].questionSet.length - 1;
	createRow(index, elementNumber);
	questionsLoaded.push(elementNumber);
	saveRevisionData();
	elementNumber++;
}

function createRow(index, elementNumber, parent=document.getElementById("QAcontainer"))
{
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id",`divID${elementNumber}`);
	newDiv.innerHTML += `
		<input type="text" id="question${elementNumber}" class="question" value="${revisionData[currentCategory].questionSet[index].question}">
		<input type="text" id="answer${elementNumber}" class="answer" value="${revisionData[currentCategory].questionSet[index].answer}">
		<button id="button${elementNumber}" onclick="removeRow(${elementNumber})">-</button>
		<br id="breakID${elementNumber}">`;
	parent.appendChild(newDiv);
}

function saveContentsPage()
{
	renameCategory(currentCategory, document.getElementById("categoryID").value);
	renameSubQuestion(currentCategory, document.getElementById("subQuestionID").value);
	renameSubAnswer(currentCategory, document.getElementById("subAnswerID").value);
	var length = questionsLoaded.length;
	for(let i=0; i<length; i++){
		changeQuestion(currentCategory, i, document.getElementById(`question${questionsLoaded[i]}`).value);
		changeAnswer(currentCategory, i, document.getElementById(`answer${questionsLoaded[i]}`).value);
	}
	saveRevisionData();
}
