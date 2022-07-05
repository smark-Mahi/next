import React, { useState } from 'react'
import Image from 'next/image'
import dog from '../public/dog.jpg'
import red from '../public/red.jpg'
import pink from '../public/pink.jpg'
import styles from '../styles/Gallery.module.css'
const Gallery = () => {
    const [data,setdata]=useState(false)
    const images=[
        {
          
            img:dog,
            likes:11
        },
        {
           
            img:pink,
            likes:11
        },
        {
          
            img:red,
            likes:11
        }
       
       

    ]
    /*function mouseover(){
      setdata(true)
        

    }
    function mouseout(){
        setdata(false)

    }*/
  return (
    <div className={styles.imgs}>
    {images.map((path,i)=>
    <div className={styles.Gallery} key={i}>
    <Image  className={styles.img}  src={path.img} width='250px' height='250px'/>
    <h5 className={styles.text}>{path.likes}likes</h5>
    </div>
    )}
    </div>
  )
}

export default Gallery
