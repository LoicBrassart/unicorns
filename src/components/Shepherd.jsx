export default function Shepherd({update}) {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return (
        <p onClick={()=>{update(`rgb(${red},${green},${blue})`)}}>I'm the Shepherd !</p>
    )
}