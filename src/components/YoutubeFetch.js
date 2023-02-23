import React, { Component } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Video from './Video';

const API = 'AIzaSyBjz1KrnlXtaREQKbCmTwv-smz5_KpxTTg';
const playlistID = 'PLfWl6eNXF37Kh5hEr2gIKxjJTDSw7iIeb';
const result = 35;

var url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistID}&key=${API}`

export class YoutubeFetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist: [],
      title: [],
      description: [],
      thumbnails: [],
    };
  }

  componentDidMount() {
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('responseJson', responseJson)
        const playlist = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.snippet.resourceId.videoId);
        this.setState({ playlist });
        const description = responseJson.items.map(obj => obj.snippet.description);
        this.setState({ description });
        const thumbnails = responseJson.items.map(obj => obj.snippet.thumbnails.default.url);
        this.setState({ thumbnails });
        const title = responseJson.items.map(obj => obj.snippet.title);
        this.setState({ title });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {this.state.playlist.map((value, index) =>
            <Video
              key={index}
              video={this.state.playlist[index]}
              google={"http://www.google.com/search?q="}
              title={this.state.title[index]}
              description={this.state.description[index]}
            />
          )}
        </Row>
      </Container>
    )
  }
}

export default YoutubeFetch