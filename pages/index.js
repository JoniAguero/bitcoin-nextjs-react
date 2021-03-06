import Layout from '../component/Layout';
import fetch  from 'isomorphic-unfetch';
import Precio from '../component/Precio';
import Noticias from '../component/Noticias';
import Eventos from '../component/Eventos';

const Index = (props) => (
    <Layout>
        <div className="row mt-5">   
            <div className="col-12">
                <Precio precio={props.bitcoin} />
            </div>
            <div className="col-md-8">
                <h2>Noticias sobre Bitcoin</h2>
                <Noticias noticias={props.noticias} />
            </div>
            <div className="col-md-4">
                <h2>Eventos sobre Bitcoin</h2>
                <Eventos eventos={props.eventos} />
            </div>
        </div>
    </Layout>
    
);
Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=1d01268cb056446083eefeee93e25036&language=es');
    const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Argentina&token=QP47CDFTEMY2SRYH6M5W')

    const resPrecio = await precio.json();
    const resNoticia = await noticias.json();
    const resEventos = await eventos.json();

    return {
        bitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticia.articles,
        eventos: resEventos.events
    }
}

export default Index;