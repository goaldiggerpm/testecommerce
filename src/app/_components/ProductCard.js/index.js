'use client'

import { React, useEffect, useState } from "react"

import cababge from '../../../../public/assets/veggies/cabbage.webp'

import { Button } from "../../../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

const ProductCard = () => {

    const [show, setshow] = useState(false)
    const [value, setvalue] = useState(0)

    useEffect(() => {
        if (value < 0) {
            setshow(false)
            setvalue(0)
        }
    }, [value])


    return (
        <Card className="w-[250px] md:w-[300px]">
            <CardHeader className="pl-6 pr-6 pt-2 pb-2" >
                <CardDescription>
                    <span class="text-[11px] md:text-xs font-bold bg-green text-white uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 mb-[2px] sm:mx-1">on sale</span>
                </CardDescription>
                <CardTitle>Cabbage</CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6 pt-0 pb-0">
                <div className="relative shrink-0" >
                    <div class="overflow-hidden mx-auto w-full sm:w-[120px] h-[120px] md:w-[160px] md:h-[160px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                        <Image alt="Organic Spring Mix" fetchpriority="high" decoding="async" data-nimg="fill" class="object-cover bg-fill-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={cababge} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div class="flex flex-col pt:2 pb-5 lg:pb-6 lg:pt-2 h-full">
                        <div class="mb-1 lg:mb-1.5 -mx-1"><span class="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">$2.60</span><del class="mx-1 text-sm text-brand-dark text-opacity-70">$3.00</del></div>
                        <h2 class="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">Organic Spring Mix</h2>
                        <div class="mt-auto text-13px sm:text-sm">1 each</div>
                    </div>
                    <div className="absolute top-28 right-0" >
                        <div className={cn("rounded-full w-[28px]  p-[4px] bg-lime-400 ml-auto mr-0 hover:bg-lime-300", `${!show ? `block` : `hidden`}`)} onClick={() => { setshow(!show) }} >
                            <span class="sr-only">button-plus</span>
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="1">
                                    <path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path>
                                </g>
                            </svg>
                        </div>
                        <div className={cn("justify-between rounded-full shadow-sm bg-gray-50 w-[220px] md:w-[250px]", `${!show ? `hidden` : `flex`}`)} >
                            <Button onClick={() => { setvalue(value - 1) }} variant="outline" >Remove</Button>
                            <div className="flex items-center" >
                                <p className="text-lg font-semibold h-auto" >{value}</p>
                            </div>
                            <Button onClick={() => { setvalue(value + 1) }}  >Add</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
            {/* <CardFooter className="flex justify-between h-[10vh] w-full  transition-colors duration-250 ease-in-out">
            </CardFooter> */}
        </Card>
    )
}

export default ProductCard