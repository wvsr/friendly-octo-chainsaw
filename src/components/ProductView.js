import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function NoPage() {
  let { id } = useParams()
  const [desc, setDesc] = useState({ title: '', desc: '', img: '' })
  React.useEffect(() => {
    let products = localStorage.getItem('products')
    let productsObj = products == null ? [] : JSON.parse(products)
    if (productsObj[id]) {
      setDesc(productsObj[id])
    }
  }, [desc, id])
  return (
    <div className='container' style={{ marginTop: '1rem' }}>
      <img src={desc?.img} className='img' alt='' />
      <h2>{desc?.title}</h2>
      <br />
      <p>{desc?.desc}</p>
    </div>
  )
}
