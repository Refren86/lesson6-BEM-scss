import React from "react";

import { MainHeading } from "./MainHeading/MainHeading";
import { ProfileBlock1 } from "./ProfileBlock1/ProfileBlock1";
import { ProfileBlock2 } from "./ProfileBlock2/ProfileBlock2";

import "./Main.scss";

import profile_image1 from "../../utils/images/profile1.png";
import profile_image2 from "../../utils/images/profile2.png";
import profile_image3 from "../../utils/images/profile3.png";
import profile_image4 from "../../utils/images/profile4.png";

export const Main = () => {
  const headingFromAPI = "Webdesign Agentur";
  const textFromAPI =
    "Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesignund Online-Marketing an. Seit 2006 kultivieren wir.";

  return (
    <main className="main">
      <MainHeading />
      <section className="profile">
        <ProfileBlock1
          image={profile_image1}
          heading={headingFromAPI}
          text={textFromAPI}
        />

        <ProfileBlock2
          image={profile_image2}
          heading={headingFromAPI}
          text={textFromAPI}
        />

        <ProfileBlock1
          image={profile_image3}
          heading={headingFromAPI}
          text={textFromAPI}
        />

        <ProfileBlock2
          image={profile_image4}
          heading={headingFromAPI}
          text={textFromAPI}
        />
      </section>
    </main>
  );
};
