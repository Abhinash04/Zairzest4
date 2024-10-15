import React, { useEffect, useState } from 'react'
import CardSection from '../../component/cardsec/CardSection'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import axios from 'axios';
import './Event.scss'

const Event = ({ type }) => {
    const [data, setData] = useState();
    const [userEvents, setUserEvents] = useState()
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        const authToken = sessionStorage.getItem('Auth Token')
        try {
            setLoading(true)
            const response = await Promise.all([
                axios.get('https://web-backend-3bsv.onrender.com/getall/event', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    }
                }),
                axios.get('https://web-backend-3bsv.onrender.com/get/user', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    }
                })
            ])
            const res = response?.map((result, index) => {
                return result.data.events
            })
            setData(res[0])
            setUserEvents(res[1])
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            {loading && <div class="loader-container">
                <div class="loader"></div>
            </div>}
            <CardSection name={type} data={data} userEvents={userEvents} />
            <Footer />
        </>
    )
}

export default Event