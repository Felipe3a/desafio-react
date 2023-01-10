import React from "react";

import {Container,Image, User} from "./styles";

import Pedido from  "../../assets/burger (1) 1.svg";

import ContainerItens from "../../components/containerItens/index";
import H1 from "../../components/Title/index";

import Button from"../../components/buttons"


import Lixo from "../../assets/trash.svg"

function Users() {



    //const users = []
  

return(
<Container>


<Image alt="" src ={Pedido}/>

<ContainerItens>


<H1>Pedidos</H1>






  <User >
  
  <img alt="Lata de lixo" src={Lixo} />
  </User>




<Button isBack ={true}>
   Voltar 
        </Button>


</ContainerItens>







</Container>



)





}



export default Users




