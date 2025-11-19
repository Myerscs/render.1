const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Myers - Portfolio</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .container {
            text-align: center;
            color: white;
            z-index: 10;
            animation: fadeIn 1s ease-in;
          }

          h1 {
            font-size: 5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideDown 1s ease-out;
            letter-spacing: 0.1em;
          }

          .subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            animation: slideUp 1s ease-out 0.3s backwards;
          }

          .buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: slideUp 1s ease-out 0.6s backwards;
          }

          .btn {
            padding: 15px 40px;
            font-size: 1.1rem;
            border: 2px solid white;
            background: rgba(255,255,255,0.1);
            color: white;
            cursor: pointer;
            border-radius: 50px;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            backdrop-filter: blur(10px);
          }

          .btn:hover {
            background: white;
            color: #667eea;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          .circles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            top: 0;
            left: 0;
          }

          .circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            animation: float 15s infinite ease-in-out;
          }

          .circle:nth-child(1) {
            width: 80px;
            height: 80px;
            left: 10%;
            animation-delay: 0s;
            animation-duration: 12s;
          }

          .circle:nth-child(2) {
            width: 120px;
            height: 120px;
            left: 70%;
            animation-delay: 2s;
            animation-duration: 15s;
          }

          .circle:nth-child(3) {
            width: 60px;
            height: 60px;
            left: 40%;
            animation-delay: 4s;
            animation-duration: 10s;
          }

          .circle:nth-child(4) {
            width: 100px;
            height: 100px;
            left: 85%;
            animation-delay: 1s;
            animation-duration: 13s;
          }

          .circle:nth-child(5) {
            width: 90px;
            height: 90px;
            left: 25%;
            animation-delay: 3s;
            animation-duration: 14s;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .social-links {
            margin-top: 3rem;
            display: flex;
            gap: 2rem;
            justify-content: center;
            animation: slideUp 1s ease-out 0.9s backwards;
          }

          .social-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .social-icon:hover {
            background: white;
            transform: scale(1.1) rotate(360deg);
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 3rem;
            }
            .subtitle {
              font-size: 1.2rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="circles">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>

        <div class="container">
          <h1>MYERS</h1>
          <p class="subtitle">Desarrollador Web | Creativo | Innovador</p>
          
          <div class="buttons">
            <button class="btn" onclick="alert('¡Hola! Soy Myers 👋')">Sobre Mí</button>
            <button class="btn" onclick="alert('Proyectos próximamente... 🚀')">Proyectos</button>
            <button class="btn" onclick="alert('Contáctame: myers@ejemplo.com 📧')">Contacto</button>
          </div>

          <div class="social-links">
            <div class="social-icon" onclick="alert('GitHub')">💻</div>
            <div class="social-icon" onclick="alert('LinkedIn')">💼</div>
            <div class="social-icon" onclick="alert('Twitter')">🐦</div>
          </div>
        </div>
      </body>
    </html>
  `);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});