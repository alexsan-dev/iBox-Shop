# iBox ( Código Fuente )
## Contiene toda la estructura SSR de la aplicación y el Backend con firebase en los Cloud Functions ☁️🔥.
----------
### Instalación
Incluye las dependencias de NodeJs minimas ( Next, React )

```
npm install
```
### Modo desarrollo
Puede probarse con el servidor por defecto de next o probar el servidor por firebase 🔥.
```
npm run dev
```
### Construir y Subir
Crea un build de next dentro de /functions para crear deploy en firebase cloud functions.🔧
```
npm run deploy
```

### Dependencias 
Ver package.json ( Mantener sin librerias externas a excepcion de paquetes de iconos o fuentes ).
```
    "dependencies": {
        "@zeit/next-css": "^1.0.1",
        "@zeit/next-less": "^1.0.1",
        "@zeit/next-sass": "^1.0.1",
        "dexie": "^2.0.4",
        "firebase": "^7.6.1",
        "framer-motion": "^1.7.0"
        "next": "^9.1.6",
        "next-offline": "^4.0.6",
        "react": "^16.12.0",
        "react-dom": "^16.12.0",
        "react-router-dom": "^5.1.2",
        "react-scripts": "^3.3.0"
    }
```
