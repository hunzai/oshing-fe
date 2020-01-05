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
import { TextareaAutosize } from "@material-ui/core";

export default class Hotel extends React.Component {
  state = { name: "" };
  constructor(props) {
    super(props);
    this.state = { open: true };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({ clicked: true });
  // }

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.name);
    fetch("http://localhost:3000/residences", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.name })
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
      <Container maxWidth="lg" variant="h5">
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
            // action="http://localhost:3000/residences"
            onSubmit={this.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={event => this.setState({ name: event.target.value })}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="title"
              label="title"
              type="text"
              id="title"
            />
            <TextField
              name="image_url"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="description"
              type="text"
              id="image_url"
              name="image_url"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="description"
              type="text"
              id="description"
              name="description"
            />

            <TextField
              variant="outlined"
              label="description"
              type="text"
              margin="normal"
              required
              fullWidth
              name="house_rules"
            />
            <TextField
              variant="outlined"
              label="house_rules"
              type="text"
              margin="normal"
              required
              fullWidth
              name="cancellation_rules"
            />
            <TextField
              variant="outlined"
              label="cancellation_rules"
              type="text"
              margin="normal"
              required
              fullWidth
              name="accessibility_info"
            />
            <TextField
              variant="outlined"
              label="accessibility_info"
              type="text"
              margin="normal"
              required
              fullWidth
              name="safety_and_security"
            />
            <TextField
              variant="outlined"
              label="safety_and_security"
              type="text"
              margin="normal"
              required
              fullWidth
              name="address.id"
            />
            <TextField
              variant="outlined"
              label="address.id"
              type="text"
              margin="normal"
              required
              fullWidth
              name="address.residence_id"
            />
            <TextField
              variant="outlined"
              label="address.residence_id"
              type="text"
              margin="normal"
              required
              fullWidth
              name="address.province"
            />
            <TextField
              variant="outlined"
              label="address.province"
              type="text"
              margin="normal"
              label="address.village"
              required
              fullWidth
              name="address.village"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Add
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
