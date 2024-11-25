import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = (visible) => {
        setDropdownVisible(visible);
      };
      console.log(isDropdownVisible, "isDropdownVisible")
  return (
    <header className="bg-white shadow-md flex items-center justify-center relative" >
      {/* <div className="container mx-auto flex items-center justify-between p-4">

        <nav className="flex space-x-4">
          <Link
            to="/property-search"
            className="text-gray-700 hover:text-blue-600"
          >
            Property Search
          </Link>
          <Link to="/contact-us" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </nav>
        <input type="search" placeholder='Search'/>
      </div> */}
      <div className="flex justify-around w-4/5"  >
        <Link className="hover:text-[#1181b2]  py-10" to="/" onMouseEnter={() => toggleDropdown(true)}
    onMouseLeave={() => toggleDropdown(false)}>
          Online Services
          {isDropdownVisible ? <div className='bg-white absolute rounded-sm left-6 bottom-[-168px] w-4/5 shadow-md p-4'><SubMenu/></div> : null}
        </Link>
        <Link className="hover:text-[#1181b2]  py-10" to="/officials-departments">
          Officials and Departments
        </Link>
        <Link className="hover:text-[#1181b2]  py-10"  to="/courts-sheriff">
          Courts & Sheriff
        </Link>
        <Link className="hover:text-[#1181b2]  py-10" to="/parks-recreation">
          Parks & Recreation
        </Link>
        <Link className="hover:text-[#1181b2]  py-10" to="/community-resources">
          Community Resources
        </Link>
        <Link className="hover:text-[#1181b2]  py-10" to="/connect-with-us">
          Connect with us
        </Link>
      </div>
      
      
    </header>
  );
}

export default Navbar;