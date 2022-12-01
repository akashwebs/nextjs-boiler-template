import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Box } from "@mui/system";

function Copyright(props) {
  return (
    <Box>
      <Typography variant="body2" color="#fff" align="center" {...props}>
        {"Copyright © "}
        <Link color="#fff" href="#">
          Basic Aid Hosital
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Typography
        variant="p"
        color="#fff"
        sx={{ fontSize: ".8rem" }}
        component={"p"}
        textAlign={"center"}
      >
        Developed by{" "}
        <Link
          color="#fff"
          href="https://www.facebook.com/profile.php?id=100007977125910"
          target={"_blank"}
        >
          Akash Shil
        </Link>
      </Typography>
    </Box>
  );
}

const Footers = () => {
  return (
    <>
      {/*  <Container
        maxWidth="xl"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 4,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              color="#fff"
              gutterBottom
              sx={{ fontSize: { sm: "1.6rem" } }}
            >
              বেসিক এইড হসপিটাল
            </Typography>
            <Image src={"/logo.png"} width={100} height={100}></Image>
            <>
              <Typography variant="p" component={"p"} color={"#fff"}>
                বেসিক এইড এন্ড হসপিটাল হল একটি পূর্ণ-পরিষেবা হাসপাতাল যা বিস্তৃত
                পরিসরের ইনপেশেন্ট এবং বহির্বিভাগের রোগীদের পরিষেবা প্রদান করে।
                আমরা আমাদের রোগীদের সর্বোচ্চ মানের যত্ন এবং গ্রাহক পরিষেবা
                প্রদান করতে প্রতিশ্রুতিবদ্ধ।
              </Typography>
            </>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              আমাদের সেবা সমূহ
            </Typography>
            <ul className="footer-our-services">
              <li>
                <Link href="#" variant="subtitle1">
                  জরুরি বিভাগ
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1">
                  ডেন্টাল
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1">
                  ডায়াগনিস্টিক সেন্টার
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1">
                  মা ও শিশু রোগ বিশেষজ্ঞ
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1">
                  অ্যাম্বুলেন্স সার্ভিস
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              গুরুত্বপূর্ণ তথ্য সমূহ
            </Typography>
            <ul>
              <li>
                <div style={{ color: "#fff" }}>
                  <Typography variant="p" component={"p"}>
                    অ্যাম্বুলেন্স সার্ভিস
                  </Typography>
                  <Typography variant="p" component={"p"}>
                    01716-129375
                  </Typography>
                </div>
              </li>
              <li>
                <div style={{ color: "#fff" }}>
                  <Typography variant="p" component={"p"}>
                    পুলিশ(কচুয়া)
                  </Typography>
                  <Typography variant="p" component={"p"}>
                    01713-373717
                  </Typography>
                </div>
              </li>
              <li>
                <div>
                  <Typography variant="p" component={"p"} color="#fff">
                    ফায়ার সার্ভিস(কচুয়া)
                  </Typography>
                  <Typography variant="p" component={"p"} color="#fff">
                    01728-546110
                  </Typography>
                </div>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              যোগাযোগ করুন
            </Typography>
            <ul>
              <li>
                <div variant="subtitle1" style={{ color: "#fff" }}>
                  <Typography variant="p" component={"p"}>
                    যোকোন প্রয়োজনে
                  </Typography>
                  <Typography variant="p" component={"p"}>
                    01935-103080
                  </Typography>
                </div>
              </li>
              <li>
                <div style={{ color: "#fff" }}>
                  <Typography variant="p" component={"p"}>
                    ডাক্তারের সিরিয়ালের জন্য
                  </Typography>
                  <Typography variant="p" component={"p"}>
                    01935-103080
                  </Typography>
                </div>
              </li>
            </ul>

            <Typography
              variant="p"
              component={"p"}
              sx={{ py: 1, fontSize: "16px" }}
              color={"#fff"}
            >
              Follow Us
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <a
                  href="https://www.facebook.com/pages/Basic-Aid-Hospital/1153731414704130"
                  target={"_blank"}
                >
                  <Image src={"/facebook.png"} width={150} height={70}></Image>
                </a>
              </Grid>
              <Grid item xs={4}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.pg.basicaidandhospital"
                  target={"_blank"}
                >
                  <Image src={"/app-store.png"} width={150} height={70}></Image>
                </a>
              </Grid>
              <Grid item xs={4}>
                <a href="https://bondhonroktodan.com/" target={"_blank"}>
                  <Image src={"/bondhon.png"} width={150} height={70}></Image>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container> */}
    </>
  );
};

export default Footers;
