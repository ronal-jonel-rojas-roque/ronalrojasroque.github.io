import React from 'react';
import Works from '../components/work.component';
import Dabambu from '../assets/dabambu.png';
import Cashsol from '../assets/cashsol.png';
import Cieneguilla from '../assets/cieneguilla.png';
import Circolosportivo from '../assets/circolosportivo.png';
import Drenvio from '../assets/drenvio.png';
import Tumercado from '../assets/tumercado.png'
import '../common/style-briefcase.css';

const Briefcase = () => {

    return (
        <div className='container-briefcase'>
            <div>
                <h1 className='work-1'>EH TRABAJADO EN</h1>
            </div>

            <div className="card-container">

                <Works
                    image={Dabambu}
                    title="DABAMBU"
                    description="Sistema web enfoca do en venta de recuerdos y plantas de bambú"
                    buttonText="Detalles"
                    link="https://www.dabambu.com"
                />
                <Works
                    image={Cieneguilla}
                    title="CIENEGUILLA TOURS"
                    description="Sistema web enfocado en tours"
                    buttonText="Detalles"
                    link="https://www.cieneguillatours.com"
                />
                <Works
                    image={Cashsol}
                    title="CASHSOL"
                    description="Sistema web enfocado en actividades bancarias"
                    buttonText="Detalles"
                    link="https://www.dabambu.com"
                />
                <Works
                    image={Drenvio}
                    title="Dr. envios"
                    description="Sistema web enfocado en realizar cotizaciones de envios a diferentes paises"
                    buttonText="Detalles"
                    link="https://www.drenvio.com"
                />
                <Works
                    image={Circolosportivo}
                    title="CIRCOLO SPORTIVO ITALIANO"
                    description="Sistema web enfocado en un club deportivo"
                    buttonText="Detalles"
                    link="https://circolo.pe/?fbclid=IwAR0w-GIuJl1h-35ih2aQ11EGdCT8Bz_SfW5Srsn6wZe-CxjCA1tZlyq5TKY"
                />
                <Works
                    image={Tumercado}
                    title="TUMERCADO"
                    description="Sistema web enfocado en venta de verduras y frutas"
                    buttonText="Detalles"
                    link="https://tumercadoperu.com/"
                />
            </div>
        </div>
    );
};

export default Briefcase;