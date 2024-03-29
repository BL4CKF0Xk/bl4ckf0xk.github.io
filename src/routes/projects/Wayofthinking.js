import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import './blogpost.css'

import { useNavigate} from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';

const Wayofthinking = () => {

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div className='containerblog'>
        <Navbar />
        <AboutHero />
        <button onClick={goBack} style={{background:'none',border:'none',padding:'0',outline:'inherit',cursor:'pointer',color:'inherit'}}>
            <IoIosArrowBack className='iconblo' style={{color:"#fff"}}/>
        </button>
        
        <div className='headingblog'>
            <h1>Learning Process</h1>
        </div>
        <div className='headingdet'>
            <h6>30/4/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className='blogbody'>
        <h1 className='headingblog'>Way Of Thinking</h1>
        <h4 className='subheaddes'> Every programming language has its own strengths and weaknesses. Also, if we can obtain a deep understanding of a single programming language, we will learn others much faster. We do not need to learn every programming language to understand how to read their code. All of them follow the same principles which R. D. Tennent initially defined:
         </h4>

        <div className='section'>
                <h4>1.  The Principle of Abstraction</h4>
                <h4>2. The Principle of Correspondence</h4>
                <h4>3. The Principle of Data Type Completeness</h4>
                
                {/* <div className='code'>
                <SyntaxHighlighter language="python" style={atomOneDark} customStyle={{padding:"20px"}}>
                    print("Hello world")
                </SyntaxHighlighter>
                </div> */}
        </div>
        <div className='section'>
            <h2 className='subheading'>When learning in security field you can always reach out to many different communities to get help. There are many free sources available us to find vulnerable machines and guides to continue on our path.</h2>
            <p className='subheaddes'>But,<br />there are two types of persons can be there.</p>

                <h4>- Those that do not know anything</h4>
                <h4>- Those who think they do not know anything</h4>
        </div>
        <div className='section'>
            <h2 className='subheading'>So when you communicate with these people you must be respectful and always keep in mind that we all started with zero knowledge in this field.</h2>
            <h3 className='subheaddes' style={{fontSize:30,color:"chocolate"}}>Another important thing to keep in mind is our knowledge level. Most of us don't know about there actual skill level and knowledge level. But as penetration testers we have to get a deep kwoledge about different areas.    So everyday we must check our knowledge level by doing practical sessions and we must continue on our learning process.</h3>

        </div>
        <div className='section'>
            <h2 className='subheading'>One of the most common question is:</h2>
            <div className='code'>
                <SyntaxHighlighter style={atomOneDark} customStyle={{padding:"20px"}}>
                    When is a penetration tester good enough?
                </SyntaxHighlighter>
                </div>
        </div>
        <div className='section'>
            <h2 className='subheaddes'>One person cannot know everything. In this case we have to learn how to find, choose and adapt the information we need.</h2>
            
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Wayofthinking