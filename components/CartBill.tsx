// PROPIEDADES
interface BillProps { strings: langPackage.cartPage["summary"]["sendForm"], sum: number, formValues: IForms }

const CartBill: React.FC<BillProps> = (props: BillProps) => {
  return (
    <div id="cartBill">
      <div id="secureBanner">
        <i className="material-icons">https</i>
        <div>
          <h2>{props.strings.banner.title}</h2>
          <p>{props.strings.banner.text}</p>
        </div>
      </div>
      <h3>{props.strings.info.title} <i className="material-icons">assignment</i></h3>
      <p id="summaryText">
        <i className="material-icons">fiber_pin</i><strong>{props.strings.info.fields.nit}</strong> <span className="finalForm">{props.formValues?.nit}</span>
        <br />
        <i className="material-icons">person</i><strong>{props.strings.info.fields.name}</strong> <span className="finalForm">{props.formValues?.displayName}</span>
        <br />
        <i className="material-icons">email</i><strong>{props.strings.info.fields.email}</strong> <span className="finalForm">{props.formValues?.email}</span>
        <br />
        <i className="material-icons">monetization_on</i><strong>{props.strings.info.fields.total}</strong> Q<span className="finalForm">{props.sum}</span>
        <br />
        <i className="material-icons">directions</i><strong>{props.strings.info.fields.address}</strong> <span className="finalForm">{props.formValues?.address}</span>
      </p>
      <style jsx>{`
        #summaryText{
          height:0;
          margin:15px 0 20px 0;
        }
        h3{
          opacity:0.8;
        }
         h3 > i{
          position:relative;
          top:5px;
        }
        #summaryText > strong{
          opacity:0.7;
        }
        #summaryText > i{
          opacity:0.7;
          font-size:1em;
          position:relative;
          top:1px;
          margin-right:5px;
        }
        #secureBanner{
          padding:10px;
          padding-bottom:13px;
          display:flex;
          font-size:0.8em;
          align-items:center;
          background:linear-gradient(to left,#2196f3, var(--primary));
          border-radius:10px;
          color:var(--backgrounds);
          margin-bottom:10px;
        }
        #secureBanner > i{
          font-size:3em;
          margin-right:10px;
        }
        #secureBanner h2{
          color:var(--backgrounds);
        }
      `}</style>
    </div>
  )
}

export default CartBill;