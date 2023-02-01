import  React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { ZegoSuperBoardManager } from "zego-superboard-web";
const RoomPage = () => {
    const {roomId}=useParams();

    const myMeeting = async(element)=>{
        const appID= 881880521;
        const serverSecret ="b356e2c8860fb3ca045945f034cbc7e7";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"subbu");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.addPlugins({ZegoSuperBoardManager});
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:`http://localhost:3000/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.GroupCall

            },
            showScreenSharingButton:true
        })
    }
    return <div>
        <div ref={myMeeting}/>
    </div>
    
};
export default RoomPage;