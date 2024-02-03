import { TbBrandAuth0 } from "react-icons/tb";
import { FaBuildingColumns, FaLocationDot, FaSquarePhone, FaFax, FaGlobe } from "react-icons/fa6";
import { HiMiniIdentification } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

export const CreateFooterContent = (t: any) => ({
  responsibalityContent: (
    <>
      <h4>{t('Footer.responsibilityContent.title')}</h4>
      <ul>
        <li>
          <span><TbBrandAuth0 /></span>
          <p>{t('Footer.responsibilityContent.contentList.item1')}</p>
        </li>
        <li>
          <span><FaBuildingColumns /></span>
          <p>{t('Footer.responsibilityContent.contentList.item2')}</p>
        </li>
        <li>
          <span><FaLocationDot /></span>
          <p>{t('Footer.responsibilityContent.contentList.item3')}</p>
        </li>
        <li>
          <span><FaSquarePhone /></span>
          <p>{t('Footer.responsibilityContent.contentList.item4')}</p>
        </li>
        <li>
          <span><HiMiniIdentification /></span>
          <p>{t('Footer.responsibilityContent.contentList.item5')}</p>
        </li>
      </ul>
    </>
  ),
  WebsiteInfoContent: (
    <>
      <h4>{t('Footer.WebsiteInfoContent.title')}</h4>
      <ul>
        <li>
          <span><FaFax /></span>
          <p>{t('Footer.WebsiteInfoContent.contentList.item1')}</p>
        </li>
        <li>
          <span><MdEmail /></span>
          <p>{t('Footer.WebsiteInfoContent.contentList.item2')}</p>
        </li>
        <li>
          <span><FaGlobe /></span>
          <p>{t('Footer.WebsiteInfoContent.contentList.item3')}</p>
        </li>
      </ul>
    </>
  )
});
