import React from 'react';
//import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import HeadreA from './HeadreA';
import Footer from './Footer';
import './Footer.css';

import Fig from './images/Phone Wallpaper With Abstract Blue Geometric Primitives..png';
import PrimosN from './images/numeros-primos.jpg';
import Divi from './images/criterios-de-divisibilidad.png';
import Fact from './images/65937819_1596120965901.png';

export default function InicioA() {


    return (
        <>
            <HeadreA />
            <div class="bg-white">


                <div className="relative isolate px-6 pt-14 lg:px-4">
                    <div
                        className="absolute inset-x-0 -top-5 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-5"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-5">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Continúa aprendiendo.{' '}
                                <a href="/Videos" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Ver videos <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Matemágicas
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Nuestro compromiso es ayudarte en tu aprendizaje sobre los conceptos básicos de las matemáticas y, por este motivo innovamos con nuestra página basada en un sistema intuitivo y muy fácil de utilizar.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/Login"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                                >
                                    Iniciar sesión
                                </a>
                                <a href="/Figuras" className="text-sm font-semibold leading-6 text-gray-900">
                                    Tema 1 <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <h2 class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="/Figuras" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={Fig} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Tema 1</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">Figuras geométricas</p>
                        </a>
                        <a href="/Primos" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={PrimosN} alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Tema 2</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">Numeros primos</p>
                        </a>
                        <a href="/Division" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={Divi} alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Tema 3</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">Divisibilidad</p>
                        </a>
                        <a href="/Factor" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={Fact} alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Tema 4</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">Factorización</p>
                        </a>

                    </div>
                </div>
            </div>

            <div class="card text-center">
                <div class="card-header">
                </div>
                <div class="card-body">
                    <h2 class="card-title text-4xl font-bold">Conceptos básicos de matemáticas</h2>
                    <p class="card-text mt-6 text-lg leading-8 text-gray-600">Extensa variedad de actividades para aprender los conceptos básicos.</p>
                    <a href="/Figuras" class="btn btn-danger">Comenzar</a>
                </div>
                <div class="card-footer text-body-secondary">
                </div>
            </div>

            <div className="relative isolate px-6 pt-14 lg:px-4">

            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <h2 class="text-base font-semibold leading-7 text-indigo-600">Acerca de</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre nosotros</p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Somos una aplicación web desarrollada con la finalidad de proporcionar apoyo en el aprendizaje de conceptos básicos de matemáticas, dirigida a personas de cualquier edad</p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-gray-900">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                        </svg>
                                    </div>
                                    Importancia
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-gray-600">El aprendizaje de las matemáticas se puede facilitar gracias a estos recursos online gratuitos, actividades interactivas para que los niños y niñas jueguen con las matemáticas literalmente.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-gray-900">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    Primeros pasos
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-gray-600">Desde aprender a contar o reconocer los primeros números sencillos, pasando por operaciones sencillas aritméticas como sumar, restar, hasta multiplicar o dividir.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-gray-900">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </div>
                                    Simple y divertido
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-gray-600">Practica operaciones, mejora tus habilidades geométricas y tu visión espacial, repasa operaciones más complejas relativas y fracciones, o practica algunas ecuaciones sencillas..</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base font-semibold leading-7 text-gray-900">
                                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                        </svg>
                                    </div>
                                    Información a tu alcance
                                </dt>
                                <dd class="mt-2 text-base leading-7 text-gray-600">Complementa la metodología habitual de enseñanza de matemáticas con esta parte que además aporta competencias digitales. .</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            </div>


            <Footer />
        </>
    )
}



