export async function getData(data){
  const options = {
    method: 'Get',
    // headers: ('content-type': 'application/json'),
    // body: JSON.stringify({data})
  }
  const fetchURL = 'https://randomuser.me/api/?inc=name,email,phone,picture&results=10'
  const response = await fetch(fetchURL, {options}).then(res=>res.json()).catch(err=>console.log('you had an error!>>>>',err))
  return response
}
