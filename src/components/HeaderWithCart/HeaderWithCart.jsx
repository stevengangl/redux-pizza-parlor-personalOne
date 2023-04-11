import { useSelector } from "react-redux"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function HeaderWithCart() {
    const cart = useSelector(store => store.cart)

    const calculateTotal = () => {
        let total = 0
        cart.map((item) => {
            total += Number(item.price)
            console.log('looking at item price', total)

        }
        )
        return total
    }

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <svg data-testid="ShoppingCartIcon"></svg>
            <h3>{calculateTotal()}</h3>
            <br />
            <br />
        </header>
    )
}

export default HeaderWithCart