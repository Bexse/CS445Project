'use strict';

/**
 * newBook.js
 */

 import{addNewBook} from "./catalog.js";
 
 (function() {
       async function initAddNewBook() {

           document.getElementById("newForm").addEventListener("submit", async function (e){
               e.preventDefault();
               const bookCollections = {};
              // bookCollections["bookId"] = parseInt(document.getElementById("bookId").value);
               bookCollections["isbn"] = document.getElementById("isbn").value;
               bookCollections["title"] = document.getElementById("title").value;
               bookCollections["overdueFee"] = parseFloat(document.getElementById("fee").value);
               bookCollections["publisher"] = document.getElementById("publisher").value;
               bookCollections["datePublished"] = document.getElementById("datePub").value;
           
           const newBookAdded = await addNewBook(bookCollections);

                  // document.getElementById("bookId").value = "";
                   document.getElementById("isbn").value = "";
                   document.getElementById("title").value = "";
                   document.getElementById("fee").value = "0.00";
                   document.getElementById("publisher").value = "";
                   document.getElementById("datePub").value = ""; 
           
           });        
     
       }

   initAddNewBook();

   })()








