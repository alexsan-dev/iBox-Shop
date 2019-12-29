import { useState } from 'react';
import { useInterval } from '../utils/hooks.js';

const CardShadow = props => {
   let [bars, setBars] = useState(0);

   useInterval(() => setBars({
      r1: Math.random() * 100,
      r2: Math.random() * 100,
      r3: Math.random() * 100
   }), 600);

   return (
      <div className="card">

         <div className="card-head waves">
            <span className="material-icons">art_track</span>
            <p>CARGANDO<br />PRODUCTO</p>
         </div>

         <div className="card-body">
            <div className="card-content">
               <span></span>

               <div>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>

            </div>
         </div>

         <style jsx>{`
	    @keyframes op{
	       0%{opacity:1;}
	       50%{opacity:0;}
	       100%{opacity:1;}
	    }
            .card{
	       transition:opacity 0.6s ease-in-out;
               position:relative;
               width:100%;
               margin-bottom:20px;
               border-radius:15px;
               overflow:hidden;
               z-index:1;
               box-shadow:0 0 10px rgba(0,0,0,.1);
            }
            .card .card-head{
               width:100%;
               height:13vh;
               position:relative;
               z-index:2;
	       padding:30px;
	       display:flex;
	       align-items:center;
	       justify-content:flex-start;
            }
	   .card .card-head span{
	       font-size:5em;
	       color:var(--unactive);
	   }
	   .card .card-head p{
	       color:var(--unactive);
	       font-weight:500;
	       font-size:1.2em;
	       margin-left:10px;
	   }
           .card .card-head::before{
               content:'';
               position:absolute;
               top:0;
               left:0;
               width:100%;
               height:100%;
               z-index:1;
               background:rgba(0,0,0,.1);
            }
            .card .card-body{
               position:relative;
               width:100%;
               padding:30px;
               color:var(--text);
               background:var(--backgrounds);
               z-index:2;
            }
	    .card .card-body span{
	       display:block;
	       position:relative;
	       width:100%;
	       height:20px;
	       border-radius:50px;
	       background:var(--unactive);
	       transition:width 0.6s ease-in-out;
	    }
	    .card .card-body > div > div{
	       margin-top:10px;
	    }
	    .card .card-body > div > div > span{
	       opacity:0.8;
	       margin-bottom:5px;
	       height:10px;
	    }
	    .card .card-body > div > div > span:nth-child(1){
	       width:${bars.r1}%;
	    }
	    .card .card-body > div > div > span:nth-child(2){
               width:${bars.r2}%;
            }
	    .card .card-body > div > div > span:nth-child(3){
               width:${bars.r3}%;
            }
         `}</style>

      </div>
   )
}

export default CardShadow;
