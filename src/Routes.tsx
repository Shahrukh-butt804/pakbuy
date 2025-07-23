import { Provider } from "react-redux";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import OurScience from "./pages/ourScience";
import RdInnovation from "./pages/rdInnovation";
import ShopTests from "./pages/shopTests";
import GeneCore from "./pages/geneCore";
import Franchise from "./pages/franchise";
import GlobalImpact from "./pages/globalImpact";
import Healthcare from "./pages/healthcare";
import PatientsPortal from "./pages/patientsPortal";
import EnterpriseLicensing from "./pages/enterpriseLicensing";
import Testimonials from "./pages/testimonials";
import ContactUs from "./pages/contactUs";
import Hipaa from "./pages/hipaa";
import MedicalDisclaimer from "./pages/medicalDisclaimer";
import WaiverLiability from "./pages/waiverLiability";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsService from "./pages/termsService";
import MediaKit from "./pages/mediaKit";
import DeveloperAccess from "./pages/developerAccess";
import InvestorRelations from "./pages/investorRelations";
import ConferencesEvents from "./pages/conferencesEvents";
import ResearchLibrary from "./pages/researchLibrary";
import NewsroomBlog from "./pages/newsroomBlog";
import Newsartical from "./pages/newsartical";
import NewsArticleExpands from "./pages/newsArticleExpands";
import ConsentForm from "./pages/consentForm";
import Careers from "./pages/careers";
import GeneDiet from "./pages/geneDiet";
import GeneMind from "./pages/geneMind";
import GenePain from "./pages/genePain";
import GeneEstrogen from "./pages/geneEstrogen";
import GeneBaby from "./pages/geneBaby";
import GeneSport from "./pages/geneSport";
import GeneHealth from "./pages/geneHealth";
import GeneResilience from "./pages/geneResilience";
import Dpa from "./pages/dpa";
import GeneCancer from "./pages/geneCancer";
import GenePharma from "./pages/genePharma";


import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router";

// const PrivateRoute = () => {
//   // const { token } = useSelector((state) => state.auth);
//   const token = "";

//   return token ? <Outlet /> : <Navigate to="/comingsoon" />;
// };



// const { hostname } = window.location;
// var basename = "/"
// if (hostname.includes("react.customdev.solutions")) {
//   basename = "/cruise-tails"
// }

function AppRoutes() {
  return (
    <>
      <Provider store={store}>
        {/* <BrowserRouter basename={basename}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/ourScience" element={<OurScience />} />
            <Route path="/rdInnovation" element={<RdInnovation />} />
            <Route path="/shopTests" element={<ShopTests />} />
            <Route path="/geneCore" element={<GeneCore />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/globalImpact" element={<GlobalImpact />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/patientsPortal" element={<PatientsPortal />} />
            <Route path="/enterpriseLicensing" element={<EnterpriseLicensing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/hipaa" element={<Hipaa />} />
            <Route path="/medicalDisclaimer" element={<MedicalDisclaimer />} />
            <Route path="/waiverLiability" element={<WaiverLiability />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termsService" element={<TermsService />} />
            <Route path="/mediaKit" element={<MediaKit />} />
            <Route path="/developerAccess" element={<DeveloperAccess />} />
            <Route path="/investorRelations" element={<InvestorRelations />} />
            <Route path="/conferencesEvents" element={<ConferencesEvents />} />
            <Route path="/newsArticleExpands" element={<NewsArticleExpands />} />
            <Route path="/researchLibrary" element={<ResearchLibrary />} />
            <Route path="/newsroomBlog" element={<NewsroomBlog />} />
            <Route path="/newsartical" element={<Newsartical />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/geneDiet" element={<GeneDiet />} />
            <Route path="/geneMind" element={<GeneMind />} />
            <Route path="/genePain" element={<GenePain />} />
            <Route path="/geneEstrogen" element={<GeneEstrogen />} />
            <Route path="/geneBaby" element={<GeneBaby />} />
            <Route path="/geneSport" element={<GeneSport />} />
            <Route path="/geneHealth" element={<GeneHealth />} />
            <Route path="/geneResilience" element={<GeneResilience />} />
            <Route path="/consentForm" element={<ConsentForm />} />
            <Route path="/dpa" element={<Dpa />} />
            <Route path="/geneCancer" element={<GeneCancer />} />
            <Route path="/genePharma" element={<GenePharma />} />

            {/* <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard"  element={<Home />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default AppRoutes;
