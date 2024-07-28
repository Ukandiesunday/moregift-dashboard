/* eslint-disable react/no-unescaped-entities */

import { Header } from "@/components/organisms";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import style from "./style.module.scss";
import { useGlobalContext } from "../../../context/AppContext";
const Index = () => {
  const { theme } = useGlobalContext();
  return (
    <div>
      <Header
        title={`Privacy & policy`}
        description={`Read more about our privacy and policy`}
      />
      <Navbar />

      <div
        className={
          theme === "light"
            ? style.container
            : `${style.container}  ${style.dark}`
        }
      >
        <div className={style.wrapper}>
          <h1
            className={
              theme === "light" ? style.h1 : `${style.h1} ${style.dark}`
            }
          >
            Privacy Notice
          </h1>
          <div className={style.info}>
            <p>
              moregift is committed to protecting your privacy through our
              compliance with the policies and practices in this notice.
            </p>
            <p>
              This notice informs you of our policies regarding the collection,
              use and disclosure of personal data when you use our service and
              the choices you have associated with that data.
            </p>
            <p>
              This notice describes the types of information we may collect from
              you or that you may provide to us when you visit our website at
              <a href="https://moregift.app/home"> www.moregift.app/home </a> or
              use the moregift service. In this notice, we refer to our website
              and our service collectively as the "Site." This notice also
              describes our practices for collecting, using, maintaining,
              protecting, and disclosing that information. Your use of the Site
              is subject to our Terms and Conditions of Service or other written
              agreement between you or your organization and moregift.
            </p>
            <div className={style.item}>
              <p>This notice applies to the information we collect:</p>
              <div className={style.item2}>
                <p>
                  <b>●</b> on the Site;
                </p>
                <p>
                  <b>●</b> in email, text, or other electronic messages between
                  you and us or other users in your organization and on the Site
                  through the Site;
                </p>
                <p>
                  <b>●</b> through mobile and computer applications you access,
                  enable, or integrate through the Site; and
                </p>
              </div>
            </div>

            <div className={style.item}>
              <p>It does not apply to information collected by:</p>
              <div className={style.item2}>
                <p>
                  <b>●</b> us offline or through any other means, including on
                  any other website operated by us or any third party; or
                </p>
                <p>
                  <b>●</b> any third party, including through any application or
                  content that may link to or be accessible from the Site
                </p>
              </div>
              <p>
                By accessing or using the Site, you agree to the policies and
                practices described in this notice. If you do not agree with our
                policies and practices as described in this notice, you may not
                use the Site. We may change this notice from time to time. Your
                use of the Site at any time indicates your acceptance of the
                version of this notice posted on the Site at such time, so
                please check this notice periodically for updates.
              </p>
            </div>
            <div className={style.item}>
              <h3>Children Under the Age of 13</h3>
              <p>
                The Site is not intended for use by children under 13 years of
                age, and we do not knowingly collect any information from or
                about children under 13. If you are under 13, do not use the
                Site for any reason. If we learn we have collected or received
                personal information from or about a child under 13 without
                verification of parental consent, we will delete that
                information. If you believe we might have any information about
                a child under 13, please contact us by emailing
                support@moregift.app.
              </p>
            </div>
            <div className={style.item}>
              <h3>Information We Collect About You</h3>
              <p>
                We collect several types of information from and about users of
                the Site, including information:
              </p>
              <div className={style.item2}>
                <p>
                  <b>●</b> by which you may be personally identified, such as
                  name, e-mail address, or other contact information, or any
                  other identifier by which you may be contacted online or
                  offline ("personal information"); and
                </p>
                <p>
                  <b>●</b> that is about you but individually does not identify
                  you, such as information about your internet connection, the
                  equipment you use to access the Site, and usage details.
                </p>
              </div>
            </div>

            <div className={style.item}>
              <p>We collect this information:</p>
              <div className={style.item2}>
                <p>
                  <b>●</b>directly from you when you provide it to us;
                </p>
                <p>
                  <b>●</b>automatically as you navigate through the Site, such
                  as usage details, IP addresses, and information collected
                  through cookies and other tracking technologies; and from
                  third parties, such as Hubspot or Google Analytics
                </p>
              </div>
            </div>
            <div className={style.item}>
              <h2>Information You Provide to Us</h2>

              <p>
                The information we collect on or through the Site may include:
              </p>
              <div className={style.item2}>
                <p>
                  <b>●</b> information that you provide by filling in forms on
                  the Site, including information you provide when you register
                  to use the Site or send us a request or report a problem with
                  the Site;
                  <br />
                  and
                </p>
                <p>
                  <b>●</b> details of transactions you carry out through the
                  Site.
                </p>
              </div>
              <p>
                You also may provide information which includes yours to be
                posted on areas of the Site that are visible on the Site, such
                as to the public. Your User profile information displayed on the
                app is posted and/or transmitted at your own risk. We limit
                access to certain features within the mobile app and some are
                based on further user verification, but you acknowledge that no
                security measures are perfect or impenetrable. In addition, you
                acknowledge that we cannot completely control the actions of
                other users of the mobile app. Therefore, we cannot and do not
                guarantee that your user profile information will not be viewed
                by unauthorized persons.
              </p>
            </div>
            <div className={style.item}>
              <h2>
                Information We Collect Through Automatic Data Collection
                Technologies
              </h2>
              <p>
                As you navigate through and interact with the Site, we may use
                automatic data collection technologies to collect certain
                information about your equipment, browsing actions, and
                patterns, including:
              </p>
              <div className={style.item2}>
                <p>
                  <b>●</b> details of your visits to the Site, such as traffic
                  data, logs, navigation data, and other communication data and
                  the resources that you access and use on the Site; and
                </p>
                <p>
                  <b>●</b>
                  information about your computer and internet connection,
                  including your IP address, operating system, and browser type.
                </p>
              </div>
            </div>

            <div className={style.item}>
              <p>This information helps us to:</p>
              <div className={style.item2}>
                <p>
                  <b>●</b>understand our user base and usage patterns;
                </p>
                <p>
                  <b>●</b>store information about your preferences, allowing us
                  to customize our Site; improve the Site and deliver a better
                  and more personalized service; and recognize you when you
                  return to our Website.
                </p>
              </div>
            </div>
            <div className={style.item}>
              <p>
                The technologies we use for automatic data collection may
                include:
              </p>
              <div className={style.item2}>
                <p>
                  <b>●</b> Browser cookies. A browser cookie is a small file
                  placed on the storage unit of your device. You may refuse to
                  accept browser cookies by adjusting the settings on your
                  browser, and you may delete cookies that have already been
                  placed there. However, if you refuse or delete our browser
                  cookies, you may be unable to access certain parts of the Site
                  or have to re-enter information in order to use the Site.
                </p>
                <p>
                  <b>●</b>
                  Web beacons. Pages of the Site and our emails may contain
                  small electronic files known as web beacons (also referred to
                  as clear gifs, pixel tags, and single-pixel gifs) that permit
                  us, for example, to count users who have visited those pages
                  or opened an email and for other related website statistics
                  (for example, recording the popularity of certain website
                  content and verifying system and server integrity).
                </p>
              </div>
              <p>
                We do not collect personal information automatically, but we may
                tie this information to personal information about you that we
                collect from other sources or you provide to us.
              </p>
            </div>

            <div className={style.item}>
              <h2>Third-Party Use of Tracking Technologies</h2>
              <p>
                Some content or features on the Site are served by
                third-parties, such as networks and servers, content providers,
                payment gateways, and application providers. These third parties
                may use cookies or other tracking technologies to collect
                information about you when you use the Site. For example, we may
                use Google Analytics for, well, analytics. We do not control
                these third parties’ tracking technologies or how they may be
                used. If you have any questions about any targeted content on
                the Site, you should contact the responsible provider directly.
                You can read more about Google Analytics at
                www.google.com/policies/privacy/partners.
              </p>
            </div>
            <div className={style.item}>
              <h2>How We Use Your Information</h2>
              <p>
                We use information that we collect about you or that you provide
                to us:
              </p>
              <div className={style.item2}>
                <p>
                  <b>●</b> to present the Site and its contents to you;
                </p>
                <p>
                  <b>●</b>
                  to provide you with information, products, or services that
                  you request from us;
                </p>
                <p>
                  <b>●</b> to fulfill any other purpose for which you provide
                  it;
                </p>
                <p>
                  <b>●</b> to provide you with notices about your account or
                  about changes to the Site;
                </p>
                <p>
                  <b>●</b>
                  to carry out our obligations and enforce our rights under any
                  contracts entered into between you or your organization and
                  us;
                </p>
                <p>
                  <b>●</b>
                  to allow you to participate in interactive features on the
                  Site;
                </p>
                <p>
                  <b>●</b> in any other way we may describe when you provide the
                  information; and for any other purpose with your specific
                  consent.
                </p>
              </div>
              <p>
                We may also use your information to contact you about our own
                products and services that may be of interest to you. If you do
                not want us to use your information in this way, please click
                the ‘unsubscribe’ link at the bottom of any email we’ve sent you
                or send us an email at support@moregift.app.
              </p>
              <p>
                We may use the information we have collected from you to enable
                us to display advertisements for our products and services. We
                only retain personal information for as long as your (or your
                organization’s) account is active or as necessary to provide
                services to you or your organization under our Terms and
                Conditions of Service or other agreements between you or your
                organization and moregift.
              </p>
            </div>

            <div className={style.item}>
              <h2>Disclosure of Your Information</h2>
              <p>
                We may disclose aggregated, anonymized information about our
                users without restriction.
              </p>
              <p>
                We may disclose personal information that we collect or you
                provide as described in this notice:
              </p>

              <div className={style.item2}>
                <p>
                  <b>●</b> to fulfill the purpose for which you provide it, such
                  as to notify another user of a gift, to activate an
                  integration that you select with a third-party service, or to
                  redeem points from a third-party vendor;
                </p>
                <p>
                  <b>●</b>
                  to service providers, such as payment processors, we use to
                  support our business and who are bound by contractual
                  obligations to keep personal information confidential and use
                  it only for the purposes for which we disclose it to them;
                </p>
                <p>
                  <b>●</b> to a buyer or other successor of our company in the
                  event of a merger, acquisition, sale of assets or other major
                  corporate event in which the Site is among the transferred
                  assets;
                </p>
                <p>
                  <b>●</b> for any other purpose disclosed by us when you
                  provide the information;
                </p>
                <p>
                  <b>●</b> for any other purpose with your consent;
                </p>
                <p>
                  <b>●</b> to comply with any court order, law, or legal
                  process, or to enforce or apply our terms of use or other
                  agreements between you or your organization and us; or
                </p>
                <p>
                  <b>●</b> if we believe disclosure is necessary or appropriate
                  to protect the rights, property, or safety of Moregift or its
                  personnel, customers, or others.
                </p>
              </div>
            </div>

            <div className={style.item}>
              <h2>Accessing and Correcting Your Information</h2>

              <p>
                You can review and change certain elements of your personal
                information by logging into the Site and visiting your account
                profile page.
              </p>
              <p>
                You may also send us an email at
                <a
                  href="mailto: support@moregift.app"
                  style={{ textDecoration: "none" }}
                >
                  support@moregift.app
                </a>
                to request access to, correct, or delete any personal
                information that you have provided to us. We cannot delete all
                of your personal information except by also deleting your user
                account. We may not accommodate a request to change information
                if we believe the change would violate any law or legal
                requirement or cause the information to be incorrect or if we
                have a separate legal basis for possessing and processing such
                information, such as to fulfill the terms of a contract between
                you or your organization and us.
              </p>
              <p>
                Copies of some information, such as your User profiles and
                activities, may remain viewable in cached and archived pages or
                might have been copied or stored by other Site users. We will
                take reasonable steps to delete such information upon request,
                but cannot guarantee immediate deletion in all cases.
              </p>
            </div>

            <div className={style.item}>
              <h2>Data Security</h2>
              <p>
                We have implemented reasonable and appropriate measures to
                secure your personal information from accidental loss and from
                unauthorized access, use, alteration, and disclosure. The Site
                is hosted on secure servers provided by our hosting services
                provider in the United States ("US"). By using the Site or
                providing us with any information, you acknowledge that the
                processing of your information, including personal information,
                will take place in the US as set forth in this notice and our
                Terms and Conditions of Service or other agreement between you
                or your organization and moregift Inc.
              </p>
              <p>
                Any payment transactions are provided through our payment
                processing services provider; we do not possess or retain any
                payment information.
              </p>
              <p>
                The safety and security of your information also depend on you.
                For example, where we have given you (or where you have chosen)
                a password and PIN for access and verification to certain parts
                of the Site, you are responsible for keeping this password and
                PIN confidential.
              </p>
              <p>
                Unfortunately, the transmission of information online is not
                completely secure, and we cannot guarantee the security of your
                personal information transmitted to or through the Site, which
                is done at your own risk.
              </p>
              <p>
                At moregift, we are committed to upholding your choices
                regarding the use and disclosure of your personal information.
                You can contact us at any time to request limitations on how we
                use and disclose your personal data. However, it's important to
                note that, as MoreGift provides services primarily to
                individuals on behalf of their employers, and often collects
                personal information directly from these employers, your
                employer may be a more effective point of contact for such
                requests. We encourage you to engage with your employer first if
                you wish to limit the use or disclosure of your data.
              </p>
            </div>

            <div className={style.item}>
              <h2>Data retention and deletion</h2>
              <p>
                The Company retains user profile, and other personal data for as
                long as a user maintains their account and except as otherwise
                permitted or required by applicable law or regulation, only for
                as long as necessary to fulfill the purposes the Company
                collected it for, including for the purposes of satisfying any
                legal, accounting, or reporting requirements.
              </p>
              <p>
                The Company may also retain certain information, if necessary,
                for purposes of safety, security, and fraud prevention. For
                example, if the Company deactivates a User’s account because of
                unsafe behavior or security incidents, the Company may retain
                certain information about that account to prevent that User from
                opening a new account in the future.
              </p>
              <p>
                Users may request deletion of their account at any time.
                Following such requests, the Company deletes the data that it is
                not required to retain for purposes of regulatory, insurance,
                litigation, or other legal requirements. For example, the
                Company retains location, device, and usage data for these
                purposes for a minimum of 7 years; while it retains such data,
                it may also use it for purposes of safety, security, fraud
                prevention and detection, and research and development.
              </p>
              <p>
                If you decide that you no longer wish us to keep or use
                information or you want the information to be revised or
                updated, please feel free to contact us. We will remove or amend
                the information as appropriate in accordance with our Policy and
                applicable legislative and regulatory requirements.
              </p>
              <p>
                Under some circumstances, the Company may anonymize Users'
                personal information so that it can no longer be associated with
                a particular User. The Company reserves the right to use such
                anonymous and de-identified data for any legitimate business
                purpose without further notice to the relevant User or its
                consent.
              </p>
            </div>
            <div className={style.item}>
              <h2>Changes to Our Privacy Policies and Practices</h2>
              <p>
                We will inform you of any changes we make to our privacy
                policies and practices that affect this notice by posting an
                updated notice on this page. The date this notice was last
                revised is identified at the top of the page. You are
                responsible for ensuring we have an up-to-date active and
                deliverable email address for you, and for periodically visiting
                the Site and this notice to check for any changes.
              </p>
            </div>
            <div className={style.item}>
              <h2>Contact Information</h2>
              <p>
                To ask questions or comment about this notice and our privacy
                policies and practices, please contact us at:
                <a
                  href="mailto: support@moregift.app"
                  style={{ textDecoration: "none" }}
                >
                  support@moregift.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
