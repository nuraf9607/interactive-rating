// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './ThankYouPage.css'
const ThankYouPage = ({rating ,submit, updateSubmit}) => {
    const toggleModal = () => {
        // Get the container element
        const container = document.querySelector('.very-big-container');
          container.classList.remove('very-big-container');
          const display= document.getElementById('container')
          display.classList.add("display-none")
          updateSubmit(false)
        
        
        }
    return (
        <div id='container' className={submit === true ? 'very-big-container' : "display-none"}>
            <div className='thank-you-card'>
            <svg onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
               <picture><img src="./illustration-thank-you.svg" alt="" /></picture>
               <p className='rating-result'>Your selected {rating} out of 5</p>
               <div>
                <p className='thank-you'>Thank You!</p>
                <p className='t-description'>We appreciate you taking the time to give a rating. if you ever need more support, don&rsquo;t hesitate to to get in touch!</p>
               </div>
            </div>
        </div>
    );
};


ThankYouPage.propTypes ={
    rating: PropTypes.number,
    submit: PropTypes.func,
    updateSubmit: PropTypes.func,
}
export default ThankYouPage;
