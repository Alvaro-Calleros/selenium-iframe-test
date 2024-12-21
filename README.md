# Proyecto de Automatización con Playwright

Este proyecto utiliza Playwright para realizar pruebas automatizadas en la página web de Selenium. A continuación, se describe la estructura del proyecto y los pasos para copiarlo.

## Estructura del Proyecto

/proyecto
│
├── /pages
│ └── iframePage.ts # Clase que contiene la lógica de interacción con la página de iframes.
│
├── /tests
│ └── iframeTest.spec.ts # Archivo de prueba que utiliza la clase IframePage.
│
├── user-data.json # Archivo JSON que contiene datos de usuario para las pruebas.
│
└── test-data.json # Archivo JSON que describe cada paso del test.
text

## Pasos para Copiar el Proyecto

1. Clona este repositorio en tu máquina local:
git clone 

2. Navega al directorio del proyecto:
cd proyecto

3. Instala las dependencias necesarias:
npm install

4. Ejecuta las pruebas:
npx playwright test

## Notas
- Asegúrate de tener Node.js y npm instalados en tu sistema.
- Modifica el archivo `user-data.json` según sea necesario para probar diferentes escenarios.