import {
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Input,
  OutlinedInput,
  CardHeader
} from "@material-ui/core";

export default class Info extends React.Component {
  render() {
    return (
      <Card label="Info">
        <CardActionArea>
          <h2>Basic Info</h2>
        </CardActionArea>
        <CardContent>
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
        </CardContent>
      </Card>
    );
  }
}
