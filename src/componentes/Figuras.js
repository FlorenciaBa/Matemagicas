import React, { useState } from 'react';

import Headerr from './Headerr';
import Footer from './Footer';
import './Footer.css';
import imagen1 from "./images/lineas-abiertas.png";
import imagen2 from "./images/tipos-triangulos.png";
import imagen3 from "./images/paralelogramos.png";
import imagen4 from "./images/otros.png";
import './Fig.css';




export default function Figuras() {
    const [selectedFigure, setSelectedFigure] = useState('');

    const handleFigureClick = (figureName) => {
        setSelectedFigure(figureName);
        setTimeout(() => {
            setSelectedFigure('');
        }, 3000);
    };







    return (
        <>

            <Headerr />
            <script src="node_modules/@material-tailwind/html/scripts/tabs.js"></script>
            <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js"></script>

            <div class="bg-white py-24 sm:py-24">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl sm:text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Figuras geométricas</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Las figuras geométricas son superficies delimitadas por líneas (curvas o rectas) o espacios delimitados por superficies. En el primer caso, se está haciendo referencia a polígonos, círculos, circunferencias, elipses…; y, en el segundo caso, se está hablando de poliedros.</p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div class="p-8 sm:p-10 lg:flex-auto">
                            <h3 class="text-2xl font-bold tracking-tight text-gray-900">¿Líneas abiertas o líneas cerradas? ¿Líneas rectas o curvas?</h3>
                            <p class="mt-6 text-base leading-7 text-gray-600">Una línea es una sucesión de puntos en el espacio. Debemos destacar también la diferencia entre:

                            </p>
                            <div class="mt-10 flex items-center gap-x-4">
                                <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">Tipos de líneas</h4>
                                <div class="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Líneas curvas cerradas, que serían el círculo y la circunferencia.
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Líneas poligonales cerradas, que son los polígonos.
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Son líneas rectas si todos los puntos van en la misma dirección.
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    Son líneas curvas cuando los puntos cambian de dirección.
                                </li>

                            </ul>
                        </div>
                        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">

                                <img src={imagen1} class="rounded float-end" alt="..." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="p-8 sm:p-10 lg:flex-auto">
                <h3 class="text-4xl font-bold tracking-tight text-gray-900">Polígonos</h3>
                <p class="mt-6 text-lg leading-8 text-gray-600">Los polígonos son las figuras geométricas planas que están delimitadas por tres o más lados (rectas) y tienen tres o más ángulos y vértices.</p>
                <p class="mt-6 text-lg leading-8 text-gray-600 font-bold">A los polígonos se les nombra según el número de sus lados, teniendo así:

                </p>

            </div>



            <div class="mx-auto max-w-2xl sm:text-center">


                <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img
                            src={imagen3}
                            alt="img-blur-shadow"
                            layout="fill"
                        />
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Cuadriláteros    </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Son los polígonos de cuatro lados, se dividen entre paralelogramos y no paralelogramos.

                            Los paralelogramos son: el cuadrado, el rectángulo, el romboide y el rombo.

                            Los no paralelogramos son: el trapecio y el trapezoide.
                        </p>
                        <br></br>

                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Triángulos    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Son los polígonos de tres lados. Se pueden clasificar:
                        <li>                                        Según sus lados: equilátero, isósceles y escaleno.
                        </li>
                        <li>                                        Según sus ángulos: equiángulo, acutángulo y obtusángulo.
                        </li>
                    </p>
                    </div>
                    <div class="p-6 pt-0">
                        <button
                            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Leer más
                        </button>
                    </div>
                </div>
            </div>
            


            







            
           

            <div class="p-8 sm:p-10 lg:flex-auto">
                <h3 class="text-2xl font-bold tracking-tight text-gray-900">¿Cuál es tu figura favorita?</h3>
                <p class="mt-6 text-base leading-7 text-gray-600">Selecciona una de las figuras para descubrir más sobre ella.</p>
                <div class="mt-10 flex items-center gap-x-4">
                    <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">Figuras geométricas</h4>
                    <div class="h-px flex-auto bg-gray-100"></div>
                </div>

                <div id="shapes-container">
                    <div class="circle" id="circle" onClick={() => handleFigureClick('Círculo: Es una figura geométrica plana cuyos puntos equidistan de otro interior llamado centro')}></div>
                    <div class="shape" id="square" onClick={() => handleFigureClick('Cuadrado: Es un polígono de cuatro lados congruentes y ángulos rectos.')}></div>
                    <div class="triangle" id="triangle" onClick={() => handleFigureClick('Triángulo: Es un polígono de tres lados y tres ángulos.')}></div>
                    <div class="pentagon" id="pentagon" onClick={() => handleFigureClick('Pentágono')}></div>
                    <div class="heptagon" id="heptagon" onClick={() => handleFigureClick('Heptágono')}></div>
                    <div class="hexagon" id="hexagon" onClick={() => handleFigureClick('Hexágono')}></div>
                    <div class="rectangle" id="rectangle" onClick={() => handleFigureClick('Rectángulo')}></div>
                    <div class="rhombus" id="rhombus" onClick={() => handleFigureClick('Rombo')}></div>
                    <div class="octagon" id="octagon" onClick={() => handleFigureClick('Octágono')}></div>
                </div>
                {selectedFigure && (
                    <div className="figure-name">
                        <p>{selectedFigure}</p>
                    </div>
                )}
            </div>





            <Footer></Footer>
        </>
    );
};