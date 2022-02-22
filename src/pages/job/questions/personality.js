import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { personalityCheck } from "../../../algorithm/personality-checker";
import { questions } from '../../../mock-data/personality-questions';

function Personality(props) {

    const history = useHistory();

    const [loading, SetLoading] = useState(false);
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');

    useEffect(() => {
        console.log(questions);
    }, []);

    const handleAnswerStore = (key, value) => {
        if (key == 0) setQ1(value);
        if (key == 1) setQ2(value);
        if (key == 2) setQ3(value);
        if (key == 3) setQ4(value);
        if (key == 4) setQ5(value);

        mappingAnswers();
    }

    const mappingAnswers = () => {
        let answers = {
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5
        }

        // calculating percentage from algorithm
        let percentage = personalityCheck(answers);

        // sending calculated percentage from algorithm to parent as a callback function
        props.parentPersonalityAnswers(percentage);
    }

    return (
        <div>
            <div className="job-listing">
                <div className="container">
                    <div className="heading">
                        <h3>Personality Test</h3>
                        <div className="seprator"></div>
                    </div>
                    <div className="row">
                        {
                            questions.length !== 0 && loading !== true ?
                                questions.map((item, i) => {
                                    return (
                                        <div className="col-md-12" key={i}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4>{item.question}</h4>

                                                    <div className="form-group">
                                                        <textarea
                                                            type="text"
                                                            name={i}
                                                            className="form-control mt-2"
                                                            placeholder="Type your answer"
                                                            onChange={(event) => handleAnswerStore(event.target.name, event.target.value)}>
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                                :
                                <p>Data Not Found</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Personality;
