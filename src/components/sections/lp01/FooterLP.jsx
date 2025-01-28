import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="w-full text-center font-mainFont py-[36px] opacity-70">
            <p>
              {contentLp01.footer.copyrightLine}
              <br />
              <br />
              {/* {contentLp01.footer.disclaimer} */}
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
