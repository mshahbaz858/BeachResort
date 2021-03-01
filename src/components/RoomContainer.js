import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading';


function RoomContainer({context}){
    const {Loading, sortedRooms, rooms}= context;
    if(Loading){
        return <Loading/>
    }
    return(
        <div> 
            <RoomsFilter rooms= {rooms} />
            <RoomsList rooms = {sortedRooms} />

        </div>
    );
}
export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList'
// export default function RoomsContainer() {
//     return (
//         <div>
//             hello from rooms container
//             <RoomsFilter/>
//             <RoomsList/>

//         </div>
//     )
// }
