console.log('connecté !');

const questions = document.querySelectorAll('.question');
const response = document.querySelector('.response');

// Pour toutes les questions
questions.forEach(question => {
    question.addEventListener('click', () => {
        // On rend visible la réponse associée à la question
        const nextResponse = question.nextElementSibling;
        nextResponse.classList.toggle('visible');
        // maj de l'icone
        const questionIcon = question.lastElementChild;
        questionIcon.classList.toggle('fa-chevron-up');
    })
});

