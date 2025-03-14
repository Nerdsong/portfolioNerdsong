import React, {useRef, useState} from 'react'
import EmailTrace  from '/src/assets/emailRayTrace.json'
import Sent from '/src/assets/sent.json'
import emailjs from '@emailjs/browser'
import Lottie from 'react-lottie'
import "./ContactMe.css"
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next';


function ContactMe() {
  const {t} = useTranslation();
  const form = useRef();
  const captcha = useRef();
  const [captchaValid, setCaptchaValid] = useState(null)

  const onChange = ()=>{
    if(captcha.current.getValue()){
      setCaptchaValid(true)
    }
    else{setCaptchaValid(false)}
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if(captcha.current.getValue()){
      emailjs
      .sendForm('service_bv8mwio', 'template_fkmnzd5', form.current, 'ZjT1ZT1DUCqx88wEw',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          handleSubmit();

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    else{
      setCaptchaValido(false)
    }

    
  };

  const [animation, setAnimation] = useState(EmailTrace); 
  const [loop, setLoop] = useState(true); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setAnimation(Sent); 
    setLoop(false);

    form.current.reset()
    captcha.current.reset()

    // Revert to default animation after 3 seconds
    setTimeout(() => {
      setAnimation(EmailTrace);
      setLoop(true);
      setIsSubmitted(false);
    }, 4000);
  };

  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: animation,
    rendererSettings:{
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (

    <div className ="contactme-container">
      <div className="title-section4">
        <h1>{t('contact.title')}</h1>
      </div>
      <div className='aboutme-content'>
        <form className= 'form' onSubmit= { sendEmail } ref ={form}>
          <label >{t('contact.labels.name')}</label>
          <input type="text" id="nombre" name="user_name" className= "input-text" required /><br /><br />

          <label >{t('contact.labels.email')}</label>
          <input type="email" id="email" name="user_email" className= "input-text" required /><br /><br />

          <label >{t('contact.labels.message')}</label><br />
          <textarea id="mensaje" name="message" rows="5" className= "input-text" required  ></textarea><br /><br />
          <ReCAPTCHA 
            ref = {captcha}
            sitekey="6LfR9_MqAAAAAESA4d7U4JDBkjpavzBHmdmg8S-W" 
            onChange={onChange}
          />
          {captchaValid === false && <div> Por favor completa el captcha</div>}
          <input type="submit" value = {t('contact.button')} className= "submit-button" disabled={isSubmitted}/>
        </form>
      <div>
            <div className= "animation-container2">
              <Lottie options = {defaultOptions}/>
            </div>
            <div className = "icons-container"> 
              <a href="https://www.linkedin.com/in/nerdsong/"   id="linkedin-icon">
              </a>
              <a href="https://github.com/Nerdsong"   id="github-icon">
              </a>
              <a href="https://wa.me/+541123869921"  id="whatsapp-icon">
              </a>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default ContactMe