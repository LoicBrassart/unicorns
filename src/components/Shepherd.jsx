export default function Shepherd({update}) {

    // On every display, the Shepherd selects a *new* random color
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // When clicked, the Shepherd sends his color to App via the `update` method he got in his own props
    return (
        <p onClick={()=>{update(`rgb(${red},${green},${blue})`)}}>I'm the Shepherd !</p>
    )
}