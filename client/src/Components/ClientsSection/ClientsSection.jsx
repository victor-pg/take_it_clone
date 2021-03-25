import React from 'react';
import './ClientsSection.scss';

const ClientsSection=()=>{
    const clients = ['clients1.jpg','clients2.jpg','clients3.jpg'];
    return(
        <div className="clients-section container" id="clients">
            {
                clients.map(client=> <img key={client} src={process.env.PUBLIC_URL + `${client}`} className="clients-image-size" alt={client} /> )
            }
        </div>
    );
}

export default ClientsSection;