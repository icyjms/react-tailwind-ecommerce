import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping, FaCaretDown } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const Menu = [
    {
      id: 1,
      name: 'Home',
      link: '/#',
    },
    {
      id: 2,
      name: 'Top Rated',
      link: '/#services',
    },
    {
      id: 3,
      name: 'Kids Wear',
      link: '/#',
    },
    {
      id: 4,
      name: 'Mens Wear',
      link: '/#',
    },
    {
      id: 5,
      name: 'Electronics',
      link: '/#',
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: 'Trending Products',
      link: '/#',
    },
    {
      id: 2,
      name: 'Best Selling',
      link: '/#',
    },
    {
      id: 3,
      name: 'Top Rated',
      link: '/#',
    },
  ];

  const LowerNavBar = () => {
    return (
      <ul className="sm:flex item-center gap-4">
        {Menu.map((item) => (
          <li key={item.id}>
            <a
              className="inline-block px-4 hover:text-primary duration-200"
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))}
        {/* Simple dropwdown and links */}
        <li className="group relative cursor-pointer">
          <a href="/#" className="flex items-center gap-[2px]">
            Trending
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div
            className="absolute hidden group-hover:block w-[150px] 
      bg-white rounded-md p-2 text-black shadow-md"
          >
            <ul>
              {DropdownLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.linl}
                    className="inline-block w-full rounded-md hover:bg-primary/20"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    );
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl gap-2 flex">
              <img
                src="https://jamescabauatan-demo-users-image.s3.ap-southeast-2.amazonaws.com/e-shop/logo.png"
                alt="Logo"
                className="w-10"
              />
              ez-Shop
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border
                 border-gray-300 px-2 py-1 focus:outline-none focus:border-1 
                 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                type="text"
                placeholder="Search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              onClick={() => alert('Order not available yet.')}
              className="bg-gradient-to-r from-primary to-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <div className="justify-center hidden md:flex">
        {/* lower Navbar */}
        <LowerNavBar />
      </div>
      {/* Mobile left navbar */}
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[45%] h-full border-r bg-white ease-in-out duration-500 shadow-md md:hidden'
            : 'fixed left-[-100%]'
        }
      >
        <div className="px-2 py-[10px] bg-primary/40 shadow-md">
          <a href="#" className="font-bold text-2xl sm:text-3xl gap-2 flex">
            <img
              src="https://jamescabauatan-demo-users-image.s3.ap-southeast-2.amazonaws.com/e-shop/logo.png"
              alt="Logo"
              className="w-8"
            />
            Shopsy
          </a>
        </div>
        <ul className="p-4">
          {Menu.map((item) => (
            <li key={item.id} className="p-4 border-b border-gray-600">
              {item.name}
            </li>
          ))}
          <li className="group relative cursor-pointer p-4">
            <a href="/#" className="flex items-center gap-[2px]">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div
              className="absolute group-hover:block w-[145px] 
      bg-white rounded-md p-2 text-black shadow-md"
            >
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md hover:bg-primary/20"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
