/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_tmn3ojp','template_e7fdho7','#contact-form','yhADtqsiQO3-PRlz_')
 .then(() => {
   // Show sent message
   contactMessage.textContent ='Message sent successfully ✅'

    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)
    
    // Clear input fields
    contactForm.reset()
  },() => {
      // Show error message
  contactMessage.textContent = 'Message not sent (service error) ❌';
  })

}
contactForm.addEventListener('submit',sendEmail)

