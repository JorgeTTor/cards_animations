const stars = document.querySelectorAll('.star');
const commentBox = document.getElementById('comment-box');
const submitButton = document.getElementById('submit-button');

const visibleStars = {
    star1: document.getElementById('star1'),
    star2: document.getElementById('star2'),
    star3: document.getElementById('star3'),
    star4: document.getElementById('star4'),
    star5: document.getElementById('star5')
}

const visibleStarsArr = Object.keys(visibleStars) 

stars.forEach(star => {
    star.addEventListener('click', () => {
        const starNumber = visibleStarsArr.findIndex(e => e === star.getAttribute('id'))
        console.log('starNumber', starNumber) //0
        const hiddenStars = visibleStarsArr.slice(starNumber + 1, 5) 
        console.log('hiddenStar', hiddenStars)// 1-5
        hiddenStars.map(hiddenStar => {
            visibleStars[hiddenStar].classList.remove('visible')
            visibleStars[hiddenStar].classList.add('hidden')
        })
        if (star.getAttribute('id') !== 'star5') {
            commentBox.classList.remove('hidden')
            commentBox.classList.add('visible')
        }
    })
})

submitButton.addEventListener('click', () => {
    visibleStarsArr.map(showStar => {
        visibleStars[showStar].classList.remove('hidden')
        visibleStars[showStar].classList.add('visible')
        commentBox.classList.remove('visible')
        commentBox.classList.add('hidden')
    })
})

// Article Code

// const stars = document.querySelectorAll('.star')
// const commentBox = document.getElementById('comment-box')
// const submitButton = document.getElementById('submit-button')

// const visibleStars = {
//   star1: document.getElementById('star1'),
//   star2: document.getElementById('star2'),
//   star3: document.getElementById('star3'),
//   star4: document.getElementById('star4'),
//   star5: document.getElementById('star5')
// }

// const visibleStarsArr = Object.keys(visibleStars) // ["star1","star2","star3","star4","star5"]

// stars.forEach(star => {
//   star.addEventListener('click', () => {
//     const starNumber = visibleStarsArr.findIndex(e => e === star.getAttribute('id')) // 0
//     const hiddenStars = visibleStarsArr.slice(starNumber + 1, 5) // 1-5
//     hiddenStars.map(hiddenStar => {
//       visibleStars[hiddenStar].classList.remove('visible')
//       visibleStars[hiddenStar].classList.add('hidden')
//     })
    
//     if (star.getAttribute('id') !== 'star5') {
//       commentBox.classList.remove('hidden')
//       commentBox.classList.add('visible')
//     }
//   })
// })

//  submitButton.addEventListener('click', () => {
//    visibleStarsArr.map(showStar => {
//      visibleStars[showStar].classList.remove('hidden')
//      visibleStars[showStar].classList.add('visible')
//      commentBox.classList.remove('visible')
//      commentBox.classList.add('hidden')
//    })
//  })


