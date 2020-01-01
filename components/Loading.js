const Loading = () => {
   return (
      <div>
         <h1>Espera un momento</h1>
         <p>Esto solo dura unos segundos, solo estamos verificando y asegurando tu conexion...</p>
         <style jsx>{`
            div{
               padding:20px;
               width:calc(100% - 40px);
               max-width:400px;
               position:fixed;
               left:50%;
               top:50%;
               transform:translate(-50%, -50%);
               background:var(--backgrounds);
            }
            h1{
               color:var(--text);
               font-size:1.8em;
            }
         `}</style>
      </div>
   )
}

export default Loading;
