//2-a

function oddListElements() {
  const orderedListElements = document.querySelectorAll("#book-list li");
  orderedListElements.forEach((listItem, index) => {
    if (index % 2 === 0) {
      listItem.style.backgroundColor = "lightblue";
    }
  });
}
oddListElements();

//2-b

function changeBookTitle(orderedList, oldTitle, newTitle) {
  const listItems = orderedList.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === oldTitle) {
      listItems[i].textContent = newTitle;
      break;
    }
  }
}

const bookList = document.getElementById("book-list");
changeBookTitle(bookList, "The Catcher in the Rye", "Close Quarters");

//2-v

function removeBook(orderedList, bookTitle) {
  const listItems = orderedList.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === bookTitle) {
      orderedList.removeChild(listItems[i]);
      break;
    }
  }
}

removeBook(bookList, "Animal Farm");
