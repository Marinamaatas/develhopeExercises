export function MouseClicker(){
    function buttonReaction(event){ //siempre recibe un evento
       console.log(event.target.name);
    }

    function imgReaction(event){
        console.log(event.target.src);
        event.stopPropagation();
    }
    return(
        <div>
            <button name="one" onClick={buttonReaction}>
                <img width={20} height={20} onClick={imgReaction} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png" />
                Click here!</button>
        </div>
    )
}