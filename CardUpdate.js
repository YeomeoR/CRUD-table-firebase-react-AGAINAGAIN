import { Card, ListGroup } from 'react-bootstrap';
import Update from './Update';

const CardUpdate = (props) => {
  return (
    <Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
      {/* <Card.Img variant="top" src="../images/apple-touch-icon.png" /> */}
      <Card.Body>
        <Card.Title>Update Learner</Card.Title>
        <Card.Text>
          Use this form to add a update a learner's details.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Update updateClick={props.updateClickHandler} />
      </ListGroup>
    </Card>
  );
};

export default CardUpdate;
