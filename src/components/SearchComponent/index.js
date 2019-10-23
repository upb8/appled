import React from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./theme.css";
import Autosuggest from "react-autosuggest";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

//importinng the images for showing in the auto-suggestions
import image1 from "../../res/img/thumbs/e4200.jpg";

// Imagine you have a list of languages that you'd like to autosuggest.
const autosuggest = [
  {
    image: "",
    name: "lga775",
    component: "cpu",
    type: "Core 2 Duo",
    id: [1, 2, 3]
  },
  {
    image: image1,
    name: "E4200",
    component: "CPU",
    type: "Core 2 Duo",
    id: [2]
  },
  {
    image: "",
    name: "E5200",
    component: "CPU",
    type: "i5",
    id: [4]
  },
  {
    image: "",
    name: "January 2007",
    component: "cpu",
    type: "Core 2 Duo",
    id: [3]
  },
  {
    image: "",
    name: "Core 2 Duo",
    component: "cpu",
    type: "Core 2 Duo",
    id: [3]
  },
  {
    image: "",
    name: "HH80557PG0332M",
    component: "cpu",
    type: "Core 2 Duo",
    id: [1]
  },
  {
    image: "",
    name: "BX80557E4300",
    component: "cpu",
    type: "Core 2 Duo",
    id: [1]
  }
];

const options = ["one", "two", "two", "three"];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : autosuggest.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
  return suggestion.type + " " + suggestion.name;
};

//this is the render function for suggestion
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => {
  console.log(suggestion);
  return (
    <div>
      {suggestion.id.map((component, i) => (
        <div className="renderSuggestion" key={component.toString()}>
          <div>
            <img src={suggestion.image} width="50" height="50"></img>
          </div>
          <div className="auto-suggestion-text" key={component.toString()}>
            {suggestion.component} - {suggestion.type} {suggestion.name}
          </div>
        </div>
      ))}
    </div>
  );
};

class Search extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  handleChange(e) {
    console.log(e.target.value);
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    console.log(this.props);

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Enter Part Name",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div>
        <div className="labelMain">
          <label className="label">Hackintosh guide (Dummy text)</label>
        </div>

        <div className="searchContainerHolder">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={3} lg={3} className="searchDropdown">
              <Dropdown
                arrowClassName="myArrowClassName"
                placeholderClassName="myPlaceholderClassName"
                className="mainClassName"
                controlClassName="myClassName"
                options={options}
                placeholder="Type"
              />
            </Grid>
            <Grid item xs={12} sm={7} lg={7} className="searchBox">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </Grid>
            <Grid item xs={12} sm={2} lg={2}>
              <Button
                id="btn"
                variant="contained"
                className="uploadBtn"
                onClick={() => this.props.history.push("/result")}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
