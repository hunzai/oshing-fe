import {
  Card,
  CardActionArea,
  CardContent,
  MenuItem,
  TextField,
  Select
} from "@material-ui/core";

export class Capacity extends React.Component {
  render() {
    return (
      <Card label="Capacity">
        <CardActionArea>
          <h2>Capacity and Occupancy</h2>
        </CardActionArea>
        <CardContent>
          <TextField
            variant="outlined"
            label="total_number_of_rooms"
            type="number"
            margin="normal"
            required
            fullWidth
            name="total_number_of_rooms"
          />
          <TextField
            variant="outlined"
            label="total_number_of_beds"
            type="number"
            margin="normal"
            required
            fullWidth
            name="total_number_of_beds"
          />
          <TextField
            variant="outlined"
            label="number_of_baths"
            type="number"
            margin="normal"
            required
            name="number_of_baths"
          />

          <TextField
            variant="outlined"
            label="land_area (sqm)"
            type="number"
            margin="normal"
            required
            fullWidth
            name="land_area"
          />

          <TextField
            variant="outlined"
            label="garden_area (sqm)"
            type="number"
            margin="normal"
            required
            fullWidth
            name="garden_area"
          />
        </CardContent>
      </Card>
    );
  }
}
