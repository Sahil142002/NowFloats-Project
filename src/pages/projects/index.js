import React from 'react'
import Layouts from '../../components/Layouts'
import * as Portfolio from '../../styles/projects.module.css';

export default function index() {
  return (
    <Layouts>
    <div className={Portfolio.portfolio}>


<h1 style={{textAlign:'center', fontWeight:'bold'}}>Innovations that simplify businesses</h1>

<h1> NowFloats ONDC Link</h1>
<p>NowFloats is one of the first companies to start enabling businesses to integrate ONDC to their e-commerce strategy. As a designated Technology Service Provider (TSP) to ONDC, we are equipped to onboard brands through the NowFloats ONDC Link.</p>

<h1>RIA</h1>
<p>RIA (Relationship Intelligence Agent) is a unique AI-based digital assistant patented by NowFloats that analyses merchant websites and shares customised recommendations.</p>

<h1>Boost Studio</h1>
<p>Our collection of 1000+ pre-designed customisable message templates enable merchants to greet their customers, share trending messages, and drive customer engagement. Now merchants can communicate with their customers in style!</p>

<h1>My Biz App</h1>
<p>Dynamic business app to showcase businesses and create the right impression on customers! My Biz App enables merchants to avail of their own business app and share it with their customers to make communication and purchases easier.</p>

<h1>Readymade Catalogue</h1>
<p>With 10,000+ items, our Readymade Catalogue can speed up stock onboarding and make inventory management easier. Merchants can use the auto-complete feature on the app to add items to inventory in seconds.</p>

<h1>WhatsApp Payment Link</h1>
<p>Make seamless online payments through our platform. Merchants can now share payment links with customers via WhatsApp for secure online transactions.</p>

<h1>Third Party Integration</h1>
<p>Zadinga offers third-party integration with its e-store to enable merchants to launch hyperlocal delivery services through companies like Dunzo.</p>

<h1>Graph DB</h1>
<p>Graph database enable data to be stored like sketching ideas on a whiteboard in the form of nodes and relationships. Flexibility in usage is achieved by not restricting the stored information to any predefined model.</p>
    </div>
    </Layouts>
    
  )
}
