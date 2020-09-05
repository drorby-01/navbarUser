import React from "react"
import Home from "../components/pages/page-home"
import Features from "../components/pages/page-features"
import Price from "../components/pages/page-price"



export const Routes = [
    {component:Home,path:"/home",name:"Home"},
    {component:Features,path:"/features",name:"Features"},
    {component:Price,path:"/Pricing",name:"Pricing"},
  ]