import '../App.less'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const intialFormValues = {
    comments: '',
    email: ''
}


 export default function Contact () {
    const onChange = (evt) => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value})
}
     const [ formValues, setFormValues ] = useState(intialFormValues)
    return (
        <div>
            <div className='nav-links'>
                <Link className='navs' to='/'>Home</Link>
                <Link className='navs' to ='/projects'>Projects</Link>
            </div>
            <form>
                <label> <h3>Questions? Comments? </h3>
                <textarea id='cmt-box' type='text' name='comments' onChange={onChange} value={formValues.comments}></textarea>
                </label>
                <label> Please Leave me your email:
                    <input type='email' name='email' onChange={onChange} value={formValues.email}></input>
                </label>
                <button id='submit-btn'>Submit</button>
            </form>
        </div>
    )
}