import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fruit: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <Container sx={{ margin: "auto", textAlign: "center" }}>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Enter your name and favourite fruit:
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="fruit-label">Choose a fruit</InputLabel>
          <Select
            labelId="fruit-label"
            id="fruit"
            name="fruit"
            value={formData.fruit}
            onChange={handleChange}
            label="Fruit"
          >
            <MenuItem value="Apple">Apple</MenuItem>
            <MenuItem value="Banana">Banana</MenuItem>
            <MenuItem value="Cherry">Cherry</MenuItem>
            <MenuItem value="Durian">Durian</MenuItem>
            <MenuItem value="Elderberry">ElderBerry</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {submittedData && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Hello, {submittedData.name}! Your favorite fruit is{" "}
          {submittedData.fruit}
        </Typography>
      )}
    </Container>
  );
};

export default MyForm;
