/* eslint-disable react/no-unescaped-entities */

import { Header } from "@/components/organisms";
import { useGlobalContext } from "../../../context/AppContext";
import style from "./style.module.scss";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import Link from "next/link";
const Index = () => {
  const { theme } = useGlobalContext();
  return (
    <div>
      <Header
        title={`Terms & Condition `}
        description={`Learn about our terms and condition`}
      />
      <Navbar />
      <div
        className={
          theme === "light"
            ? style.container
            : `${style.container} ${style.dark}`
        }
      >
        <h1
          className={theme === "light" ? style.h1 : `${style.h1} ${style.dark}`}
        >
          moregift Inc. Terms and Conditions of Service
        </h1>
        <div
          className={
            theme === "light" ? style.wrapper : `${style.wrapper} ${style.dark}`
          }
        >
          <div className={style.info}>
            <p>
              Welcome to moregift Inc. “moregift Inc.”, a Delaware corporation
              (together with all subsidiaries are hereinafter referred to as the
              “Company”, “we”, “us”, or “moregift”, interchangeably) The
              moregift website (the "Site") provides information about
              moregift’s gifting service (the “Service”). Upon service payment,
              users automatically acquire corresponding “utility tokens” also
              known as “Gift Cash”, “Digital Gift Token” or “Digit®” within the
              app. Users can send Gift Cash to friends, family, or employees.
              Users can swap their Gift Cash to any available Gift Cash currency
              type within the app. User automatically gets the monetary value of
              their Gift Cash paid into the bank account the user entered upon
              payout request by the user. This service will be available in
              other countries as we deemed fit for other gifting use cases,
              catering to diverse users, needs, and preferences. For moregift
              registered users, the Site, together with MoreGift’s mobile app
              (the “App”) and application programming interface (the “API”),
              also provides a platform and tools for using the Service and is
              considered a part of the Service.
            </p>
            <p>
              Please be aware that the Service may be provided by any of
              moregift’s affiliated companies depending on your location.
              moregift is not a financial institution, we provide the Services
              through our partner who is a licensed and registered “financial
              institution”.
            </p>
          </div>
          <div className={style.info}>
            <h2
              className={
                theme === "light" ? style.h2 : `${style.h2} ${style.dark}`
              }
            >
              1. Acceptance of Terms and Conditions of Service.
            </h2>
            <p>
              moregift provides the Site and the Service, including the App, the
              API, and any functionality and services offered on or through the
              Site and the Service, to you subject to these Terms and Conditions
              of Service (this “TOS”).
            </p>
            <p>
              By visiting our website and accessing the information, resources,
              services, products, and tools we provide, you understand and agree
              to accept and adhere to the following terms and conditions as
              stated in these Terms and Conditions of Service along with the
              terms and conditions as stated in our
              <Link href={`/privacy-policy`} className={style.terms_link}>
                Privacy Policy.
              </Link>
            </p>
            <p>
              This TOS includes moregift’s Privacy Policy, which explains how
              moregift collects, uses, and protects data from visitors to the
              Site and users of the Service. If you do not agree with any part
              of this TOS, you may not use the Site or the Service in any way.
              Your use of the Site indicates your acceptance of this TOS. Use of
              the App and certain portions of the Site are only available to
              moregift registered users. If you are a moregift registered user,
              your use of the Site and the Service is conditioned on your
              acceptance of these TOS. If your organization has entered into a
              commercial agreement with moregift, including any agreement or
              addendum relating to the protection of personal data (a “Customer
              Agreement”), then (i) the terms of the Customer Agreement govern
              the relationship between your organization and moregift, and this
              TOS governs your individual use of the Site and the Service, and
              (ii) if there is any conflict between this TOS and the Customer
              Agreement, the Customer Agreement will take precedence over this
              TOS.
            </p>
          </div>
          <div className={style.info}>
            <h2
              className={
                theme === "light" ? style.h2 : `${style.h2} ${style.dark}`
              }
            >
              2. Site Access and Account Security.
            </h2>
            <p>
              moregift grants you a limited, non-exclusive, non-transferable,
              revocable license to (i) access and use the Site and, (ii) if you
              are a registered user, to access and use the Service through your
              browser, the App, or an Integration (defined below) during the
              subscription term outlined in an applicable Order (defined below),
              in accordance with this TOS and any Customer Agreement between you
              and moregift only for your personal or internal business purposes.
            </p>
            <p>
              From time to time, moregift may make available to its customers
              and their users certain API, which may include browser or other
              application plugins, sample code, and related documentation and
              other related materials. If you are a registered user that is an
              organization, then you may use the API for your internal business
              purposes to develop or enable web or other software services or
              applications (“Integrations”) that will communicate and
              interoperate with the Service. Notwithstanding anything in this
              TOS or other agreement between you and MoreGift to the contrary,
              the API is provided “as is,” and MoreGift makes no representation
              or warranty of any kind in connection with the API, including
              without limitation any representation or warranty that the API,
              Integrations, or any products or results of the use of the API or
              Integrations will meet your requirements, achieve any intended
              result, be compatible or work with any third party’s or your
              software, systems or other services.
            </p>
            <p>
              If you are an organization that is a MoreGift customer, then you
              may designate authorized users of your organization’s account.
              Your authorized users will have the ability to access your
              organization’s account and to take any actions that users are
              authorized to take under this TOS and any applicable Customer
              Agreement.
            </p>
            <p>
              If you are an organization, you hereby represent and warrant that:
              (a) you have taken all necessary corporate action to authorize
              your agreement to these TOS and have granted the person agreeing
              to these TOS on your behalf, sufficient authority to bind you to
              these TOS; and (b) you are solely responsible for your authorized
              users’ access to and use of the Service or Site, and you will
              ensure that they comply with these TOS. If you establish or are
              given a user account as an employee or contractor of an
              organization that is a moregift customer, you represent that you
              are authorized by your organization to do so, and you agree to use
              the Site and the Service solely as authorized by your organization
            </p>
            <p>
              To access certain areas of the Site and the Service, you may be
              asked or required to provide certain registration details or other
              information. It is a condition of your use of the Site and the
              Service that all such details and information that you provide be
              correct, current, and complete. You expressly agree that all
              information you provide to register with MoreGift is subject to
              the terms of moregift’s Privacy Policy, and you consent to all
              actions we take with respect to your information consistent with
              moregift’s
              <Link href={`/privacy-policy`} className={style.terms_link}>
                privacy policy.
              </Link>
            </p>
            <p>
              If you choose or are provided with a username, password or any
              other information as part of the security features of the Site or
              the Service, you agree to treat such information as confidential,
              and you agree not to disclose it to any other person or entity.
              Your user account, if applicable, is personal to you, and you
              agree not to provide any other person with access to the Site or
              the Service through your user account. You agree to notify
              moregift immediately if you become aware of any unauthorized
              access or use of your username, password or other security
              information.
            </p>
            <p>
              moregift reserves the right to prevent access to the Site and the
              Service by any unauthorized user, or any user who moregift has
              reason to believe is in breach of this TOS.
            </p>
            <p>
              At the point of payout to any bank account, users are required to
              enter accurate recipient details for the bank account they intend
              paying out to. moregift will not be liable for any payments made
              to the wrong person outside of the App's secure environment. It is
              the user's responsibility to verify recipient bank details before
              completing transactions.
            </p>
          </div>
          <div className={style.info}>
            <h2>3. Intellectual Property Rights; Trademarks.</h2>
            <p>
              Except as otherwise expressly stated in this TOS, the Site and the
              Service, and their entire contents, features, and functionality
              (including, but not limited to, all information, software, text,
              displays, images, media, and the design, selection and arrangement
              thereof), are owned by moregift, its licensors or other providers
              of such materials and are protected by United States and
              international copyright, trademark, patent, trade secret and other
              intellectual property or proprietary rights laws. No right, title,
              or interest in or to the Site or any part of the Service is
              transferred to you, and all rights not expressly granted to you in
              this TOS are reserved by moregift.
            </p>
            <p>
              Without limiting the foregoing paragraph, the name moregift, the
              moregift logo, and all other trademarks, logos, product and
              service names, designs, and slogans ("Marks") displayed on the
              Site or through the Service are trademarks of moregift or its
              licensors. You must not use any Marks for any purpose without
              prior, written permission from MoreGift or its applicable
              licensor.
            </p>
          </div>
          <div className={style.info}>
            <h2>4. User Content.</h2>
            <p>
              Portions of the Site and the Service include interactive features,
              such as messaging, comment features, personalized areas, and
              profiles that allow registered users to post, display, or transmit
              messages, content, and other materials (collectively, "User
              Content")
            </p>
            <p>
              moregift is under no obligation to review any User Content and
              assumes no responsibility or liability relating to any User
              Content. moregift may block, reject and/or remove any User Content
              at any time
            </p>
            <p>
              You represent and warrant that you own or control all rights in
              and to all User Content that you post, display or transmit through
              the Site or the Service and that you have the right to grant the
              license granted below to us and our licensees, successors and
              assigns. You also represent and warrant that all of your User
              Content does and will comply with this TOS. You understand and
              acknowledge that you are responsible for any User Content you
              submit or contribute, and you, not MoreGift, shall be liable for
              such User Content, including its legality, reliability, accuracy
              and appropriateness.
            </p>
            <p>
              Any User Content you post, display or transmit through the Site or
              the Service may be visible to other authorized users within your
              organization’s account. By providing any User Content, you grant
              to MoreGift and its licensees, successors and assigns the right to
              use, reproduce, modify, perform, display, and distribute any such
              User Content, but only for (i) purposes of operating and providing
              the Site and the Service to you and to your organization and other
              authorized users in your organization, if applicable according to
              your account settings or the terms of your organization’s Customer
              Agreement, and (ii) moregift's internal business purposes,
              including without limitation for analyzing usage of and improving
              its Site and the Service.
            </p>
          </div>
          <div className={style.info}>
            <h2>
              5. Monitoring and Enforcement; <br /> Termination.
            </h2>
            <p>
              You understand and acknowledge that MoreGift has the right to:
            </p>
            <div className={style.item}>
              <p>
                <b>●</b> Remove or refuse to post or transmit any User Content
                for any or no reason in its sole discretion.
              </p>
              <p>
                <b>●</b> Take any action with respect to any User Content that
                moregift deems necessary or appropriate in its sole discretion,
                including if moregift believes that such User Content violates
                this TOS, infringes any intellectual property right or other
                right of any person or entity, threatens the personal safety of
                users of the Site or the Service or could create liability for
                moregift or its customers or other users.
              </p>
              <p>
                <b>●</b> Disclose your identity or other information about you
                to any third party who claims that material posted by you
                violates their rights, including their intellectual property
                rights or their right to privacy
              </p>
              <p>
                <b>●</b> Take appropriate legal action, including without
                limitation, referral to law enforcement, for any illegal or
                unauthorized use of the Site or the Service.
              </p>
              <p>
                <b>●</b>
                Terminate or suspend your access to all or part of the Site or
                the Service, including for any violation of this TOS, subject to
                the termination provisions of any applicable Customer Agreement
                between your organization and moregift.
              </p>
            </div>
            <p>
              Without limiting the foregoing, moregift has the right to
              cooperate with any law enforcement authorities or court order
              requesting or directing moregift to disclose the identity or other
              information of anyone posting any materials on or through the Site
              or the Service.
            </p>
          </div>

          <div className={style.info}>
            <h2>6. Prohibited Uses.</h2>
            <p>
              In accessing and using the Site and the Service, you agree not to
              reproduce, distribute, modify, create derivative works of,
              publicly display, publicly perform, republish, download, store or
              transmit any portion of the Site or any material on the Site,
              except that (i) your computer or device may temporarily store
              copies of such materials in memory incidental to your accessing,
              viewing or posting such materials, (ii) you may store files that
              are automatically cached by your browser for display purposes,
              (iii) if moregift provides you with a mobile or other application
              for download, you may download a single copy to your computer or
              device solely for your own personal use, subject to this TOS, and
              (iv) if moregift provides you with access to interactive features
              of the Site and the Service, you may take such actions as are
              enabled by such features.
            </p>
            <p>
              In addition, in connection with your use of the Site and the
              Service you agree not to:
            </p>
            <div className={style.item}>
              <p>
                <b>●</b> Download or copy the Site or any content or account
                information for the benefit of another vendor or any other third
                party.
              </p>
              <p>
                <b>●</b> Cache or create, post or transmit any unauthorized
                hypertext links to the Site or frame any part of the Site or any
                content.
              </p>
              <p>
                <b>●</b>
                Post, transmit or link to any User Content that you do not have
                a right to make available (such as material that infringes any
                patent, trademark, trade secret, copyright or other intellectual
                property rights or any other person).
              </p>
              <p>
                <b>●</b>
                Post, transmit or link to any material that contains software
                viruses or any other computer code, files or programs designed
                to interrupt, destroy or limit the functionality of any computer
                software or hardware or telecommunications equipment.
              </p>
              <p>
                <b>●</b>
                Use any data mining, robots, spiders or other automatic devices,
                processes or means to access, monitor or copy any part of the
                Site or any materials made available on the Site or through the
                Service.
              </p>
              <p>
                <b>●</b>
                Bypass any measures used by moregift to prevent or restrict
                access to the Site or the Service.
              </p>
              <p>
                <b>●</b>
                Post, transmit or link to any material that is deceptive,
                defamatory, obscene, indecent, abusive, offensive, harassing,
                sexually explicit, discriminatory or otherwise objectionable.
              </p>
              <p>
                <b>●</b>
                Violate any applicable federal, state, local or international
                law or regulation (including, without limitation, any laws
                regarding data privacy or the export of data or software to and
                from the U.S. or other countries).
              </p>
              <p>
                <b>●</b>
                Post, transmit or link to any confidential, personal data not
                otherwise specifically required to use any feature of the Site
                or the Service,
              </p>
              <p>
                <b>●</b>
                Exploit, harm or attempt to exploit or harm minors in any way.
              </p>
              <p>
                <b>●</b>
                Post, transmit, link to, knowingly receive, download, use or
                re-use any material which does not comply with the User Content
                requirements set out in this TOS or in violation of moregift’s
                Privacy Policy.
              </p>
              <p>
                <b>●</b>
                Use the Site or the Service in any way to express or comment on
                any political point of view or to contact or communicate with
                anyone who does not know you or would be unlikely to recognize
                you as a known contact.
              </p>
              <p>
                <b>●</b>
                Post, transmit or link to any advertising or promotional
                material, except solely in connection with the peer-recognition
                functionality of the Site and the Service to other users in your
                organization, to the extent intended by MoreGift and your
                organization.
              </p>
              <p>
                <b>●</b>
                Post, transmit or link to chain letters or other repetitive
                communications, comments or materials, including without
                limitation communications to distribution lists, newsgroup
                aliases or group aliases.
              </p>
              <p>
                <b>●</b>
                Impersonate or attempt to impersonate moregift, a moregift
                employee, another user or any other person or entity, or create
                any impression of endorsement by moregift, or any other person
                without such person’s express written consent.
              </p>
              <p>
                <b>●</b>
                Engage in any other conduct that restricts or inhibits anyone's
                use or enjoyment of the Site or the Service, or which, as
                determined by MoreGift, may harm MoreGift or other users of the
                Site or the Service.
              </p>
              <p>
                <b>●</b>
                Use the Site or the Service in any manner that, in moregift’s
                sole determination, could disable, overburden, damage, or impair
                the Site or the Service or interfere with any other party's use
                of the Site or the Service.
              </p>
              <p>
                <b>●</b>
                Violating any applicable laws or regulations, including but not
                limited to laws governing financial transactions, money
                laundering, and fraud.
              </p>
              <p>
                <b>●</b>
                Using the application for any illegal, fraudulent, or unethical
                purposes, including activities that may harm or defraud other
                users or the platform itself.
              </p>
              <p>
                <b>●</b>
                Attempting to exceed transaction limits set by the platform or
                engaging in activities that may circumvent or manipulate these
                limits, including but not limited to splitting transactions or
                using multiple accounts.
              </p>
              <p>
                <b>●</b>
                Engaging in activities that may harm, disrupt, or interfere with
                the operation of the application, including distributing
                malware, engaging in hacking or phishing attempts, or conducting
                denial-of-service attacks.
              </p>
              <p>
                <b>●</b>
                Misusing or abusing the services provided by the application,
                including sending spam, engaging in harassment or abusive
                behavior towards other users, or engaging in any activity that
                may tarnish the reputation of the platform or its users.
              </p>
              <p>
                <b>●</b>
                Using the application to conduct transactions involving illegal
                or prohibited goods or services, including but not limited to
                weapons, drugs, counterfeit goods, or stolen property.
              </p>
              <p>
                <b>●</b>
                Violating the privacy or intellectual property rights of others,
                including but not limited to unauthorized use or distribution of
                copyrighted material, infringement of trademarks or patents, or
                unauthorized access to private information.
              </p>
              <p>
                <b>●</b>
                Using the application outside its primary purpose of gift cash
                sharing, including but not limited to using it for commercial
                purposes, advertising, or soliciting business opportunities.
              </p>
              <p>
                <b>●</b>
                Otherwise attempt to interfere with the proper working of the
                Website.
              </p>
            </div>
          </div>

          <div className={style.info}>
            <h2>
              7. Disclaimer of Warranties; <br /> Limitation of Liability.
            </h2>
            <p>
              MOREGIFT WILL USE COMMERCIALLY REASONABLE EFFORTS CONSISTENT WITH
              PREVAILING INDUSTRY STANDARDS TO MAINTAIN THE SITE AND THE
              SERVICES IN A MANNER WHICH SEEKS TO MINIMIZE ERRORS AND
              INTERRUPTIONS TO THE SERVICES. EXCEPT FOR THE FOREGOING LIMITED
              WARRANTY, AND ANY WARRANTY CONTAINED IN YOUR ORGANIZATION’S
              CUSTOMER AGREEMENT, IF ANY, YOUR USE OF THE SITE, ITS CONTENT, AND
              THE SERVICES OR ITEMS OBTAINED THROUGH THE SITE OR THE SERVICES IS
              AT YOUR OWN RISK, AND THE SITE, ITS CONTENT AND ANY SERVICES OR
              ITEMS OBTAINED THROUGH THE SITE ARE PROVIDED ON AN "AS IS" AND "AS
              AVAILABLE" BASIS, WITHOUT ANY OTHER WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED. NEITHER MOREGIFT NOR ANY PERSON ASSOCIATED
              WITH MOREGIFT MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO
              THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR
              AVAILABILITY OF THE SITE OR THE SERVICE. WITHOUT LIMITING THE
              FOREGOING, NEITHER THE MOREGIFT NOR ANYONE ASSOCIATED WITH
              MOREGIFT REPRESENTS OR WARRANTS THAT THE SITE, ITS CONTENT, THE
              SERVICE OR ANY ITEMS OBTAINED THROUGH THE SITE OR THE SERVICE WILL
              BE ERROR-FREE OR UNINTERRUPTED, OR THAT DEFECTS WILL BE CORRECTED,
              OR THAT THE SITE OR THE SERVICE WILL OTHERWISE MEET YOUR NEEDS OR
              EXPECTATIONS.
            </p>
            <p>
              MOREGIFT HEREBY DISCLAIMS ALL OTHER WARRANTIES OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT
              NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT
              AND FITNESS FOR PARTICULAR PURPOSE.
            </p>
            <p>
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
              EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
            <p>
              EXCEPT AS EXPRESSLY SET FORTH IN YOUR ORGANIZATION’S CUSTOMER
              AGREEMENT, IF ANY, AND TO THE FULLEST EXTENT PERMITTED UNDER
              APPLICABLE LAW, IN NO EVENT WILL MOREGIFT, ITS AFFILIATES OR THEIR
              LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR
              DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL
              THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
              INABILITY TO USE, THE SITE, THE SERVICE, OR ANY CONTENT MADE
              AVAILABLE ON THE SITE OR THROUGH THE SERVICE, INCLUDING ANY
              INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO LOSS OF REVENUE, LOSS OF PROFITS,
              LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF
              GOODWILL, LOSS OF DATA, REGARDLESS OF THE CAUSE OF ACTION
              (INCLUDING TORT AND BREACH OF CONTRACT OR OTHERWISE), EVEN IF
              FORESEEABLE, AND WHETHER OR NOT MOREGIFT HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES
            </p>
          </div>
          <div className={style.info}>
            <h2>8. Indemnity.</h2>
            <p>
              You agree to defend, indemnify and hold harmless moregift (and its
              officers, directors, employees, agents, affiliates, contractors,
              licensors, suppliers, successors and assigns) from and against any
              claims, demands, liabilities, damages, judgements, awards, losses,
              costs (including reasonable attorneys’ fees), arising out of or
              relating to your breach of this TOS, including, but not limited
              to, your User Content, your violation of any applicable law or the
              rights of a third party, or your use of the Site or the Service
              other than as expressly authorized by moregift.
            </p>
          </div>
          <div className={style.info}>
            <h2>9. Electronic Communication.</h2>
            <p>
              You consent to receive communications electronically from MoreGift
              and its affiliates and partners. MoreGift will communicate with
              you by email or by posting notices on the Site. You agree that all
              agreements, notices, disclosures, and other communications that
              are provided to you electronically satisfy any legal requirement
              that such communications be in writing
            </p>
          </div>
          <div className={style.info}>
            <h2>10. Links.</h2>
            <p>
              The Site or third parties may provide links to other Websites or
              resources. Because moregift has no control over such sites and
              resources, you acknowledge and agree that moregift is not
              responsible for the availability of such external sites or
              resources and does not endorse and is not responsible or liable
              for any content, advertising, products or other materials on or
              available from such sites or resources. You further acknowledge
              and agree that moregift shall not be responsible or liable,
              directly or indirectly, for any damage or loss caused or alleged
              to be caused by or in connection with use of or reliance on any
              such content, goods or services available on or through any such
              site or resource.
            </p>
          </div>
          <div className={style.info}>
            <h2>11. Changes to this TOS.</h2>
            <p>
              moregift reserves the right to revise this TOS at any time and in
              moregift's sole discretion. moregift will indicate at the top of
              this TOS the date it was last revised. Any changes will be
              effective immediately upon posting the revised version (or such
              later effective date as may be indicated at the top of the revised
              TOS). It is your responsibility to regularly check the Site to
              determine if there have been changes to this TOS and to review
              such changes. Your continued use of the Site and/or the Service
              following the posting of any changes to this TOS will constitute
              your acceptance of any such changes. If you do not agree to the
              changes, you must stop using the Site and the Service.
            </p>
          </div>

          <div className={style.info}>
            <h2>12. Procedure for Claims of Copyright Infringement.</h2>
            <p>
              MoreGift respects the intellectual property of others, and we
              expect our users to do the same. If you believe that your work has
              been copied in a way that constitutes copyright infringement,
              please contact moregift’s Copyright Agent at
              <a
                href="mailto: support@moregift.app"
                style={{ paddingInline: "4px" }}
              >
                support@moregift.app
              </a>
              and provide the following information:
            </p>
            <div className={style.item}>
              <p>
                1. an electronic or physical signature of the person authorized
                to act on behalf of the owner of the copyright or other
                intellectual property interest;
              </p>
              <p>
                2. a description of the copyrighted work or other intellectual
                property that you claim has been infringed;
              </p>
              <p>
                3. a description of where the material that you claim is
                infringing is located on the Site;
              </p>
              <p>4. your address, telephone number, and email address;</p>
              <p>
                5. a statement by you that you have a good faith belief that the
                disputed use is not authorized by the copyright owner, its
                agent, or the law;
              </p>
              <p>
                6. a statement by you, made under penalty of perjury, that the
                above information in your notice is accurate and that you are
                the copyright or intellectual property owner or authorized to
                act on the copyright or intellectual property owner's behalf
              </p>
              <p>
                7. moregift’s agent for notice of claims of copyright or other
                intellectual property infringement can be reached as follows: By
                <a
                  href="mailto:support@moregift.app"
                  style={{ textDecoration: "none", paddingInline: "4px" }}
                >
                  email: support@moregift.app
                </a>
              </p>
            </div>
          </div>
          <div className={style.info}>
            <h2>13. Miscellaneous.</h2>
            <p>
              If any provision of this TOS is deemed by a competent court to be
              invalid, void, or unenforceable, the parties agree that the court
              should endeavor to give effect to the parties’ intentions as
              reflected in the applicable provision, and any unenforceable
              provision shall be deemed severable and shall not affect the
              validity and enforceability of any remaining provision. From time
              to time MoreGift may offer special promotional offers which may or
              may not apply to your moregift account. Headings are for reference
              purposes only and do not limit the scope or extent of such
              sections.
            </p>
            <p>
              This TOS and the relationship between you and moregift will be
              governed by the laws of the state of Delaware without regard to
              its conflict of law provisions. You and moregift agree to submit
              to the personal jurisdiction of the federal and state courts
              located in the state of Delaware with respect to any legal
              proceedings that may arise in connection with this TOS.
              Notwithstanding any other provisions of this TOS, or any general
              legal principles to the contrary, any provision of this TOS that
              imposes or contemplates continuing obligations on a party will
              survive the expiration or termination of this TOS. Any failure of
              moregift to act with respect to a breach by you or others shall
              not serve as a waiver of its right to act with respect to
              subsequent or similar breaches. Except as otherwise expressly
              provided in this TOS, there shall be no third-party beneficiaries
              to this TOS. Except for the applicable terms of any Customer
              Agreement between your organization and MoreGift, this TOS
              constitutes the entire agreement between you and moregift with
              respect to the Site and the Service, superseding any prior
              understandings, representations, and agreements between you and
              moregift with respect to the Site and the Service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
