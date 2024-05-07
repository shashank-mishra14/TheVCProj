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
          "--List-padding": "8px",
          "--List-radius": "18px",
          "--ListItem-paddingY": "1.0rem",
          "--ListItem-paddingX": "0.75rem",
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
                      color: "white",
                      paddingRight: "8px",
                      padddingTop: "13px",
                      paddingBottom: "13px",
                      borderRadius: "15px",
                      color: isActive ? "black" : "white",
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
                  width: "120%",
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
