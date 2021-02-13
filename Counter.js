import React, { Component } from 'react';
import './style.css'
class AutoCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const AminateCounter = ()=>{
            const counters = document.querySelectorAll('.counter')
            const speed = 200
            counters.forEach(counter =>{
                const updateCount = ()=>{
                    const target = +counter.getAttribute('data-target')
                    const count = +counter.innerText;
                    const inc = target / speed
                    
                    if(count < target){
                        counter.innerText = count + inc
                        setTimeout(updateCount , 20)
                    }
                }
                updateCount()
            })
        }
        AminateCounter()
    }
    render() { 
        return ( 
            <div className='auto__counter'>
                <header>
                    <h1>Animate Counter</h1>
                </header>
                <section className='counters'>
                    <div className='container'>
                        <i className='fab fa-youtube fa-4x'></i>
                        <div className='counter' data-target='68000'>0</div>
                        <h3>Subcribes</h3>
                    </div>
                    <div className='container'>
                        <i className='fab fa-twitter fa-4x'></i>
                        <div className='counter' data-target='15000'>0</div>
                        <h3>Followers</h3>
                    </div>
                    <div className='container'>
                        <i className='fab fa-facebook fa-4x'></i>
                        <div className='counter' data-target='90000'>0</div>
                        <h3>Like</h3>
                    </div>
                    <div className='container'>
                        <i className='fab fa-linkedin fa-4x'></i>
                        <div className='counter' data-target='50000'>0</div>
                        <h3>Connection</h3>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default AutoCounter;