"use client";

import { useState, useEffect } from "react";
import { readFileFromIPFS } from "../../components/pinata";
import "sf-font";
import Image from "next/image";
import { gatewayjwt } from "../../components/config";

export default function Page() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    location: "", 
  });
  const [filteredListings, setFilteredListings] = useState([]);


  useEffect(() => {
    fetchListing();
  }, []);


  useEffect(() => {
    applyFilters();
  }, [filters, listings]);


  async function fetchListing() {
    const array = await readFileFromIPFS();
    setListings(array);
    setFilteredListings(array); // Initialize with full list
  }

  async function applyFilters() {
    const filtered =  listings.filter((list) => {
      return (
        (filters.location === "" || list.City.toLowerCase().includes(filters.location.toLowerCase())) 
      );
    });
    setFilteredListings(filtered);
  }

  async function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
       {/* <div> */}
      {/* Filter Inputs */}
      <div className="container px-4 py-3">
      <div className="sm:col-span-2">
        {/* <label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label> */}
        <h3 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Find Your Listing By Location </h3>
      <div className="mt-2.5">
      <Image
          src="/icons/search-icon.svg"
          alt="twbs"
          width={32}
          height={32}
          className="flex-shrink-0"
        />
        <input
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          type="text"
          name="location"
          placeholder="Enter the Location"
          onChange={handleFilterChange}
        />
      </div>
      </div>
      </div>
      {/* Display Filtered Listings */}
      {filteredListings.map((list, i) =>
       
      // {listings.map((list, i) =>
        list && list.Title ? (
          <div key={i}>
            <div className="container px-4 py-5">
              <h2 key={i} className="pb-2 border-bottom fw-bold">
                {list.Title}
              </h2>
              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <div className="col">
                    <div className="card overflow-hidden rounded-4 shadow-lg">
                      <div className="d-flex flex-column p-3 pb-0 text-shadow-1">
                        {/* {list.Picture ? (
                              <>
                                  {console.log("Image URL:", list.Picture + gatewayjwt)}
                                  <Image className="overflow-hidden rounded-4 shadow-lg" src={list.Picture + gatewayjwt} alt={list.Title} layout="responsive" width={700} height={475} />
                              </>
                          ) : (
                              <Image className="overflow-hidden rounded-4 shadow-lg" src="/path/to/fallback-image.jpg" alt="Fallback Image" layout="responsive" width={700} height={475} />
                          )} */}
                        <Image
                          className="overflow-hidden rounded-4 shadow-lg"
                          src={
                            list.Picture
                              ? list.Picture + gatewayjwt
                              : "/images/pinatalogo.svg"
                          }
                          alt={list.Title}
                          layout="responsive"
                          width={700}
                          height={475}
                        />
                        <ul className="d-flex list-unstyled mt-auto">
                          <li className="d-flex align-items-center me-1 mt-1">
                            <Image
                              src="/icons/map-solid.svg"
                              alt="twbs"
                              width={30}
                              height={30}
                              className="flex-shrink-0"
                            />
                          </li>
                          <li className="d-flex align-items-center me-2 mt-2">
                            <h6 style={{ color: "black" }}>{list.Address}</h6>
                          </li>
                          <li className="d-flex align-items-center me-1 mt-2">
                            <h6 style={{ color: "black" }}>{list.City}</h6>
                          </li>
                          <li className="d-flex align-items-center me-1 mt-2">
                            <h6 style={{ color: "black" }}>{list.Country}</h6>
                          </li>
                          <li className="d-flex align-items-center me-1 mt-2">
                            <h6 style={{ color: "black" }}>{list.Zip}</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row-row-cols-2 row-cols-md-2">
                    <a
                      className="list-group-item list-group-item-action d-flex gap-3 py-4"
                      aria-current="true"
                    >
                      <Image
                        src="/icons/dollar-symbol.svg"
                        alt="twbs"
                        width={32}
                        height={32}
                        className="flex-shrink-0"
                      />
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        {/* <h5 className="fw-semibold">Price :</h5>  */}
                          <h5 className="mb-0">Price : {list.Price}</h5>
                      </div>
                    </a>
                    
                     <h4 className="fw-semibold">Seller Information :</h4> 
                    <a className="list-group-item list-group-item-action d-flex gap-2 py-1">
                      <div className="d-flex gap-4 justify-content-between">
                          <h6 className="mb-0">
                            <Image
                              src="/icons/person-solid.svg"
                              alt="twbs"
                              width={20}
                              height={20}
                              className="flex-shrink-0"
                            /> :  {list.Name}{" "}
                          </h6>
                          <h6 className="mb-0">
                            <Image
                              src="/icons/at-solid.svg"
                              alt="twbs"
                              width={20}
                              height={20}
                              className="flex-shrink-0"
                            /> : {list.Email}{" "}
                          </h6>
                          <h6 className="mb-0">
                            <Image
                              src="/icons/phone-solid.svg"
                              alt="twbs"
                              width={20}
                              height={20}
                              className="flex-shrink-0"
                            /> : {list.Phone}{" "}
                          </h6>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action d-flex gap-2 py-1">
                      <Image
                        src="/icons/calendar-solid.svg"
                        alt="twbs"
                        width={26}
                        height={26}
                        className="flex-shrink-0"
                      />
                      <div className="d-flex gap-2 w-100 justify-content-between">
                          <h5 className="mb-0">Listed Since : {list.Listed}</h5>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="row row-cols-sm-2 g-4">
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center bg-gradient fs-4 rounded-3">
                        <Image
                          src="/icons/house-solid.svg"
                          alt="House icon"
                          width={32}
                          height={32}
                          style={{ marginRight: "4px" }}
                        />
                        <h4 className="fw-semibold">Floors {list.Floors}</h4>
                      </div>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center bg-gradient fs-4 rounded-3">
                        <Image
                          src="/icons/build-solid.svg"
                          alt="House icon"
                          width={32}
                          height={32}
                          style={{ marginRight: "4px" }}
                        />
                        <h4 className="fw-semibold">Built In : {list.Year}</h4>
                      </div>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center bg-gradient fs-4 rounded-3">
                        <Image
                          src="/icons/bed-solid.svg"
                          alt="House icon"
                          width={32}
                          height={32}
                          style={{ marginRight: "4px" }}
                        />
                        <h4 className="fw-semibold">Beds {list.Rooms}</h4>
                      </div>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center bg-gradient fs-4 rounded-3">
                        <Image
                          src="/icons/bath-solid.svg"
                          alt="House icon"
                          width={32}
                          height={32}
                          style={{ marginRight: "4px" }}
                        />
                        <h4 className="fw-semibold">Baths {list.Baths}</h4>
                      </div>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center bg-gradient fs-4 rounded-3">
                        <Image
                          src="/icons/garage-solid.svg"
                          alt="House icon"
                          width={32}
                          height={32}
                          style={{ marginRight: "4px" }}
                        />
                        <h4 className="fw-semibold">Garage {list.Garage}</h4>
                      </div>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center bg-gradient fs-4 rounded-3">
                        <Image
                          src="/icons/dollar-symbol.svg"
                          alt="House icon"
                          width={32}
                          height={32}
                          style={{ marginRight: "4px" }}
                        />
                        <h4 className="fw-semibold">HOA ${list.Hoa}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex flex-column py-5">
                  <h4 className="fw-semibold">Description</h4>
                    <p>{list.Info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b-example-divider"></div>
          </div>
        ) : null
      )}
    </div>
  );
}
