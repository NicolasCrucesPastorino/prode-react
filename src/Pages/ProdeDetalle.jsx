import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getprodeporid } from '../database/services/prodeService'

export const ProdeDetalle = () => {
    const param = useParams()
    useEffect(()=>{
        const getprodefromdatabase = async () => {
            const prode = await getprodeporid(param.uid)
            console.log('tabla',prode)
        }
        getprodefromdatabase().then()
    })
  return (
    <div>ProdeDetalle</div>
  )
}
