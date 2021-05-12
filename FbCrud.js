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
    const firestore = firebase.database().ref('/learners').child(learnerId);
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
        //   updateLearnerHandler={updateLearnerHandler}
          updateClickHandler={updateClickHandler}
        />
      </div>
      <div>
        <TableData
            updateLearnerHandler={updateLearnerHandler}
        //   updateClickHandler={updateClickHandler}
        />
      </div>
    </>
  );
};

export default FbCrud;
