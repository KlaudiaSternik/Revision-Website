"use strict";

/*-------------------------------------------------------------------------------*/
/*Flash Card Page*/
/*-------------------------------------------------------------------------------*/

//monitorEvents(document.getElementById("flashCardInnerID"), "click");

//Variables
let selectedQuestion = 0;

//Functions
function loadFlashCardPage()
{
    loadRevisionData();
    loadCategoryChoice();
    loadCategoryName();
    loadCard(selectedQuestion);
    setFlashCard();
}

function setFlashCard() 
{
    var element = document.querySelector("#flashCardInnerID");
    element.addEventListener("click", function(){setToggle(element)});
}

function setToggle(element)
{
    element.classList.toggle("isFlipped");
}

function loadCard(index)
{
    let cardFront = document.getElementById("flashCardFrontID");
    let cardBack = document.getElementById("flashCardBackID");
    cardFront.innerHTML = revisionData[currentCategory].questionSet[index].question;
    cardBack.innerHTML = revisionData[currentCategory].questionSet[index].answer;
}

function loadCategoryName()
{
    let header = document.getElementById("h1CategoryNameID");
    header.innerHTML = revisionData[currentCategory].categoryName;
}

function getRandomNumber(min, max, exception)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    let generatedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (generatedNumber === exception) {
        generatedNumber = getRandomNumber(min, max, exception);
    }
    return generatedNumber;
}

function randomCardButton()
{
    let length = revisionData[currentCategory].questionSet.length-1;
    selectedQuestion = getRandomNumber(0, length, selectedQuestion);
    flipBack();
}

function previousCardButton()
{
    if (selectedQuestion>0) {
        --selectedQuestion;
        flipBack();
    }
}

function nextCardButton()
{
    let length = revisionData[currentCategory].questionSet.length-1;
    if (selectedQuestion<length) {
        ++selectedQuestion;
        flipBack();
    }
}

function flipBack()
{
    var element = document.querySelector("#flashCardInnerID");
    if(element.classList.contains("isFlipped")){
        element.classList.remove("isFlipped");
        element.addEventListener("transitionend", function() {
            loadCard(selectedQuestion);
        }, {once: true});
    } else {
        loadCard(selectedQuestion);
    }
}

function homeButton()
{
	document.location='HomePage.html';
}