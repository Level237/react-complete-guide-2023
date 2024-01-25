import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom"

function EventsPage() {
    const data=useLoaderData();
    //if(data.error){
        //return <p>{data.message}</p>
    //}
    const events=data.events;
  return <EventsList events={events} />
}

export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/eventsdd');
    
    if (!response.ok) {
      //return {isError:true,message:"Could not fetch events."};
      throw{message:"Could not fetch events."};
    } else {
      return response;
    }
}