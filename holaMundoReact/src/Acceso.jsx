export default function Acceso (props){

    return props.logeado ? <h3>Bienvenido, Usuario</h3> : <h2>Por favor, Inicia sesión</h2>;
}