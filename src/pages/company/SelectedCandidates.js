import React, { useState, useEffect } from "react";

function SelectedCandidates() {

    const [data, setData] = useState([
        {
            id: 1,
            firstname: 'Anees',
            lastname: 'Iqbal',
            email: 'anisiqbal484@gmail.com',
            website: 'www.anisiqbal484.com',
            phone: '+923070210260',
            personality: '70%',
            iq: '90%'
        },
        {
            id: 2,
            firstname: 'zafar',
            lastname: 'khan',
            email: 'zafarkhan@gmail.com',
            website: 'www.zafarkhan.com',
            phone: '+1334991276',
            personality: '60%',
            iq: '80%'
        },
        {
            id: 3,
            firstname: 'John',
            lastname: 'Alison',
            email: 'adomjacky@gmail.com',
            website: 'www.adomjacky.com',
            phone: '+345345345345',
            personality: '70%',
            iq: '60%'
        },
        {
            id: 4,
            firstname: 'Lucas',
            lastname: 'milano',
            email: 'lucas@gmail.com',
            website: 'www.lucas.com',
            phone: '+68678678876',
            personality: '60%',
            iq: '80%'
        }
    ]);

    useEffect(() => {

    }, []);

    return (
        <div>
            <div className="all-companies">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12">
                            <h3 className="mb-4">Selected Candidates</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Phone</th>
                                        <th>Personality %</th>
                                        <th>IQ %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => {
                                        return (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.firstname}</td>
                                                <td>{item.lastname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.website}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.personality}</td>
                                                <td>{item.iq}</td>
                                                <td>
                                                    <a className="far fa-check mr-4 text-success"></a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default SelectedCandidates;
