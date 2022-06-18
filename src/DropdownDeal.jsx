import { useState } from 'react'
function DropdownDeal ({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Item X% Off", "Item X up to X% Off", "Buy X get X% Off", "Buy X get X Free/Half Price", "Buy X for X"];
  return (
    <div className='dropdown'>
      <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className='fas fa-caret-down'></span>
      </div>
      {isActive && (
        <div className='dropdown-content'>
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className='dropdown-item'
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownDeal
