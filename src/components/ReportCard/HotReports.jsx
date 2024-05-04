import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

export default function HotReports({ showCards, setShowCards }) {
  const [value, setValue] = React.useState([]);

  const handleHotReportsClick = () => {
    setShowCards((prevShowCards) => !prevShowCards);
  };

  return (
    <div>
      <List
        variant="outlined"
        aria-label="Screens"
        role="group"
        orientation="horizontal"
        sx={{
          flexGrow: 0,
          '--List-gap': '8px',
          '--List-padding': '8px',
          '--List-radius': '8px',
        }}
      >
        {['Hot Reports 🔥'].map((item) => (
          <ListItem key={item} onClick={handleHotReportsClick}>
            <ListItemDecorator>
              <Checkbox
                disableIcon
                overlay
                label={item}
                color="neutral"
                variant="plain"
                checked={showCards} // Change checked state to showCards
              />
            </ListItemDecorator>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
