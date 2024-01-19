import {
  CardActions,
  CardContent,
  Paper,
  Card,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

import React from "react";
import { TabContainer } from "react-bootstrap";
// import { MotionViewport } from "../../components/animate";

function Home(props) {
  const myfun = () => {
    alert("hello");
  };

  return (
    <>
      {/* get started */}

      <div>
        <Container sx={{ mt: 10 }}>
          <div>
            <Typography
              variant="h3"
              pb={12}
              sx={{ textAlign: "center", maxWidth: 800, mx: "auto" }}
            >
              <b>Get Great Features at a Price That makes sense</b>
              <br />
              <Typography sx={{ fontSize: "30px" }}>
                Affordable Princing with zero setup fees
              </Typography>
            </Typography>
          </div>
        </Container>
      </div>

      {/* Popular plans */}

      <div>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Typography>
                  <Card
                    sx={{
                      minWidth: 325,
                      border: 1,
                      minHeight: 600,
                      textAlign: "center",
                    }}
                  >
                    <CardContent>
                      <Typography
                        pt={2}
                        sx={{ backgroundColor: "pink", borderRadius: "16px" }}
                      >
                        <Typography
                          sx={{ fontSize: 20, pt: "10" }}
                          gutterBottom
                        >
                          <b>
                            Growth
                            <br />
                          </b>
                        </Typography>

                        <Typography sx={{ mb: 1.5 }}>
                          To effectivaly connect, update & significantaly boost
                          sales thought WhatsApp compaigns
                        </Typography>
                      </Typography>
                      <Typography pt={2} sx={{ fontSize: 20 }} gutterBottom>
                        <b>
                          ₹ 2,499
                          <br />
                        </b>
                      </Typography>

                      <Typography sx={{ fontSize: 20 }} gutterBottom>
                        Per Month
                        <br />
                      </Typography>
                      <Typography pt={3}>
                        5 user <br />
                        Additional Users @ ₹699/Month/User
                      </Typography>
                      <Typography flexDirection="end" variant="body2">
                        <br />
                        <CardActions>
                          <Button
                            variant="contained"
                            sx={{ px: "110px" }}
                            disableElevation
                          >
                            Select Plan
                          </Button>
                        </CardActions>
                      </Typography>

                      <Typography pt={3} sx={{ fontSize: 20 }}>
                        <b>
                          Official WhatsApp API
                          <br />
                        </b>
                      </Typography>

                      <Typography pt={3}>
                        Green Tick verification & Assistance <br />
                        <br />
                        Message Broadcasts & Scheduling <br />
                        <br />
                        Team Inbox <br />
                        <br />
                        1000 Chatbot Session <br />
                        <br />
                        Basic Chatbot <br />
                        <br />
                        Keywords Action <br />
                        <br />
                        WhatsApp Catalog <br />
                        <br />
                        Global Webhooks & API Access <br />
                        <br />
                        Commerce Integration
                      </Typography>
                    </CardContent>
                  </Card>
                  <CardActions>
                    <Button
                      sx={{ px: "110px" }}
                      variant="contained"
                      disableElevation
                      onClick={myfun}
                    >
                      Select Plan
                    </Button>
                  </CardActions>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Typography>
                  <Card
                    sx={{
                      minWidth: 325,
                      border: 1,
                      minHeight: 600,
                      textAlign: "center",
                    }}
                  >
                    <CardContent>
                      <Typography
                        pt={2}
                        sx={{ backgroundColor: "pink", borderRadius: "16px" }}
                      >
                        <Typography
                          sx={{ fontSize: 20, pt: "10" }}
                          gutterBottom
                        >
                          <b>
                            Pro
                            <br />
                          </b>
                        </Typography>

                        <Typography sx={{ mb: 1.5 }}>
                          To provide continuos engagement and personalised
                          exeperience via WhatsApp compaigns pre and post-sales
                        </Typography>
                      </Typography>
                      <Typography pt={2} sx={{ fontSize: 20 }} gutterBottom>
                        <b>
                          ₹ 5,999
                          <br />
                        </b>
                      </Typography>

                      <Typography sx={{ fontSize: 20 }} gutterBottom>
                        Per Month
                        <br />
                      </Typography>
                      <Typography pt={3}>
                        5 user <br />
                        Additional Users @ ₹1,299/Month/User
                      </Typography>
                      <Typography flexDirection="end" variant="body2">
                        <br />
                        <CardActions>
                          <Button
                            variant="contained"
                            sx={{ px: "110px" }}
                            disableElevation
                          >
                            Select Plan
                          </Button>
                        </CardActions>
                      </Typography>

                      <Typography pt={3} sx={{ fontSize: 20 }}>
                        <b>
                          Everything in Growth +
                          <br />
                        </b>
                      </Typography>

                      <Typography pt={3}>
                        Advance & Interconnected Chatbots <br />
                        <br />
                        Granular User Roles <br />
                        <br />
                        WhatsApp AD Insights <br />
                        <br />
                        Sequence (WhatsApp Drip compaigns) <br />
                        <br />
                        2000 Chatbot Session <br />
                        <br />
                        HubSpot Integration <br />
                        <br />
                        WhatsApp Catalog <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                  <CardActions>
                    <Button
                      sx={{ px: "110px" }}
                      variant="contained"
                      disableElevation
                      onClick={myfun}
                    >
                      Select Plan
                    </Button>
                  </CardActions>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Typography>
                  <Card
                    sx={{
                      minWidth: 325,
                      border: 1,
                      minHeight: 600,
                      textAlign: "center",
                    }}
                  >
                    <CardContent>
                      <Typography
                        pt={2}
                        sx={{ backgroundColor: "pink", borderRadius: "16px" }}
                      >
                        <Typography
                          sx={{ fontSize: 20, pt: "10" }}
                          gutterBottom
                        >
                          <b>
                            Bussiness
                            <br />
                          </b>
                        </Typography>

                        <Typography sx={{ mb: 1.5 }}>
                          To manage multiple WhatsApp compaigns , handle high
                          sales volumes and track result consistently
                        </Typography>
                      </Typography>
                      <Typography pt={2} sx={{ fontSize: 20 }} gutterBottom>
                        <b>
                          ₹ 16,999
                          <br />
                        </b>
                      </Typography>

                      <Typography sx={{ fontSize: 20 }} gutterBottom>
                        Per Month
                        <br />
                      </Typography>
                      <Typography pt={3}>
                        5 user <br />
                        Additional Users @ ₹3,999/Month/User
                      </Typography>
                      <Typography flexDirection="end" variant="body2">
                        <br />
                        <CardActions>
                          <Button
                            variant="contained"
                            sx={{ px: "110px" }}
                            disableElevation
                          >
                            Select Plan
                          </Button>
                        </CardActions>
                      </Typography>

                      <Typography pt={3} sx={{ fontSize: 20 }}>
                        <b>
                          Everything in Pro +
                          <br />
                        </b>
                      </Typography>

                      <Typography pt={3}>
                        5 % discount on Wait conversation Rate Card <br />
                        <br />
                        Automatic Chat assignment (Round-Robin) <br />
                        <br />
                        Auto Delete of Chats <br />
                        <br />
                        SMS Fallback With twilio <br />
                        <br />
                        Free Costom Domain <br />
                        <br />
                        5000 Chatbot sessions <br />
                        <br />
                        IP Whitlisting <br />
                        <br />
                        Dadicated Costomer Success Manager <br />
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                  <CardActions>
                    <Button
                      variant="contained"
                      disableElevation
                      onClick={myfun}
                      sx={{ px: "110px" }}
                    >
                      Select Plan
                    </Button>
                  </CardActions>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Compare all plans  */}

      <div>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper>
                <Typography pt={5}>
                  {/* <Stack alignItems='center'> */}

                  <Card
                    sx={{
                      minWidth: 325,
                      border: 1,
                      minHeight: 50,
                      textAlign: "center",
                    }}
                  >
                    <Stack
                      spacing={2}
                      sx={{
                        textAlign: "center",
                        bgcolor: "pink",
                        py: 5,
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={{}}
                        sx={{ width: "220px", py: 3 }}
                        container
                        variant="contained"
                        disableElevation
                      >
                        Compare All Plans
                      </Button>

                      <Typography pt={3} sx={{ fontSize: 15 }}>
                        Have Costom needs?
                      </Typography>

                      <Button
                        onClick={{}}
                        sx={{ width: "170px" }}
                        container
                        variant="contained"
                        disableElevation
                      >
                        Talk to Sales
                      </Button>
                    </Stack>
                  </Card>
                  {/* </Stack> */}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Pay Per conversation  */}

      <div>
        <Container sx={{ mt: 10 }}>
          <div>
            <Typography variant="h3" pb={12} sx={{ maxWidth: 800, mx: "auto" }}>
              <b>Pay Per conversation,Not Per massage</b>
              <br />
              <Typography pt={3} sx={{ fontSize: "30px" }}>
                Pay For What you need with WhatsApp conversation charges based
                on customer Integration. Fees Per conversation vary by
                contry,offering a flexible and tailored solution
              </Typography>
            </Typography>
            <CardActions>
              <Button
                sx={{ px: "80px" }}
                variant="contained"
                disableElevation
                onClick={myfun}
              >
                Explore conversation Princing
              </Button>
            </CardActions>
          </div>
        </Container>
      </div>

      {/* All Pricing Plan  */}

      <div>
        <Typography
          pt={6}
          variant="h3"
          // pb={4}
          sx={{ textAlign: "center", maxWidth: 800, mx: "auto" }}
        >
          <b>All Pricing Plan Include :</b>
          <br />
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>
              <Typography>
                <Card sx={{ minWidth: 325, textAlign: "center" }}>
                  <CardContent>
                    <Typography
                      pt={2}
                      pb={2}
                      sx={{ backgroundColor: "pink", borderRadius: "30px" }}
                    >
                      <Typography sx={{ fontSize: 20, pt: "10" }} gutterBottom>
                        <b>
                          Share Team Inbox <br />
                          <br />
                          Chatbot Builder
                        </b>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>
              <Typography>
                <Card sx={{ minWidth: 325, textAlign: "center" }}>
                  <CardContent>
                    <Typography
                      pt={2}
                      pb={2}
                      sx={{ backgroundColor: "pink", borderRadius: "30px" }}
                    >
                      <Typography sx={{ fontSize: 20, pt: "10" }} gutterBottom>
                        <b>
                          contact Management <br />
                          <br />
                          API & Webhooks
                        </b>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>
              <Typography>
                <Card sx={{ minWidth: 325, textAlign: "center" }}>
                  <CardContent>
                    <Typography
                      pt={2}
                      pb={2}
                      sx={{ backgroundColor: "pink", borderRadius: "30px" }}
                    >
                      <Typography sx={{ fontSize: 20, pt: "10" }} gutterBottom>
                        <b>
                          Broadcasts Management <br />
                          <br />
                          WhatsApp Catalog
                        </b>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>
              <Typography>
                <Card sx={{ minWidth: 325, textAlign: "center" }}>
                  <CardContent>
                    <Typography
                      pt={2}
                      pb={2}
                      sx={{ backgroundColor: "pink", borderRadius: "30px" }}
                    >
                      <Typography sx={{ fontSize: 20, pt: "10" }} gutterBottom>
                        <b>
                          Template Submissin <br />
                          <br />
                        </b>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Get additional chatbot  */}

      <div>
        <Container sx={{ mt: 10, border: 0 }}>
          <div>
            <Typography variant="h3" pb={12} sx={{ maxWidth: 800, mx: "auto" }}>
              <b>Get Additional chatbot sessions as Add-On</b>
              <br />
              <Typography pt={3} sx={{ fontSize: "30px" }}>
                Select the number of chatbot sessions
              </Typography>
              <Typography pt={3} sx={{ fontSize: "30px" }}>
                ₹ 2,000/Month
              </Typography>
              <Typography pt={3} sx={{ fontSize: "30px" }}>
                Shopify Integrations
              </Typography>
              <Typography pt={3} sx={{ fontSize: "30px" }}>
                $4.99/Month
              </Typography>
            </Typography>
          </div>
        </Container>
      </div>

      {/* Frequently Asked Questions. */}

      <div>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 40 }}>
                      Frequently Asked Questions.
                    </Typography>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      CanI use my existing WhatsApp number?
                    </Typography>
                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      Yes, you can use an existing WhatsApp number. However,
                      before onboarding, you must first delete the WhatsApp
                      account linked to that number. If you wish to back up your
                      WhatsApp text messages so that you can restore to Wati,
                      you can use our Chat backup plugin
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      question Is there a setup fee for using the WhatsApp API?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      There is no setup fee associated with using the WhatsApp
                      API.
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      question What does WhatsApp conversational-based pricing
                      mean if WhatsApp is free?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      While regular WhatsApp usage is free, businesses using
                      WhatsApp Business API to grow their business will incur
                      charges for sending customer messages. WhatsApp
                      conversation pricing depends on your customers country
                      code and your message template. Please check our article
                      on conversational-based pricing for more details.
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>

                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      questionHow can I determine my conversation usage cost?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      You can use our conversation cost calculator to get an
                      idea. All you have to do is input the approximate number
                      of conversations that you expect to be initiated. Check
                      out this article to know more about the different
                      conversation categories.
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      questionWhat is a chatbot session? How can I obtain more
                      sessions than my plan allows?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      Every time a chatbot you have set up in Wati is invoked
                      for your customer, that counts as a chatbot session. Every
                      plan comes with a certain number of chatbot sessions,
                      beyond which you will have to respond to your customers
                      manually. You can easily buy additional chatbot sessions
                      from the products ‘Your Plan’ page. Chatbot sessions can
                      be bought every month, even if you are on an annual plan
                      to accommodate seasonal traffic.
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      questionHow can I upgrade or downgrade my plan?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      You can upgrade your plan or move from a monthly plan to
                      an annual one anytime from the Switch Plansection of your
                      Account Details. Your charges will be prorated based on
                      the date of the change. Any downgrades will be effective
                      only at the end of your current billing cycle. If you
                      cannot change your plan or need our help determining which
                      plan is right for you, please contact us at
                      billing@wati.io
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      questionDo you have any cancellation fees?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      No, Wati is a pay-as-you-go service, and we do not have
                      any cancellation fees. You can cancel your plan at any
                      time. However, we do not provide any refunds on payments
                      made for your existing subscription or credits.
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
                <Typography pt={5} sx={{ borderBottom: 1 }}>
                  <Card sx={{ minWidth: 325, minHeight: 50 }}>
                    <Typography pt={3} sx={{ fontSize: 30 }}>
                      questionWhat types of payment do you accept?
                    </Typography>

                    <Typography pt={3} sx={{ fontSize: 20 }}>
                      We accept payments from all credit cards enabled for
                      international online transactions. You can also pay
                      through bank transfers if you choose an annual plan.
                      Please reach out to billing@wati.io for more information.
                    </Typography>
                  </Card>
                  {/* </Stack> */}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Over 8,000 customers
       */}

      <div>
        <container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper>
                <Typography pt={5}>
                  <Card
                    sx={{
                      minWidth: 325,
                      minHeight: 500,
                      textAlign: "center",
                      bgcolor: "burlywood",
                    }}
                  >
                    <Typography pt={3} sx={{ fontSize: 40 }}>
                      Over 8,000 customers
                    </Typography>
                    <Typography pt={1} pb={3} sx={{ fontSize: 20 }}>
                      What some of our 8,000+ customers across 100+ countries
                      think of Wati.
                    </Typography>
                    <Container>
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={6} sm={6}>
                          <Typography
                            pb={4}
                            pt={4}
                            sx={{ borderRadius: "16px", border: 1 }}
                          >
                            <Typography pb={4}>
                              <b>“Highly customisable and friendly”</b>
                            </Typography>
                            <Typography pb={3}>
                              We work in the hotel business, so keeping in touch
                              with people travelling is very easy using
                              WhatsApp. Wati help us to have multiple people
                              answering guests. It also allows us to automate
                              basic replies such as the address j
                            </Typography>
                            <Typography>
                              Eduardo Zeballos <br />
                              Marketing Manager, Hotel Rosario
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                          <Typography
                            pb={4}
                            pt={4}
                            sx={{ borderRadius: "16px", border: 1 }}
                          >
                            <Typography pb={4}>
                              <b>“Highly customisable and friendly”</b>
                            </Typography>
                            <Typography pb={3}>
                              We work in the hotel business, so keeping in touch
                              with people travelling is very easy using
                              WhatsApp. Wati help us to have multiple people
                              answering guests. It also allows us to automate
                              basic replies such as the address j
                            </Typography>
                            <Typography>
                              Eduardo Zeballos <br />
                              Marketing Manager, Hotel Rosario
                            </Typography>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Container>
                  </Card>
                  {/* </Stack> */}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </container>
      </div>
    </>
  );
}

export default Home;
