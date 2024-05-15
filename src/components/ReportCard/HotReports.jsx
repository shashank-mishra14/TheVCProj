import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

export default function HotReports({ showCards, setShowCards }) {
  const [isActive, setIsActive] = React.useState(false);

  const handleHotReportsClick = () => {
    setShowCards((prevShowCards) => !prevShowCards);
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div>
      <List
        aria-label="Screens"
        role="group"
        orientation="horizontal"
        sx={{
          flexGrow: 0,
          "--List-gap": "8px",
          "--List-padding": "9px",
          "--List-radius": "18px",
          "--ListItem-paddingY": "0.5rem",
          "--ListItem-paddingX": "0.7rem",
        }}
      >
        {["Popular Reports"].map((item) => (
          <ListItem variant="outlined" key={item}>
            <ListItemDecorator onClick={handleHotReportsClick}>
              <Checkbox
                className="checkbox-primary"
                disableIcon
                overlay
                label={
                  <b
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      paddingRight: "8px",
                      padddingTop: "4px",
                      paddingBottom: "4px",
                      borderRadius: "15px",
                      color: !isActive ? "black" : "white",
                      fontSize: "0.7rem",
                    }}
                  >
                    {item}
                  </b>
                } // Apply bold style here
                color={isActive ? "primary" : "neutral"} // Change color to blue when active
                variant="plain"
                checked={showCards} // Change checked state to showCards
                sx={{
                  color: isActive ? "#4343FF" : "initial",
                  borderRadius: "15px",
                  width: "130%",
                }} // Change color to blue when active
                slotProps={{
                  action: ({ checked }) => ({
                    sx: {
                      bgcolor: checked ? "background.level1" : "#4343FF",
                      boxShadow: checked ? "sm" : "none",
                    },
                  }),
                }}
              />
            </ListItemDecorator>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
