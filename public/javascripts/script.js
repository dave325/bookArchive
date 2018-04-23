window.onload = function () {
    // Function that will send an alert message to the user 
    function alertMessage(elem) {
        elem.preventDefault();
        // Show all of the elements properties in the console
        console.log(elem);
        // Create an alert on the page telling user what button was clicked
        //alert(elem.srcElement.textContent + " Button was clicked");

        fetch('/show', {
            headers: {
                'content-type': 'application/json'
            },
            method: "POST"
        }).then(function (response) {
            setTimeout(() => {
                response.json().then(function(response){
                    console.log(response);
                },function(error){
                    console.log(error);
                });
            }, 500);
        },function(error){
            console.log(error);
        });
    }
    // Retrieve every element with an a tag
    var a = document.getElementsByTagName('a');
    // IMPORTANT - Loop through every element on page to add an event listener to each element
    for (i = 0; i < a.length; i++) {
        // Add a listener that will do the function alertMessage everytime a user clicks on the element
        a[i].addEventListener('click', alertMessage, false);
    }

    // Retrieve every element with the class bookTitle
    var bookTitle = document.getElementsByClassName('bookTitle');
    // Function that changes color everytime the user changes the book title
    function changeColor() {
        // Create a prompt that will store the users information in the variable name
        const name = prompt('What is the name of the book?');
        // Create a variable that we will check amount of times user stored data
        let i = 0;
        //If the user entered an invalid name they have 3 tries to change it
        while (name.length === 0 || i > 3) {
            const name = prompt('What is the name of the book?');
            i++;
        }
        // Change the text of the current element to whatever they wrote
        this.innerHTML = name;
        // If user already has the color purple then change color of text to green 
        if (this.style.color === "purple") {
            this.style.color = "Green";
        } else {
            this.style.color = "Purple";
        }
        // Add an additional class to the html element
        this.classList.add('test');
    }
    // Run a for loop to add specific properties to every element that has the class bookTitle
    for (let i = 0; i < bookTitle.length; i++) {
        // Change every color to red
        bookTitle[i].style.color = "red";
        // change every font-size to 1.4em
        bookTitle[i].style.fontSize = "1.4em";
        // Add an event LIstener to change the text color on every click
        bookTitle[i].addEventListener('click', changeColor);
    }

    // Get the element with the id of addBook
    var addBook = document.getElementById('addBook');
    // get the element wit hthe id bookList
    var container = document.getElementById('bookList');
    /**
     * Function that prompts the user to add information for us to use 
     * Will store information in the class 
     * Then create new HTML elements with built in function createElement
     * We then use document.createTextNode to add the title and author to the h2 and p tag
     * Then append both the h2 and p tag to our div tag 
     * Lastly, we append out div tag that contains everything to the element with id bookList
     */
    function addNewBook() {
        let newBook = new Book();
        newBook.promptInformation();
        console.log(newBook.toString());
        var bookContainer = document.createElement('DIV');
        var bookTitle = document.createElement('H2');
        var bookAuthor = document.createElement('P');
        if (newBook != null) {
            var bookImg = document.createElement('img');
            bookImg.src = newBook.getImgUrl;
            bookContainer.appendChild(bookImg);
        }
        bookTitle.appendChild(document.createTextNode(newBook.getTitle));
        bookAuthor.appendChild(document.createTextNode(newBook.getAuthor));
        bookContainer.classList.add('col-md-4');
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor)
        container.appendChild(bookContainer);
        console.log("Complete");
    }
    // Adds an event listener to the addBook element
    addBook.addEventListener("click", addNewBook);

}