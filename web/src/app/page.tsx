"use client"
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState()

  const fetchData = async () => {
    const response = await fetch(`${BACKEND_ENDPOINT}`)
  const datas = await response.json()
  setData(datas)   
  }
    useEffect(()=>{
      fetchData()
    },[])
  return (<>{data}</>);
}
