"use client";

import { gatewayjwt, ipfsgateway } from "../../components/config";
import { sendFileToIPFS, sendJSONToIPFS } from "../../components/pinata";
import Image from "next/image";
import { useState } from "react";

export default function List() {

  const [picCid, getPicCid] = useState('');
  const [picture, getPicture] = useState('/images/logo-nav-list.png');


  async function updatePic(e){
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    getPicCid(getCid);
    const ipfsPath = 'https://' + ipfsgateway + '.mypinata.cloud/ipfs/' + getCid + '?pinataGatewayToken=' + gatewayjwt ;
    getPicture(ipfsPath);
  }


  async function listProperty() {
    let gettitle = document.getElementById('title').value.toString();
    let getprice = document.getElementById('price').value.toString();
    let getyear = document.getElementById('year').value.toString();
    let getcity = document.getElementById('city').value.toString();
    let getcountry = document.getElementById('country').value.toString();
    let getzip = document.getElementById('zip').value.toString();
    let gethoa = document.getElementById('HOA').value.toString();
    let getinfo = document.getElementById('info').value.toString();
    let getfloors = document.getElementById('floor').value.toString();
    let getaddress = document.getElementById('address').value.toString();
    let getbaths = document.getElementById('bath').value.toString();
    let getrooms = document.getElementById('room').value.toString();
    let getgarage = document.getElementById('garage').value.toString();
    let sellername = document.getElementById('sellername').value.toString();
    let selleremail = document.getElementById('selleremail').value.toString();
    let sellerphone = document.getElementById('sellerphone').value.toString();

    if( !gettitle || !getprice || !getyear || !getcity || !getcountry || !getzip || !gethoa || !getinfo ||
      !getfloors || !getaddress || !getbaths || !getrooms || !getgarage || !sellername || !selleremail || !sellerphone || !picCid) return
      const receipt = await sendJSONToIPFS(gettitle,getprice, getyear, getcity, getcountry, getzip, gethoa, getinfo, 
        getfloors, getaddress, getbaths, getrooms, getgarage, sellername, selleremail ,sellerphone, picCid)
        if(receipt == "complete") {
          let confirmation = 'Listed Succefully';
          document.getElementById('displayresult').innerHTML = confirmation
        }
        else {
          let confirmation = 'Property listing Failed';
          document.getElementById('displayresult').innerHTML = confirmation
        }
  }
  
  
  return (
    <div>
      <div className="container" style={{ fontFamily: "SF Pro Display" }}>
        <div className="row g-6">
          {/* <div className="col-md-2 col-lg-2">
            <Image
              className="mb-3 d-flex"
              src="/images/logoH.png"
              // src="https://nextjs.org/icons/next.svg"

              width={60}
              height={60}
              alt="Logo"
            />
          </div> */}
          <div className="col-md-2 col-lg-9" />
          <button className="d-flex  mb-4 justify-content-center" id="displayresult" />
          <div class="p-3 mb-2 bg-light text-dark">
          <h4 className="mt-3 mb-3 d-flex justify-content-center">Property Info</h4>
          </div>
          {/* <h4 className="mt-5 mb-3 d-flex justify-content-center green text-info bold">Property Info</h4> */}
          <h5 className="d-flex justify-content-start align-items-right mt-4 mb-2">
            <span className="text-secondary ">New Listing Title</span>
          </h5>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="title"
              style={{
                backgroundColor: "#d3d3d310",
                fontWeight: "lighter",
                color: "black",
              }}
            />
          </div>
  

          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-2">
                <label htmlFor="first" className="form-label text-secondary">
                  Asking Price
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
                <div className="invalid-feedback text-danger">Asking Price Required</div>
              </div>
              <div className="col-sm-2">
                <label htmlFor="last" className="form-label text-secondary">
                  Year Built
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">#</span>
                  <input
                    type="text"
                    className="form-control"
                    name="year"
                    id="year"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
                <div className="invalid-feedback text-danger">
                  Valid last Name is required
                </div>
              </div>
              <div className="col-sm-2">
                <label className="form-label text-secondary">HOA</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control"
                    name="HOA"
                    id="HOA"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
                <div className="invalid-feedback text-danger">HOA is Required</div>
              </div>

              <div className="col-sm-5">
                <label className="form-label text-secondary">Address</label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label className="form-label text-secondary">City</label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <label className="form-label text-secondary">Country</label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    id="country"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label className="form-label text-secondary">Postal Code / Zip Code</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">#</span>
                  <input
                    type="text"
                    className="form-control"
                    name="zip"
                    id="zip"
                    style={{
                      backgroundColor: "#d3d3d310",
                      fontWeight: "lighter",
                      color: "black",
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-lg-10">
                <label className="form-label text-secondary">Additional information</label>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="info"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className="row g-6">
            <div className="col-sm-2 mt-3">
              <label htmlFor="country" className="form-label text-secondary">
                Floors
              </label>
              <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="floor"
                  id="floor"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-2 mt-3">
              <label htmlFor="country" className="form-label text-secondary">
                Rooms
              </label>
              <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="room"
                  id="room"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-2 mt-3">
              <label htmlFor="country" className="form-label text-secondary">
                Baths
              </label>
              <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="bath"
                  id="bath"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-2 mt-3">
              <label htmlFor="country" className="form-label text-secondary">
                Garage
              </label>
              <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="garage"
                  id="garage"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <h6 id="displaysuccess" />
          <h6 className="text-secondary">Add Property Picture</h6>
          <form
            className="card col-sm-4"
            style={{
              boxShadow: "0px 1px 5px #ffffff",
            }}
          >
            <h5 className="d-flex justify-content-end " id="displaypicchanged" />
            <input
              style={{ backgroundColor: "transparent", color: "blue" }}
              className="btn btn-secondary d-flex justify-content-end"
              type="file"
              name="Asset"
              onChange={updatePic}
            />
          </form>
          <div className="row g-6">
            <h5 className="mt-3 mb-3 d-flex justify-content-start text-secondary">
              Seller Info
            </h5>
            <div className="col-sm-4">
              <label htmlFor="email" className="form-label text-secondary">
                Name{""}
              </label>
              <input
                type="email"
                className="form-control"
                name="sellername"
                id="sellername"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black",
                }}
              />
            </div>
            <div className="col-sm-3">
              <label htmlFor="email" className="form-label text-secondary">
                Email{""}
              </label>
              <input
                type="email"
                className="form-control"
                name="selleremail"
                id="selleremail"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black",
                }}
              />
            </div>
            <div className="col-sm-3">
              <label htmlFor="email" className="form-label text-secondary">
                Phone{""}
              </label>
              <input
                type="email"
                className="form-control"
                name="sellerphone"
                id="sellerphone"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black", 
                }}
              />
            </div>
          </div>
          <hr className="my-3" />
          <div className="row d-flex">
            <Image
              className="bd-placeholder-img"
              src={picture}
              width={259}
              height={194}
              alt="Property Image"
            />
          </div>
          <button
            className="w-100 btn btn-primary btn-md mt-4 "
            style={{
              backgroundColor: "primary",
              fontWeight: "lighter",
              fontSize: "20px",
            }}
            onClick={listProperty}
          >
            List Property
          </button>
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
}

//  <form>
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">
//             Profile
//           </h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             This information will be displayed publicly so be careful what you
//             share.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Username
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
//                     workcation.com/
//                   </span>
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     placeholder="janesmith"
//                     autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="about"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 About
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={""}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">
//                 Write a few sentences about yourself.
//               </p>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="photo"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon
//                   aria-hidden="true"
//                   className="h-12 w-12 text-gray-300"
//                 />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="cover-photo"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Cover photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon
//                     aria-hidden="true"
//                     className="mx-auto h-12 w-12 text-gray-300"
//                   />
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="file-upload"
//                         type="file"
//                         className="sr-only"
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">
//                     PNG, JPG, GIF up to 10MB
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">
//             Personal Information
//           </h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             Use a permanent address where you can receive mail.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="first-name"
//                   name="first-name"
//                   type="text"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="last-name"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="last-name"
//                   name="last-name"
//                   type="text"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="country"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="street-address"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="street-address"
//                   name="street-address"
//                   type="text"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label
//                 htmlFor="city"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="city"
//                   name="city"
//                   type="text"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="region"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="region"
//                   name="region"
//                   type="text"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="postal-code"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="postal-code"
//                   name="postal-code"
//                   type="text"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button
//           type="button"
//           className="text-sm font-semibold leading-6 text-gray-900"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
