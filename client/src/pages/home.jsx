import React from 'react'
import Navbar from '../components/navbar'
import Carousels from '@/components/carousels'
import { Events } from '@/components/events'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function Home() {

return (
    <div className='bg-gradient-to-b from-black to-gray-800  shadow-lg'>
        <Navbar />
        <div className=' pl-10 pr-10 bg-gradient-to-b from-black to-gray-800  shadow-lg'>
            <Carousels /> 
        </div>
        <div className='text-center mt-5 font-mono text-3xl text-white pr-10 pl-10 mb-52 '>
            <span className=''>Upcoming Events</span>
            <Events />
        </div>
        <div className='fixed bottom-12 left-0 w-full  bg-opacity-80 text-black z-50 shadow-md p-4'>
            <Button variant="outline" className="rounded-full">Call</Button>
        </div>
        <div className="bg-white">
            <Footer />
        </div>
    </div>
    
)
}
