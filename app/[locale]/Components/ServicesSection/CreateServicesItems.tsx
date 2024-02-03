import { GrValidate } from "react-icons/gr";
import styles from './Services.module.css'

export const MainServicesContent = (t: any) => ({
  title: t('Services.title'),
  paragraph: (
    <>
      {t('Services.paragraph1')}
      <br />
      <br />
      {t('Services.paragraph2')}
      <br />
      <br />
      {t('Services.paragraph3')}
      <br />
      <br />
      {t('Services.paragraph4')}
    </>
  ),
});

export const createServicesItems = (t: any) => [
  {
    title: <>{t('Services.market.title')}</>,
    content: 
      <ul>
       <li><span><GrValidate size={14}/></span><p> {t('Services.market.content1')}</p></li> 
       <li><span><GrValidate size={14}/></span><p> {t('Services.market.content2')}</p></li> 
       <li><span><GrValidate size={14}/></span><p> {t('Services.market.content3')}</p></li> 
       <li><span><GrValidate size={14}/></span><p> {t('Services.market.content4')}</p></li> 
       <li><span><GrValidate size={14}/></span><p> {t('Services.market.content5')}</p></li> 
      </ul>,
  },
  {
    title: <>{t('Services.distribution.title')}</>,
    content: 
      <div>
        <p className={styles.first_para}>{t('Services.distribution.paragraph')}</p>
        <ul>
          <li><span><GrValidate size={14}/></span><p> {t('Services.distribution.content1')}</p></li>
          <li><span><GrValidate size={14}/></span><p> {t('Services.distribution.content2')}</p></li>
          <li><span><GrValidate size={14}/></span><p> {t('Services.distribution.content3')}</p></li>
          <li><span><GrValidate size={14}/></span><p> {t('Services.distribution.content4')}</p></li>
          <li><span><GrValidate size={14}/></span><p> {t('Services.distribution.content5')}</p></li>
        </ul>
      </div>,
  },
  {
    title: <>{t('Services.legal.title')}</>,
    content: 
      <div>
        <p className={styles.first_para}>{t('Services.legal.paragraph')}</p>
        <ul>
          <li><span><GrValidate size={14}/></span><p>{t('Services.legal.content1')}</p></li>
          <li><span><GrValidate size={14}/></span><p>{t('Services.legal.content2')}</p></li>
          <li><span><GrValidate size={14}/></span><p>{t('Services.legal.content3')}</p></li>
          <li><span><GrValidate size={14}/></span><p>{t('Services.legal.content4')}</p></li>
        </ul>
      </div>,
  },
  {
    title: <>{t('Services.other.title')}</>,
    content: 
      <ul>
       <li><span><GrValidate size={14}/></span><p>{t('Services.other.content1')}</p></li> 
       <li><span><GrValidate size={14}/></span><p>{t('Services.other.content2')}</p></li> 
       <li><span><GrValidate size={14}/></span><p>{t('Services.other.content3')}</p></li> 
       <li><span><GrValidate size={14}/></span><p>{t('Services.other.content4')}</p></li> 
      </ul>,
  },
];