export default function Navbar() {

return(

<header style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 40px",
background:"#1f1f1f",
color:"white",
position:"sticky",
top:"0",
zIndex:"1000",
borderBottom:"1px solid #333"
}}>

<div style={{
fontWeight:"bold",
fontSize:"20px",
letterSpacing:"1px"
}}>
SERVITRONIX
</div>

<nav style={{
display:"flex",
gap:"30px",
fontSize:"14px"
}}>

<a href="#inicio" style={{color:"white",textDecoration:"none"}}>Inicio</a>
<a href="#servicios" style={{color:"white",textDecoration:"none"}}>Servicios</a>
<a href="#capacidades" style={{color:"white",textDecoration:"none"}}>Capacidades</a>
<a href="#proyectos" style={{color:"white",textDecoration:"none"}}>Proyectos</a>
<a href="#contacto" style={{color:"white",textDecoration:"none"}}>Contacto</a>

</nav>

</header>

)

}