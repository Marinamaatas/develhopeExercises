export function MouseClicker(){
    function buttonReaction(event){ //siempre recibe un evento
       event.target.name && console.log(event.target.name);
       event.target.src && console.log(event.target.src);
    }
    return(
        <div>
            <button name="one" onClick={buttonReaction}>
                <img width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png" />
                Click here!</button>
        </div>
    )
}