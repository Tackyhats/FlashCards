// "buttons" is an object made up of two properties: "nextButton" and "flipCardButton" Pulled from our Index HTML using the 
//getElement ID method. These are sort of the outlines of the actual buttons on the active webpage which are then filled in with what they 
//will actually do further down.  
let buttons = {
    nextButton: document.getElementById('nextCard'),
    flipCardButton: document.getElementById('flipCard')
}

//This is a variable created to house what the actual flashcards will be pulled from the same HTML index as the 
//buttons
let cardDisplay = document.getElementById('flashCard')

//We have told the flashcard object that it has 3 properties. One named 'front' 'back' and 'frontOrBack' 
//Essentially covering all three forms the flashcard can exist as. The third form as been assigned as a boolean,
//to ensure only 1 of the sides is presented
let flashCard = {
    front: "this is the front",
    back: "this is the back",
    frontOrBack: true
}

//We've created a crunstructor called FlashCard to basically give the object "flashcard" form. The "this"
//keyword applies each variable to a specific part of the object "flashCard". 
function FlashCard(front, back) {
    this.frontOfCard = front;
    this.backOfCard = back;
    this.frontOrBack = true;
}

//This is how you define them individually
//let letFlashCard = new FlashCard("let", "defines a block scoped variable");

//This is how you define flash cards in an array. We created a new object called flashCardPile with 2 variables-
//pileIndex has a numerical property of -1 so when information is pulled from it, it will always be at the begining of the array 
//pileArray has an array property noted by the []. The "new" opperator is invoking the constructor that allows us to reuse 
//the same function of "FlashCard" new FlashCard("", ""),
let htmlCardPile = {
    pileIndex: -1, 
    pileArray: [
        
        new FlashCard("Attribute", "Aspect of an HTML element defined inside the element ie: <div>"),
        new FlashCard("element", "Each part that makes up an HTML document"),
        new FlashCard("Head Tag", "Essentailly the brain of your format. Put all non visual HTML code here <Head></Head>")

    ],

//nextCard is a method with a new function if the pileIndex is greater than or equal to the array length 
//(which is technically 0) it will go forward 1 step to the second line in the array forcing it to go back to the start.
 //the "if"conditional will only work if the location of the array is in the -1 spot. "else" moves the array 1 spot
 //down (++) cardDisplay ensures only the "frontOfCard" shows 
    nextCard: function() {
        if(this.pileIndex >= this.pileArray.length -1) {
            this.pileIndex =0;
        } else {
            this.pileIndex++; 
        }
        cardDisplay.innerText = this.pileArray[this.pileIndex].frontOfCard;
    } 
}

let jsCardPile = {
    pileIndex: -1, 
    pileArray: [
            new FlashCard("Function", ""),
            new FlashCard("let", "defines a block scoped variable"),
            new FlashCard("expression", "code that returns a value"),
            new FlashCard("Block Scope", "The area within if,switch conditions or for and while loops"),
            new FlashCard("Method", "A function which is a property of an object, or an object reference to a function"),
            new FlashCard("Initialization", "The means of assigning an initial value to a variable."),
            new FlashCard("string", "A data type used for words and requires quotation marks.AKA this."),
            new FlashCard("contructor", "A function that initializes an object."),
            new FlashCard("boolean", "A function used to find if an expression is true")
    ],
    
    nextCard: function() {
        if(this.pileIndex >= this.pileArray.length -1) {
            this.pileIndex =0;
        } else {
            this.pileIndex++; 
        }
        cardDisplay.innerText = this.pileArray[this.pileIndex].frontOfCard;
    } 
}

//input the html element you want to display on and the flashcard you want to flip. 
function flipTheCard(htmlElement, flashCard) {
    if(flashCard.frontOrBack == true) {
        flashCard.frontOrBack = false;
        htmlElement.innerText = flashCard.backOfCard;
    } else {
        flashCard.frontOrBack = true;
        htmlElement.innerText = flashCard.frontOfCard;
    }
}
//Addeventlistener with a argument 'click' adds a new function in js so that on click it performs a new function 
//that will run the function flipTheCard on our cardDisplay object, with the code from flashCardPile, pileArray, 
//and the actual array info. The other button moves to the next item in our array. 
buttons.flipCardButton.addEventListener('click', function() {
    flipTheCard(cardDisplay, htmlCardPile.pileArray[htmlCardPile.pileIndex]);
});
buttons.nextButton.addEventListener('click', function() {
    htmlCardPile.nextCard();
});