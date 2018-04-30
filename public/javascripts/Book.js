class Book {
    constructor(title,author, imgUrl) {
        this.title = title;
        this.author = author;
        this.imgUrl = imgUrl;
    }
    promptInformation(){
        const img = prompt("Please add a url to a picture");
        const title = prompt("Please give a title");
        const author = prompt("Please give a author");
        this.title = title;
        this.author = author;
        this.imgUrl = img;
        alert('The title is ' + this.title + "\nThe author is " + this.author);
    }
    // Return the title attribute
    get getTitle(){
        return this.title;
    }

    // Return the author 
    get getAuthor(){
        return this.author;
    }

    get getImgUrl(){
        return this.imgUrl;
    }

    changeTitle(){
        const newTitle = prompt("What should the new title be?");
        this.title = newTitle;
        alert('You have changed the title to ' + this.title);
    }

    toString(){
        return "The book is called " + this.title + ". The author is " + this.author + ".";
    }

    toJson(){
        return {
            title : this.title,
            author : this.author,
            imgUrl : this.imgUrl
        }
    }
}