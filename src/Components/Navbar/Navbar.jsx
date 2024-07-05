import React from 'react'

function Navbar() {
    return (
        <div className='max-w-screen-[1425px] mx-auto'>
            <nav className='flex items-center'>
                <h1 className='text-[42px] font-bold'>CozMeet</h1>
                <div>

                    <input type="text" placeholder='Search' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar