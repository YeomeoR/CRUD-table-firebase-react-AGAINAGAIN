import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
// import firebase from '../firebase';

const Update = (props) => {
  const [updateFirstName, setUpdateFirstName] = useState('');
  const [updateLastName, setUpdateLastName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateScore, setUpdateScore] = useState('');
  //   const [learnerId, setLearnerId] = useState('');

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Name:</InputGroup.Text>
        <FormControl
          placeholder="First"
          value={updateFirstName}
          onChange={(e) => {
            setUpdateFirstName(e.target.value);
          }}
        />
        <FormControl
          placeholder="Last"
          value={updateLastName}
          onChange={(e) => {
            setUpdateLastName(e.target.value);
          }}
        />
      </InputGroup.Prepend>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Email:
          </InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
          aria-label="Email"
          aria-describedby="inputGroup-sizing-default"
          value={updateEmail}
          onChange={(e) => {
            setUpdateEmail(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Score:
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Score"
          aria-describedby="inputGroup-sizing-default"
          value={updateScore}
          onChange={(e) => {
            setUpdateScore(e.target.value);
          }}
        />
      </InputGroup>
      <Button variant="outline-info" onClick={() => props.updateClickHandler()}>
        Update Learner
      </Button>{' '}
    </InputGroup>
  );
};

export default Update;
