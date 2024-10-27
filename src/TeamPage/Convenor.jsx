import React from 'react'
import webimage from '../assets/webimage.png'
import convener_bg from '../assets/convener_bg.png'

const Convenor = () => {
  return (
    <div className='top-section'>
        <div className="main">
            <h1>Meet Our Team</h1>
            <div className="info">
                <div className='convener_img'>
                    <img src={convener_bg} alt="image" />
                </div>
                <div className='convener_info'>
                    <h2>khushi batra</h2>
                    <h3>convener</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cupiditat inventore optio, quasi excepturi unde deserunt ex accusamus explicabo cum sequi laboriosam perferendis rerum iure nihil quaerat quo enim tempora. Nam, aliquam!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Convenor