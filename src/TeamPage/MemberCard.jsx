import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MemberCard = ({ name, phone }) => {
  return (
    <div className='member-section'>
      <img src="" alt="image" />
      <div className="member-info">
        <h2>Khushi Batra</h2>
        <p>📞 9998756312</p>
        <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  )
}

export default MemberCard