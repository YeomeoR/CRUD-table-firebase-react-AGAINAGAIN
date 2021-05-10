import React, { useEffect, useState } from 'react';
import {
  Table,
  Col,
  Container,
  Row,
  // Badge
} from 'react-bootstrap';
import firebase from '../firebase';

const TableData = () => {
  const [learnerData, setLearnerData] = useState('');

  useEffect(() => {
    const firestore = firebase.database().ref('/learners');
    firestore.on('value', (response) => {
      const data = response.val();
      let learnerInfo = [];
      for (let id in data) {
        learnerInfo.push({
          id: id,
          firstName: data[id].firstName,
          lastName: data[id].lastName,
          email: data[id].email,
          score: data[id].score,
        });
      }
      setLearnerData(learnerInfo);
    });
  }, []);


  const updateClickHandler = () => {
    
  }

  //  not grabbing the correct data but the calc seems good
  // const scoreAvg = (score) => score.reduce((a, b) => a + b, 0) / score.length;

  return (
    <>
      {learnerData.length === 0 ? (
        <Container fluid>
          <Row>
            <Col>There is no data to display from this database</Col>
          </Row>
        </Container>
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
              <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>
                {/* this doesn't really work because I'm not grabbing the correct data in the calculation */}
                Score
                {/* <Badge variant="info">{scoreAvg}</Badge> */}
              </th>
            </tr>
          </thead>
          <tbody>
            {learnerData.map((data, index) => {
              return (
                <tr key={index + 1} onClick={()=> {updateClickHandler(data)}}>
                  {/* onClick to populate update form and edit so 
                  need to pass the state/props */}
                  <td>{index + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.score}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TableData;
