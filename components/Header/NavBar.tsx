import React from 'react'
import Slug from '../Slug';

const NavBar = () => {


  return (
    <>
    <Slug/>
    <nav className="flex px-2 items-center border-b-[1px] py-2 justify-between mt-2">
      <h1 className="text-violet-400 font-bold">I-TEMS</h1>

      <div>
        <input
          type="text"
          placeholder="¿Què estàs buscando?"
          className="hidden sm:flex outline-none  border-[1px] md:w-[300px] md:h-[30px] rounded-sm pl-2"
        />
      </div>

      <div className="flex items-center  gap-4">
        <ul className='flex space-x-2'>
          <li>items</li>
          <li>products</li>
          <li>inventario</li>
        </ul>

        <div className="w-[50px] h-[50px] rounded-[50%] bg-slate-100"></div>
      </div>
    </nav>
    </>
  );
}

export default NavBar