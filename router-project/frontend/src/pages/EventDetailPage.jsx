import {useLoaderData,json } from "react-router-dom";
import EventItem from "../components/EventItem"
const EventDetailPage=()=>{

    const data=useLoaderData()
    
    return (
        <EventItem event={data.event}/>
    )
}

export default EventDetailPage;
export  async  function loader({request,params}){
    const id=params.id;
    const response = await fetch('http://localhost:8080/events/'+id);
    
    if (!response.ok) {
        //return {isError:true,message:"Could not fetch events."};
        //throw new Response(JSON.stringify({message:"Could not fetch events."}),{status:500})
        throw json({message:"Could not fetch details for selected event."},{
          status:500
        });
        console.log("le")
      } else {
        return response;
      }
}