import React from 'react'
import Banner from '../Banner'
import Footer from '../Footer'
import "./HomeScreen.css"
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav/>
      <Banner/>
      <Row title="MOVIETIME ORIGNIALS" fetchUrl= {requests.requestPopular} isLargeRow/> 
      <Row title="TOP RATED" fetchUrl= {requests.requestTopRated} /> 
      <Row title="TOP HORROR" fetchUrl= {requests.requestHorror} /> 
      <Row title="TOP TRENDING" fetchUrl= {requests.requestTrending} /> 
      <Row title="TOP UPCOMING" fetchUrl= {requests.requestUpcoming} /> 
      <Footer/>
    </div>
  )
}

export default HomeScreen