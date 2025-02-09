'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {cn} from "@/lib/utils";

type Customer = {image: string, name: string};

// Utility function to split the array into chunks of a specific size
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};


export default function CustomerCarousel(){
    const SWIPER_DELAY = 2400;

    useEffect(() => {
        new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [
                Navigation,
                Pagination,
                Autoplay
            ],
            mousewheel: true,
            grabCursor: true,
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: SWIPER_DELAY,
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }, []);

    const customers: Customer[] = [
        {image: '/clienti/vanity_fair_logo.svg', name: 'Vanity Fair'},
        {image: '/clienti/vogue_logo.svg', name: 'Vogue'},
        {image: '/clienti/la_cucina_italiana_logo.svg', name: 'La cucina italiana'},
        {image: '/clienti/mytheresa_logo.svg', name: 'My Theresa'},
        {image: '/clienti/backstage_logo.svg', name: 'Backstage'},
        {image: '/clienti/the_level_group_logo.png', name: 'The Level Group'},
        {image: '/clienti/herno_logo.png', name: 'Herno'},
        {image: '/clienti/chillbill_logo.svg', name: 'Chillbill'},
        {image: '/clienti/bonomelli_logo.png', name: 'Bonomelli'},
        {image: '/clienti/pil_logo.svg', name: 'Pil'},
        {image: '/clienti/effetto_adv_logo.png', name: 'Effetto Adv'},
        {image: '/clienti/ln_cc_logo.png', name: 'LN-CC'},
    ];
    // Split customers into chunks of 4
    const groupedCustomers: Customer[][] = chunkArray(customers, 4);

    return (
        <div className="w-screen px-8 sm:px-40">
            <div className={cn("swiper swiper-transition", "w-full h-[140px] sm:h-[120px]")}>
                <div className="swiper-wrapper">
                    {groupedCustomers.map((group, index) => (
                        <React.Fragment key={`group-customers-${index}`}>
                            <div className={cn("swiper-slide", "!flex items-center justify-between gap-8")}
                                 data-swiper-autoplay={SWIPER_DELAY}>
                                {group.map((customer, i) => (
                                    <div key={'customer-' + i}>
                                        <Image
                                            className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                                            src={customer.image}
                                            alt={customer.name}
                                            width={100}
                                            height={100}
                                            priority
                                        />
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div className={cn("swiper-pagination ")}></div>
                {/*
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
                */}
            </div>
        </div>
     )
}
