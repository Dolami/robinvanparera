$( document ).ready(function() {

const portfolioContainer = document.querySelector('.portfolio')

portfolioContainer.addEventListener('click', e => {
    e.preventDefault()

    const modalToggle = e.target.closest('.portfolio_container')

    if (!modalToggle) return

    const modal = modalToggle.nextElementSibling
    const closeButton = modal.querySelector('.close')
    const image = modal.querySelector('img')
    const imagesrc = modal.querySelector('img').src

    modal.style.display = "flex";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    image.onclick = function() {
        window.open(imagesrc, '_blank');
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            modal.style.display = "none";
       }
   });
   })
});