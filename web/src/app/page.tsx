"use client"
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

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
  return ( <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
    Here is a gentle confirmation that your action was successful.
  </Alert>);
}
