import React from 'react'
import './Feed.css'
import Cards from './Cards'

function Feeds() {
    return (
        <div>
            <div className='feeds'>
                <div className='avatar'>
                    <img />
                    <input type='textbox' className='feed-textbox' />
                </div>

                <div className='d-flex mt-1'>
                    <div className='story-button'>
                        <img />
                        story activity
                    </div>
                    <div className='story-button'>
                        <img />
                        photo/video
                    </div>

                    <div className='story-button'>
                        <img />
                        Live video
                    </div>
                </div>
            </div>

            <div>
                {
                    cardsData.map(item => {
                        return (
                            <Cards name={item.name}
                                image={item.imageUrl}
                                isActive={item.isActive}
                                date={item.date}
                                text={item.text}
                                likes={item.likes}
                                comments={item.comments}
                                shares={item.shares}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Feeds


    const cardsData = [
        {
            "imageUrl": null,
            "name": "John Doe",
            "isActive": true,
            "date": "Oct, 1 2023",
            "text": " ipsum dolor sit amet, consectetur aLoremdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
            "likes": 2350,
            "comments": 2343,
            "shares": 567
        },
        {
            "imageUrl": "https://images.pexels.com/photos/2229894/pexels-photo-2229894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "name": "Bob Johnson",
            "isActive": false,
            "date": "Oct, 3 2023",
            "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc.",
            "likes": 800,
            "comments": 750,
            "shares": 100
        },
        {
            "imageUrl": "https://images.pexels.com/photos/3624368/pexels-photo-3624368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "name": "John Doe",
            "isActive": true,
            "date": "Oct, 4 2023",
            "text": "ipsum dolor sit amet, consectetur aLoremdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
            "likes": 2200,
            "comments": 2000,
            "shares": 500
        },
        {
            "imageUrl": "https://images.pexels.com/photos/1337974/pexels-photo-1337974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "name": "Eve Wilson",
            "isActive": true,
            "date": "Oct, 5 2023",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "likes": 1800,
            "comments": 1600,
            "shares": 400
        }


    ]
