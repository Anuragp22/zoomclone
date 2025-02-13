import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

const SignInPage = () => {
    return (
        <main className='flex h-screen w-full items-center justify-center bg-[#1a1b1d]'>
            <div className='flex flex-col w-full max-w-sm'>
                <div className='flex justify-center items-center text-sm mb-4'>
                    <span className='text-gray-400'>
                        New to our platform? Please{' '}
                        <Link
                            href="/sign-up"
                            className="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-150"
                        >
                            sign up
                        </Link>
                        {' '}before signing in.
                    </span>
                </div>
                <SignIn />
            </div>
        </main>
    )
}

export default SignInPage