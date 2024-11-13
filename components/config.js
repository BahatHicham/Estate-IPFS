

/*

Pinata IPFS  API info 

API Key: 6f2d662ba2bdb5a26220
API Secret: b62a35706f31647ff11b02c2071e63ef063c6b8fbb3be4bd41ebf1f244a3537e
JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5YzVhZmU2ZC1iOWJlLTQ5MTAtYjZkZC1mMmNkMTRiOWM0Y2UiLCJlbWFpbCI6ImhpY2hhbWJhaGF0OTlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjZmMmQ2NjJiYTJiZGI1YTI2MjIwIiwic2NvcGVkS2V5U2VjcmV0IjoiYjYyYTM1NzA2ZjMxNjQ3ZmYxMWIwMmMyMDcxZTYzZWYwNjNjNmI4ZmJiM2JlNGJkNDFlYmYxZjI0NGEzNTM3ZSIsImV4cCI6MTc2MDI5OTQ5N30.y3IQKZYO8YUVxNflduPnTWbZemjS01gYBzva9bVq9iM

------

Pinata Gateway : 

JWT : fAmT_LZdjGohDaAYc6VN5Gu7j0aw5ruBX4R3euGoCoMzHZpgjLyE0T1EzaXbcvBW 


*/

export const apikey = "6f2d662ba2bdb5a26220";
export const apisecret = "b62a35706f31647ff11b02c2071e63ef063c6b8fbb3be4bd41ebf1f244a3537e";
export const gatewayjwt = "fAmT_LZdjGohDaAYc6VN5Gu7j0aw5ruBX4R3euGoCoMzHZpgjLyE0T1EzaXbcvBW";

export const ipfsgateway = "rose-total-dinosaur-689";

export const readHeader = {
    "Content-Type" : "application/json",
}

export const getHeader = {
    headers: {
        pinata_api_key : apikey,
        pinata_secret_api_key : apisecret,
    }
}

export const sendJsonHeader = {
    headers: {
        'Content-Type' : 'application/json',
        pinata_api_key : apikey,
        pinata_secret_api_key : apisecret,
    }
}