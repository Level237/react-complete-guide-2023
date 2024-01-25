import EventsList from "../components/EventsList"

const EVENTS=[{
    id:"e1",
    title:"event1",
    date:"12-05-2023"
},{
    id:"e2",
    title:"event2",
    date:"12-05-2023"
},{
    id:"e3",
    title:"event3",
    date:"12-05-2023"
},{
    id:"e4",
    title:"event4",
    date:"12-05-2023"
}]
const EventsPage=()=>{


    return (
        <>
        <EventsList events={EVENTS}/>
        </>
    )
}

export default EventsPage