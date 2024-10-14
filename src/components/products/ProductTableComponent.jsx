import React from 'react'
import ProductGroupComponent from './ProductGroupComponent'


const ProductTableComponent = ({fetchUrl}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
      <thead className="text-xs text-slate-700 uppercase bg-blue-200 dark:bg-slate-700 dark:text-slate-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            PRODUCT NAME
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            PRICE(USD)
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            CREATED_AT
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            UPDATED_AT
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
       <ProductGroupComponent fetchUrl={fetchUrl}/>
      </tbody>
    </table>
  </div>
  )
}

export default ProductTableComponent