import Navbar from '../../../components/organisms/navbar/Navbar';
import React from 'react';

const Index = () => {
    return (
        <div>
            <Navbar />

            <form style={{ padding: 20, gap: 20 }}>
                <h2>Account Deactivation</h2>
                <div style={{ display: 'flex', flexDirection: 'column', width: '30%', gap: 10 }}>
                    <label>Email</label>
                    <input style={{ width: '50%', backgroundColor: 'white', color: 'black', borderColor: '#666976', height: 30 }}></input>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '30%', gap: 10 }}>
                    <label>Deactivation Code</label>
                    <input style={{ width: '50%', backgroundColor: 'white', color: 'black', borderColor: '#666976', height: 30 }}></input>
                </div>
                <button style={{ backgroundColor: '#16BE6E', padding: 5, marginTop: 20 }}>Deactivate</button>
            </form>
        </div>
    );
}

export default Index;