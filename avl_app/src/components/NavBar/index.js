import './index.scss'
import { Link, NavLink } from 'react-router-dom'                 
import ttuLogo from '../../assets/images/doubleTlogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import '../../styles/main.css';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavBar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to='/'>
            <img src={ttuLogo} alt="logo" /> 
            <p className="navText">Applied Vision Lab</p>      
        </Link>
        <a href= "https://www.depts.ttu.edu/ece/appliedvision/" className="navText" id ="subLogo">Texas Tech University</a>
        
        <NavLink className="userIcon" to="/profile">
            <FontAwesomeIcon icon={faUser} color = "#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink className="navOpt" to="/staff">
            <p>About Us</p>
        </NavLink>
        <NavLink className="navOpt" to="/Patents">
            <p>Patents</p>
        </NavLink>
        <NavLink className="navOpt" to="/Publications">
            <p>Publications</p>
        </NavLink>

        
    <NavLink className="researchButton">

                <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium text-gray-4d4d4e shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                Research
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Current Projects
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Past Projects
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Collaboration
                        </a>
                    )}
                    </Menu.Item>
                   
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        
    </NavLink>
        
        
    </div>

    

)





export default NavBar


