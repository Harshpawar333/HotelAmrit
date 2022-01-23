import React from 'react';
import RoomsFilter from '../components/RoomsFilter';
import RoomsList from '../components/RoomsList';
import Loading from '../components/Loading';
import { useState } from 'react';

// Use Context in functional component with HOC
const RoomsContainer = ({}) => {

    const [loading, setLoading] = useState(true);

    // 2000ms 2s
    setTimeout(function() {
        setLoading(false);
    }, 2000);

    if (loading) {
        return <Loading />
    }
    return (
        <>
        hi this is my room list data 
            {/* <RoomsFilter rooms={rooms} /> */}
            {/* <RoomsList rooms={sortedRooms}/>  */}
        </>
    );
}

export default RoomsContainer;

