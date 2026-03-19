import Image from "next/image";

export default function Services() {

return(

<section id="servicios" style={{
padding:"80px 20px",
textAlign:"center"
}}>

<h2 style={{
fontSize:"36px",
marginBottom:"40px"
}}>
Servicios industriales
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"40px",
maxWidth:"1200px",
margin:"auto"
}}>

<div>
<Image
src="/images/infraestructura-electrica.jpg"
alt="Infraestructura eléctrica"
width={400}
height={260}
/>

<h3>Infraestructura eléctrica</h3>

<p>
Instalaciones eléctricas industriales,
canalización, tableros y sistemas eléctricos
para plantas de manufactura.
</p>
</div>

<div>
<Image
src="/images/infraestructura-mecanica.jpg"
alt="Infraestructura mecánica"
width={400}
height={260}
/>

<h3>Infraestructura mecánica</h3>

<p>
Estructuras metálicas, pailería,
soldadura y tuberías industriales
para instalaciones productivas.
</p>
</div>

<div>
<Image
src="/images/transportadores-industriales.jpg"
alt="Transportadores industriales"
width={400}
height={260}
/>

<h3>Sistemas de transporte industrial</h3>

<p>
Integración e instalación de sistemas
de transporte industrial para líneas
de producción.
</p>
</div>

</div>

</section>

)

}