import { useDispatch, useSelector } from 'react-redux';
// import { List, Item, Button } from './ContactList.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

const MyStyledButton = styled(Button)({});

export const MyStyledTextField = styled(TextField)({
  /* Dodaj swoje style tu */
  border: '2px solid blue',
  borderRadius: '4px',
  padding: '8px',
});

export const NavBar = () => {
  return (
    <div>
      <MyStyledButton variant="outlined" color="success">
        Click me!
      </MyStyledButton>
      <MyStyledTextField label="Name" variant="outlined" />
    </div>
  );
};

// export const NavBar = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Register</li>
//           <li>Log</li>
//         </ul>
//       </nav>
//     </>
//   );
// };
