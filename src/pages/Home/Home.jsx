import React from 'react'
import Navbar from '../components/Navbar'
import './styles/home.css'
import imgUrl from '/homebackimg.png'
const Home = () => {
    return (
    <>
    <Navbar/>
    <main className='home-container'>
      <img className='home-img' src={imgUrl} alt='backgroundimg' />
      <button className='start-button'>Get Started </button>
      <div className='home-content'>
      <div className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus animi ipsa voluptatem explicabo a vitae autem, quae ipsam distinctio pariatur itaque ea laboriosam quidem odio aut repellat ullam commodi.</div>
      </div>
    </main>
    </>
    )
}

export default Home;