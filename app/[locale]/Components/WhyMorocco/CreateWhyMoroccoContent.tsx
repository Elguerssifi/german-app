import { GrValidate } from "react-icons/gr";

export const createWhyMoroccoContent = (t: any) => ({
  contentHeader: (
    <>
      <p>
        {t('WhyMorocco.contentHeader.paragraph1')}
        <br />
        <br />
        {t('WhyMorocco.contentHeader.paragraph2')}
        <br />
        <br />
        {t('WhyMorocco.contentHeader.paragraph3')}
        <br />
        <br />
        {t('WhyMorocco.contentHeader.paragraph4')}
      </p>
    </>
  ),
  contentBody: (
    <>
      <ul>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listOne.content1')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listOne.content2')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listOne.content3')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listOne.content4')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listOne.content5')}</p>
        </li>
      </ul>
      <ul>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listTwo.content1')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listTwo.content2')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listTwo.content3')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listTwo.content4')}</p>
        </li>
      </ul>
      <ul>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listThree.content1')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listThree.content2')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listThree.content3')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listThree.content4')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listThree.content5')}</p>
        </li>
        <li>
          <span><GrValidate /></span>
          <p>{t('WhyMorocco.contentBody.listThree.content6')}</p>
        </li>
      </ul>
    </>
  ),
});
