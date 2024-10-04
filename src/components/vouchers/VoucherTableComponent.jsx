import React from 'react'
import VoucherGroupComponent from './VoucherGroupComponent'

const VoucherTableComponent = ({search}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 overflow-hidden">
      <thead className="text-xs text-slate-700 uppercase bg-blue-100 dark:bg-slate-700 dark:text-slate-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Voucher ID
          </th>
          <th scope="col" className="px-6 py-3">
            CUSTOMER NAME
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            EMAIL
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            DATE
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        <VoucherGroupComponent search={search}/>
      </tbody>
    </table>
  </div>
  )
}

export default VoucherTableComponent