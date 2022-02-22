export const personalityCheck = (answers) => {
    let percentage = 0;
    let certainWords = ['worked', 'tried', 'motivated', 'hardwork', 'success', 'failure'];

    // checking input text of user in terms of health perspective
    if (answers.q1) {
        if(answers.q1.toString().length > 50) {
            percentage = percentage + 10;
        }
    }
    if (answers.q2) {
        if(answers.q2.toString().length > 50) {
            percentage = percentage + 10;
        }
    }
    if (answers.q3) {
        if(answers.q3.toString().length > 50) {
            percentage = percentage + 10;
        }
    }
    if (answers.q4) {
        if(answers.q4.toString().length > 50) {
            percentage = percentage + 10;
        }
    }
    if (answers.q5) {
        if(answers.q5.toString().length > 50) {
            percentage = percentage + 10;
        }
    }

    // checking some valid check words to give preference to an answer
    certainWords.forEach(word => {
        if(answers.q1.includes(word)){
            percentage = percentage + 5;
        }
        if(answers.q2.includes(word)){
            percentage = percentage + 10;
        }
        if(answers.q3.includes(word)){
            percentage = percentage + 15;
        }
        if(answers.q4.includes(word)){
            percentage = percentage + 20;
        }
        if(answers.q5.includes(word)){
            percentage = percentage + 5;
        }
    });


    return percentage;
}