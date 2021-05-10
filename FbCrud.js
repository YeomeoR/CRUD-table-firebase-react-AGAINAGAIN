import CardAdd from './components/CardAdd';
import CardUpdate from './components/CardUpdate';
import TableData from './components/TableData';
import { useState } from 'react';
import firebase from './firebase';

const FbCrud = () => {
  const [updateFirstName, setUpdateFirstName] = useState('');
  const [updateLastName, setUpdateLastName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateScore, setUpdateScore] = useState('');
  const [learnerId, setLearnerId] = useState('');

  const updateLearnerHandler = () => {
    const firestore = firebase.database().ref('/learners'.child(learnerId));
    firestore.update({
      firstName: updateFirstName,
      lastName: updateLastName,
      email: updateEmail,
      score: updateScore,
    });
    setUpdateFirstName('');
    setUpdateLastName('');
    setUpdateEmail('');
    setUpdateScore('');
  };

  // this needs to go in TableData so that the 'data' can be passed back down from FbCrud as a prop
  const updateClickHandler = (data) => {
    setUpdateFirstName(data.firstName);
    setUpdateLastName(data.lastName);
    setUpdateEmail(data.email);
    setUpdateScore(data.score);
    setLearnerId(data.id);
  };
  return (
    <>
      <div className="sidebyside">
        <CardAdd />
        <CardUpdate
          update={updateLearnerHandler}
          updateClick={updateClickHandler}
        />
      </div>
      <div>
              <TableData
                //   updateClick={updateClickHandler}
              />
      </div>
    </>
  );
};

export default FbCrud;
