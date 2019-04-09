import React, { Component } from 'react';

import starIcon from './star-outline.svg';
import starFilledIcon from './star-outline-filled.svg';

class RatingStar extends Component {
  render = () => {
    let dimension = '24px';
    let star = [];
    let rating = parseFloat(this.props.rating);
    for (let i = 1; i < 6; i++) {
      if (i <= rating) {
        star.push(
          <div
            className='col'
            key={i}
            style={{
              height: dimension,
              width: dimension,
              paddingLeft: '0'
            }}
          >
            <img src={starFilledIcon} width={dimension} alt='star filled' />
          </div>
        );
      } else if (rating - i <= -1) {
        star.push(
          <div
            className='col'
            key={i}
            style={{
              height: dimension,
              width: dimension,
              paddingLeft: '0'
            }}
          >
            <img src={starIcon} width={dimension} alt='star' />
          </div>
        );
      } else {
        star.push(
          <div
            className='col'
            key={i + 100}
            style={{
              paddingLeft: '0'
            }}
          >
            <div>
              <img
                src={starFilledIcon}
                width={dimension}
                alt='star filled'
                style={{
                  clipPath: `inset(0 ${((rating - i) * -100).toFixed(2)}% 0 0)`
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                bottom: '50%'
              }}
            >
              <img
                src={starIcon}
                width={dimension}
                alt='star'
                style={{
                  clipPath: `inset(0 0 0 ${((rating - i + 1) * 100).toFixed(
                    2
                  )}%)`
                }}
              />
            </div>
          </div>
        );
      }
    }

    return <span className='row'>{star}</span>;
  };
}

export default RatingStar;
