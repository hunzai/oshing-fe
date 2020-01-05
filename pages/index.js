import React from "react";
import Container from "@material-ui/core/Container";

import Hotel from "../src/hotel/Hotel";

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Hotel />
    </Container>
  );
}
