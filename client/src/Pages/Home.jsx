import React from 'react'
import Hero from '../Components/Hero'
import Form from '../Components/Form'
import Template from './Template'
import TemplateCreameAndWhite from '../Components/TemplateCreameAndWhite'
import TemplateDarkBlue from '../Components/TemplateDarkBlue'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Form/>
        <Template/>
        <TemplateCreameAndWhite/>
        <TemplateDarkBlue/>
    </div>
  )
}

export default Home