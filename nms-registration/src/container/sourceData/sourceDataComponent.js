import React from "react";
import {useSelector, useDispatch} from 'react-redux';
// import {gender} from '../../config/constants'
import { updateUser } from "../../redux/API/apiService";
import { StaticData } from "../../data/playerList";
import {addPlayer} from '../../redux/actions/players';

const SourceDataComponent = () =>{
    const playersState = useSelector((state)=> state.players)
    const dispatch = useDispatch()
    // const update = () =>{
        
    //     let playerlist = playersState.playerList
    //     let selectedPlayer = {}
    //     playerlist.forEach((player) =>{
    //         if(player.id === "k7lIJO3PlfIJpeWwVqzq"){
    //             player.gender = 'FEMALE';
    //             player.selectedEvents = [
    //                 {
    //                     eventName: "50M",
    //                     eventId:"U_10_G_EVENTS_1",
    //                     selection: false,
    //                     disable:false
    //                 },
    //                 {
    //                     eventName: "80M",
    //                     eventId:"U_10_G_EVENTS_2",
    //                     selection: false,
    //                     disable:false
    //                 }
    //               ];
    //               player.playerCategory = "U_10_G"
    //             selectedPlayer = player
    //         }
    //     })
    //     console.log('selected player', selectedPlayer);
    //     updateUser(selectedPlayer);

    // }
    const addDataToDB = () =>{
        console.log('json Data : ', StaticData)
        StaticData.map((data, index)=>{
           setTimeout(()=>{
               dispatch(addPlayer(data))
           },100)
           console.log('index:', index, data)
       })

   }
    return(
        <div>
            SourceDataComponent
            <div>
                <button onClick={()=>{addDataToDB()}}>
                    Add To DB
                </button>
            </div>
            {/* <div>
                <button onClick={()=>{update()}}>update with data</button>
            </div> */}
            <div>
                {JSON.stringify(playersState.playerList)}
            </div>
        </div>
    )
}

export default SourceDataComponent