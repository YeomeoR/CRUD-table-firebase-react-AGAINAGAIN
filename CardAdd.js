import { Card, ListGroup } from 'react-bootstrap';
import Add from './Add';

const CardAdd = () => {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="../images/apple-touch-icon.png" /> */}
      <Card.Body>
        <Card.Title>Add a Learner</Card.Title>
        <Card.Text>
          Use this form to add a new learner to the database.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Add />
      </ListGroup>
    </Card>
  );
};

export default CardAdd;
