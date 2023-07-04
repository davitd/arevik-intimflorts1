import React from 'react';
import img1 from '../../assets/images/image 31.png';
import img2 from '../../assets/images/image 32.png';
import img3 from '../../assets/images/image 30.png';
import img4 from '../../assets/images/image 33.png';
import img5 from '../../assets/images/image 34.png';
import img8 from '../../assets/images/image 35.png';
import img7 from '../../assets/images/image 36.png';
import img9 from '../../assets/images/image 37.png';
import img6 from '../../assets/images/image 38.png';
import img10 from '../../assets/images/image 39.png';

export const Background = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          width: 'inherit',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <img
          src={img1}
          alt={'intim-florts'}
          style={{
            borderBottomRightRadius: 16,
          }}
        />
        <img
          src={img2}
          alt={'intim-florts'}
          style={{
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        />
        <img
          src={img3}
          alt={'intim-florts'}
          style={{
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        />
        <img
          src={img4}
          alt={'intim-florts'}
          style={{
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        />
        <img
          src={img5}
          alt={'intim-florts'}
          style={{
            borderBottomLeftRadius: 16,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={img6}
          alt={'intim-florts'}
          style={{
            borderBottomRightRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <img
          src={img7}
          alt={'intim-florts'}
          style={{
            borderRadius: 16,
          }}
        />
        <img
          src={img8}
          alt={'intim-florts'}
          style={{
            borderRadius: 16,
          }}
        />
        <img
          src={img9}
          alt={'intim-florts'}
          style={{
            borderRadius: 16,
          }}
        />
        <img
          src={img10}
          alt={'intim-florts'}
          style={{
            borderBottomLeftRadius: 16,
            borderTopLeftRadius: 16,
          }}
        />
      </div>
    </div>
  );
};
