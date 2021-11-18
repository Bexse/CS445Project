/**
 * index.js
 * 
 */
"use strict";

import{getBooks} from "./catalog.js"


(function(){

async function displayCatalog(){

    let books = await getBooks();
    
        books.forEach(function(book){
            const table = document.getElementById("tableFormat").getElementsByTagName('tbody')[0];
            const newRow = table.insertRow(-1);
            const newCellRowId = newRow.insertCell(0);
            const newRowIdId = document.createTextNode (`${book.bookId}`);
            newCellRowId.appendChild(newRowIdId);
            console.log(newCellRowId);

            const newCellRowIsbn = newRow.insertCell(1);
            const newRowIsbn = document.createTextNode (`${book.isbn}`);
            newCellRowIsbn.appendChild(newRowIsbn);

            const newCellRowBookTitle = newRow.insertCell(2);
            const newRowTitle = document.createTextNode (`${book.title}`);
            newCellRowBookTitle.appendChild(newRowTitle);

            const newCellRowFee = newRow.insertCell(3);
            const newRowFee = document.createTextNode (`${book.overdueFee}`);
            newCellRowFee.appendChild(newRowFee);

            const newCellRowPublisher = newRow.insertCell(4);
            const newRowPublisher = document.createTextNode (`${book.publisher}`);
            newCellRowPublisher.appendChild(newRowPublisher);

            const newCellRowDate = newRow.insertCell(5);
            const newRowDate = document.createTextNode (`${book.datePublished}`);
            newCellRowDate.appendChild(newRowDate); 
    
        });
       
}

displayCatalog();



})();


