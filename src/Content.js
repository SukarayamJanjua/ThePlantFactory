import React from 'react'
import './Content.css'

function Content({ title, image }) {
    return (
        <div className='content'>
            <div className="content__background">
                <img src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg" alt="" />
                <div className="content__title">
                    <p>
                        Buy plants from your nearest nursery & stores online</p>
                </div>
            </div>
            <div className="content__category">

                <div className="content__box">
                    <img src="https://www.fnp.com/images/pr/l/v20210712181941/2-layer-bamboo-plant-in-green-melamine-pot_1.jpg" alt="" />
                    <p>Desktop Plant</p>
                </div>
                <div className="content__box">
                    <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-3-layer-lucky-bamboo-plant-in-a-bowl-with-pebbles-1_512x683.jpg?v=1637214561" alt="" />
                    <p>Bamboo Plant</p>
                </div>
                <div className="content__box">
                    <img src="https://m.media-amazon.com/images/I/515pRZ7nZ1L.jpg" alt="" />
                    <p>Decorative Plants</p>
                </div>
                <div className="content__box">
                    <img src="https://urbano.in/wp-content/uploads/2020/11/WhatsApp-Image-2022-07-22-at-3.25.31-PM.jpeg" alt="" />
                    <p>Money Plant</p>
                </div>
            </div>
            <div className="plant__type">
                <div className="plant__box">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bloomscape-new-decor-group-shot-vertical-scaled-1668565407.jpg" alt="" />
                    <p className='plant__box__title'>Indoor Plants</p>
                    <p className='plant__box__desc'>"Bring Nature to your home"</p>
                </div>
                <div className="plant__box">
                    <img src="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-evergreen-plants-for-terrace-garden-16968851325068.jpg?v=1634219247" alt="" />
                    <p className='plant__box__title'>Outdoor Plants</p>
                    <p className='plant__box__desc'>"Decor your outdoor"</p>
                </div>
            </div>
        </div>
    )
}

export default Content
