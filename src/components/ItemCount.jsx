import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };

    const restar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    };

    return(
        <div>

            <button onClick={restar}>-</button>

            <span style={{margin: "0 10px"}}>
                {count}
            </span>

            <button onClick={sumar}>+</button>

            <br /><br />

            <button onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>

        </div>
    )
}

export default ItemCount;

//Aca van a ir los useeffect, que se ejecutan una vez(cUANDO SE MONTA UN COMPONENTE, O
// S EA, CUANDO ALGO SE RECARGA Y SE HACE DE NUEVO POR EJEMPLO), por ejemplo cuando alguien compra
//uN PRODUCTO O CUANDO SUMA O RESTA (O SEA, CUANDO SE ACTUALIZA UN PRODUCTO)

//
//Recuerdo armar los productos en un async
//Averiguar como funicona prmise, reject y resolve
//Si yo tengo algo que devuelve un array, como getProductos, al hacer el resolve(productos)
//Voy a obtener la lista de productos
//Then y catch, map (data.map )
//Quiero poner un componenete de suma y resta en la zona del carritro

//Configurar navegabilidad entre componentes usando router instalar reactrouter para usarlo, tambien
//link y useParams para agarrar datos de la url y buscar productos en particular por ejemplo
//Un ejemplo de un componente hijo mandando informacion a un padre, un contador que manda una cantidad al carrito
//Siendo el padre el carrito, es como una division de tareas para no sobrecargar a por ejemplo a un contador 
//Se le dice "delegar" responsabilidad
//Armar un error.jsx para retornarlo en un componente
//Tengo que crear item.jsx y el boton ver mas usarlo con {/* <Link to={'/item/'+prod.id} className='btn btn-dark'>Ver Más</Link> */}
      //  <Link to={`/item/${prod.id}`} className='btn btn-dark'>Ver Más</Link>