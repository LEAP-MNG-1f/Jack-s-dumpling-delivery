
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{ Fragment, useState } from 'react';

type Anchor = 'right';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
console.log("a");

      setState({ ...state, [anchor]: open });
    };

;

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <button onClick={()=>{toggleDrawer(anchor, true)}}> <ShoppingCartIcon/> My cart</button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
          <p>
            T
          </p>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
