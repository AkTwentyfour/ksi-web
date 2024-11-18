document.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('.animate')
    const card = document.querySelectorAll('.profile')
    animatedItems.forEach((item) => {
        item.classList.add('animated')
    } )

    let currentIndex = 1

    function showNextActive () {
        card.forEach((item) => {
            item.classList.remove('active')
        })

        card[currentIndex].classList.add('active')
        currentIndex = (currentIndex + 1) % card.length
        console.log(currentIndex)

        setTimeout(showNextActive, 4000)
    }
    showNextActive()

})