import { Component } from "react";
import intro from "../intro.png";
import introLeft from "../intro-left.png";
import "./index.css";
import { Chrono } from "react-chrono";

  const items = [
    {
      title: "Multi-source data",
      cardTitle: "Multi-source data",
      cardSubtitle: "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
    },
    {
      title: "Ready to Go Algos",
      cardTitle: "Ready to Go Algos",
      cardSubtitle: "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
    },
    {
      title: "Internal capability building",
      cardTitle: "Internal capability building",
      cardSubtitle: "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
    },
    {
      title: "Stakeholder alignment",
      cardTitle: "Stakeholder alignment",
      cardSubtitle: "No black boxes. Stakeholders understand the 'how', 'so what', and 'now what', leading to clear decision-making trade-offs.",
    },
    {
      title: "Continuous engagement",
      cardTitle: "Continuous engagement",
      cardSubtitle: "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
    },
  ];

class Home extends Component {
    state = {heading: ''}

    componentDidMount() {
      this.getHeadnig()
    }
  
    getHeadnig = async () => {
      const response = await fetch('http://localhost:8080/abc/1')
      const data = await response.json()
      
      this.setState({heading: data.heading})
    }
  
    render() {
      const {heading} = this.state
  
      return (
        <div className="container">
          <nav className="navbar">
            <p>About</p>
            <p>Services ▽</p>
          </nav>
          <div className="head-container">
          <img src={introLeft} alt="intro" className="image1" /> 
            <div>
              <h1>{heading}</h1>
              <p>Powerful Al solutions that go beyond mere data sorting and exploration. Use our array of Al enabled solutions that understand your business and recommend the optimal way forward.</p>
              <button type="button" className="get-started">Get Started</button>
            </div>
            <img src={intro} alt="intro" className="image" /> 
          </div>
          <div style={{ width: "100%", height: "500px" }} className="chrono-container">
            <Chrono
              items={items}
              mode="HORIZONTAL"
              hideControls
              disableNavOnKey 
              theme={{
                primary:  "#41C185",
                secondary: "#ffffff",
                cardBgColor: "#fff",
                cardForeColor: "#000",
                titleColor: "#000",
                titleColorActive: "#f5a623",
              }}
            />
          </div>
        </div>
      )
    }
  }
  
  export default Home
  