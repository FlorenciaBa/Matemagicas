import React, { useState, useEffect } from 'react';
import Headerr from './Headerr';
import Footer from './Footer';
import './Footer.css';
import div2 from "./images/div2.png";
import div3 from "./images/div3.png";
import div4 from "./images/div4.png";
import div5 from "./images/div5.png";
import imm from "./images/imm.jpeg";
import im2 from "./images/fraction.png";
import im3 from "./images/images.png";
import im5 from "./images/im5.jpeg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


const Division = () => {

  const [number, setNumber] = useState(null);
  const [divisors, setDivisors] = useState([]);
  const [divisor, setDivisor] = useState('');
  const [result, setResult] = useState('');
  const data = [
    {
      label: "Criterio de divisibilidad por 2",
      value: "html",
      desc: `Un número es divisible por 2, si termina en cero o cifra par.`,
      image: "./images/im5.jpeg",
    },
    {
      label: "Criterio de divisibilidad por 3",
      value: "react",
      desc: `Un número es divisible por 3, si la suma de sus dígitos es múltiplo de 3.`,
    },
    {
      label: "Criterio de divisibilidad por 4",
      value: "vue",
      desc: `Un número es divisible por 4, si sus dos últimas cifras son ceros o múltiplo de 4.`,
    },
    {
      label: "Criterio de divisibilidad por 5",
      value: "angular",
      desc: `Un número es divisible por 5, si termina en cero o cinco.`,
    },
    {
      label: "Criterio de divisibilidad por 6",
      value: "svelte",
      desc: `Un número es divisible por 6, si es divisible por 2 y por 3.`,
    },
  ];

  useEffect(() => {
    generateExercise();
  }, []);

  function generateExercise() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    const divisors = getDivisors(randomNumber); // Obtiene los divisores del número

    setNumber(randomNumber);
    setDivisors(divisors);
    setDivisor('');
    setResult('');
  }

  function getDivisors(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }


    return divisors;
  }

  function checkDivisor() {
    const parsedDivisor = parseInt(divisor);
    if (isNaN(parsedDivisor)) {
      setResult('Ingrese un número válido.');
    } else if (divisors.includes(parsedDivisor)) {
      setResult(`${parsedDivisor} es un divisor correcto de ${number}!`);
    } else {
      setResult(`${parsedDivisor} no es un divisor de ${number}. Inténtalo nuevamente.`);
    }
  }
  const [numberr, setNumberr] = useState(null);
  const [factors, setFactors] = useState([]);
  const [userFactors, setUserFactors] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    generateExercise();
  }, []);

  function generateExercise() {
    const randomNumber = Math.floor(Math.random() * 100) + 2; // Genera un número aleatorio entre 2 y 100
    const factors = getFactors(randomNumber); // Obtiene los factores del número

    setNumber(randomNumber);
    setFactors(factors);
    setUserFactors(Array(factors.length).fill(''));
    setIsCorrect(false);
    setShowResult(false);
  }

  function getFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  function handleFactorChange(e, index) {
    const updatedUserFactors = [...userFactors];
    updatedUserFactors[index] = parseInt(e.target.value);
    setUserFactors(updatedUserFactors);
  }

  function checkFactors() {
    const sortedUserFactors = [...userFactors].sort((a, b) => a - b);
    const sortedFactors = [...factors].sort((a, b) => a - b);

    setIsCorrect(sortedUserFactors.join(',') === sortedFactors.join(','));
    setShowResult(true);
  }
  return (
    <>
      <Headerr />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
      <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/blog/" />
      <link href="principal.css" rel="stylesheet" />

      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />




      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Divisibilidad</h1>
              <p className="mt-4 text-xl text-gray-500">En matemáticas se dice que un número es divisible entre otro siempre y cuando su división sea exacta, es decir, el resto sea cero.

                Así por ejemplo, 20 es divisible entre 4 porque nos da 5 de cociente y cero en el resto.</p>
            </div>
            <div>
              <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src={im2} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={imm} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={im3} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={im5} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={im2} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={im3} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={imm} alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Criterios de divisibilidad</h2>
        <p>Un número  b   es divisible por otro a  cuándo la división b / a  es exacta, es decir, resulta un número entero.
          Ejemplos:</p>
        <p>El número 15  es divisible por 3  porque la división es exacta: 15 / 3 = 5 .</p>
        <p>El número 15  también es divisible por 5  porque 15 / 5 = 3 .</p>

        <p>Los criterios de divisibilidad son reglas que sirven para saber si un número es divisible por otro sin necesidad de realizar la división. Son muy útiles para</p>
        <ol>
          <li>Descomponer numeros en factores</li>
          <li>Simplificar fracciones</li>
        </ol>
      

        <Tabs value="html" className="max-w-[40rem]">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-blue-500/10 shadow-none text-blue-500",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>





      

      <div>
        <div className='input-container'>
          <div id="exercise">

            <h4>Ejercicio 2</h4>
            {number && (
              <>
                <p>Factoriza el número {number}:</p>
                <div className="factors">
                  {factors.map((factor, index) => (
                    <input className='input-field'
                      key={index}
                      type="number"
                      value={userFactors[index]}
                      onChange={(e) => handleFactorChange(e, index)}
                      min="1"
                      required
                    />
                  ))}

                </div>
                <button className="btn-verificar" onClick={checkFactors}>Verificar</button>{'      '}{' '}
                {showResult && !isCorrect && (
                  <p className="result">Respuesta incorrecta. Los factores correctos son: {factors.join(', ')}</p>
                )}
                {showResult && isCorrect && <p className="result">¡Correcto!</p>}
              </>
            )}

            {' '}<button className="btn-verificar" onClick={generateExercise}>Generar nuevo ejercicio</button>
          </div>
        </div>


      </div>
      <Footer></Footer>
    </>
  );
};
export default Division;