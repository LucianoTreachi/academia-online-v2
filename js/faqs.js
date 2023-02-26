////////// FAQs ////////// 
(function(){
    const questionTitle = [...document.querySelectorAll('.faqs-title')];
    
    questionTitle.forEach(question => {
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('faqs-padding--add');
            question.children[0].classList.toggle('faqs-arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();

