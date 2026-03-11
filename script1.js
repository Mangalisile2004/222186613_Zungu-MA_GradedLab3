//QUESTION 1

document.getElementById('Execute').addEventListener('click', function() {
    const sentence = document.getElementById('sentence').value;
    const wordsContainer = document.getElementById('words');
    const wordCountInput = document.getElementById('sent-count');


    const wordsArray = sentence.replace(/[^a-zA-Z\s]/g, '').split(' ').filter(word => word);

    // must count words first
    wordCountInput.value = `Word Count: ${wordsArray.length}`;

    //display words
    setTimeout(() => {
        wordsContainer.innerHTML = `Words: ${wordsArray.map(word => `<u>${word}</u>`).join(' ')}`;
    }, 1000); 
});