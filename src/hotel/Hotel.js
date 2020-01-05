import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HotelIcon from "@material-ui/icons/Hotel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import { Address } from "./Address";
import Info from "./Info";
import { Capacity } from "./Capacity";

export default class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      districts: [
        { id: "ajdjdklsjdfksdjf", name: "hunza" },
        { id: "ajdjdklsjdfksdjf", name: "gilgit" }
      ],
      files: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.classes = makeStyles(theme => ({
      paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
      },
      submit: {
        margin: theme.spacing(3, 0, 2)
      }
    }));
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/residences", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        title: this.state.title,
        description: this.state.description
      })
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <Container fullWidth>
        <CssBaseline />
        <div>
          <Avatar>
            <HotelIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Hotel
          </Typography>

          <form
            noValidate
            method="POST"
            id="hotelForm"
            onSubmit={this.handleSubmit}
            className={this.classes.form}
          >
            <Info></Info>
            <Divider component="hr" variant="fullWidth" />
            <Address districts={this.state.districts} />
            <Divider component="hr" variant="fullWidth" />
            <Capacity></Capacity>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Add
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
