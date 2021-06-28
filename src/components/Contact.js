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
            <Link to='/'><button>Home</button></Link>
            <Link to ='/projects'><button>Projecets</button></Link>
            <form>
                <label> Questions? Comments? 
                <input type='text' name='comments' onChange={onChange} value={formValues.comments}></input>
                </label>
                <label> Please Leave me your email:
                    <input type='email' name='email' onChange={onChange} value={formValues.email}></input>
                </label>
            </form>
        </div>
    )
}