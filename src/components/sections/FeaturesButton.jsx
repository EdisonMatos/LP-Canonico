import { useState } from "react";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ServiceDetailCard from "../cards/ServiceDetailCard";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function FeaturesButton() {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <div>
      <SectionArea
        id={"service"}
        className="py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] bg-quinary squares"
      >
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color="dark"
        />
        <SectionWrapper>
          <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card1.img}
              title={content.texts.features.card1.title}
              description={content.texts.features.card1.subtitle}
              buttonLabel={content.texts.features.card1.buttonLabel}
              animation
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card2.img}
              title={content.texts.features.card2.title}
              description={content.texts.features.card2.subtitle}
              buttonLabel={content.texts.features.card2.buttonLabel}
              animation
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card3.img}
              title={content.texts.features.card3.title}
              description={content.texts.features.card3.subtitle}
              buttonLabel={content.texts.features.card3.buttonLabel}
              animation
            />
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        <div>{modalSubtitle}</div>
        <div className="m-0">{modalContent}</div>
      </Dialog>
    </div>
  );
}
