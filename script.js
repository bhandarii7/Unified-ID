const serverUrl = "https://et3ubl5ljr9j.usemoralis.com:2053/server";
const appId = "DvZ9ilkVyRPzIbi2wn16BUPxSdi7XZM3bQ6VB1Rf";
Moralis.start({ serverUrl, appId });

//variables
const loginBtn = document.getElementById('login-btn');
const fileInput = document.getElementById('fileInput');

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  if(user)
  {
      window.location.href='login.html';
  }
}


async function uploadImage(){
    const data = fileInput.files[0];
    const file = new Moralis.File(data.name, data)
    await file.saveIPFS();
    console.log(file.ipfs(), file.hash());
    return file.ipfs();
    // const image = fileInput.files[0];
    // const file = new Moralis.File("image.png", {base64 : image });
    // await file.saveIPFS();
}

async function uploadMetaData(imageUrl){

    const name = document.getElementById('name').value;
    const file = new Moralis.File("file.json", {base64 : btoa(JSON.stringify(object))});
    await file.saveIPFS();

}


loginBtn.addEventListener('click',login);