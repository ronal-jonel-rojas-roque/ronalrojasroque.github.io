import React from 'react';
import Works from '../components/work.component';

const Briefcase = () => {
    return (
        <div>
            <div>
                <h1 className='work-1'>EH TRABAJADO EN</h1>
            </div>

            <div className="card-container">

                <Works
                    image="https://storage.googleapis.com/api-dabambu-service.appspot.com/uploads/products-dabambu/118358/1.png"
                    title="DABAMBU"
                    description="Sistema web enfoca do en venta derecuerdos y plantas de bambú"
                    buttonText="Visitar Pagina"
                    link= "https://www.dabambu.com"
                />
                <Works
                    image="https://scontent.ftru2-2.fna.fbcdn.net/v/t1.18169-9/23844546_217694112104484_6459530667478508806_n.png?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHZQmZJBVsnG3SdmWWhOQCXFDClYkCmxIwUMKViQKbEjBy4CB0f2gDm8Dn1TEe0GfsZ2CIMh8uHMm6mhzLe66NM&_nc_ohc=1_kfeuK5-tMAX8QmvNY&_nc_ht=scontent.ftru2-2.fna&oh=00_AfDbhs-bRU5e4BddoVq3_8RVfKg_Pvg2L7lnuXgr8iVzpg&oe=64924015"
                    title="CIENEGUILLA TOURS"
                    description="SISTEMA WEB enfocado en tours"
                    buttonText="Visitar Pagina"
                    link= "https://www.cieneguillatours.com"
                />
                <Works
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2ch8TcrvaiLMg7L0jdUbzzQf48p9SBuj-PQIjuvGelIm7kcGjeWHCTY6_OG9u6CgU0s&usqp=CAU"
                    title="CASHSOL"
                    description="Sistema web enfocado en actividadesbancarias"
                    buttonText="Visitar Pagina"
                    link= "https://www.dabambu.com"
                />
                <Works
                    image="https://static.wixstatic.com/media/ff4e49_8bd3923d9e034369ac311cabda0b2988~mv2.png"
                    title="Dr. envios"
                    description="Sistema web enfocado en realizar cotizaciones de envios a diferentes paises"
                    buttonText="Visitar Pagina"
                    link= "https://www.drenvio.com"
                />
            </div>
        </div>
    );
};

export default Briefcase;