// Dependencies
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

// Resources
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import Fetch from '../../utils/Fetch';

const Product = () => {
  const { productId } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    id: 0,
    code: 'prueba',
    name: 'nombre de prueba',
    description: 'descripcion de prueba',
    price: 'precio de prueba',
  });

  useEffect(() => {
    const controller = new AbortController();
    const fetchProduct = async (id, h) => {
      const data = await Fetch.Product.ReadById(productId);
      if (data instanceof SyntaxError || data instanceof TypeError) {
        h.goBack();
      } else if (!controller.signal.aborted) {
        setProduct(data);
        setLoading(false);
      }
    };

    fetchProduct(productId, history);
    return () => {
      controller.abort();
    };
  }, [productId, history]);

  const renderProduct = (_product) => (
    <Form>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          disabled
          id="name"
          name="name"
          type="text"
          value={_product.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="descripcion">Descripcion</Label>
        <Input
          disabled
          id="descripcion"
          name="descripcion"
          type="text"
          value={_product.description}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Precio</Label>
        <Input
          disabled
          id="price"
          name="price"
          type="text"
          value={_product.price}
        />
      </FormGroup>
      <Button
        disabled={loading}
        color="danger"
        onClick={() => history.goBack()}
      >
        Atras
      </Button>
    </Form>
  );

  return (
    <>
      <hgroup>
        <h1>
          Producto
          {' '}
          {productId}
        </h1>
      </hgroup>
      {
        loading
          ? <p><em>Cargando...</em></p>
          : renderProduct(product)
      }
    </>
  );
};

export default Product;
