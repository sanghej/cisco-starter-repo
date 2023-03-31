import './App.css';

const gallery = {
  banner: {
    background: '#211C21',
    boxShadow: "0 0 10px 10px #cec7c759",
    color: '#f4b393',
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "black",
    display: "flex",
    height: 100,
    width: 400,
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

const cardServices = {
  service1: {
    name: "Service 1",
    desc: "Description: (placeholder)",
    pic: "S"
  },
  service2: {
    name: "Service 2",
    desc: "Description: (placeholder)",
    pic: "S"
  },
  service3: {
    name: "Service 3",
    desc: "Description: (placeholder)",
    pic: "S"
  },
  service4: {
    name: "Service 4",
    desc: "Description: (placeholder)",
    pic: "S"
  },
  service5: {
    name: "Service 5",
    desc: "Description: (placeholder)",
    pic: "S"
  }
};

function Banner() {
  return (
    <div style={gallery.banner}>
      <h1>
        Sextant Dashboard
      </h1>
    </div>
  );
}

function Exhibit() {
  return (
    <div>
      <br></br>
      <header style={{textAlign: "center", fontWeight: "bold"}}><u>Functions:</u></header>
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

function App() {
  return (
    <div className="App-header">
      <Banner />
      <Exhibit />
    </div>
  );
}

export default App;
