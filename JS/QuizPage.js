"use strict";

/*-------------------------------------------------------------------------------*/
/*Quiz Page*/
/*-------------------------------------------------------------------------------*/

function loadQuizPage()
{
    loadRevisionData();
    loadCategoryChoice();
    loadCategoryName();
    displayQuestion(1,1)
    testFunction();
}

function loadCategoryName()
{
    let header = document.getElementById("h2CategoryNameID");
    header.innerHTML += revisionData[currentCategory].categoryName;
}

function displayQuestion(index, elementNumber, parent=document.getElementById("quizID"))
{
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id",`divID${elementNumber}`);
    //newDiv.setAttribute("class","questionFormatID");
	newDiv.innerHTML += `
        <h3>${revisionData[currentCategory].subcategoryQuestion}: ${revisionData[currentCategory].questionSet[index].question}</h3>`;
        
    newDiv.innerHTML += `
        <input type="radio" id="question${index}answer${index}" value="${revisionData[currentCategory].questionSet[index].answer}">
        <label for="question${index}answer${index}">${revisionData[currentCategory].questionSet[index].answer}</label>`;
	parent.appendChild(newDiv);
}

function generateAnswerIndexSet(questionIndex)
{
    var answerSet = [];
    //answerSet.push(revisionData[currentCategory].questionSet[index].answer);
    answerSet.push(questionIndex);
    answerSet.push(getUniqueRandomNumber(0, answerSet));
    answerSet.push(getUniqueRandomNumber(0, answerSet));
    answerSet.push(getUniqueRandomNumber(0, answerSet));
    return answerSet;
}

function getUniqueRandomNumber (min, exceptions, max=revisionData[currentCategory].questionSet.length-1)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    let generatedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (exceptions.includes(generatedNumber)) {
        generatedNumber = getUniqueRandomNumber(min, max, exceptions);
    }
    return generatedNumber;
}

function getRandNumInRange(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    var generatedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return generatedNumber;
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

function shuffleArray(array)
{
    var length = Number(array.length);
    var shuffledArray = array;
    var j;
    var temp;
    for(var i=0;i<length;i++){
        j = getUniqueRandomNumber(0,shuffledArray,length);

        temp = shuffledArray[i];
        shuffledArray[i] = array[j];
        array[j] = temp;
        test.innerHTML += `<br>i= ${shuffledArray[i]} j= ${array[j]}<br>`;
    }
    test.innerHTML += `<br>array ${shuffledArray}<br>`;
    return shuffledArray;
}

function testFunction(){
    var array = [1,2,3,4,5,6,7,8,9,10];
    var array2 = [1,2];
    var test1 = getUniqueRandomNumber(0,array2,10)
    test.innerHTML += `<br>after shuffle ${test1}<br>`;
    array = shuffleArray(array);
    test.innerHTML += `<br>after shuffle ${array}<br>`;
}
