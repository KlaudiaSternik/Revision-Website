"use strict";

//Variables
var revisionData = [];
var currentCategory = 0;

/*-------------------------------------------------------------------------------*/
/*Check if data set exists in local storage. If it exists, load*/
/*-------------------------------------------------------------------------------*/

function loadRevisionData()
{
	const itemSet=localStorage.getItem('keyRevisionData');
	if (itemSet !== null)
	{
		revisionData = JSON.parse(itemSet);
	}
}

function saveRevisionData()
{
	localStorage.setItem('keyRevisionData',JSON.stringify(revisionData));
}

/*-------------------------------------------------------------------------------*/
/*Functions for manipulating objects stored in revisionData*/
/*-------------------------------------------------------------------------------*/

function createCategory()
{
	const category = {
		categoryName: "Revision Category",
		subcategoryQuestion: "Question",
		subcategoryAnswer: "Answer",
		questionSet: []
	};
	revisionData.push(category);
}

function renameCategory(selectCategory, newName)
{
	revisionData[selectCategory].categoryName = newName;
}

function renameSubQuestion(selectCategory, newName)
{
	revisionData[selectCategory].subcategoryQuestion = newName;
}

function renameSubAnswer(selectCategory, newName)
{
	revisionData[selectCategory].subcategoryAnswer = newName;
}

function addQApair(selectCategory)
{
	const QApair = {
		question: "Type your question",
		answer: "Type your answer"
	};
	revisionData[selectCategory].questionSet.push(QApair);
}

function changeQuestion(selectCategory, selectQApair, newQuestion)
{
	revisionData[selectCategory].questionSet[selectQApair].question = newQuestion;
}

function changeAnswer(selectCategory, selectQApair, newAnswer)
{
	revisionData[selectCategory].questionSet[selectQApair].answer = newAnswer;
}

function removeQApair(selectCategory, selectQApair) 
{
	revisionData[selectCategory].questionSet.splice(selectQApair,1);
}

function removeCategory(selectCategory)
{
	revisionData.splice(selectCategory,1);
}

/*-------------------------------------------------------------------------------*/
/*Category choice management*/
/*-------------------------------------------------------------------------------*/

function fillDropdown()
{
	let out = "";
	out += "<option value='none' selected disabled hidden>Select Category</option>";
	for (let i = 0; i < revisionData.length; i++)
	{
		 out +=`<option value=" ${i} "> ${revisionData[i].categoryName} </option>`;
	}
	categoryList.innerHTML = out;
}

function setCategoryChoice()
{
	currentCategory = Number(document.getElementById("categoryList").value);
}

function saveCategoryChoice()
{
	localStorage.setItem('keyCategoryChoice',JSON.stringify(currentCategory));
}

function loadCategoryChoice()
{
	const myNum=localStorage.getItem('keyCategoryChoice');
	currentCategory = JSON.parse(myNum);
}
