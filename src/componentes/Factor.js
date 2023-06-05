import React, { useState, useEffect } from 'react';
//import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Headerr from './Headerr';
import Footer from './Footer';
import './Footer.css';
import ilu from './images/ilu.png';
import fact from './images/Factori.png';
import img from './images/cuad.jpg';
import operacion from './images/ope.png';
import descarga from './images/descarga.png';

const Factor = () => {
    const [number, setNumber] = useState(null);
    const [factors, setFactors] = useState([]);
    const [userFactors, setUserFactors] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
  
    useEffect(() => {
      generateExercise();
    }, []);
  
    function generateExercise() {
      const randomNumber = Math.floor(Math.random() * 100) + 2; // Genera un número aleatorio entre 2 y 100
      const factors = getFactors(randomNumber); // Obtiene los factores del número
  
      setNumber(randomNumber);
      setFactors(factors);
      setUserFactors([]);
      setIsCorrect(false);
      setIsVerified(false);
    }
  
    function getFactors(number) {
      const factors = [];
      for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
          factors.push(i);
          number /= i;
        }
      }
      if (number > 1) {
        factors.push(number);
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
      setIsVerified(true);
    }

    return (
        <>
            <Headerr />
            <div class="bg-white">
    <div>
      <h2 class="mx-auto grid max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Factorización de un número</h2>
      <p class="mx-auto grid max-w-2xl mt-4 text-gray-900">Para factorizar un número o descomponerlo en factores efectuamos sucesivas divisiones entre sus divisores primos hasta obtener un uno como cociente.</p>
      <p class="mx-auto grid max-w-2xl mt-4 text-gray-900">Para realizar las divisiones utilizaremos una barra vertical, a la derecha escribimos los divisores primos y a la izquierda los cocientes.</p>
      <img src={operacion} class="img-fluid mx-auto grid max-w-2xl" alt="..."></img>
      <p class="mx-auto grid max-w-2xl mt-4 text-gray-900">432 = 2***4 · 3***3</p>

  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-1 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Factorización de un polinomio</h2>
      <p class="mt-4 text-gray-500">Los pasos a seguir para factorizar un polinomio y hallar sus raíces son:</p>

      <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-1 lg:gap-x-8">
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">1º </dt>
          <dd class="mt-2 text-sm text-gray-500">Sacar factor común en el caso de que no haya término independiente.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">2º</dt>
          <dd class="mt-2 text-sm text-gray-500"> Ver si es una diferencia de cuadrados si tenemos un binomio.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">3º</dt>
          <dd class="mt-2 text-sm text-gray-500"> Comprobar si es un trinomio cuadrado perfecto si es un trinomio.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">4º</dt>
          <dd class="mt-2 text-sm text-gray-500"> Trinomio de segundo grado.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">5º</dt>
          <dd class="mt-2 text-sm text-gray-500"> Polinomio de grado superior a dos.</dd>
        </div>
        
      </dl>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src={ilu} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100"/>
      <img src={fact} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100"/>
      <img src={img} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100"/>
      <img src={descarga} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div>
<div>

<div className='input-container'>

          <div id="exercise">

        <h1><div className="text-2xl font-bold tracking-tight text-gray-900">Ejercicio de factorización</div></h1>
        <br></br>
        {number && (
          <>
            <p>Encuentra los factores primos del número {number}:</p>
            <div className="factors">
              {factors.map((factor, index) => (
                <input className='input-field'
                  key={index}
                  type="number"
                  value={userFactors[index] || ''}
                  onChange={(e) => handleFactorChange(e, index)}
                  min="1"
                  required
                />
              ))}{' '}
            </div>
            <button className="btn-verificar" onClick={checkFactors}>Verificar</button>{' '}
            {isVerified && !isCorrect && (
              <p className="result">Respuesta incorrecta. Los factores correctos son: {factors.join(', ')}</p>
            )}
            {isVerified && isCorrect && <p className="result">¡Correcto!</p>}
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
export default Factor;