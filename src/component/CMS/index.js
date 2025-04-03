import { Component } from "react";
import "./index.css";

class CMS extends Component {
  state = { heading: "" };

  componentDidMount() {
    this.getHeading();
  }

  getHeading = async () => {
    try {
      const response = await fetch("http://localhost:8080/abc/1");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      this.setState({ heading: data.heading });
    } catch (error) {
      console.error("Error fetching heading:", error);
    }
  };

  onChangeHeading = (event) => {
    this.setState({ heading: event.target.value });
  };

  onEditHeading = async () => {
    try {
      const url = "http://localhost:8080/abc/1";
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ heading: this.state.heading }),
      });

      if (!response.ok) throw new Error("Failed to update");

      const data = await response.json();
      alert("Heading changed Successfully");
      this.setState({ heading: data.heading });
    } catch (error) {
      console.error("Error updating heading:", error);
    }
  };

  render() {
    const { heading } = this.state;

    return (
      <div className="cms-container">
        <div>
            <div className="cms-textarea-container">
              <button type="button" className="cms-buttons">Heading</button>
              <textarea className="cms-textarea" onChange={this.onChangeHeading} value={heading} rows="5" />
            </div>
          <div className="buttons">
            <button type="button" className="cms-buttons" onClick={this.onEditHeading}>
              Edit
            </button>
            <button type="button" className="cms-buttons" onClick={this.onEditHeading}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CMS;
