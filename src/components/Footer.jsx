import React from 'react'

function Footer() {
  return (
    <>
      <div className='px-8 py-10 bg-pink-300 rounded-t-[100px]'>
        <p className='text-gray-500 text-xl text-center'>
          "You are the cutest person I've ever seen! 😍💖 You light up every room you enter! ✨🌟"
        </p>
      </div>
      <div className='px-10 py-2 bg-gray-300 flex justify-between'>
        <p className='text-gray-500'>
          Created By----CH-Noman-Kamboh.@ All Rights Reserved By Hafiza Mehak Umer!
        </p>
        <div className="text-xl flex gap-2 justify-around">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter text-blue-400"></i>
          </a>
          <a href="https://www.facebook.com/numan.yaseen.37" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f text-blue-800"></i>
          </a>
          <a href="https://wa.me/+923059988491" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp text-green-500"></i>
          </a>
          <a href="https://www.instagram.com/ch_noman.kamboh/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram text-pink-600"></i>
          </a>
          <a href="https://www.linkedin.com/in/numan-kamboh/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in text-blue-900"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;
