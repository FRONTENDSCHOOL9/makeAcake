import {StyledList} from "@pages/Main/styles/MainStyles";
import Card from "@components/Card/Card.jsx";

export default function MainSection({children, cakes}) {
    const location ="main"
    return (
        <StyledList>
          <h3>{children}</h3>
          <ul className="card-container">
            { cakes.slice(0,6).map(cake => (
                <Card key={cake.name} cake={cake} location={location}/>
            )) }
          </ul>
        </StyledList>
    )
}