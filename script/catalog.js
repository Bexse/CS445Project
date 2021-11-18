'use strict';

/**
 * catalog.js
*/

 export async function getBooks() {
      let response = await fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list');
       let books = await response.json();
       return books;
    
 }


 export async function addNewBook(newBook){ 

    let response = await fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/add', {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json',
                        },
                    body: JSON.stringify(newBook),
                        });

  let newBookAdded =  await response.json();
  
   // return newBookAdded;

    }
