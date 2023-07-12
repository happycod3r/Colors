
const Button = () => {
    
    const onBtnClick = e => {
        e.target.parentNode.parentNode.style.backgroundColor = '#473839';
    }

    return (
        <div className="btn-coontainer">
            <button onClick={onBtnClick}>Press Me</button>
        </div>
    );
}

export default Button;
