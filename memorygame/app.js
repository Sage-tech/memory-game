
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            //object
        
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'icecream',
            img: 'images/icecream.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'icecream',
            img: 'images/icecream.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        }
    ]

    // random order
    // sort compares 2 values
    // check if it is 0.5 for the frist value in the array
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('#grid')
    function createBoard() { 

        for (let i= 0; i < cardArray.length; i++){ 
         const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            grid.appendChild(card)
        }


    }

})