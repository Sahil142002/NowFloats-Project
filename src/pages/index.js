import {Link} from "gatsby"
import React from "react"
import Layouts from "../components/Layouts"
import * as styles from '../styles/home.module.css';

export default function Home() {
return (
    <Layouts>
    <section className={styles.header}>
        <div>
           <h1>Simplifying the
           <br></br>
digital journey of
<br></br>
businesses globally</h1>

<p>Our mission is to connect 333 million businesses with over 5.16 billion internet users worldwide. Our vision is to let them do it simply, easily and quickly.</p>
              <Link className={styles.btn} to="/projects">Simplify Business</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth:'100%'}}></img>
    </section>
    </Layouts>
  
 )
}
