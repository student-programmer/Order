import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, Segment, Header, List, Breadcrumb } from 'semantic-ui-react'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()}>
      <title>Privacy Policy</title>
      <meta name="robots" content="no index, no follow"/>
      <meta name="description" content='A privacy policy is a statement or legal document that states how a company or website collects, processes and processes data from its customers and visitors. It clearly states whether this information is confidential, transferred or sold to third parties.'/>
      <link rel="canonical" href={canonical}/>
    </Helmet>
  )
}

export const PrivacyPolicyView = (props) => (
  <div>
    {head(props.url)}
    <Container>
      <Breadcrumb id="breadcrumb">
        <Breadcrumb.Section
          link
          as={Link}
          to="/"
        >
          Main
        </Breadcrumb.Section>
        <Breadcrumb.Divider icon="right chevron"/>
        <Breadcrumb.Section active>
          Privacy policy
        </Breadcrumb.Section>
      </Breadcrumb>
      <Segment>
        <Header as="h1" textAlign="center">
        Site privacy policy 
        </Header>
        <List as="ol" size="big">
          <List.Item as="li">
            Introduction
            <List.List as="ol">
              <List.Item as="li">
                We are committed to safeguarding the privacy of our website visitors; in this policy we explain how we
                will treat your personal information.
              </List.Item>
              <List.Item as="li">
                We will ask you to consent to our use of cookies in accordance with the terms of this policy when you
                first visit our website. By using our website and agreeing to this policy, you consent to our use of
                cookies in accordance with the terms of this policy.
              </List.Item>
            </List.List>
          </List.Item>
          <List.Item as="li">
            Collecting personal information
            <br/>
            We may collect, store and use the following kinds of personal information:
            <List.List as="ol">
              <List.Item as="li">
                information about your computer and about your visits to and use of this website (including your IP
                address, geographical location, browser type and version, operating system, referral source, length of
                visit, page views and website navigation paths);
              </List.Item>
              <List.Item as="li">
                information that you provide to us when registering with our website (including your email address);
              </List.Item>
              <List.Item as="li">
                information that you provide when completing your profile on our website (including your name, profile
                pictures, gender, date of birth, relationship status, interests and hobbies, educational details and
                employment details);
              </List.Item>
              <List.Item as="li">
                information that you provide to us for the purpose of subscribing to our email notifications and/or
                newsletters (including your name and email address);
              </List.Item>
              <List.Item as="li">
                information that you provide to us when using the services on our website, or that is generated in the
                course of the use of those services (including the timing, frequency and pattern of service use;
              </List.Item>
              <List.Item as="li">
                information relating to any purchases you make of our goods / services / goods and/or services or any
                other transactions that you enter into through our website (including your name, address, telephone
                number, email address and card details;
              </List.Item>
              <List.Item as="li">
                information that you post to our website for publication on the internet (including your user name, your
                profile pictures and the content of your posts);
              </List.Item>
              <List.Item as="li">
                information contained in or relating to any communications that you send to us or send through our
                website (including the communication content and meta data associated with the communication);
              </List.Item>
              <List.Item as="li">
                information contained in or relating to any communications that you send to us or send through our
                website (including the communication content and meta data associated with the communication);
              </List.Item>
            </List.List>
          </List.Item>
          <List.Item as="li">
            Using your personal information
            <br/>
            Personal information submitted to us through our website will be used for the purposes specified in this
            policy or on the relevant pages of the website.
            <br/>
            We may use your personal information to:
            <List.List as="ol">
              <List.Item as="li">
                administer our website and business;
              </List.Item>
              <List.Item as="li">
                personalize our website for you;
              </List.Item>
              <List.Item as="li">
                enable your use of the services available on our website;
              </List.Item>
              <List.Item as="li">
                send you goods purchased through our website;
              </List.Item>
              <List.Item as="li">
                supply to you services purchased through our website;
              </List.Item>
              <List.Item as="li">
                send statements, invoices and payment reminders to you, and collect payments from you;
              </List.Item>
              <List.Item as="li">
                send you non-marketing commercial communications;
              </List.Item>
              <List.Item as="li">
                send you email notifications that you have specifically requested;
              </List.Item>
              <List.Item as="li">
                send you our email newsletter, if you have requested it (you can inform us at any time if you no longer
                require the newsletter);
              </List.Item>
              <List.Item as="li">
                send you marketing communications relating to our business or the businesses of carefully-selected third
                parties which we think may be of interest to you, by post or, where you have specifically agreed to
                this, by email or similar technology (you can inform us at any time if you no longer require marketing
                communications);
              </List.Item>
              <List.Item as="li">
                provide third parties with statistical information about our users (but those third parties will not be
                able to identify any individual user from that information);
              </List.Item>
              <List.Item as="li">
                deal with enquiries and complaints made by or about you relating to our website;
              </List.Item>
              <List.Item as="li">
                keep our website secure and prevent fraud;
              </List.Item>
              <List.Item as="li">
                verify compliance with the terms and conditions governing the use of our website (including monitoring
                private messages sent through our website private messaging service);
              </List.Item>
              <List.Item as="li">
                and other uses.
              </List.Item>
            </List.List>
            If you submit personal information for publication on our website, we will publish and otherwise use that
            information in accordance with the licence you grant to us.
            <br/>
            Your privacy settings can be used to limit the publication of your information on our website, and can be
            adjusted using privacy controls on the website.
            <br/>
            We will not, without your express consent, supply your personal information to any third party for the
            purpose of their or any other third party’s direct marketing.
          </List.Item>
          <List.Item as="li">
            Disclosing personal information
            <br/>
            We may disclose your personal information to any of our employees, officers, insurers, professional
            advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in
            this policy.
            <br/>
            We may disclose your personal information to any member of our group of companies (this means our
            subsidiaries, our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for the
            purposes set out in this policy.
            <br/>
            We may disclose your personal information:
            <List.List as="ol">
              <List.Item as="li">
                to the extent that we are required to do so by law;
              </List.Item>
              <List.Item as="li">
                in connection with any ongoing or prospective legal proceedings;
              </List.Item>
              <List.Item as="li">
                in order to establish, exercise or defend our legal rights (including providing information to others
                for the purposes of fraud prevention and reducing credit risk);
              </List.Item>
              <List.Item as="li">
                to the purchaser (or prospective purchaser) of any business or asset that we are (or are contemplating)
                selling; and
              </List.Item>
              <List.Item as="li">
                to any person who we reasonably believe may apply to a court or other competent authority for disclosure
                of that personal information where, in our reasonable opinion, such court or authority would be
                reasonably likely to order disclosure of that personal information.
              </List.Item>
            </List.List>
            Except as provided in this policy, we will not provide your personal information to third parties.
          </List.Item>

          <List.Item as="li">
            International data transfers
            <List.List as="ol">
              <List.Item as="li">
                Information that we collect may be stored and processed in and transferred between any of the countries
                in which we operate in order to enable us to use the information in accordance with this policy.
              </List.Item>
              <List.Item as="li">
                Information that we collect may be transferred to the following countries which do not have data
                protection laws equivalent to those in force in the European Economic Area: the United States of
                America, Russia, Japan, China and India.
              </List.Item>
              <List.Item as="li">
                Personal information that you publish on our website or submit for publication on our website may be
                available, via the internet, around the world. We cannot prevent the use or misuse of such information
                by others.
              </List.Item>
              <List.Item as="li">
                You expressly agree to the transfers of personal information described in this Section 6.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Retaining personal information
            <List.List as="ol">
              <List.Item as="li">
                This Section 7 sets out our data retention policies and procedure, which are designed to help ensure
                that we comply with our legal obligations in relation to the retention and deletion of personal
                information.
              </List.Item>
              <List.Item as="li">
                Personal information that we process for any purpose or purposes shall not be kept for longer than is
                necessary for that purpose or those purposes.
              </List.Item>
              <List.Item as="li">
                Without prejudice to Section 7.2, we will usually delete personal data falling within the categories set
                out below at the date/time set out below:
                <List.List as="ol">
                  <List.Item as="li">
                    personal data type will be deleted date/time; and
                  </List.Item>
                  <List.Item as="li">
                    repeat as necessary.
                  </List.Item>
                </List.List>
              </List.Item>
              <List.Item as="li">
                Notwithstanding the other provisions of this Section 7, we will retain documents (including electronic
                documents) containing personal data:
                <List.List as="ol">
                  <List.Item as="li">
                    to the extent that we are required to do so by law;
                  </List.Item>
                  <List.Item as="li">
                    if we believe that the documents may be relevant to any ongoing or prospective legal proceedings;
                    and
                  </List.Item>
                  <List.Item as="li">
                    in order to establish, exercise or defend our legal rights (including providing information to
                    others for the purposes of fraud prevention and reducing credit risk).
                  </List.Item>
                </List.List>
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Security of your personal information
            <List.List as="ol">
              <List.Item as="li">
                We will take reasonable technical and organizational precautions to prevent the loss, misuse or
                alteration of your personal information.
              </List.Item>
              <List.Item as="li">
                We will store all the personal information you provide on our secure (password- and firewall-protected)
                servers.
              </List.Item>
              <List.Item as="li">
                All electronic financial transactions entered into through our website will be protected by encryption
                technology.
              </List.Item>
              <List.Item as="li">
                You acknowledge that the transmission of information over the internet is inherently insecure, and we
                cannot guarantee the security of data sent over the internet.
              </List.Item>
              <List.Item as="li">
                You are responsible for keeping the password you use for accessing our website confidential; we will not
                ask you for your password (except when you log in to our website).
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Amendments
            <br/>
            We may update this policy from time to time by publishing a new version on our website. You should check
            this page occasionally to ensure you are happy with any changes to this policy. We may notify you of changes
            to this policy by email or through the private messaging system on our website.
          </List.Item>

          <List.Item as="li">
            Your rights
            <br/>
            You may instruct us to provide you with any personal information we hold about you; provision of such
            information will be subject to:
            <List.List as="ol">
              <List.Item as="li">
                the payment of a fee (currently fixed at GBP 10); and
              </List.Item>
              <List.Item as="li">
                the supply of appropriate evidence of your identity (for this purpose, we will usually accept a
                photocopy of your passport certified by a solicitor or bank plus an original copy of a utility bill
                showing your current address).
              </List.Item>
            </List.List>
            We may withhold personal information that you request to the extent permitted by law.
            <br/>
            You may instruct us at any time not to process your personal information for marketing purposes.
            <br/>
            In practice, you will usually either expressly agree in advance to our use of your personal information for
            marketing purposes, or we will provide you with an opportunity to opt out of the use of your personal
            information for marketing purposes.
          </List.Item>

          <List.Item as="li">
            Third party websites
            <br/>
            Our website includes hyperlinks to, and details of, third party websites. We have no control over, and are
            not responsible for, the privacy policies and practices of third parties.
          </List.Item>

          <List.Item as="li">
            Updating information
            <br/>
            Please let us know if the personal information that we hold about you needs to be corrected or updated.
          </List.Item>

          <List.Item as="li">
            Cookies
            <br/>
            Our website uses cookies. A cookie is a file containing an identifier (a string of letters and numbers) that
            is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to
            the server each time the browser requests a page from the server. Cookies may be either “persistent” cookies
            or “session” cookies: a persistent cookie will be stored by a web browser and will remain valid until its
            set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand,
            will expire at the end of the user session, when the web browser is closed. Cookies do not typically contain
            any information that personally identifies a user, but personal information that we store about you may be
            linked to the information stored in and obtained from cookies. We use only session cookies / only persistent
            cookies / both session and persistent cookies on our website.
            <List.List as="ol">
              <List.Item as="li">
                The names of the cookies that we use on our website, and the purposes for which they are used, are set
                out below:
                <List.List as="ol">
                  <List.Item as="li">
                    we use google analytics and Adwords on our website to recognize a computer when a user visits the
                    website / track users as they navigate the website / enable the use of a shopping cart on the
                    website / improve the website’s usability / analyze the use of the website / administer the website
                    / prevent fraud and improve the security of the website / personalize the website for each user /
                    target advertisements which may be of particular interest to specific users / describe purpose(s);
                  </List.Item>
                </List.List>
              </List.Item>
              <List.Item as="li">
                Most browsers allow you to refuse to accept cookies; for example:
                <List.List as="ol">
                  <List.Item as="li">
                    in Internet Explorer (version 10) you can block cookies using the cookie handling override settings
                    available by clicking “Tools”, “Internet Options”, “Privacy” and then “Advanced”;
                  </List.Item>
                  <List.Item as="li">
                    in Firefox (version 24) you can block all cookies by clicking “Tools”, “Options”, “Privacy”,
                    selecting “Use custom settings for history” from the drop-down menu, and unticking “Accept cookies
                    from sites”; and
                  </List.Item>
                  <List.Item as="li">
                    in Chrome (version 29), you can block all cookies by accessing the “Customize and control” menu, and
                    clicking “Settings”, “Show advanced settings” and “Content settings”, and then selecting “Block
                    sites from setting any data” under the “Cookies” heading.
                  </List.Item>
                  <p>
                    Blocking all cookies will have a negative impact upon the usability of many websites. If you block
                    cookies, you will not be able to use all the features on our website.
                  </p>
                </List.List>
              </List.Item>
              <List.Item as="li">
                You can delete cookies already stored on your computer; for example:
                <List.List as="ol">
                  <List.Item as="li">
                    in Internet Explorer (version 10), you must manually delete cookie files (you can find instructions
                    for doing so at http://support.microsoft.com/kb/278835);
                  </List.Item>
                  <List.Item as="li">
                    in Firefox (version 24), you can delete cookies by clicking “Tools”, “Options” and “Privacy”, then
                    selecting “Use custom settings for history”, clicking “Show Cookies”, and then clicking “Remove All
                    Cookies”; and
                  </List.Item>
                  <List.Item as="li">
                    in Chrome (version 29), you can delete all cookies by accessing the “Customize and control” menu,
                    and clicking “Settings”, “Show advanced settings” and “Clear browsing data”, and then selecting
                    “Delete cookies and other site and plug-in data” before clicking “Clear browsing data”.
                  </List.Item>
                  <p>
                    Deleting cookies will have a negative impact on the usability of many websites.
                  </p>
                </List.List>
              </List.Item>
            </List.List>
          </List.Item>
        </List>
      </Segment>
    </Container>
  </div>
)

export default PrivacyPolicyView
