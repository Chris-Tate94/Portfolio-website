import React from 'react'
import Resume from '../../assets/DeveloperResume.pdf'

const CTA = () => {
  return (
    <div className="cte">
        <a href= {Resume} download className='btn'>Downlaod Resume</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA