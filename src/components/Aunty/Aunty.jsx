import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin hasFriend={true}>Efaz</Cousin>
                <Cousin>Tanshi</Cousin>
            </section>
        </div>
    );
};

export default Aunty;