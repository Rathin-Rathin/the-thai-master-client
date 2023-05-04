import React, { useEffect, useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import HappyClient from './HappyClient/HappyClient';
const HappyClients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch(`https://the-thai-master-server-rathin-rathin.vercel.app/feedback`)
            .then(res=>res.json())
            .then(data => setClients(data))
        
    },[])
    return (
        <LazyLoad>
            <div>
                <h1 className='flex items-center justify-center gap-2 text-center font-semibold text-3xl my-9'><FaSmile className='text-blue-500' />HAPPY CLIENTS</h1>
                <div className='px-3 grid grid-cols-2 md:grid-cols-4 gap-8'>
                {
                    clients.map(client => <HappyClient
                        key={client.id}
                        client={client}
                    ></HappyClient>) 
                }
             </div>

            </div>
        </LazyLoad>

    );
};

export default HappyClients;