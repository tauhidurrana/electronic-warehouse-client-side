import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h3 style={{color:'green'}}>Que-1: Difference between Javascript & NodeJS?</h3>
            <Table striped bordered hover variant="">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Javascript</th>
                        <th>NodeJS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                        <td>NodeJS is a Javascript runtime environment.</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>It is basically used on the client-side.</td>
                        <td>It is mostly used on the server-side.
                        </td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Javascript can only be run in the browsers.
                        </td>
                        <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                    </tr>
                </tbody>
            </Table>

            <div>
            <h3 style={{color:'green'}}>Que-2: Difference between SQL & NoSQL?</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
                        <td>Non-relational or distributed database system.</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>These databases have fixed or static or predefined schema</td>
                        <td>They have dynamic schema
                        </td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>These databases are not suited for hierarchical data storage.
                        </td>
                        <td>These databases are best suited for hierarchical data storage.</td>

                    </tr>
                </tbody>
            </Table>
            </div>
            <div>
            <h3 style={{color:'green'}}>Que-3: What is the purpose of JWT and how does it work?</h3>
            <p>
            JWT can be used as an access token to prevent unwanted access to a protected resource. They're often used as Bearer tokens, which the API will decode and validate before sending a response.WTs can be used as an authentication mechanism that does not require a database. The server can avoid using a database because the data store in the JWT sent to the client is safe.
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p>
            </div>
        </div>
    );
};

export default Blogs;