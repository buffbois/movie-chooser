import type { NextPage } from 'next'
import Navigation from '../components/navigation'
import Background from '../components/background'
import Footer from '../components/footer'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Account: NextPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const delay = { delay: 0.3 }
    return (
        <>
            <Navigation />
            <Background>
                <AnimatePresence exitBeforeEnter={true}>
                    {isLogin && (
                        <motion.div key='signin' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={delay}>
                            <h2 className='flex justify-center text-4xl text-white-100'>
                                Sign in to your account
                            </h2>
                            <h3 className='flex justify-center text-xl text-white-100'>
                                or
                                <span className='text-white-200 hover:underline hover:text-pink-100 pl-2' onClick={() => setIsLogin(!isLogin)}>register for a new account</span>
                            </h3>
                            <div className='flex justify-center align-middle p-3'>
                                <form className='w-full max-w-lg bg-white-200 rounded-lg drop-shadow-xl py-5 px-5'>
                                    <div className='md:w-full px-3 py-0 pb-0 mb-3'>
                                        <label className='block uppercase tracking-wide my-1.5'>Email</label>
                                        <input className='appearance-none block w-full rounded-md py-1 px-2 focus:outline-none' />
                                    </div>
                                    <div className='md:w-full px-3 py-2 pt-0 mb-3'>
                                        <label className='block uppercase tracking-wide my-1.5'>Password</label>
                                        <input className='bappearance-none block w-full rounded-md py-1 px-2 focus:outline-none' />
                                    </div>
                                    <div className='py-5 grid grid-rows-1 grid-cols-1'>
                                        <button className='bg-purple-200 text-xl text-white-100 py-3 px-4 rounded-lg shadow-md hover:bg-pink-100 hover:text-purple-200 uppercase tracking-wide'>Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}
                    {!isLogin && (
                        <motion.div key='register' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={delay}>
                            <h2 className='flex justify-center text-4xl text-white-100'>
                                Register your new account
                            </h2>
                            <h3 className='flex justify-center text-xl text-white-100'>
                                or <span className='text-white-200 hover:underline hover:text-pink-100 pl-2' onClick={() => setIsLogin(!isLogin)}>sign into your account</span>
                            </h3>
                            <div className='flex justify-center align-middle p-3'>
                                <form className='w-full max-w-lg bg-white-200 rounded-lg drop-shadow-xl py-5 px-5'>
                                    <div className='md:w-full px-3 py-0 pb-0 mb-3'>
                                        <label className='block uppercase tracking-wide my-1.5'>Username</label>
                                        <input className='appearance-none block w-full rounded-md py-1 px-2 focus:outline-none' />
                                    </div>
                                    <div className='md:w-full px-3 py-2 pt-0 mb-3'>
                                        <label className='block uppercase tracking-wide my-1.5'>Email</label>
                                        <input className='appearance-none block w-full rounded-md py-1 px-2 focus:outline-none' />
                                    </div>
                                    <div className='md:w-full px-3 py-4 pb-0 mb-3'>
                                        <label className='block uppercase tracking-wide my-1.5'>Password</label>
                                        <input className='appearance-none block w-full rounded-md py-1 px-2 focus:outline-none' />
                                    </div>
                                    <div className='md:w-full px-3 py-2 pt-0 mb-3'>
                                        <label className='block uppercase tracking-wide my-1.5'>Confirm Password</label>
                                        <input className='bappearance-none block w-full rounded-md py-1 px-2 focus:outline-none' />
                                    </div>
                                    <div className='py-5 grid grid-rows-1 grid-cols-1'>
                                        <button className='bg-purple-200 text-xl text-white-100 py-3 px-4 rounded-lg shadow-md hover:bg-pink-100 hover:text-purple-200 uppercase tracking-wide'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Background>
            <Footer />
        </>
    )
}

export default Account