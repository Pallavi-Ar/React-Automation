import '../css/Svg.css';

export default function Svg() {
    return(
        <div>
            <h1>SVG</h1>
            <svg width="100" height="100" id="svg">
                <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />
            </svg>
        </div>
    );
}