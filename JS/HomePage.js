"use strict";

/*-------------------------------------------------------------------------------*/
/*Home Page*/
/*-------------------------------------------------------------------------------*/

function loadHomePage()
{
    loadRevisionData();
	fillDropdown();
}

function editCategoryButton()
{
	setCategoryChoice();
	if (!Number.isNaN(currentCategory)) {
		saveCategoryChoice();
		document.location='ContentsPage.html';
	}
}

function createCategoryButton()
{
	currentCategory = document.getElementById("categoryList").childElementCount-1;
	saveCategoryChoice();
	createCategory(); 
	saveRevisionData(); 
	document.location='ContentsPage.html';
}

function startQuizButton()
{
	setCategoryChoice();
	if (!Number.isNaN(currentCategory)) {
		saveCategoryChoice();
		document.location='QuizPage.html';
	}
}

function flashCardsButton()
{
	setCategoryChoice();
	if (!Number.isNaN(currentCategory)) {
		saveCategoryChoice(); 
		document.location='FlashCardPage.html';
	}
}

function removeCategoryButton()
{
	setCategoryChoice();
	if (!Number.isNaN(currentCategory)) {
		removeCategory(currentCategory);
		saveRevisionData();
		fillDropdown();
	}
}
