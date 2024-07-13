import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const Card3 = () => {
    return (
        <>
            <div className='flex  justify-center max-sm:flex-wrap order-3 max-md:flex-wrap'>

                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px] -mt-5 w-[350px] shadow-2xl shadow-slate-400 rounded-xl' src="https://m.media-amazon.com/images/I/81NvrWnMRSL.jpg" alt="" />

                    </div>
                    <div className='mt-10'>
                        <p className='text-center text-sm m-auto w-80  text-gray-400 font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error animi enim suscipit explicabo temporibus maiores minima consectetur perferendis. Id optio, minima temporibus consequatur laboriosam totam veritatis quod illo doloremque.;Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta hic aut cum nulla commodi magni rem iste maiores. Odio consectetur, harum quia culpa error expedita nam nobis necessitatibus ad.
                        </p>
                    </div>

                </div>

                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl '>
                    <div className='flex justify-center '>
                        <img className='h-[200px] w-[400px]' src="https://i.pinimg.com/originals/55/59/c7/5559c71886e0a3e354b2bde7ff360db1.jpg" alt="" />
                    </div>
                    <div className=' '>
                        <h1 className='text-center mt-4 font-bold text-xl'>Billy Cullen</h1>
                        <h3 className=' text-center mt-2 text-sm font-medium'>Web developer</h3>
                        <div className='mt-7'>
                            <p className='text-gray-500 m-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus, ex, recusandae.</p>
                        </div>
                    </div>
                    <div className='flex ml-4 space-x-10 justify-center mt-4 '>
                        <FaFacebook className='text-blue-500 text-3xl shadow-2xl shadow-slate-400' />
                        <AiFillTwitterCircle className='text-blue-600 text-3xl shadow-2xl shadow-slate-400' />
                        <TbWorldWww className='text-red-600 text-3xl shadow-2xl shadow-slate-400' />
                    </div>


                </div>
                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px] w-[400px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqF2BX_gni7vmbRS_iXoA4RMOMjRahhM8qXQ&usqp=CAU" alt="" />
                    </div>
                    <div className=' '>
                        <h1 className='text-xl font-bold mt-6 ml-8'>Card title</h1>
                        <p className='ml-8 mt-6 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem aperiam qui facilis illo repellat </p>
                    </div>
                    <button className='px-2 py-2 bg-blue-400 rounded-lg  text-white mt-6 ml-6 w-40' >Button</button>
                </div>
            </div>
        </>

    )
}

export default Card3;
