import './Button.css'

export const Button = () => {
    return(
        <button className="button-style" onClick={()=> {
            console.log(multiplyBy2(10))
        }}>Click to multiply by 2</button>
    );
}

function multiplyBy2 (a){
    return (a * 2);
}
