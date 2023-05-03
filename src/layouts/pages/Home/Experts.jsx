import React, { useEffect, useState } from 'react';
import Expert from './Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch(`https://the-thai-master-server-rathin-rathin.vercel.app/chef`)
            .then(res => res.json())
            .then(data => setExperts(data))

    }, [])
    return (
        <div className=' w-9/12 mx-auto'>
            <h1 className='text-center font-semibold text-3xl my-9'>Our experts</h1>
            <div className='grid md:grid-cols-3 gap-3 '>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;