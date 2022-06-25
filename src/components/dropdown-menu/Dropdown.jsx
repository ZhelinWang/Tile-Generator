import { useState } from 'react'

function Dropdown ({ options, selected, onSelected }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>
          {selected}
          <span className='fas fa-caret-down'></span>
        </div>
        {isActive && (
          <div className='dropdown-content'>
            {options.map(option => (
              <div
                onClick={e => {
                  onSelected(option)
                  setIsActive(false)
                }}
                className='dropdown-item'
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Dropdown
