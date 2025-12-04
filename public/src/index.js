import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LoginApp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // هذه وظيفة وهمية فقط للاختبار
    if (email === 'test@example.com' && password === '123456') {
      setMessage('✅ تسجيل الدخول ناجح! (البيانات: test@example.com / 123456)');
    } else {
      setMessage('❌ فشل تسجيل الدخول. تحقق من البريد وكلمة المرور.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.header}>تسجيل الدخول</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            تسجيل الدخول
          </button>
        </form>
        {message && <p style={{ ...styles.message, color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}
      </div>
    </div>
  );
};

// أنماط CSS بسيطة
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  header: {
    color: '#1877f2',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '6px',
    boxSizing: 'border-box',
    textAlign: 'right',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1877f2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '16px',
  },
  message: {
    marginTop: '20px',
    fontWeight: 'bold',
  }
};

ReactDOM.render(
  <React.StrictMode>
    <LoginApp />
  </React.StrictMode>,
  document.getElementById('root')
);
