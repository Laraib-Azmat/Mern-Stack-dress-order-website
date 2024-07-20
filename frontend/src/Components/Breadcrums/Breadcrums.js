import React from 'react'
import styles from './Breadcrums.module.css'
import arrowIcon from '../../Assets/breadcrum_arrow.png'

export const Breadcrums = (props) => {
    const {product} = props;

  return (
    <div className={styles.breadcrums}>
        HOME <img src={arrowIcon}/> SHOP <img src={arrowIcon}/> {product.category} <img src={arrowIcon}/> {product.name}
    </div>
  )
}
