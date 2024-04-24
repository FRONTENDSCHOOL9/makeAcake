import propTypes from "prop-types" 
import {StyledList} from "@pages/Main/styles/MainStyles";
import Card from "@components/Card/Card.jsx";


export default function MainSection({sectionName, data}) {
    return (
        <StyledList>
          <h3>{sectionName}</h3>
          <ul className="card-container">
            { data.map((item) => <Card key={item._id} item={item}/>) }
          </ul>
        </StyledList>
    )
}

MainSection.propTypes = {
  sectionName: propTypes.node,
  data: propTypes.array
}