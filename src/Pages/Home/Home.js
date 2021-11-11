import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Header/Navbar'
import Blog from './Blog/Blog'
import Products from './Products/Products'
import Review from './Reviews/Review'
import Topbanner from './Topbanner/Topbanner'

function Home() {
    return (
        <div>
            <Navbar/>
            <Topbanner/>
            <Products item={4}/>
            <Review/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home
