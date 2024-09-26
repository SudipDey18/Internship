import './Card.css'

function Card({about}) {
    return(
        <>
        <div id='main'>
            <div id='sub1'>
                <img src={about.img}/>
            </div>
            <div id='sub2'>
                <p id='name'>Name:  <span>{about.Name}</span></p><br/>
                <p id='age'>Age   <span>{about.age}</span></p><br/>
                <p id='gmail'>Email: <a href={`mailto:${about.gmail}`}>{about.gmail}</a></p>
            </div>
        </div>
        </>
    )
}

export default Card