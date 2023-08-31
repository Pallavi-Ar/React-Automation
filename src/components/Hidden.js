import { useEffect, useState } from "react";
import '../css/hidden.css';

export default function Hidden() {
    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);

      const secondTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(secondTimeout);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  const [dynamic, setDynamic] = useState("new class");

  useEffect(() => {
    if(isVisible) {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var len = 5;  
        var randomName = '';  

        for (var i=0; i<len; i++) {  
            var num = Math.floor(Math.random() * characters.length);  
            randomName += characters.substring(num, num+1);
        }
        const randomClass = `${randomName}`;
        setDynamic(randomClass);
    }
  }, [isVisible]);

  return (
    <div>
        <h1>Hide and Show</h1>
        <h3>Class name changes every time button reappears</h3>
        {isVisible && <button className={dynamic}>Hide</button>}
    </div>
  );
}