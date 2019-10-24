import React from "react";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReactSearchBox from "react-search-box";
import dhon from "../../res/parts/autoComplete";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./theme.css";
import Autosuggest from "react-autosuggest";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import image1 from '../../res/img/thumbs/e4200.jpg';
import { style } from '@material-ui/system';
import { withRouter } from "react-router-dom";
import Typical from 'react-typical';

// Imagine you have a list of languages that you'd like to autosuggest.
const autosuggest = [
  {
    image: '',
    name: "lga775",
    component: "cpu",
    type: "Core 2 Duo",
    id: [1, 2, 3]
  },
  {
    name: "E4200",
    component: "cpu",
    image: image1,
    component: "CPU",
    type: "Core 2 Duo",
    id: [2]
  },
  {
    name: "January 2007",
    image: '',
    name: 'E5200',
    component: 'CPU',
    type: 'i5',
    id: [4]
  },
  {
    image: '',
    name: 'January 2007',
    component: "cpu",
    type: "Core 2 Duo",
    id: [3]
  },
  {
    name: "Core 2 Duo",
    image: '',
    component: "cpu",
    type: "Core 2 Duo",
    id: [3]
  },
  {
    name: "HH80557PG0332M",
    image: '',
    name: 'HH80557PG0332M',
    component: "cpu",
    type: "Core 2 Duo",
    id: [1]
  },
  {
    name: "BX80557E4300",
    image: '',
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
}

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => {
  console.log(suggestion);
  return (
    <div>
      {
        suggestion.id.map((component, i) =>
          <div className="flex-container" key={component.toString()}>
            <div>
              <img src={suggestion.image} width="50" height="50"></img> 
            </div>
            <div className="auto-suggestion-text" key={component.toString()}> 
              {suggestion.component} - {suggestion.type} {suggestion.name}
            </div>
          </div>
          

        )
      }
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

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
          <label className="label">
          <Typical
              steps={['Hello', 500, 'Hello world!', 500, 'Welcome to hackintosh guide', 1000, 'You can validate your device compitability in secs', 2000]}
              loop={Infinity}
              wrapper="p"
              className="dummy"
            />
          </label>
        </div>

        <div className='searchContainerHolder' style={{ margin: "0 7%" }}>
          {/* <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={1}
            className='margin-ato'
            // padding={30}
            // marginTop={0}
            // marginBottom={0}
            // marginLeft={5}
            // marginRight={5}
          >
            <Grid item xs={12} sm={4} lg={4} className='searchDropdown'>
              <div container className='mainDropdown'>
                <Dropdown
                  arrowClassName='myArrowClassName'
                  placeholderClassName='myPlaceholderClassName'
                  className='mainClassName'
                  controlClassName='myClassName'
                  options={options}
                  placeholder='Any Type'
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} lg={4} className='searchBox'>
              <div className='rsb'>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  className='input-width'
                  onChange={(e) => {this.handleChange(e)}}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <Button
                variant='contained'
                className='uploadBtn'
                height={20}
                onClick={() => this.props.history.push("/result")}
              >
                Search
              </Button>
            </Grid>
          </Grid> */}
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            className='margin-ato'
            spacing={2}
          >
            <Grid item xs={12} sm={3} lg={3} className='searchDropdown'>
              <div container className='mainDropdown'>
                <Dropdown
                  arrowClassName='myArrowClassName'
                  placeholderClassName='myPlaceholderClassName'
                  className='mainClassName'
                  controlClassName='myClassName'
                  options={options}
                  placeholder='Any Type'
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} lg={6} className='searchBox'>
              <div className='rsb'>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <Button
                id='btn'
                variant='contained'
                className='uploadBtn'
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
