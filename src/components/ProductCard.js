import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './ProductCard.css'

export default function ProductCard() {

  const component = {
    title: 'Gabrielle Essence Eau De Parfum',
    description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    price: 169.99,
    offValue: 0.11765
  } 

    return (
        <Container className='product-card' fluid>
          <Row md={12}>
            <Col lg={6} md={6} sm={12} className='col-image'>
                <div className='image-background' ></div>               
            </Col>
            
            <Col lg={6} md={6} sm={12}  className='section'>
                <p className='font-monospace fs-3 text-muted'>Preview</p>
                <h1>{component.title}</h1>
                <span className=' text-muted'>{component.description}</span>
                <div className='prices'>
                  <p className='current-price text-success'>{`$${component.price - (component.price*component.offValue).toFixed(2)}`}</p>
                  <p className='text-decoration-line-through text-muted'>{`$${component.price}`}</p>
                </div>
                <div>
                  <Button variant='success' className='w-100'>
                    <FontAwesomeIcon icon={faCartShopping}/> &nbsp;
                    Add to cart</Button>
                </div>
            </Col>
          </Row>
        </Container>
    )
};