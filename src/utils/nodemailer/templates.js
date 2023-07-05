module.exports = {
  registerMessage: ({ userName }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        p {
          padding: 5px 0;
          text-align: justify;
        }
        h1 {
          font-size: 20px;
          text-align: center;
          margin-bottom: 20px;
        }
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
        .content {
          position: relative;
          margin: 40px auto;
          max-width: 450px;
          border-radius: 10px;
          padding: 10px 30px;
          box-shadow: 1px 1px 4px 1px rgba(128, 128, 128, 0.579);
        }
        header {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background-color: #eceff1;
          display: grid;
          place-content: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -32.5px;
          overflow: hidden;
        }
        main {
          margin-top: 40px;
        }
        .content-btn {
          height: 100px;
          display: grid;
          place-content: center;
        }
        .btn-verify {
          padding: 10px 20px;
          background: #16486f;
          border-radius: 10px;
          color: white;
          font-weight: 400;
          text-decoration: none;
          font-size: 20px;
        }
  
        footer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(128, 128, 128, 0.609);
          margin-top: 20px;
          padding: 10px 0;
        }
        .ft-logo {
          align-items: center;
          display: flex;
          gap: 4px;
          font-size: 18px;
        }
        .icon {
          color: #adb1b3;
        }
        .icon:hover {
          color: #353637;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <header>
          <img
            width="50"
            height="50"
            src="https://isewa.org.in/wp-content/uploads/2021/06/success.gif"
            alt="Properties and you temporal image"
          />
        </header>
        <main>
          <h1>¡Bienvenido a Properties & You!</h1>
          <p>Hi <strong> ${userName} </strong>,</p>
          <p>
            Estamos encantados de darte la bienvenida a nuestra aplicación web, el
            lugar perfecto para encontrar las propiedades e inmuebles de tus
            sueños. Aquí, te ofrecemos una experiencia única y personalizada para
            facilitar tu búsqueda y ayudarte a encontrar el hogar perfecto.
          </p>
  
          <p>
            No importa si eres un comprador, un vendedor o simplemente estás
            buscando inspiración, <strong>Properties & You</strong> es el lugar
            ideal para satisfacer tus necesidades inmobiliarias. Nuestro equipo de
            profesionales altamente capacitados está listo para brindarte
            asistencia personalizada y responder a todas tus preguntas.
          </p>
  
          <p>
            Así que adelante, comienza tu emocionante viaje en
            <strong>Properties & You</strong>. Esperamos que encuentres
            <em>exactamente lo que buscas</em> y que esta aplicación se convierta
            en tu compañero de confianza en tu búsqueda de propiedades.
          </p>
  
          <div class="content-btn">
            <a
              class="btn-verify"
              href="https://properties-you-development.vercel.app/"
            >
              Verificar cuenta</a
            >
          </div>
        </main>
        <footer>
          <div class="ft-logo">
            <img
              width="30"
              height="30"
              src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
              alt="Properties and you temporal image"
            />
            <p>Properties & You</p>
          </div>
          <a href="https://github.com/SourerDev/Proyecto-Final-Frontend" target="_blank">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>
        </footer>
      </div>
    </body>
  </html>  
  `,
}
/**
 * <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style></style>
    </head>
    <body>
    </body>
  </html>
*/
