import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import React, { Component } from 'react';

const client = new W3CWebSocket('ws://localhost:55455');

const gallery = {
  banner: {
    background: '#211C21',
    boxShadow: "0 0 10px 10px #cec7c759",
    color: '#3F8ED8',
    width: '100%',
    fontFamily: 'Georgia',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "black",
    display: "flex",
    height: 100,
    width: 800,
    boxShadow: "0px 0px 15px 10px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};

function Banner () {
  return (
    <div style={gallery.banner}>
      <h1>
        Sextant Dashboard
      </h1>
    </div>
  );
}

class IPaddress extends Component {
  constructor(props) {
      super(props);
      this.state = {
          url: props.url,
          ipAddress: null
      };
  }

  componentDidMount() {
      fetch(this.state.url)
          .then(response => response.json())
          .then(data => this.setState({ ipAddress: data.ip }));
  }

  render() {
      return (
          <>
              {this.state.ipAddress}
          </>
      );
  }
}

class Pylon extends Component {
  constructor(props) {
      super(props);
      this.state = {
          latency: null
      };
  }

  componentDidMount() {
      client.onmessage = (message) => {
          this.setState({
              latency: new Date().getTime() - message.data
          })
      };
  }

  render() {
      return (
          <>
              {this.state.latency}
          </>
      );
  }
}

function Exhibit() {
  return (
    <div>
      <br></br>
      <header style={{textAlign: "center", fontWeight: "bold"}}><u>Tools:</u></header>
      <br></br>
      <Card 
        theme={gallery} 
        service={cardServices.service1}
      />
      <header><br></br></header>
      <Card 
        theme={gallery} 
        service={cardServices.service2}
      />
      <br></br>
      <Card 
        theme={gallery} 
        service={cardServices.service3}
      />
      <br></br>
      <Card 
        theme={gallery} 
        service={cardServices.service4}
      />
      <br></br>
    </div>
  );
}

function Card({ theme, service}) {
  return (
    <div style={theme.container}>
      <span style={theme.profilePicture}>{service.pic}</span>
      <div style={theme.bio}>
        <p style={theme.userName}>{service.name}</p>
        <p>{service.desc}</p>
      </div>
    </div>
  );
}

const cardServices = {
  service1: {
    name: "Public IPv4 Address",
    desc: <IPaddress url='https://api.ipify.org?format=json' />,
    pic: "1",
  },
  service2: {
    name: "Public IPv6 Address",
    desc: <IPaddress url='https://api64.ipify.org/?format=json' />,
    pic: "2"
  },
  service3: {
    name: "Pylon Packet Latency",
    desc: <Pylon />,
    pic: "3"
  },
  service4: {
    name: "(Space for additional tool)",
    desc: "(Add more as necessary)",
    pic: "4"
  },
  service5: {
    name: "Service 5",
    desc: "Description: (placeholder)",
    pic: "5"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Banner />
        <Exhibit />
      </div>
    );
  }
}

export default App;
