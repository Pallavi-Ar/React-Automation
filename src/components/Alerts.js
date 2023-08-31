import '../css/Alert.css';

export default function Alerts() {
    const alert = () => {
        window.alert("This is an alert!");
    }

    const alertInput = () => {
        let output;
        let name = prompt("Enter your name: ", "Sample text");
        if(name == "" || name == null) {
            output = "Prompt cancelled";
        } else {
            output = "Hello " + name; 
        }
    }

    return (
        <div>
            <h1>Alerts</h1>
            <button onClick={alert} id="btn1">Confirmation Alert</button>
            <button onClick={alertInput} id="btn2">Prompt Alert</button>
        </div>
    );
}