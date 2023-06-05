import React, { useState } from 'react';
//import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Headerr from './Headerr';
import Footer from './Footer';
import './Footer.css';
import tabla from "./images/números.jpg";
import './Primos.css';

const Primos = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  function verificarPrimo() {
    const parsedNumero = parseInt(numero);

    if (isNaN(parsedNumero)) {
      setResultado('Ingresa un número válido');
    } else {
      if (esPrimo(parsedNumero)) {
        setResultado(numero + ' es un número primo.');
      } else {
        setResultado(numero + ' no es un número primo.');
      }
    }
  }
    return (
        <>
        
            <Headerr />
            <div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Números primos</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Qué es un número primo?</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Los números primos son aquellos números, mayores que 1, que solo admiten como divisores a ellos mismos y al número 1. Para construir esta tabla de números primos del 1 al 100 lo hemos hecho de manera muy muy sencilla. ¿Cómo?</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                Empezando por el primer número primo y descartando sus múltiplos.  
              </dt>
              <dd class="inline"> En primer lugar, el 2 es primo. Por tanto, podemos descartar todos los múltiplos de 2 porque sabemos ya que serán divisibles por el mismo. Quedan descartadas el 4, el 6, el 8, el 10, el 12, ….</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                Continuamos con el 3.
              </dt>
              <dd class="inline"> Tachamos todos sus múltiplos. Es decir, quitamos el  9, 12, 15, …</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                ¿Cuándo podemos parar?
              </dt>
              <dd class="inline"> Cuando veamos que todos los que tenemos que tachar ya habían sido tachados. Esto nos ocurre cuando lleguemos al 11.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src={tabla} alt="Product screenshot" class="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0" width="2032" height="1042"/>
    </div>
  </div>
</div>

        <h1 className="title">Verificar números primos</h1>
        <div className="input-container">
          <input
            type="number"
            id="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="input-field"
          />
          <button
            onClick={verificarPrimo}
            className="btn-verificar"
          >
            Verificar
          </button>
        </div>
        <p className="resultado">{resultado}</p>




            

            <Footer></Footer>
        </>
    );
};
export default Primos;