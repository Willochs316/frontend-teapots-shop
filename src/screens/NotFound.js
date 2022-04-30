import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row justify-content-center align-items-center'>
          <h4 className='text-center mb-2 mb-sm-5'>Page Not Found</h4>
          <img
            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
            src='/images/not-found.png'
            alt='Not-found'
          />
          <button
            className=''
            style={{
              backgroundColor: '#11418B',
              padding: '12px',
              marginTop: '48px',
              width: '324px',
              height: '50px',
              borderRadius: '4px',
              border: '0',
              color: '#3046A5',
            }}
          >
            <Link to='/' className='text-white text-decoration-none'>
              Home page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
