export default function Button({ titulo, classes, click }) {
    return (
        <>
            <button className={`btn ${classes ?? ""}`} onClick={() => { if (click) click() }}>{titulo}</button>

            <style jsx>
                {`
                    .btn {
                        border: 1px solid var(--roxo1);
                        padding: 8px 20px;
                        text-transform: uppercase;
                        color: #0000;
                        background: 
                          linear-gradient(90deg,var(--branco) 50%,var(--roxo1) 0) calc(100% - var(--_p,0%))/200% 100%,
                          linear-gradient(var(--roxo1) 0 0) 0% 100%/var(--_p,0%) 100% no-repeat;
                        -webkit-background-clip: text,padding-box;
                                background-clip: text,padding-box;
                        transition: 0.2s;
                        font-weight: 600;
                        border-radius: 5px;
                        box-shadow: var(--shadow1);
                        cursor: pointer;
                      }

                      .btn:hover {
                        --_p: 100%;
                      }

                    
                `}
            </style>

            <style jsx global>{`
                
            `}
            </style>
        </>
    )
}
