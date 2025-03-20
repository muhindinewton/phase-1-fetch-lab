function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (json) {
      console.log(json);
      renderBooks(json); // Call renderBooks with the fetched data
      return json;
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
