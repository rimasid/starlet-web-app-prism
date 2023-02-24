import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import './styles/home.css'
import imgUrl from '/homebackimg.png'
const Home = () => {
    const navigate = useNavigate();
    const gotolink = () => {
        navigate('/dasdf');
    }
    return (
    <>
    <Navbar/>
    <main className='home-container'>
      <img className='home-img' src={imgUrl} alt='backgroundimg' />
      <button onClick={() => navigate("/login")} className='start-button'>Get Started </button>
      <div className='home-content'>
      <div className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus animi ipsa voluptatem explicabo a vitae autem, quae ipsam distinctio pariatur itaque ea laboriosam quidem odio aut repellat ullam commodi.</div>
      </div>
    </main>
    </>
    )
}


export default Home;