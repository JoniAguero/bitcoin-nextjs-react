import Layout from '../component/Layout';
import fetch  from 'isomorphic-unfetch';
import Precio from '../component/Precio';

const Index = (props) => (
    <Layout>
        <div className="row">   
            <div className="col-12">
                <Precio precio={props.bitcoin} />
            </div>
            <div className="col-md-8">
                <h2>Noticias sobre Bitcoin</h2>
            </div>
            <div className="col-md-4">
                <h2>Eventos sobre Bitcoin</h2>
            </div>
        </div>
    </Layout>
    
);
Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1');
    const res = await precio.json();
    return {
        bitcoin: res.data.quotes.USD
    }
}

export default Index;