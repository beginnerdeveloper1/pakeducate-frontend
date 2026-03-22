import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    setMessage("لاگ ان ہو رہا ہے، براہ کرم انتظار کریں...");
    try {
      // آپ کا اصلی بیک اینڈ لنک
      const response = await axios.post('https://pakeducate-backend.vercel.app/api/login', { 
        username: username, 
        password: password 
      });

      if (response.data.success) {
        alert("لاگ ان کامیاب! خوش آمدید " + response.data.user.role);
      }
    } catch (error) {
      if (error.response) {
        setMessage("لاگ ان میں غلطی: " + error.response.data.message);
      } else {
        setMessage("سرور سے رابطہ نہیں ہو رہا۔ براہ کرم اپنا انٹرنیٹ چیک کریں۔");
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial', direction: 'rtl' }}>
      <h1>پاک ایجوکیٹ - لاگ ان پورٹل</h1>
      <div style={{ border: '2px solid #007bff', padding: '30px', display: 'inline-block', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
        <input 
          type="text" 
          placeholder="یوزر نیم لکھیں" 
          style={{ padding: '10px', width: '250px', marginBottom: '10px' }}
          onChange={(e) => setUsername(e.target.value)} 
        /><br/>
        <input 
          type="password" 
          placeholder="پاس ورڈ لکھیں" 
          style={{ padding: '10px', width: '250px', marginBottom: '10px' }}
          onChange={(e) => setPassword(e.target.value)} 
        /><br/><br/>
        <button 
          onClick={handleLogin} 
          style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
        >
          لاگ ان کریں
        </button>
        <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>{message}</p>
      </div>
    </div>
  );
}

export default App;
