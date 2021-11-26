const questionHeaders = document.querySelectorAll('.question-header');

questionHeaders.forEach(questionHeader => {
    questionHeader.addEventListener('click', event => {
        questionHeader.classList.toggle('show');
        const questionText = questionHeader.nextElementSibling;
        if (questionHeader.classList.contains('show')) {
            questionText.style.display = 'block';
        }
        else {
            questionText.style.display = 'none';
        }
    });
});



$('button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 1500);
});