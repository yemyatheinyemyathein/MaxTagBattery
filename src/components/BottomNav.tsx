import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'; // Importing line icons
import { useNavigate } from 'react-router-dom';
import SearchCompo from './SearchCompo';

const BottomNav = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleClose = () => {
    setSearchOpen(false);
  };
  return (
    <div className="bg-white flex justify-around items-center py-2">
      <div className="flex flex-col items-center" onClick={() => navigate('/shop')}>
        <AiOutlineShoppingCart color="#b80024" size={24} />
        <span className="text-xs text-[#b80024] font-bold mt-2">Shop</span>
      </div>
      <div className="flex flex-col items-center" onClick={()=> navigate('/')}>
        <AiOutlineUser color="#b80024" size={24} />
        <span className="text-xs text-[#b80024] font-bold mt-2">Account</span>
      </div>
      <div className="flex flex-col items-center" onClick={handleSearchClick} >
        <AiOutlineSearch color="#b80024" size={24} />
        <span className="text-xs text-[#b80024] font-bold mt-2">Search</span>
      </div>
      <AnimatePresence>
        {isSearchOpen && <SearchCompo onClose={handleClose} />}
      </AnimatePresence>
    </div>
  );
}

export default BottomNav;
