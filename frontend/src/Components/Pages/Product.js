import React, { useContext } from 'react';
import {ShopContext} from "../Context/ShopContext"
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Breadcrums/Breadcrums';
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../RelatedProducts/RelatedProducts';

export const Product = () => {
  const contextValue= useContext(ShopContext);

  const {productId}= useParams() ?? null;

  const product = contextValue.allProducts.find((e)=> e.id===Number(productId))

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
