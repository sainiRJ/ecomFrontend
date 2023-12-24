import React from 'react'
import FilterByPrice from '../Filter/FilterByPrice/FilterByPrice'
import FilterByColour from '../Filter/FilterByColour/FilterByColour'
import FilterBySize from '../Filter/FilterBySize/FilterBySize'
const ShopSidebar = () => {
  return (
    <div className="col-lg-3 col-md-4">
        {/* ------------------------------Price start------------------------ */}
        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter by price</span></h5>
        <FilterByPrice/>
        {/*------------------------------- price end-------------------------- */}
        {/* -------------------------------colour start------------------------- */}
        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter by color</span></h5>
        <FilterByColour/>
        {/* -------------------------------colour end------------------------------ */}
         {/* -------------------------------size start------------------------------ */}
        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter by size</span></h5>
        <FilterBySize/>
         {/* -------------------------------size end------------------------------ */}

    </div>
  )
}

export default ShopSidebar