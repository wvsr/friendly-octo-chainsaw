import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')
  const [user, setUser] = useState(false)
  const [productList, setProductList] = useState('')

  useEffect(() => {
    let user_ = localStorage.getItem('user')
    setUser(user_)
    let products = localStorage.getItem('products')
    setProductList(JSON.parse(products))
  }, [])

  // add product
  const HandleSubmit = (e) => {
    e.preventDefault()
    if ((title, desc)) {
      let products = localStorage.getItem('products')
      let productsObj = products == null ? [] : JSON.parse(products)
      let data = { title, img, desc }

      productsObj.push(data)
      localStorage.setItem('products', JSON.stringify(productsObj))
      let products_ = localStorage.getItem('products')

      setProductList(JSON.parse(products_))
    }

    setTitle('')
    setImg('')
    setDesc('')
  }

  // remove product
  const deleteItem = (e) => {
    let products = localStorage.getItem('products')
    let productsObj = JSON.parse(products)
    productsObj = productsObj.filter((item) => item !== productsObj[e])
    localStorage.setItem('products', JSON.stringify(productsObj))
    let products_ = localStorage.getItem('products')

    setProductList(JSON.parse(products_))
  }
  // update product
  const updateItem = (id) => {
    window.scroll(0, 0)
    let products = localStorage.getItem('products')
    let productsObj = JSON.parse(products)[id]
    setTitle(productsObj.title)
    setImg(productsObj.img)
    setDesc(productsObj.desc)
    deleteItem(id)
  }
  // Card component
  const Card = ({ img, title, desc, id }) => {
    return (
      <div className='main-card'>
        <img src={img} alt='' className='img' />
        <div className='card-content'>
          <Link to={`product/${id}`}>
            <h2>{title}</h2>
          </Link>
          <div className='btn-list'>
            <button className='btn' onClick={() => updateItem(id)}>
              update
            </button>
            <button className='btn btn-red' onClick={() => deleteItem(id)}>
              delete
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      {!user && (
        <div className='login-redirect'>
          <h2>
            Go to
            <span>
              <Link to='login'> Login </Link>
            </span>
            page
          </h2>
        </div>
      )}
      {user && (
        <>
          <div>
            <form
              action=''
              onSubmit={HandleSubmit}
              className='add-product-item'
            >
              <h2>Add Item</h2>
              <section>
                <input
                  type='text'
                  className='handle-input'
                  placeholder='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </section>
              <section>
                <input
                  type='text'
                  className='handle-input'
                  placeholder='image url'
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  required
                />
              </section>
              <section>
                <textarea
                  type='text'
                  className='handle-input'
                  placeholder='desc'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  cols='30'
                  rows='6'
                  required
                ></textarea>
              </section>

              <button className='btn' onClick={HandleSubmit}>
                Add Item
              </button>
            </form>
          </div>
          <article className='main-grid'>
            {productList &&
              productList.map((e, id) => <Card {...e} id={id} key={id} />)}
          </article>
        </>
      )}
    </div>
  )
}
