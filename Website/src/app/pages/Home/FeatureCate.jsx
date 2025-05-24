import React from 'react';
import '../../globals.css';


function FeatureCate({image,text}) {
    
    return (
        <>
            <div className='col px-sm-1 px-3 my-xl-0 my-2'>
                <div className='feature_category_image'>
                    <img src={image} />
                </div>
                <div className='feature_category_text'>
                    {text}
                </div>
            </div>

        </>
    )
}

export default FeatureCate