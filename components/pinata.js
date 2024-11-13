import axios from "axios";
import {
  apikey,
  apisecret,
  gatewayjwt,
  readHeader,
  getHeader,
  sendJsonHeader,
  ipfsgateway,
} from "./config";


export async function getDate() {
  const  dateFormat = new Date(Date.now());
  const dateValue = (dateFormat.getMonth() + 1) + 
  '.' + dateFormat.getDate() + '.' + dateFormat.getFullYear();
  const time = (new Date(dateValue.split('.').join("-")).getTime())/1000;
  return {dateValue, time};
}


export async function sendJSONToIPFS(gettitle,getprice, getyear, getcity, getcountry, getzip, gethoa, getinfo, 
    getfloors, getaddress, getbaths, getrooms, getgarage, sellername, selleremail ,sellerphone , picCid) {
      const fetchTime = await getDate();
      const listdate = fetchTime.dateValue;
      const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
      const data = JSON.stringify({ 
        "pinataMetadata" : {
          name: "listinfo",  
        },
        "pinataOptions" : {
          "cidVersion" : 1
        },
        "pinataContent" : {
          "PropertyInfo" : {
            "Title" : gettitle,
            "Price" : getprice,
            "Year" : getyear,
            "City" : getcity,
            "Country" : getcountry,
            "Zip" : getzip,
            "Hoa" : gethoa,
            "Info" : getinfo,
            "Floors" : getfloors,
            "Address" : getaddress,
            "Baths" : getbaths,
            "Rooms" : getrooms,
            "Garage" : getgarage,
            "Name" : sellername,
            "Email" : selleremail,
            "Phone" : sellerphone,
            "Listed" : listdate,
            "Picture" : 'https://' + ipfsgateway + '.mypinata.cloud/ipfs/' + picCid + '?pinataGatewayToken=',
          }
        }
      })
      await axios.post(url, data, sendJsonHeader);
      // const sendFile = await axios.post(url, data, sendJsonHeader);
      // const hash = `ipfs://${sendFile.data.IpfsHash}`;
      return "complete";
}


export async function sendFileToIPFS(file) {
  const formData = new FormData();
  const url =  'https://api.pinata.cloud/pinning/pinFileToIPFS';
  formData.append('file', file);
  const opts = JSON.stringify({
    cidVersion : 0,
  })
  formData.append('pinataOptions', opts);
  const options = {
    maxBodyLength : "Infinity",
    headers : {
      'Content-Type' : `multipart/form-data; boundary=${formData._boundary}`,
      pinata_api_key : apikey,
      pinata_secret_api_key : apisecret,
      Accept : 'text/plain',
    }
  }
  const sendPic = await axios.post(url, formData, options);
  return sendPic.data.IpfsHash;
}

export async function getFileFromIPFS() {
  const queryFilter = "metadata[name]=listinfo";
  const url = "https://api.pinata.cloud/data/pinList?" + queryFilter;
  const fetchFile = await axios.get(url, getHeader);
  const response = fetchFile.data.rows;
  const output = response.map((value) => {
    let getCid = value.ipfs_pin_hash; 
    return getCid;
  });
  return output;
}

export async function readFileFromIPFS(){
  const output = await getFileFromIPFS();
  const listArray = [];
  let i = 0;
  for(i; i < output.length; i++){
    const value = output[i];
    const ipfsPath =  'https://' + ipfsgateway + '.mypinata.cloud/ipfs/' + value + '?pinataGatewayToken=' + gatewayjwt;
    const info = await axios.get(ipfsPath, readHeader);
    listArray.push(info.data.PropertyInfo);
  }
  return listArray;
}