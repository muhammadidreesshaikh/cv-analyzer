import { questions } from '../mock-data/iq-questions';

export const iqChecker = (answers) => {
    let percentage = 0;

    // validating and checking answers provided in iq-questions mock-data service
    if (answers.q1 && answers.q1 == questions[0].answer) {
        percentage = percentage + 20;
    }
    if (answers.q2 && answers.q2 == questions[1].answer) {
        percentage = percentage + 20;
    }
    if (answers.q3 && answers.q3 == questions[2].answer) {
        percentage = percentage + 20;
    }
    if (answers.q4 && answers.q4 == questions[3].answer) {
        percentage = percentage + 20;
    }
    if (answers.q5 && answers.q5 == questions[4].answer) {
        percentage = percentage + 20;
    }

    return percentage;
}