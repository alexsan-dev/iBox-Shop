import { useSendEmailVerification, useDeleteUser, useUserTime } from '../utils/hooks';
import { useState } from 'react';

const Verified = props => {
    const [visible, setVisible] = useState(props.show);

    const sendEmail = () => {
        useSendEmailVerification().then(() => {
            console.log("Send verification email");
            setVisible(true);
        });
    }

    if (!visible) {
        const timeDelta = new Date() - useUserTime;
        if(timeDelta > (3600 * 24 * 1000)) {
            useDeleteUser().then(() =>{
                console.log("User deleted");
                setVisible(true);
            }).catch(error => console.log('Error deleting user:', error));
        }

        return (
            <div className="amber">
                <div>
                    <h1>Verifica tu correo</h1>
                    <p>Ya te enviamos un link para poder seguir utlizando la tienda con tu cuenta.</p>
                </div>
                <button onClick={sendEmail} className="waves waves-dark white"><i className="material-icons">send</i>Reenviar</button>
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
                    color:var(--parraf);
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
    }
    else return "";
}

export default Verified;