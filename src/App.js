import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { Header, PizzaBlock } from './components';
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';
// import Button from './Button'

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })


  }, [])
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),

}

PizzaBlock.defaultProps = {
  name: '---',
  imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
  price: 0,
  types: [],
  sizes: [],
}

export default App;
