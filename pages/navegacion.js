import Link from 'next/link';

const Navegacion = () => (
    <div>
        <li><Link href="/"><a>Inicio</a></Link></li>
        <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
    </div>
)

export default Navegacion;