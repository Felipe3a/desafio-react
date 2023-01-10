import React from "react";





import {Container,Image, InputLabel,Input} from "./styles";

import Burger from  "../../assets/burger 1.svg";

import ContainerItens from "../../components/containerItens/index";
import H1 from "../../components/Title/index";

import Button from"../../components/buttons"





function App(){




return(
<Container>


<Image alt="" src ={Burger}/>

<ContainerItens>


<H1>Faça seu pedido!</H1>

<InputLabel>Pedido</InputLabel>
<Input ></Input>


<InputLabel>Nome do cliente</InputLabel>
<Input></Input>


<Button>Novo  Pedido</Button>

</ContainerItens>







</Container>








)





}



export default App