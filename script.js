const library = [];

function Book(name, author, topic, format, pages, didRead) {


    if (!new.target){
        throw Error("You must use the new operator to call the constructor")
    }
    this.name = name;
    this.author = author;
    this.topic = topic;
    this.format = format;
    this.pages = pages;
    this.didRead = didRead;
    
}

 


Book.prototype.getInfo = function(){
      
    console.log(`Title "${this.name}". Topic "${this.topic}" Number of Pages ${this.pages} \n Who wrote it? "${this.author} Did you read it? ${this.didRead} \n Format: ${this.format}`)
}
const book1 = new Book("Refactoring UI", "Adam Wathan & Steve Shoger", "modern user interface design","hardcopy", 218, true);
const book2 = new Book("Practical UI", "Adham Dannaway", "designing intuitive interfaces", "hardcopy", 282, false);
const book3 = new Book("Better Web Typography for a Better Web", "Matej Latin", "improving web design typography", "digital or hardcopy", 235, false);
const book4 = new Book("UI Design Systems Mastery", "Marina Budarina", "UI design systems fundamentals", "digital", 300, false);
const book5 = new Book("The Design Manual", "Adrian Kuleszo", "best practices and UI skills for modern app design", "digital", 770, false);
const book6 = new Book("Ultimate Guide to Web Design", "Adrian Kuleszo", "web design process for freelancers", "digital", 340, false);


library.push(book1, book2, book3, book4, book5, book6);
console.log(library)



    
const publicLibrary = document.getElementById('publicLibrary')
const shelf = document.createElement('div');
shelf.className = 'shelf';
publicLibrary.appendChild(shelf);


function addBookInfo(){
    for(let i=0;i < library.length;i++){

    let bookCover = document.createElement('div');
    bookCover.className = 'bookCover';
    
    let bookTitle = document.createElement('h2');
    bookTitle.className = 'bookTitle';

    let bookAuthor = document.createElement('p');
    bookAuthor.className = 'bookAuthor';

    let bookTopic = document.createElement('p');
    bookTopic.className = 'bookTopic';

    let bookFormat = document.createElement('p');
    bookFormat.className = 'bookFormat';

    let bookPages = document.createElement('p');
    bookPages.className = 'bookPages';

    let didRead = document.createElement('p');
    didRead.className = 'didRead';

   
    
    shelf.appendChild(bookCover);

    

    bookTitle.textContent=library[i].name;
    bookAuthor.textContent=library[i].author;
    bookTopic.textContent=library[i].topic;
    bookFormat.textContent=library[i].format;
    bookPages.textContent=library[i].pages;
    bookCover.append(bookTitle, bookAuthor, bookTopic, bookFormat, bookPages, didRead);



 if (library[i].didRead === true ) {
        
            bookCover.style.backgroundColor = "magenta";
        }

}
}


addBookInfo();

function addBookToLibrary(){

   
    
    
   

}
addBookToLibrary();
/* 

unction populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card-face card-face-front`
    
    let frontImage = document.createElement('img')
    
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    
    return cardFront
}



function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = `card-face card-face-back`
    let pokeLabel = document.createElement('h2')
    pokeLabel.textContent = pokemon.name
   
    let movesLabel = document.createElement('p')
    movesLabel.textContent = `Moves: ${pokemon.moves.length}`
    let weightLabel = document.createElement('p')
    weightLabel.textContent = `Weight: ${pokemon.weight}`
    
    let typesList = document.createElement('ul')
    pokemon.types.forEach(type => {
        let typeName = document.createElement('li')
        typeName.textContent = type.type.name
        typesList.appendChild(typeName)
    
   

    cardBack.appendChild(pokeLabel)
    cardBack.appendChild(movesLabel)
    cardBack.appendChild(weightLabel)
    cardBack.appendChild(typesList)
})
    return cardBack
}



function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } else if (pokemon.id > 99 && pokemon.id < 810) {
        return `$(pokemon.id)`
    }
    return `pokeball`
}

*/