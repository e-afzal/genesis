// STYLES
import styles from "@/public/styles/privacy.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

const Privacy = () => {
  const introduction = [
    "Genesis Motor America and its parent company and affiliates (“Genesis” “we,” “us” or “our”) are committed to privacy and transparency. This Genesis Motor America Privacy Policy (the “Privacy Policy” or “Policy”) describes how we collect, use, disclose and otherwise process the personal information described in this Privacy Policy, as well as the rights and choices individuals have regarding such personal information. If you are a California resident, please review our California Privacy Supplement for additional information about our information practices and your California privacy rights as required by California privacy law, including your right to opt-out of sales of personal information.",
    "Genesis will access, collect, use, disclose and otherwise process your personal information, including sensitive personal information, as described in this Policy. Please read this Policy carefully, including the information about the privacy choices you have regarding your personal information.",
    "Your access to and use of our websites, apps, products and services, and any dispute over privacy, is subject to this Privacy Policy and our applicable terms and agreements, including the Genesis Motor America Website and Webservice Terms of Use,⁠ and Connected Services Agreement Terms and Conditions⁠ (collectively and as applicable, the “Terms”). The Terms are incorporated by reference into this Privacy Policy.",
  ];
  const scope = [
    "Our websites (each a “Site”), online services and mobile applications (each as “App”) that link to or display this Privacy Policy and our Vehicle Technology and Services (as defined and further described here), as well as the services that Genesis makes available to through these (collectively, the “Services”)",
    "Current and former US owner(s) of Genesis vehicles, and Bluelink® subscribers and registered users",
    "Purchasers and prospective purchasers of Genesis vehicles, products and services and other individuals who receive our marketing and promotional communications",
    "Registrants and participants in contests, promotions and surveys that we conduct or sponsor",
    "Individuals that contact us or otherwise interact with us related to our vehicles, Services, or business operations",
  ];
  const additionalNotices = [
    "We may also provide additional privacy notices that apply to specific services and supplement this Privacy Policy, including the Genesis Vehicle Technologies and Services Privacy Notice, which applies to and provides additional information about our collection, use and disclosure of personal information related to our vehicle technologies and services and is incorporated here by reference into this Privacy Policy.",
    "These additional notices are intended to supplement the information in this Privacy Policy and to provide additional details about our information practices for specific services.",
    "In addition, we may offer sweepstakes, contests, special events, incentives, and other promotional events and activities (“Programs”). The terms and conditions for these Programs may include information on our privacy and information practices; if there is a conflict between the Program terms and this Privacy Policy, the Program terms will govern with regard to the personal information collected related to the Program. Please review all of the information about a Program before you provide us (or our business partners) with any personal information.",
  ];
  const uncovered = [
    "This Privacy Policy does not apply to the collection, use, and disclosure of personal information by independently owned and operated Genesis dealerships or businesses.",
    "In addition, this Privacy Policy does not generally apply to the personal information that we collect about (i) job applicants and candidates, (ii) employees, independent contractors and other workers, or (iii) owners and personnel of Genesis dealers. If you are a California resident, a different privacy policy (and not this one) applies to our use, disclosure and processing of such personal information about you.",
  ];
  const directly = [
    "Account, registration, and subscriptions: when you register for Bluelink® connected services, create a MyGenesis account, or otherwise activate, subscribe to or register for our Services, we collect personal information such as your name, email address, phone number, address, and other contact information; VIN and associated vehicle data; date of purchase; billing information and subscription details and history. We also collect certain optional information you choose to provide to us, such as your user preferences, information about other approved drivers of your vehicle, and demographic information.",
    "Biometrics and credentials: you may be able to enroll a biometric identifier (e.g., fingerprint or facial recognition) to establish a biometric access credential for access certain features and Services, such as digital key and other Vehicle Technology and Services. (See our Vehicle Technologies and Services Privacy Notice for more information.)",
    "Purchases and payments: if you purchase products or services from us, such as branded merchandise or parts, whether online or over the phone, we collect information related to your order, which may include name, billing and shipping address, and payment details. We may work with external payment processors and fulfillment partners to process these payments.",
    "Surveys or research: if you respond to surveys or similar requests that we send or administer, we will your personal information, including name and contact information, vehicle data, and survey responses.",
    "Communications and requests: if you contact us by email, mail, phone, chat or otherwise regarding the Services, we collect and maintain a record of your contact details, communications and our responses. If you call us, we may also record calls and maintain logs and records of those calls. We also collect personal information when you request quotes or other information from us (such as request a quote, find a vehicle or locate a dealer) or sign up for news and offers from us. The information we may collect includes your name, contact information, location, vehicle of interest, current vehicle and other information.",
    "Promotions and events: we may sponsor or offer contests, sweepstakes, special events, incentives, and other promotions (collectively, “events”), online and offline. If you choose to participate in an Event, we may collect personal information, including your name, age, contact information, vehicle of interest or other information. Certain events may be co-branded with one of our partners or run on an external website, such as Facebook. In these instances, the collection of your personal information may occur directly or through an external website.",
    "User content: if you choose to engage in forums, blogs, or similar features offered by us, or submit content to us through the Services we may maintain records about the content you post, such as comments, reviews or questions, as well as data and time and other metadata associated with this content. Certain content may also be viewable by other visitors and users of the Services.",
  ];
  const automatic = [
    "Vehicle Technologies and Services: as further set forth in the Vehicle Technologies and Services Privacy Notice, we collect and derive personal information through our Vehicle Technologies and Services, including information about you and your vehicle, as well as other users of your vehicle and the Services, such as vehicle usage and performance data, driving data, geolocation data, settings and presets, and features and services accessed and used (including third party provided), and other information related to your use of our Vehicle Technologies and Services.",
    "Browsing and usage data: if you use one of our Sites or Apps or interact with our content or online services, we may collect or derive information about your use of these Services, such as your device and browser information, activity and usage data (including links clicked, pages viewed and other activity information), and location information derived from your IP address or (with you permission) your mobile device.",
    "Other information: if you visit a physical Genesis location, we may use video and other security monitoring to secure our premises, which may lead to the collection of personal information about visitors to our premises. If you call or contact us, we may also maintain call records for quality, training and support purposes.",
  ];
  const otherSources = [
    "Vehicle sales records and other public sources, third party data providers we work with to update and enhance our customer records, and third parties that provide us leads including lists of potential vehicle purchasers or current or former owners.",
    "Affiliates and partners, including providers of certain Vehicle and Technology Services, such as satellite radio and roadside assistance providers, and platform providers and app stores through which we make our Apps and certain features (such as Digital Key) available.",
    "Genesis dealers (which are all independently owned and operated) who may provide us with purchase data, and information about services and repairs, warranty claims, and quality and customer support, as well as data about prospective buyers.",
    "If you log in through or integrate a third-party account (such as Google, Amazon, Apple) with our Services, we access and obtain certain information (as authorized by you and subject the applicable terms of the third-party platform). For information about sharing by a third-party platform and revoking access to your account or content, you should consult respective privacy notices and terms and review your privacy settings for such third-party account.",
    "If you post information about us or engage with us or our content on social media and other third-party platforms, we may obtain personal information about you from that third party platform. These third-party platforms and services control how your personal information is collected, shared and displayed through their respective platforms.",
  ];
  const personalInformation = [
    "Providing our Services: to provide and maintain our Services; to authenticate users; to perform technical operations, such as updating software; to respond to your requests; to administer events that you participate in; to fulfill your orders and process your payments; to provide technical support; and for other customer service and support purposes.",
    "Communicating with you: to communicate with you about your vehicle, our products, and the Services, such as to send you notices and alerts, conduct surveys, and respond to your requests.",
    "Safety, recall and warranty: for safety, recall and warranty purposes, such as to send recall notices, process recall and warranty claims, and for other purposes related to vehicle safety.",
    "Analyzing and improving our Services and offerings: to better understand how users access and use our vehicles, other products, and the Services, participate in our events, or interact with us; for research and analytical purposes, such as to evaluate and improve our Services and business operations; to develop new features, products, or services; for quality and training purposes; and to otherwise improve our Services and user experiences.",
    "Personalizing content and experiences: to tailor content we send or display on the Services in order to offer location customization and personalized help and instructions and to otherwise personalize your experiences; to reach you with more relevant ads and to measure and improve our ad campaigns.",
    "Marketing and promotional purposes: to send you newsletters, offers or other information we think may interest you; to contact you about our products, services or information we think may interest you; to administer promotions and contests; and to promote other services we offer.",
    "In support of our general business operations: where necessary to the administration of our general business, accounting, record keeping and legal functions, including to analyze operational and business results and risks, to collect outstanding amounts owed, and maintain business records.",
    "Planning and implementing business transactions: in order to plan and implement an actual or contemplated merger, acquisition, financing, sale, bankruptcy or restructuring of all or part our business or assets.",
    "Securing and protecting our rights: to protect our business operations, secure our network and information technology, assets and services; to prevent and detect fraud, unauthorized activities, access and other misconduct; where we believe necessary to investigate, prevent or take action regarding suspected violations of our Terms and other agreements with you, as well as fraud, illegal activities and other situations involving potential threats to the rights or safety of any person or third party.",
    "Complying with legal requests and obligations: to comply with the law or legal proceedings. For example, we may disclose information in response to subpoenas, court orders, and other lawful requests by regulators and law enforcement, including responding to national security or law enforcement disclosure requirements.",
  ];
  const disclosures = [
    "Affiliates and subsidiaries: we may share your personal information with Hyundai Motor America, as well as Hyundai Motor Company, our parent company headquartered in South Korea, and our subsidiaries. Genesis may also share your personal information with our finance affiliate Hyundai Capital America and our R&D affiliate Hyundai America Technical Center, Inc., both located in the United States.",
    "Vendors and service providers: we may disclose personal information to our vendors, service providers, suppliers, contractors or agents who process such data in order to provide services to us or to perform functions on our behalf.",
    "Payment services companies: In some cases, we use third party payment and transaction services to facilitate your transactions and process your orders. In such cases, we will share your personal information and credit card information with third party payment services companies solely for the purpose of completing the transaction or processing your order.",
    "Third party services and providers: some of our Services are provided or supported by third party businesses who may collect and receive personal information about you as part of their provision of the particular feature, service or application. For example, cellular data carriers, navigation and traffic services, and emergency services. In addition, some of our Sites and other Services may enable you to make purchases from third-party businesses. Any time you order from a third-party business, that business will collect your personal information as part of your order. The use of your personal information by these third-party businesses will be subject to their respective privacy policies and terms and these third parties may contact you directly, for promotional and transactional purposes.",
    "Dealers: we may share personal information about users of Services, vehicle owners and prospective buyers/shoppers with our authorized dealers, and licensees, who may contact you directly for customer satisfaction, sales, marketing and similar purposes.",
    "Marketing and advertising partners: we may also make certain information that includes personal information available to third parties third parties (such as analytics providers and ad companies) in support of our marketing, analytics, advertising and campaign management (see “Cookies, Targeting and Analytics” below, for more information). We may also make available certain third party offers that we think may interest you. If you click or otherwise choose to take advantage of a third-party offer, we may share personal information with that third party to facilitate your interaction with them.",
    "Promotional Programs: we may invite you to participate in sweepstakes, contests, special events, incentives, and other promotional events, activities and programs (“Programs”), which are oftentimes co-sponsored or marketed with an unaffiliated business partner. If you interact directly with, or indicate your interest in receiving information or communications directly from, a third party as part of a Program, your personal information may be shared with that third party, who will use it in accordance with their respective privacy policy. Please review the Program terms and conditions before you provide us (or our business partners) with any personal information.",
    "Public postings: if you voluntarily disclose information, personal or otherwise, online in any community area (whether through Genesis’s websites or any other Service available online), that information can be collected and used by others. Accordingly, you should use caution when sharing any personal information or other sensitive information with others in any community area (whether through Genesis’s websites or any other Service available online).",
    "Business transfers: we may disclose and transfer personal information as part of any actual or contemplated merger, acquisition, financing, sale, bankruptcy or restructuring of all or part our business or assets, including during negotiations and due diligence related to such business transactions.",
    "Protecting rights and interests: we may disclose personal information to protect or defend the safety, rights, property, or security of Genesis, third parties or the general public, including to protect the Services, to detect, prevent, or otherwise address fraud, security, technical issues, or other activity which we, in our sole discretion, consider to be, or to pose a risk of being, illegal, unethical, or legally actionable activity. We may also use personal information as evidence in litigation in which we are involved, and as necessary to enforce this Privacy Policy, our Terms, and other applicable agreements with you.",
    "Legal compliance and lawful requests: we may disclose personal information to comply with applicable legal or regulatory obligations, including as part of a judicial proceeding, in response to a subpoena, warrant, court order, or other legal process, or to cooperate with investigations or lawful requests, whether formal or informal, from law enforcement or government entities.",
  ];
  const cookies = [
    "Cookies: These are small files that are transferred to and stored on your web browser by a website. Some cookies are used to enable features, remember user preferences and settings, verify credentials, prevent fraud, secure our Services and optimize performance, while others are used to track activity and usage within Services (such as content viewed, links clicked, features accessed, searches, and date and time stamps) in order to personalize content, improve and measure our campaigns, and for targeted advertising and analytics purposes. Most browsers allow you to delete cookies and to set your browser to refuse all cookies or inform you when a cookie is set. However, some website features or services may not function properly without cookies.",
    "Web beacons (also called pixel tags and clear GIFs): These are tiny graphics with a unique identifier, similar in function to cookies. While cookies are stored locally on your device, pixel tags are embedded invisibly within web pages and online content. Some of our web pages, commercial email messages and/or newsletters may contain pixel tags. We may use these to enhance and personalize the Sites and Services, to provide product information and advertisements that are more relevant to your interests, compile statistics about the usage of our Sites and other Services, improve and personalize our advertising, and to track the number of users who have opened and acted upon our commercial email messages.",
    "Log files: We collect log information to analyze trends, administer our Sites and the Services, track users’ movement around our Sites and gather broad demographic information for aggregate use in improving the Sites and other Services.",
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <h2 className={styles.main_title}>privacy policy</h2>

        {/* INTRODUCTION */}
        <section id={styles.introduction}>
          <h4>
            GENESIS MOTOR AMERICA PRIVACY POLICY{" "}
            <span>EFFECTIVE DATE: January 1, 2023</span>
            {introduction.map((each, index) => (
              <p key={index}>{each}</p>
            ))}
          </h4>
        </section>

        {/* SCOPE */}
        <section id={styles.scope}>
          <h4>SCOPE</h4>
          <p>
            This Privacy Policy applies to our collection, use and disclosure of
            personal information related to:
          </p>
          <ul>
            {scope.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
          <p>
            This Privacy Policy is intended to describe our overall privacy
            practices with regard to the personal information subject to this
            Policy. Our actual collection, use, disclosure, and processing of
            personal information about individuals will vary depending upon the
            circumstances.
          </p>
        </section>

        {/* ADDITIONAL PRIVACY NOTICES */}
        <section id={styles.additional}>
          <h4>Additional Privacy Notices and Terms</h4>
          {additionalNotices.map((each, index) => (
            <p key={index}>{each}</p>
          ))}
        </section>

        {/* NOT COVERED */}
        <section id={styles.uncovered}>
          <h4>Not Covered by this Privacy Policy</h4>
          {uncovered.map((each, index) => (
            <p key={index}>{each}</p>
          ))}
        </section>

        {/* OUTSIDE */}
        <section id={styles.outside}>
          <h4>Users Outside the U.S.</h4>
          <p>
            Our Services are intended for use and access by U.S. residents only.
            Genesis does not knowingly collect, process, access or intend to
            access the personal information of persons residing outside of the
            U.S., including in Europe and China. If you do not reside in the
            U.S., you should visit the Genesis-affiliated website that is
            applicable to your country or region.
          </p>
        </section>

        {/* COLLECTED DIRECTLY */}
        <section id={styles.directly}>
          <h4>Information Collected Directly</h4>
          <p>
            We collect personal information when you engage with Genesis, its
            dealers, or its service providers directly, such as when buying a
            vehicle, registering for a service or creating an account,
            requesting information from us, making part or service requests;
            participating in promotional activities, such as surveys,
            sweepstakes, contests, special events, blogs and chats; or when you
            contact us or otherwise voluntarily provide information to us. This
            information may include:
          </p>
          <ul>
            {directly.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </section>

        {/* AUTOMATICALLY COLLECTED */}
        <section id={styles.automatic}>
          <h4>Information Automatically Collected or Derived</h4>
          <p>
            Genesis also may also derive or automatically collect information
            including personal information related to you and your use of the
            Services. This may include data collected via cookies and web
            beacons, web analytics and log files, vehicle, driver, behavior and
            usage data, such as:
          </p>
          <ul>
            {automatic.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
          <p>
            We may also derive information from the personal information that we
            collect about you in order analyze, develop and improve our
            Services, provide more relevant information or content, and for
            other similar purposes.
          </p>
        </section>

        {/* OTHER SOURCES */}
        <section id={styles.other_sources}>
          <h4>Other Sources of Information</h4>
          <p>
            In addition, Genesis may also obtain personal information about you
            and your vehicle from third parties and other sources, such as:
          </p>
          <ul>
            {otherSources.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </section>

        {/* USE OF PERSONAL INFORMATION */}
        <section id={styles.personal_information}>
          <h4>Uses and Processing of Personal Information</h4>
          <p>
            While the purposes for which we may process personal information
            will vary depending upon the circumstances, in general Genesis
            collects, uses, discloses and otherwise processes personal
            information as set forth below or otherwise directed or authorized
            by you:
          </p>
          <ul>
            {personalInformation.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </section>

        {/* DISCLOSURES OF PERSONAL INFORMATION */}
        <section id={styles.disclosures}>
          <h4>Disclosures of Personal Information</h4>
          <p>
            Generally, we use, disclose and process personal information where
            reasonably necessary to provide and improve our Services, to reach
            you with more relevant information and offers, to support recall,
            warranty and safety purposes, to provide you with information about
            third party offers you may be interested in, to honor your requests
            or authorization, and to achieve the purposes described above, under
            Uses and Processing of Personal Information. In accordance with
            these purposes, personal information may be disclosed to the
            following types of third parties:
          </p>
          <ul>
            {disclosures.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </section>

        {/* AGGREGATE AND NON-IDENTIFIABLE DATA */}
        <section id={styles.aggregate}>
          <h4>Aggregate and Non-Identifiable Data</h4>
          <p>
            We may also collect, use and disclose aggregate, anonymous, and
            other non-identifiable data related to our business and the Services
            for quality control, analytics, research, development and other
            purposes. Where we use, disclose or process de-identified data (data
            that is no longer reasonably linked or linkable to an identified or
            identifiable natural person, household, or personal device) we will
            maintain and use the information in deidentified form and not to
            attempt to reidentify the information, except as permitted by
            applicable privacy laws (such as to confirm whether our
            deidentification processes are reasonable and adequate).
          </p>
        </section>

        {/* COOKIES, TARGETING, AND ANALYTICS */}
        <section id={styles.cookies}>
          <h4>Cookies, Targeting and Analytics</h4>
          <p>
            We and our third-party providers use cookies, web beacons/pixel
            tags, JavaScript, local storage, log files, and other mechanisms
            that automatically collect and record information through our
            Services, including information about your device, browser, usage
            and activities. This data is used to operate, enable and improve our
            Services, analyze usage and performance, track bugs and errors,
            verify account credentials and enable logins, track sessions,
            prevent fraud, and protect and secure our Services, as well as to
            personalize and improve your experiences, improve and measure our
            advertising campaigns, and provide you with more relevant content,
            ads and offers within our Services and on third party sites and
            services.
          </p>
          <ul>
            {cookies.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Privacy;
