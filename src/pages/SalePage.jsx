import React from 'react'
import {
  BreadCrumbComponent,
  ContainerComponent,
  SaleVoucherInfo,
} from "../components"
const SalePage = () => {
  return (
    <section>
    <ContainerComponent>
      <BreadCrumbComponent currentPageTitle="Sale" />
      <SaleVoucherInfo/>     
    </ContainerComponent>
  </section>
  )
}

export default SalePage