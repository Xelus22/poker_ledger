import { Fragment } from 'react'
import React from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { withRouter, NavLink, useHistory } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Xelus_Logo from '../static/xelus_logo.svg';
import Dropdown from './Dropdown';

const navigation = [
  { name: 'Add Player', href: '/addplayer' },
  { name: 'Current Sess', href: '/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const history = useHistory();
  
  return (
    <Disclosure as="nav" className="bg-light-mode dark:bg-dark-mode bg-[#161819]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-lg">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to = "/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={Xelus_Logo}
                      alt="Xelus"
                      />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      fill = 'white'
                      src={Xelus_Logo}
                      alt="Xelus"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block right-0 sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <NavLink key={index} activeClassName="text-white bg-[#14395F]" className="text-white hover:bg-[#2c6b6b] px-3 py-2 rounded-md text-normal font-medium" exact to={`${item.href}`}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  exact to={item.href}
                  className={classNames(
                    'text-white hover:bg-[#2c6b6b] hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default withRouter(Navbar);