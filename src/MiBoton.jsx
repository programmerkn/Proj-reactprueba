import React, { useState } from 'react';

function MiBoton() {
  const [textoBoton, setTextoBoton] = useState("Haz clic aquí");
const [contadorBoton,setContadorBoton ] = useState(0);
    const handleClick = () => {
      setContadorBoton(contadorBoton +1);
        setTextoBoton("Di clic"+contadorBoton );
          };

            return (
                <button onClick={handleClick}>{textoBoton}</button>
                  );
                  }

                  export default MiBoton;
                  