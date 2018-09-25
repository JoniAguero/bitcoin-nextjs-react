import Link from 'next/link';

const Index = () => (
    <div>
        <li><Link href="/"><a>Inicio</a></Link></li>
        <li><Link href="/nosotros"><a>Nosotros</a></Link></li>        
        <p>Hola Inicio</p>
    </div>
)

export default Index;