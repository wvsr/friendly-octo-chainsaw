import React from 'react'
const Card = () => {
  return (
    <div className='main-card'>
      <img src='https://source.unsplash.com/300x200' alt='' />
      <div className='card-content'>
        <h2>Nostrum adipisci delectus atque accusantium impedit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor
          sunt aliquam commodi suscipit ab aut temporibus cumque excepturi quod!
          Quisquam ipsa voluptate voluptates eaque totam eius repellendus
          architecto labore!
        </p>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <div className='container'>
      <article className='main-grid'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </div>
  )
}
