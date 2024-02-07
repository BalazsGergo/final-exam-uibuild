console.log(books)
const rootElement = document.getElementById('root')


books.forEach((book,index) => rootElement.insertAdjacentHTML("beforeend", `
    <div class='book'>
        <p id='sub'>${book.sub}</p>
        <h1>${book.title}</h1>
        <p>${book.text}</p>
        <div><button>read more</button></div>
        <div class='index'>${index +1}</div>
    </div>

`))

 rootElement.insertAdjacentHTML("beforebegin", `
<header>
    <p>New York Times Bestsellers</p>
</header>

`) 