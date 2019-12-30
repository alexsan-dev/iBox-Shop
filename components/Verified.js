const Verified = props => {
    if (!props.show) return (
        <div className="amber">
            <div>
                <h1>Verifica tu correo</h1>
                <p>Ya te enviamos un link para poder seguir utlizando la tienda con tu cuenta.</p>
            </div>
            <button className="waves white"><i className="material-icons">send</i>Reenviar</button> 
            <style jsx>{`
                .amber{
                    padding:20px;
                    color:var(--backgrounds);
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                }
                .amber > div{
                    width:170px;
                }
                button{
                    color:var(--text);
                }
                h1{
                    color:var(--backgrounds);
                    font-size:1.3em;        
                }
                p{
                    font-size:0.9em; 
                }
            `}</style>
        </div>
    )
    else return "";
}

export default Verified;