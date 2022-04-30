import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row  order-detail'>
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row '>
              <div className='col-md-4 center'>
                <div
                  className='alert-success order-box'
                  style={{ background: '#b3b8da' }}
                >
                  <i class='fas fa-user'></i>
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Doe</p>
                <p>johndoe@example.com</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div
                  className='alert-success order-box'
                  style={{ background: '#b3b8da' }}
                >
                  <i className='fas fa-truck-moving'></i>
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: Lagos, Nigeria</p>
                <p>Pay method: Paypal</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div
                  className='alert-success order-box'
                  style={{ background: '#b3b8da' }}
                >
                  <i className='fas fa-map-marker-alt'></i>
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row order-products justify-content-between'>
          <div className='col-lg-8'>
            {/* <Message variant="alert-info mt-5">Your cart is empty</Message> */}

            <div className='order-product row'>
              <div className='col-md-3 col-6'>
                <img
                  src='https://media.istockphoto.com/photos/brewing-tea-in-traditional-chinese-teaware-picture-id1026645082?k=20&m=1026645082&s=612x612&w=0&h=VHfZJqUGu4NsvZqVLqb9Gw97L3r1QA-FNCu34l4ahNc='
                  alt='product'
                />
              </div>
              <div className='col-md-5 col-6 d-flex align-items-center'>
                <Link to={'/'}>
                  <h6>Brewing tea in traditional chinese teaware.</h6>
                </Link>
              </div>
              <div className='mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center '>
                <h4>QUANTITY</h4>
                <h6>4</h6>
              </div>
              <div className='mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center '>
                <h4>SUBTOTAL</h4>
                <h6>$1096</h6>
              </div>
            </div>
          </div>
          {/* total */}
          <div className='col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order'>
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$996</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$95</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$1096</td>
                </tr>
              </tbody>
            </table>
            <button type='submit' onClick={placeOrderHandler}>
              <Link to='/order' className='text-white'>
                PLACE ORDER
              </Link>
            </button>
            {/* <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
