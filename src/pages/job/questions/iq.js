import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { questions } from '../../../mock-data/iq-questions';

function IqQuestions(props) {

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

        // sending data to parent as a callback function
        props.parentIqAnswers(answers);
    }

    return (
        <div>
            <div className="job-listing">
                <div className="container">
                    <div className="heading">
                        <h3>General IQ Test</h3>
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
                                                    {
                                                        item.options.map((option, j) => {
                                                            return (
                                                                <div className="form-check" key={j}>
                                                                    <input 
                                                                        className="form-check-input" 
                                                                        type="checkbox" 
                                                                        onChange={() => handleAnswerStore(j, option)} 
                                                                    />
                                                                    <label className="form-check-label">{j + 1}. {option}</label>
                                                                </div>
                                                            );
                                                        })
                                                    }
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
export default IqQuestions;
