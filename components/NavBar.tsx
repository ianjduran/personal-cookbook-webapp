import Image from "next/image";
import Link from "next/link";

import { RiHomeLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { TiDocumentAdd } from "react-icons/ti";
import { HiOutlineFire } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";

function NavBar() {
  return (
    <nav
      className="visible print:hidden block container fixed shadow-[0_0px_14px_0_rgba(0,0,0,0.1)] left-auto bottom-0 bg-white h-14 w-screen dark:bg-gray-800
                    tablet:h-screen tablet:w-16 tablet:bottom-auto tablet:left-0 md:w-44 md:shadow-[0_0px_14px_0_rgba(0,0,0,0.1)]"
    >
      <ul className="flex flex-row items-center justify-around my-3 tablet:gap-7 tablet:my-5 tablet:flex-col md:flex-inline md:justify-start md:items-start md:ml-4">
        <div className="items-center justify-center hidden object-center w-full -ml-2 text-xl text-red-500 md:inline-flex">
          <HiOutlineFire
            className="inline w-6 h-6"
            style={{ strokeWidth: 1.9 }}
          />

          <span className="ml-2 font-bold font-header ">Recetario</span>
        </div>
        <li
          className="transition-all ease-out pb-1 hover:border-b-[3px] hover:border-b-slate-900 dark:hover:border-b-slate-200
                       tablet:pb-0 tablet:pl-1 tablet:hover:border-b-0 tablet:hover:border-l-[3px] tablet:hover:border-l-slate-900 dark:tablet:hover:border-l-slate-200
                      "
        >
          <Link href="/">
            <div className="flex flex-row items-center flex-inline">
              <RiHomeLine className="w-6 h-6" />
              <span className="hidden ml-3 text-sm font-bold md:inline font-header">
                Inicio
              </span>
            </div>
          </Link>
        </li>
        <li
          className="transition-all ease-out pb-1 hover:border-b-[3px] hover:border-b-slate-900 dark:hover:border-b-slate-200
                       tablet:pb-0 tablet:pl-1 tablet:hover:border-b-0 tablet:hover:border-l-[3px] tablet:hover:border-l-slate-900 dark:tablet:hover:border-l-slate-200
                      "
        >
          <Link href="/recipes/create">
            {/* <Image src="/add-icon.svg" width={25} height={25} alt={''} /> */}
            <div className="flex flex-row items-center flex-inline ">
              <TiDocumentAdd className="w-6 h-6 " />
              <span className="hidden ml-3 text-sm font-bold md:inline font-header">
                Añadir Receta
              </span>
            </div>
          </Link>
        </li>
        <li
          className="transition-all ease-out pb-1 hover:border-b-[3px] hover:border-b-slate-900 dark:hover:border-b-slate-200
                       tablet:pb-0 tablet:pl-1 tablet:hover:border-b-0 tablet:hover:border-l-[3px] tablet:hover:border-l-slate-900 dark:tablet:hover:border-l-slate-200
                      "
        >
          <Link href="/recipes">
            <div className="flex flex-row items-center flex-inline">
              <BiFoodMenu className="w-6 h-6" />
              <span className="hidden ml-3 text-sm font-bold md:inline font-header">
                Recetas
              </span>
            </div>
          </Link>
        </li>
        <li
          className="transition-all ease-out pb-1 hover:border-b-[3px] hover:border-b-slate-900 dark:hover:border-b-slate-200
                       tablet:pb-0 tablet:pl-1 tablet:hover:border-b-0 tablet:hover:border-l-[3px] tablet:hover:border-l-slate-900 dark:tablet:hover:border-l-slate-200
                      "
        >
          <Link href="/categories">
            <div className="flex flex-row items-center flex-inline">
              <HiOutlineViewGrid className="w-6 h-6" />
              <span className="hidden ml-3 text-sm font-bold md:inline font-header">
                Categorias
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
