import React, {useEffect, useState} from "react";
const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/hello')
        .then(response => response.text())
        .then(text => setHello(text));
    }, []);
    return (
        <h1>Practice</h1>
    );
};
export default HelloApiClient;


