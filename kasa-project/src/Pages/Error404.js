import React from "react";

function Error(){
    return(
        <div className="error-page">
            <h1 className="title-error">
        404
    </h1>
     <p className="text-error">Oups! La page que vous demandez n'existe pas.</p>
     <p className="text-back">Retourner sur la page d`accueil</p>
    </div>
        
    )
}

export default Error;