'use client'

import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const RadioInputBox = () => {

    const values = {
        Organic: false,
        kakogrnic: true,
        Vegetarian: true,
        'Non-Vegetarian': true,
    }

    const [defaultValues, setdefaultValues] = useState({ ...values })

    const handleValues = (val, key) => {
        setdefaultValues((prevState) => {
            return {
                ...prevState, [key]: val
            }
        })
    }

    return (
        <div className='block' >
            <h3 className='text-xl font-semibold mb-5 -mt-1' >Dietary Needs</h3>
            <div className='flex flex-col p-5 border rounded-md border-border-base' >
                {
                    Object.keys(values).map((key, index) => {
                        return (
                            <div className="group flex items-center w-[200px] justify-between text-sm md:text-15px md:w-[300px] cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0" key={index}>
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="item1"
                                        className="text-lg capitalize py-0.5 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {key}
                                    </label>
                                </div>
                                <Checkbox id="item1" checked={defaultValues[key]} onCheckedChange={(e) => { handleValues(e, key) }} />
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )
}

export default RadioInputBox