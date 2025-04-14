import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function FeatureImgOnBgCardButton(props) {
  const {
    bgImg,
    title,
    description,
    buttonLabel,
    buttonLink,
    onClick,
    buttonColor,
    bgPosition,
  } = props;

  FeatureImgOnBgCardButton.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
    bgPosition: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] tablet1:w-[47%] desktop1:w-[30%]">
      <div
        className={`${bgPosition} w-full h-[560px] rounded-2xl flex flex-col justify-end bg-top bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-end w-full h-full bg-black bg-opacity-10 rounded-2xl">
          <MotionDivDownToUp className="w-full h-auto bg-white rounded-2xl p-[20px] mx-[10px] mb-[10px] flex flex-col">
            <h1 className="font-mainFont font-medium text-[18px] desktop1:text-paragraph5 desktop2:text-[20px] mb-[10px]">
              {title}
            </h1>
            <p className="font-secondFont text-paragraph3 desktop1:text-paragraph3 text-quaternary mb-[28px]">
              {description}
            </p>
            <div>
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label="Falar com Advogado"
                buttonLink={whatsappContactLink}
                animation
                className="w-[100%]"
                icon={<FaWhatsapp size={24} />}
              />
            </div>
          </MotionDivDownToUp>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
