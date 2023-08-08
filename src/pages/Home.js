// import { Helmet } from "react-helmet-async";
// @mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import TitleHolder from "../components/landingpage/TitleHolder";
// import FeaturedPost from "../components/landingpage/FeaturedPost";
// import Footer from "../components/landingpage/Footer";

// ---- FROM BLOG TEMPLATE

const mainFeaturedPost = {
  title: "We",
  description: "Find everything you need",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  // linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: "FEATURED PRODUCT 1",
    date: "Size 8-12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image:
      "https://images.boardriders.com/global/dcshoes-products/all/default/large/302361_dcshoes,p_blw_frt2.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "FEATURED PRODUCT 2",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image:
      "https://images.boardriders.com/global/dcshoes-products/all/default/large/302361_dcshoes,p_blw_frt2.jpg",
    imageLabel: "Image Text",
  },
];

const defaultTheme = createTheme();

export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title> Home | Shopedia </title>
      </Helmet> */}

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        Hello
        {/* <Container maxWidth="lg" style={{ marginTop: "50px" }}>
          <main>
            <TitleHolder post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </main>
        </Container>
        <Footer title="Shopedia" description="Find everything you need." /> */}
      </ThemeProvider>
    </>
  );
}
