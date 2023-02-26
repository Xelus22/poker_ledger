import { Fragment } from 'react'
import React from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { withRouter, Link, NavLink, useHistory } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dropdown() {  
  return (
  
    <Menu as="div" className="block text-left z-50">
      <div>
        <Menu.Button className="text-white hover:bg-[#2c6b6b] px-3 py-2 rounded-md text-normal font-medium w-full text-left">
          Other
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 inline" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right sm:absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#282c2e] ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-white">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={{pathname: "https://twitch-subathon-timer.netlify.app/"}}
                  target="_blank"
                  className={classNames(
                    active ? 'bg-gray-700' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Twitch Subathon Timer
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={{pathname: "https://xelus-countup-timer.netlify.app/"}}
                  target="_blank"
                  className={classNames(
                    active ? 'bg-gray-700' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Countup Timer
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/contact"
                  className={classNames(
                    active ? 'bg-gray-700' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Contact
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/about"
                  className={classNames(
                    active ? 'bg-gray-700' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  About
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default withRouter(Dropdown);