import React from "react"
import { Nav } from "../components"
import { TipView } from "../features/tip-by-id/TipView"

export const TipByIdPage = ()=>{
    return(
    <>
     <Nav/>

     <section className="tip-view-layout">
         <TipView/>
     </section>
    </>
    )
}