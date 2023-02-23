import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import React from 'react'

function Video(props) {
  return (
    <Container fluid>
      <Row className='align-items-center mt-5 mb-5' >
        <Col className='shadow p-3 mb-5 rounded' sm={{ span: 4, offset: 2 }} style={{ backgroundColor: 'black' }}>
          <ReactPlayer
            controls
            url={props.video}
            // height="75%"
            playing={false}
            width="100%"
          />
        </Col>
        <Col className='shadow p-3 mb-5 rounded' sm={{ offset: 1, span: 3 }}>
          <h1>{props.title}</h1>
          <p>Sheets here <a href={props.google + props.title + " piano sheet music"} target="_blank" rel="noreferrer" >{props.title}</a></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Video