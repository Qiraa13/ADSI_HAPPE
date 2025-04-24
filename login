body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: radial-gradient(circle at center, #43a047, #1b5e20);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .container {
    text-align: center;
  }
  
  .logo {
    width: 150px;
    margin-bottom: 30px;
  }
  
  .login-box p {
    background: white;
    padding: 10px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    font-size: 18px;
    font-weight: bold;
  }
  
  .roles {
    margin-top: 20px;
  }
  
  .role-button {
    margin: 5px;
    padding: 10px 18px;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    color: white;
    background-color: #81c784;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .role-button.active {
    background-color: #2e7d32;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  }
  
  .role-button:hover {
    background-color: #388e3c;
  }
  
  .grass {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
      
