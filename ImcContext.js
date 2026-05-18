import React, { createContext, useState, useEffect } from 'react';

export const ImcContext = createContext();

export const ImcProvider = ({ children }) => {

  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(1.70);

  const [imc, setImc] = useState(0);
  const [clasificacion, setClasificacion] = useState('');

  useEffect(() => {
    calcularIMC();
  }, [peso, altura]);

  const calcularIMC = () => {

    const resultado = peso / (altura * altura);

    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setClasificacion('Bajo peso');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setClasificacion('Peso normal');
    } else if (resultado >= 25 && resultado <= 29.9) {
      setClasificacion('Sobrepeso');
    } else {
      setClasificacion('Obesidad');
    }
  };

  return (
    <ImcContext.Provider
      value={{
        peso,
        setPeso,
        altura,
        setAltura,
        imc,
        clasificacion
      }}
    >
      {children}
    </ImcContext.Provider>
  );
};