import React from 'react'
import Layout from '../component/Layout'
import PageNotFound from '../images/logo.jpg'

const PagenotFound = () => {
    return (
    <Layout>
        <div className='container p-4'> 
            <img src={PageNotFound} alt='Logo'/>
        </div>
    </Layout>
  )
}

export default PagenotFound