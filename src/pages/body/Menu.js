import React from 'react'
import { Link } from "react-router-dom";
import useFetch from '../../components/useFetch'
import "./styles-body.css"

function Menu() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blog")

  return (
    <div className='primary-body'>
      <div><b>BLOG List</b></div>
      {error && <div>{error}</div>}
      {isPending && <div>Data is Loading...</div>}

      {data && data.map((data) => (
        <div key={data.id}>
          <Link to={`/blog/${data.id}`}>{data.title} by {data.author} </Link>
        </div>
      ))}
    </div>
  )
}

export default Menu