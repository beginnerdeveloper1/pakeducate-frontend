import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('const response = await axios.post('https://pakeducate-backend.vercel.app/api/login', { username, password });
      if (response.data.success) {
        alert("لاگ ان کامیاب! خوش آمدید " + response.data.user.role);
      }
    } catch (error) {
      setMessage("لاگ ان میں غلطی: " + (error.response?.data?.message || "سرور کا مسئلہ"));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>پاک ایجوکیٹ - لاگ ان پورٹل</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block', borderRadius: '10px' }}>
        <input type="text" placeholder="یوزر نیم" onChange={(e) => setUsername(e.target.value)} /><br/><br/>
        <input type="password" placeholder="پاس ورڈ" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
        <button onClick={handleLogin} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>لاگ ان کریں</button>
        <p style={{ color: 'red' }}>{message}</p>
      </div>
    </div>
  );
}

export default App;
