// Dependencies
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// Resources
import { NavLink } from 'reactstrap';
import Fetch from '../../utils/Fetch';

const ProductList = () => {
  const { path } = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      const data = await Fetch.Product.ReadAll(controller.signal);
      if (data instanceof SyntaxError || data instanceof TypeError) {
        setProducts([]);
        setLoading(false);
      } else if (!controller.signal.aborted) {
        setProducts(data);
        setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      controller.abort();
    };
  }, []);

  const renderProducts = (_products) => (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {_products.length > 0 && _products.map((_product) => (
          <tr key={_product.id}>
            <td>{_product.name}</td>
            <td>{_product.description}</td>
            <td>{_product.price}</td>
            <td><NavLink tag={Link} to={`${path}/${_product.id}`}>Ver</NavLink></td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <hgroup>
        <h1>Productos</h1>
      </hgroup>
      {
        loading
          ? <p><em>Cargando...</em></p>
          : renderProducts(products)
      }
    </div>
  );
};

export default ProductList;
