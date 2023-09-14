import React, { useState } from 'react';

function MiBoton() {
  const [textoBoton, setTextoBoton] = useState("Haz clic aquí");

    const handleClick = () => {
        setTextoBoton("Di clic");
          };

            return (
                <button onClick={handleClick}>{textoBoton}</button>
                  );
                  }

                  export default MiBoton;
                  