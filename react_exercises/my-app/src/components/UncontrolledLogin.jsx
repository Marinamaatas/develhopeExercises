export default function UncontrolledFunction(){
    function handleSubmitForm(event){
        event.preventDefault();
        /*const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const remember = event.target.elements.namedItem('remember').checked*/


        const formData = new FormData(event.target);//FormData trae la informacion de los formularios y nos permite trabajar con get
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember')=== 'on' ? true : false, //cuando esta checked es on y cuando no es null por eso tenemos que aclararlo con esta linea de código
        }
        console.log(data)
    }

//Es una forma facil de trabajar con los formularios y recoger los datos
//Por el contrario no puedes controlarlos y aplicarle logica, requisitos,etc.
//Por lo que se puede utiliza en ejemplos sensillos pero no en aquellos mas complejos.
    return(
        <form onSubmit={handleSubmitForm}>
            <h1>Iniciar sesión (descontroladamente)</h1>
            <p>User name</p>
            <input name= "username" />
            <p>Password</p>
            <input name="password" type="password" />
            <p>Remember me</p>
            <input name="remember" type="checkbox" />
            <br />
            <button>Log in</button>
            <button >Reset</button>
        </form>
    )
}