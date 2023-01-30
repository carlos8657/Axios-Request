function ajax(){
    
    let id_buscar = document.getElementById('id').value
    
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url,{
        paramers: {
            id: id_buscar
        }
    })
    .then((res)=>{
        mostrar(res.data)
    }).catch((err)=>{
        console.log("Surgio un error " + err)
    })

    function mostrar(data){

        for(let item of data){
            if(item.id == id_buscar){
                document.getElementById('nombre').value = item.name;
                document.getElementById('nombreUsuario').value = item.username;
                document.getElementById('email').value = item.email;
                document.getElementById('calle').value = item.address.street;
                document.getElementById('numero').value = item.address.suite;
                document.getElementById('ciudad').value = item.address.city;
                
            }
            
        }// for

    }// mostrar
    
}// ajax

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',function(){
    ajax();
})
