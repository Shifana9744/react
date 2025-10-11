import React from 'react'
import Heading from '../Heading/Heading'
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import Looks4RoundedIcon from '@mui/icons-material/Looks4Rounded';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

const Process = () => {

  const renderSteps = steps.map((item) => (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" key={item.id}>
      {/* Number Icon */}
      <div
        className="number-icon-container mb-3 mx-auto"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          backgroundColor: 'rgb(65, 65, 65)',
          borderRadius: '50%',
          position: 'relative'
        }}
      >
        <span style={{ fontSize: '1.8rem', color: 'white',fontWeight:'bold' }}>{item.number}</span>
      </div>

      {/* Icon, Title, and Paragraph in Flex-Row */}
      <div className="d-flex align-items-center">
        <div
          className="me-3 rounded-circle w-25 text-end"
          style={{ fontSize: '2.5rem', color: 'orange'}}
        >
          {item.icon}
        </div>
        <div className='w-75'>
          <h4
            className="mb-1"
            style={{ fontSize: '1.1rem', color: 'orange' }}
          >
            {item.title}
          </h4>
          <p
            className="mb-0 text-muted"
            style={{ fontSize: '0.9rem' }}
          >
            {item.para}
          </p>
        </div>
      </div>
    </div>
  ));

  return (

    <section className="py-5" id='process-section'>
      <style>
        {`
          .number-icon-container::before {
            content: '';
            position: absolute;
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;
            border: 2px dotted #000;
            border-radius: 50%;
          }
        `}
      </style>
      <div className="container px-3" style={{ maxWidth: '1400px' }}>

        <div className='w-75 m-5 mx-auto' style={{height:'2px',backgroundColor:'orange'}}></div>
        <Heading highlight="Our" heading="Process" />
      </div>

      <div className="container px-3" style={{ maxWidth: '1400px' }}>
        <div className="row g-3 mt-5">{renderSteps}</div>
      </div>
    </section>

  )
}

export default Process

const steps = [
  {
    id: 1,
    number: 1,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <GrassRoundedIcon />
  },{
    id: 2,
    number: 2,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <FactoryRoundedIcon />
  },{
    id: 3,
    number: 3,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <VerifiedRoundedIcon />
  },{
    id: 4,
    number: 4,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <LocalShippingRoundedIcon />
  }
]