'use client'

import React from 'react'

import ProductCard from '../_components/ProductCard.js'
import RadioInputBox from '../_components/RadioInputBox.js'

const AllComoponent = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-24 space-y-16' >
            <ProductCard />
            <RadioInputBox />
        </div>
    )
}

export default AllComoponent