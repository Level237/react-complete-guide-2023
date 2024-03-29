import React, { useState } from 'react'

export const ProductContext=React.createContext({
  products: [],
toogleFav:(id)=>{}})

export const ProductProvider=props=>{

    const [productList,setProductList]=useState([
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
      ])

      const toogleFavorite=(productId)=>{
        setProductList(currentProdList=>{
          const prodIndex = currentProdList.findIndex(
            p => p.id === productId
          );
          const newFavStatus = !currentProdList[prodIndex].isFavorite;
          const updatedProducts = [...currentProdList];
          updatedProducts[prodIndex] = {
            ...currentProdList[prodIndex],
            isFavorite: newFavStatus
          };
          return updatedProducts
        })
      }
    return (
        <ProductContext.Provider value={{ products:productList,toogleFav:toogleFavorite }}>
            {props.children}
        </ProductContext.Provider>
    )
}