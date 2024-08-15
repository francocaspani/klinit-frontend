'use client'

import { Bars3Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'
import * as React from 'react';
import Drawer from './components/drawer'
import Link from 'next/link';

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Contacto', href: '#' },
]

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen bg-inherit">
      <div className='hidden md:block'>
      <Image src="/hands.png" alt="Klinit" objectFit='contain' fill />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>
      <div className='block md:hidden'>
      <Image src="/landing.jpg" alt="Klinit" objectFit='cover' fill />
      </div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Klinit</span>
              <Image src="/logo.png" alt="Klinit" width={80} height={40} objectPosition='bottom'/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/auth" className="text-sm font-semibold leading-6 text-white">
              Iniciar sesión <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Drawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              CUIDAMOS TU HOGAR Y TU NEGOCIO
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
