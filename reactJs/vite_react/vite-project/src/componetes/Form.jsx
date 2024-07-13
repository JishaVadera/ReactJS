import React from 'react'

const Form = () => {
    return (
        <div>
            <div className='bg-purple-600 h-36 w-72 text-center p-6'>
                <h1 className='text-2xl text-white'>PHONETASTIC</h1>
                <h1 className='text-3xl text-yellow-400'>DHAMAKA</h1>
                {/* <hr className='h-3 w-36 text-center'/> */}
                <h3 className='text-white'>Unlock Your Happiness </h3>
            </div>

            {/* <div className='h-20 w-32 bg-purple-400'>
                <span>Scratch and Win</span>
            </div> */}

            <div className='container p-6 bg-pink-600 h-96 w-72'>
                <div className='bg-yellow-400 p-4 h-80'>
                    <input type="text" placeholder="ENTER COUPON CODE" required className='mb-6'/><br/>
                    <input type="text" placeholder="ENTER NAME" required className='mb-6'/><br/>
                    <input type="number" placeholder="ENTER MOBILE NO." required className='mb-6'/><br/>
                    <select required className='mb-6'>
                        <option value="">Select an Option</option>
                        <option>Smart Phone</option>
                        <option>Accessories</option>
                        <option>Featured Phone</option>
                        <option>Other</option>
                    </select><br/>
                    <input type="text" placeholder="ENTER OTHER OPTION" className='mb-6'/><br/>
                    <input type="submit" value="submit" className='text-white bg-red-600 p-3 rounded-lg'/><br/>
                </div>
            </div>
        </div>
    )
}

export default Form
