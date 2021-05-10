import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import firebase from '../firebase';

const Update = () => {
  const [addFirstName, setAddFirstName] = useState('');
  const [addLastName, setAddLastName] = useState('');
  const [addEmail, setAddEmail] = useState('');
  const [addScore, setAddScore] = useState('');

  const addLearnerHandler = () => {
    const firestore = firebase.database().ref('/learners');
    let data = {
      firstName: addFirstName,
      lastName: addLastName,
      email: addEmail,
      score: addScore,
    };
    firestore.push(data);
    setAddFirstName('');
    setAddLastName('');
    setAddEmail('');
    setAddScore('');
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Name:</InputGroup.Text>
        <FormControl
          placeholder="First"
          value={addFirstName}
          onChange={(e) => {
            setAddFirstName(e.target.value);
          }}
        />
        <FormControl
          placeholder="Last"
          value={addLastName}
          onChange={(e) => {
            setAddLastName(e.target.value);
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
          value={addEmail}
          onChange={(e) => {
            setAddEmail(e.target.value);
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
          value={addScore}
          onChange={(e) => {
            setAddScore(e.target.value);
          }}
        />
      </InputGroup>
      <Button
        variant="outline-info"
        onClick={() => {
          addLearnerHandler();
        }}
      >
        Add Learner
      </Button>{' '}
    </InputGroup>
  );
};

export default Update;
