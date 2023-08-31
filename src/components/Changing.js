import { useState, useEffect } from "react";

const Changing = () => {
    const [dynamic, setDynamic] = useState("new class");

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var len = 5;  
    var randomName = '';  
  
    for (var i=0; i<len; i++) {  
        var num = Math.floor(Math.random() * characters.length);  
        randomName += characters.substring(num, num+1);
    }

    useEffect(() => {
        const randomClass = `${randomName}`;
        setDynamic(randomClass);
      }, []);

    return (
        <div>
            <h1>Class name Changing</h1>
            <button className={dynamic}>
                Submit
            </button>
        </div>
    )
};

export default Changing