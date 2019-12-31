const Toast = props => {
    return(
        <div className="toast">
            <span>{props.text}</span>
            <style jsx>{`
                div{
                    position:fixed;
                    bottom:0;
                    left:0;
                    width:100%;
                    transform:translateY(100%);
                    transition:transform 0.3s ease-in-out;
                    background:var(--text);
                    padding:20px;
                    z-index:99;
                }
                span{
                    font-size:1em;
                    font-weight:500;
                    color:var(--backgrounds);
                }
            `}</style>
        </div>
    )
}

export default Toast;