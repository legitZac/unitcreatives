const popBtn = document.querySelectorAll('#pop-btn')
const serviceColumn = document.getElementById('service-col')
const serviceDetails = document.querySelectorAll('#service-details')

// popBtn.addEventListener('click', () => {
//     serviceDetails.forEach(sd => {
//         sd.classList.toggle('pop')
//     })

//     if (popBtn.innerHTML === 'View More') {
//         popBtn.innerHTML = 'View Less';
//     } else {
//         popBtn.innerHTML = 'View More';
//     }
// })

popBtn.forEach(pb => {
    pb.addEventListener('click', () => {
        serviceDetails.forEach(sd => {
            // sd.classList.toggle('pop')
            if (sd.classList.contains('hidden')) {
                sd.classList.add('pop')
                sd.classList.remove('hidden')
            } else {
                sd.classList.remove('pop')
                sd.classList.add('hidden')
            }
        })

        if (pb.innerHTML == 'View More') {
            pb.innerHTML = 'View Less';
        } else {
            pb.innerHTML = 'View More';
        }
    })
})

const portfolioDialog = document.querySelector('#portfolio-dialog');
const portfolioBtn = document.querySelector('#portfolio-pop')

portfolioBtn.addEventListener('click', (popFx) => {
    portfolioDialog.classList.toggle('pop')
})