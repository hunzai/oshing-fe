import {
  Card,
  CardActionArea,
  CardContent,
  MenuItem,
  TextField,
  Select,
  Grid
} from "@material-ui/core";

export class Address extends React.Component {
  render() {
    return (
      <Card label="Address">
        <CardActionArea>
          <h2>Address</h2>
        </CardActionArea>
        <CardContent>
          <Select
            variant="outlined"
            label="address.district"
            type="text"
            margin="normal"
            required
            fullWidth
            name="address.district"
          >
            {this.props.districts.map(item => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            variant="outlined"
            label="address.province"
            type="text"
            label="address.province"
            margin="normal"
            required
            fullWidth
            name="address.province"
          />
          <TextField
            variant="outlined"
            label="address.village"
            type="text"
            label="address.village"
            margin="normal"
            required
            fullWidth
            name="address.village"
          />
          <TextField
            variant="outlined"
            label="address.street"
            type="text"
            label="address.street"
            margin="normal"
            required
            fullWidth
            name="address.street"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                variant="outlined"
                label="address.lat"
                type="text"
                label="address.lat"
                margin="normal"
                required
                name="address.lat"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                variant="outlined"
                label="address.lng"
                type="text"
                label="address.lng"
                margin="normal"
                required
                name="address.lng"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              variant="outlined"
              label="address.alt"
              type="text"
              label="address.alt"
              margin="normal"
              required
              name="address.alt"
            />
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
