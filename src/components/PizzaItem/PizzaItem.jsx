import { useState } from "react";
import { useDispatch } from "react-redux"


function PizzaItem({pizza}){

const dispatch = useDispatch();

const [toggle, setToggle] =useState(true)

    const addToCart = () => {
        console.log('Pizzaitem comp') 
        setToggle(!toggle)
        dispatch({
            type: 'ADD_TO_CART', 
            payload: pizza
        })
    }

    const removeFromCart = () => {
        console.log('Pizzaitem comp') 
        setToggle(!toggle)
        dispatch({
            type: 'REMOVE_FROM_CART', 
            payload: pizza
        })
    }



return(
    <>
     <div class="pizzaDiv" key={pizza.id}> 
                  {pizza.name} <br /> {pizza.description} <br /> {pizza.price} <br /> <img className="pizza" src={pizza.image_path} alt="pic of pizza" /> 

                    {toggle ? 
                   <button onClick ={() => addToCart()}>Add</button>:
                   <button onClick ={() => removeFromCart()}>remove</button>

                    }
                    
                  </div>

                  
    </>
)
}

export default PizzaItem