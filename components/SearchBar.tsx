import {GrFormSearch} from 'react-icons/gr'


function SearchBar() {
  return (
    <div className=" w-full ">
      <form role={'search'} className="relative w-full ">
        <input className=" px-2 pl-12 py-2 w-full rounded-full shadow-md border caret-blue-500 focus:outline-blue-500 focus:border-blue-500 font-subtitle font-light " placeholder="Search" />
        <GrFormSearch className='absolute my-auto ml-4 inset-y-0 w-6 h-6 '/>

      </form>
    </div>
  );
}

export default SearchBar