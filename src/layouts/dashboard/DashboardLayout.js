import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';

const StyledRoot = styled('div')({
  // display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DashboardLayout() {
  return (
    <StyledRoot>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
