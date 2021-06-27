import React, { useState, useContext } from "react";
import {
  Button,
  Container,
  Collapse,
  List,
  ListItem,
  ListItemText,
  TextField,
  InputAdornment
} from "@material-ui/core";
import { useAvailablePlates } from "../contexts/AvailablePlatesContext";
import UnitContext from "../contexts/UnitContext";

const AvailablePlatesInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { availablePlates, dispatchAvailablePlates } = useAvailablePlates();
  const { unit } = useContext(UnitContext);

  const plates =
    unit === "kg"
      ? availablePlates.availablePlatesKg
      : availablePlates.availablePlatesLbs;

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Plate Configuration" : "Configure Available Plates"}
      </Button>
      <Collapse in={isOpen}>
        <List>
          {plates.map(plate => {
            return (
              <ListItem divider key={plate.weight}>
                <ListItemText
                  style={{ paddingRight: "1rem" }}
                  primary={`${plate.weight}${unit}`}
                />
                <TextField
                  id={`pairs-input${plate.weight}`}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Pairs</InputAdornment>
                    )
                  }}
                  value={plate.pairs}
                  onChange={e =>
                    dispatchAvailablePlates({
                      type: "update_pairs",
                      unit,
                      weight: plate.weight,
                      newPairs: e.target.value
                    })
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </Container>
  );
};

export default AvailablePlatesInput;
