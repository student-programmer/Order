import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, Segment, Header, List, Breadcrumb } from 'semantic-ui-react'
const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()}>
      <title>Terms and conditions of use</title>
      <meta property="og:title" content="Terms and conditions of use" />
      <meta property="og:url" content="https://savingsdealz.com/terms-and-conditions-of-use" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="robots" content="all"/>
      <meta name="description" content='Terms of Service are legal agreements between the service provider and the person who wants to use the service. The person must agree to comply with the terms of service in order to use the offered service.'/>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Copyright notice",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Copyright (c) Savingdealz.com"
            }
          },{
            "@type": "Question",
            "name": "License to use website",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ""
            }
          },{
            "@type": "Question",
            "name": "Unless you own or control the relevant rights in the material, you must not:",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ""
            }
          },{
            "@type": "Question",
            "name": "Acceptable use",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ""
            }
          },{
            "@type": "Question",
            "name": "Registration and accounts",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ""
            }
        }]
      }
    `}</script>
    </Helmet>

  )
}

export const TermsAndConditionsOfUseView = (props) => (
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
          Terms and conditions of use
        </Breadcrumb.Section>
      </Breadcrumb>
      <Segment>
        <Header as="h1" textAlign="center" id='termsHeader' className="termsHeaderDeals">
          Terms of Service
          <Header.Subheader as="h2">
          Important information
        </Header.Subheader>
        </Header>
        <Container className="ListContainerPolice" textAlign='justified'> 
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
            Introduction
            <List.List as="ol">
              <List.Item as="li">
                These terms and conditions shall govern your use of our website.
              </List.Item>
              <List.Item as="li">
                By using our website, you accept these terms and conditions in full; accordingly, if you disagree with
                these terms and conditions or any part of these terms and conditions, you must not use our website.
              </List.Item>
              <List.Item as="li">
                If you register with our website, submit any material to our website or use any of our website services,
                we will ask you to expressly agree to these terms and conditions.
              </List.Item>
              <List.Item as="li">
                You must be at least 18 years of age to use our website; and by using our website or agreeing to these
                terms and conditions, you warrant and represent to us that you are at least 18 years of age.
              </List.Item>
              <List.Item as="li">
                Our website uses cookies; by using our website or agreeing to these terms and conditions, you consent to
                our use of cookies in accordance with the terms of our privacy and cookies policy
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Copyright notice
            <List.List as="ol">
              <List.Item as="li">
                Copyright (c) Savingdealz.com
              </List.Item>
              <List.Item as="li">
                Subject to the express provisions of these terms and conditions: we, together with our licensors, own
                and control all the copyright and other intellectual property rights in our website and the material on
                our website; and all the copyright and other intellectual property rights in our website and the
                material on our website are reserved.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            License to use website
            <List.List as="ol">
              <List.Item as="li">
                You may:
                <List.List as="ol">
                  <List.Item as="li">
                    View pages from our website in a web browser;
                  </List.Item>
                  <List.Item as="li">
                    Download pages from our website for caching in a web browser;
                  </List.Item>
                  <List.Item as="li">
                    Print pages from our website;
                  </List.Item>
                  <List.Item as="li">
                    Stream audio and video files from our website; and
                  </List.Item>
                  <List.Item as="li">
                    Use our website services by means of a web browser,
                  </List.Item>
                  <List.Item as="li">
                    Subject to the other provisions of these terms and conditions.
                  </List.Item>
                </List.List>
              </List.Item>
              <List.Item as="li">
                Except as expressly permitted by Section 4.1 or the other provisions of these terms and conditions, you
                must not download any material from our website or save any such material to your computer.
              </List.Item>
              <List.Item as="li">
                You may only use our website for your own personal and business purposes, and you must not use our
                website for any other purposes.
              </List.Item>
              <List.Item as="li">
                Except as expressly permitted by these terms and conditions, you must not edit or otherwise modify any
                material on our website.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Unless you own or control the relevant rights in the material, you must not:
            <List.List as="ol">
              <List.Item as="li">
                Republish material from our website (including republication on another website);
              </List.Item>
              <List.Item as="li">
                Sell, rent or sub-license material from our website;
              </List.Item>
              <List.Item as="li">
                Show any material from our website in public;
              </List.Item>
              <List.Item as="li">
                Exploit material from our website for a commercial purpose; or
              </List.Item>
              <List.Item as="li">
                Redistribute material from our website.
              </List.Item>
              <List.Item as="li">
                We reserve the right to restrict access to areas of our website, or indeed our whole website, at our
                discretion; you must not circumvent or bypass, or attempt to circumvent or bypass, any access
                restriction measures on our website.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Acceptable use
            <List.List as="ol">
              <List.Item as="li">
                You must not:
                <List.List as="ol">
                  <List.Item as="li">
                    Use our website in any way or take any action that causes, or may cause, damage to the website or
                    impairment of the performance, availability or accessibility of the website;
                  </List.Item>
                  <List.Item as="li">
                    Use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with
                    any unlawful, illegal, fraudulent or harmful purpose or activity;
                  </List.Item>
                  <List.Item as="li">
                    Use our website to copy, store, host, transmit, send, use, publish or distribute any material which
                    consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger,
                    rootkit or other malicious computer software;
                  </List.Item>
                  <List.Item as="li">
                    Conduct any systematic or automated data collection activities (including without limitation
                    scraping, data mining, data extraction and data harvesting) on or in relation to our website without
                    our express written consent;
                  </List.Item>
                  <List.Item as="li">
                    Access or otherwise interact with our website using any robot, spider or other automated means;
                  </List.Item>
                  <List.Item as="li">
                    Violate the directives set out in the robots.txt file for our website; or
                  </List.Item>
                  <List.Item as="li">
                    Use data collected from our website for any direct marketing activity (including without limitation
                    email marketing, SMS marketing, telemarketing and direct mailing).
                  </List.Item>
                </List.List>
              </List.Item>
              <List.Item as="li">
                You must not use data collected from our website to contact individuals, companies or other persons or
                entities.
              </List.Item>
              <List.Item as="li">
                You must ensure that all the information you supply to us through our website, or in relation to our
                website, is true, accurate, current, complete and non-misleading.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Registration and accounts
            <List.List as="ol">
              <List.Item as="li">
                You may register for an account with our website by completing and submitting the account registration
                form on our website, and clicking on the verification link in the email that the website will send to
                you.
              </List.Item>
              <List.Item as="li">
                You must notify us in writing immediately if you become aware of any unauthorized use of your account.
              </List.Item>
              <List.Item as="li">
                You must not use any other person’s account to access the website, unless you have that person’s express
                permission to do so.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            User IDs and passwords
            <List.List as="ol">
              <List.Item as="li">
                If you register for an account with our website, we will provide you with / you will be asked to choose
                a user ID and password.
              </List.Item>
              <List.Item as="li">
                Your user ID must not be liable to mislead and must comply with the content rules set out in Section 10;
                you must not use your account or user ID for or in connection with the impersonation of any person.
              </List.Item>
              <List.Item as="li">
                You must keep your password confidential.
              </List.Item>
              <List.Item as="li">
                You must notify us in writing immediately if you become aware of any disclosure of your password. You
                are responsible for any activity on our website arising out of any failure to keep your password
                confidential, and may be held liable for any losses arising out of such a failure.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Cancellation and suspension of account
            <br/>
            We may:
            <List.List as="ol">
              <List.Item as="li">
                Suspend your account;
              </List.Item>
              <List.Item as="li">
                Cancel your account; and/or
              </List.Item>
              <List.Item as="li">
                Edit your account details, at any time in our sole discretion without notice or explanation.
              </List.Item>
            </List.List>
            <br/>
            You may cancel your account on our website using your account control panel on the website.
          </List.Item>

          <List.Item as="li">
            Your content: licence
            <List.List as="ol">
              <List.Item as="li">
                In these terms and conditions, “your content” means all works and materials (including without
                limitation text, graphics, images, audio material, video material, audio-visual material, scripts,
                software and files) that you submit to us or our website for storage or publication on, processing by,
                or transmission via, our website.
              </List.Item>
              <List.Item as="li">
                You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use, reproduce, store,
                adapt, publish, translate and distribute your content in any existing or future media / reproduce, store
                and publish your content on and in relation to this website and any successor website / reproduce, store
                and, with your specific consent, publish your content on and in relation to this website.
              </List.Item>
              <List.Item as="li">
                You grant to us the right to sub-license the rights licensed under Section 9.2.
              </List.Item>
              <List.Item as="li">
                You grant to us the right to bring an action for infringement of the rights licensed under Section 9.2.]
              </List.Item>
              <List.Item as="li">
                You hereby waive all your moral rights in your content to the maximum extent permitted by applicable
                law; and you warrant and represent that all other moral rights in your content have been waived to the
                maximum extent permitted by applicable law.
              </List.Item>
              <List.Item as="li">
                You may edit your content to the extent permitted using the editing functionality made available on our
                website.
              </List.Item>
              <List.Item as="li">
                Without prejudice to our other rights under these terms and conditions, if you breach any provision of
                these terms and conditions in any way, or if we reasonably suspect that you have breached these terms
                and conditions in any way, we may delete, un-publish or edit any or all of your content.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Your content: rules
            <List.List as="ol">
              <List.Item as="li">
                You warrant and represent that your content will comply with these terms and conditions.
              </List.Item>
              <List.Item as="li">
                Your content must not be illegal or unlawful, must not infringe any person’s legal rights, and must not
                be capable of giving rise to legal action against any person (in each case in any jurisdiction and under
                any applicable law).
              </List.Item>
              <List.Item as="li">
                Your content, and the use of your content by us in accordance with these terms and conditions, must not:
                <List.List as="ol">
                  <List.Item as="li">
                    Be libelous or maliciously false;
                  </List.Item>
                  <List.Item as="li">
                    Be obscene or indecent;
                  </List.Item>
                  <List.Item as="li">
                    Infringe any copyright, moral right, database right, trade mark right, design right, right in
                    passing off, or other intellectual property right;
                  </List.Item>
                  <List.Item as="li">
                    Infringe any right of confidence, right of privacy or right under data protection legislation;
                  </List.Item>
                  <List.Item as="li">
                    Constitute negligent advice or contain any negligent statement;
                  </List.Item>
                  <List.Item as="li">
                    Constitute an incitement to commit a crime, instructions for the commission of a crime or the
                    promotion of criminal activity;
                  </List.Item>
                  <List.Item as="li">
                    Be in contempt of any court, or in breach of any court order;
                  </List.Item>
                  <List.Item as="li">
                    Be in breach of racial or religious hatred or discrimination legislation;
                  </List.Item>
                  <List.Item as="li">
                    Be blasphemous;
                  </List.Item>
                  <List.Item as="li">
                    Be in breach of official secrets legislation;
                  </List.Item>
                  <List.Item as="li">
                    Be in breach of any contractual obligation owed to any person;
                  </List.Item>
                  <List.Item as="li">
                    Depict violence, in an explicit, graphic or gratuitous manner;
                  </List.Item>
                  <List.Item as="li">
                    Be pornographic, lewd, suggestive or sexually explicit;
                  </List.Item>
                  <List.Item as="li">
                    Be untrue, false, inaccurate or misleading;
                  </List.Item>
                  <List.Item as="li">
                    Consist of or contain any instructions, advice or other information which may be acted upon and
                    could, if acted upon, cause illness, injury or death, or any other loss or damage;
                  </List.Item>
                  <List.Item as="li">
                    Constitute spam;
                  </List.Item>
                  <List.Item as="li">
                    Be offensive, deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing,
                    hateful, discriminatory or inflammatory; or
                  </List.Item>
                  <List.Item as="li">
                    Cause annoyance, inconvenience or needless anxiety to any person.
                  </List.Item>
                </List.List>
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Limited warranties
            <List.List as="ol">
              <List.Item as="li">
                We do not warrant or represent:
                <List.List as="ol">
                  <List.Item as="li">
                    The completeness or accuracy of the information published on our website;
                  </List.Item>
                  <List.Item as="li">
                    That the material on the website is up to date; or
                  </List.Item>
                  <List.Item as="li">
                    That the website or any service on the website will remain available.
                  </List.Item>
                </List.List>
              </List.Item>
              <List.Item as="li">
                We reserve the right to discontinue or alter any or all of our website services, and to stop publishing
                our website, at any time in our sole discretion without notice or explanation; and save to the extent
                expressly provided otherwise in these terms and conditions, you will not be entitled to any compensation
                or other payment upon the discontinuance or alteration of any website services, or if we stop publishing
                the website.
              </List.Item>
              <List.Item as="li">
                To the maximum extent permitted by applicable law and subject to Section 11.1, we exclude all
                representations and warranties relating to the subject matter of these terms and conditions, our website
                and the use of our website.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Limitations and exclusions of liability
            <List.List as="ol">
              <List.Item as="li">
                Nothing in these terms and conditions will:
                <List.List as="ol">
                  <List.Item as="li">
                    Limit or exclude any liability for death or personal injury resulting from ngligence;
                  </List.Item>
                  <List.Item as="li">
                    Limit or exclude any liability for fraud or fraudulent misrepresentation;
                  </List.Item>
                  <List.Item as="li">
                    Limit any liabilities in any way that is not permitted under applicable law; or
                  </List.Item>
                  <List.Item as="li">
                    Exclude any liabilities that may not be excluded under applicable law.
                  </List.Item>
                </List.List>
              </List.Item>
              <List.Item as="li">
                The limitations and exclusions of liability set out in this Section 12 and elsewhere in these terms and
                conditions:
                <List.List as="ol">
                  <List.Item as="li">
                    Are subject to Section 12.1; and
                  </List.Item>
                  <List.Item as="li">
                    Govern all liabilities arising under these terms and conditions or relating to the subject matter of
                    these terms and conditions, including liabilities arising in contract, in tort (including
                    negligence) and for breach of statutory duty.
                  </List.Item>
                  <List.Item as="li">
                    To the extent that our website and the information and services on our website are provided free of
                    charge, we will not be liable for any loss or damage of any nature.
                  </List.Item>
                  <List.Item as="li">
                    We will not be liable to you in respect of any losses arising out of any event or events beyond our
                    reasonable control.
                  </List.Item>
                  <List.Item as="li">
                    We will not be liable to you in respect of any business losses, including (without limitation) loss
                    of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts,
                    commercial opportunities or goodwill.
                  </List.Item>
                  <List.Item as="li">
                    We will not be liable to you in respect of any loss or corruption of any data, database or software.
                  </List.Item>
                  <List.Item as="li">
                    We will not be liable to you in respect of any special, indirect or consequential loss or damage.
                  </List.Item>
                  <List.Item as="li">
                    You accept that we have an interest in limiting the personal liability of our officers and employees
                    and, having regard to that interest, you acknowledge that we are a limited liability entity; you
                    agree that you will not bring any claim personally against our officers or employees in respect of
                    any losses you suffer in connection with the website or these terms and conditions (this will not,
                    of course, limit or exclude the liability of the limited liability entity itself for the acts and
                    omissions of our officers and employees).
                  </List.Item>
                </List.List>
              </List.Item>
            </List.List>
          </List.Item>
          <List.Item as="li">
            Breaches of these terms and conditions
            <br/>
            Without prejudice to our other rights under these terms and conditions, if you breach these terms and
            conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any
            way, we may:
            <List.List as="ol">
              <List.Item as="li">
                Send you one or more formal warnings;
              </List.Item>
              <List.Item as="li">
                Temporarily suspend your access to our website;
              </List.Item>
              <List.Item as="li">
                Permanently prohibit you from accessing our website;
              </List.Item>
              <List.Item as="li">
                Block computers using your IP address from accessing our website;
              </List.Item>
              <List.Item as="li">
                Contact any or all your internet service providers and request that they block your access to our
                website;
              </List.Item>
              <List.Item as="li">
                Commence legal action against you, whether for breach of contract or otherwise; and/or
              </List.Item>
              <List.Item as="li">
                Suspend or delete your account on our website.
              </List.Item>
            </List.List>
            <br/>
            Where we suspend or prohibit or block your access to our website or a part of our website, you must not take
            any action to circumvent such suspension or prohibition or blocking (including without limitation creating
            and/or using a different account).
          </List.Item>

          <List.Item as="li">
            Variation
            <List.List as="ol">
              <List.Item as="li">
                We may revise these terms and conditions from time to time.
              </List.Item>
              <List.Item as="li">
                The revised terms and conditions shall apply to the use of our website from the date of publication of
                the revised terms and conditions on the website, and you hereby waive any right you may otherwise have
                to be notified of, or to consent to, revisions of these terms and conditions. We will give you written
                notice of any revision of these terms and conditions, and the revised terms and conditions will apply to
                the use of our website from the date that we give you such notice; if you do not agree to the revised
                terms and conditions, you must stop using our website.
              </List.Item>
              <List.Item as="li">
                If you have given your express agreement to these terms and conditions, we will ask for your express
                agreement to any revision of these terms and conditions; and if you do not give your express agreement
                to the revised terms and conditions within such period as we may specify, we will disable or delete your
                account on the website, and you must stop using the website.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Assignment
            <List.List as="ol">
              <List.Item as="li">
                You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or
                obligations under these terms and conditions.
              </List.Item>
              <List.Item as="li">
                You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any
                of your rights and/or obligations under these terms and conditions.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Severability
            <List.List as="ol">
              <List.Item as="li">
                If a provision of these terms and conditions is determined by any court or other competent authority to
                be unlawful and/or unenforceable, the other provisions will continue in effect.
              </List.Item>
              <List.Item as="li">
                If any unlawful and/or unenforceable provision of these terms and conditions would be lawful or
                enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the
                provision will continue in effect.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Third party rights
            <List.List as="ol">
              <List.Item as="li">
                These terms and conditions are for our benefit and your benefit, and these terms and conditions are not
                intended to benefit or be enforceable by any third party.
              </List.Item>
              <List.Item as="li">
                The exercise of the parties’ rights under these terms and conditions is not subject to the consent of
                any third party.
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Entire agreement
            <br/>
            Subject to Section 11.1, these terms and conditions, together with our privacy and cookies policy, shall
            constitute the entire agreement between you and us in relation to your use of our website and shall
            supersede all previous agreements between you and us in relation to your use of our website.
          </List.Item>

          <List.Item as="li">
            Law and jurisdiction
            <List.List as="ol">
              <List.Item as="li">
                These terms and conditions shall be governed by and construed in accordance with laws
              </List.Item>
            </List.List>
          </List.Item>

          <List.Item as="li">
            Contacting us
            <br/>
            You can contact us by filling in the contact us form <Link to="/contact-us">here</Link>.
          </List.Item>

        </List>
        </Container>
      </Segment>
    </Container>
  </div>
)

export default TermsAndConditionsOfUseView
