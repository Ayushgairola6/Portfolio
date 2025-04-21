import { GoArrowUpRight, GoArrowDownLeft } from 'react-icons/go'
import { FcIdea } from "react-icons/fc";
import { MdConstruction } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
const RandomText = () => {


    return <>
        <section className="font-cosiAzure flex items-center justify-between px-6 py-10 mt-4 border">
            <span id="1" className="flex items-center justify-center gap-2 after:">Ideas  <FcIdea color="white"/>  </span>
            <span id="2" className="flex items-center justify-center gap-2 after:">Development <MdConstruction /> </span>
            <span id="3" className="flex items-center justify-center gap-2 after:">Reality <MdAttachMoney /> </span>
        </section>
    </>
}

export default RandomText;