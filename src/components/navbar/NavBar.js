import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import { Button, Stack, styled } from "@mui/material";
import Logo from "../logo";
import { bgBlur } from "../../utils/cssStyles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  //   boxShadow: 'none',
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function NavBar(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyledAppBar>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo />
            <Stack
              direction="row"
              alignItems="baseline"
              spacing={{
                xs: 0.5,
                sm: 1,
              }}
            >
              <Button
                variant="outlined"
                component={Link}
                sx={{ borderRadius: 5 }}
                to="/login"
              >
                Login
              </Button>
            </Stack>
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
