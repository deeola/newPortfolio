import React from 'react'
import { ContactContainer } from './ContactStyling'
import LeftContact from './LeftContact'
import RightContact from './RightContact'

const Contact = () => {
  return (
    <ContactContainer>
      <LeftContact />
      <RightContact />
    </ContactContainer>
  )
}

export default Contact
