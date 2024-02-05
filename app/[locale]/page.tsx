import {useTranslations} from 'next-intl';
import { createRightHeroItems } from './Components/Hero/createRightHeroItems';
import { createWhyUsItems } from './Components/WhyUs.tsx/createWhyUsItems';
import { createServicesItems } from './Components/ServicesSection/CreateServicesItems';
import { MainServicesContent } from './Components/ServicesSection/CreateServicesItems';
import { createWhyMoroccoContent } from './Components/WhyMorocco/CreateWhyMoroccoContent';
import { CreateFooterContent } from './Components/Footer/CreateFooterContent';
import Hero from './Components/Hero/Hero';
import WhyUs from './Components/WhyUs.tsx/WhyUs';
import Services from './Components/ServicesSection/Services';
import WhyMorocco from './Components/WhyMorocco/WhyMorocco';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';


export default function Home() {
  
  const t = useTranslations()
  const rightHeroItems = createRightHeroItems(t);
  const whyUsItems = createWhyUsItems(t)
  const servicesItems = createServicesItems(t);
  const mainServicesContent = MainServicesContent(t)
  const WhyMoroccoContent = createWhyMoroccoContent(t)
  const footerContent = CreateFooterContent(t)

  return (
    <>
      <Navbar 
        homeLink={t('Navbar.homeLink')}
        servicesLink={t('Navbar.servicesLink')}
        contactLink={t('Navbar.contactLink')}
      />
      <main>
        <Hero 
          leftHeroTitle={t('Hero.leftHeroTitle')}
          leftHeroDescription={t('Hero.leftHeroDescription')}
          leftHeroLink1={t('Hero.leftHeroLink1')}
          leftHeroLink2={t('Hero.leftHeroLink2')}
          rightHeroItems={rightHeroItems}
        />
        <WhyUs items={whyUsItems} title={t('WhyUs.title')}/>
        <Services 
          items={servicesItems}
          title={mainServicesContent.title}
          paragraph={mainServicesContent.paragraph}
        />
        <WhyMorocco 
          title={t('WhyMorocco.title')}
          contentHeader = {WhyMoroccoContent.contentHeader}
          contentBody = {WhyMoroccoContent.contentBody}
        />
        <Contact 
          contactTitle={t('Contact.title')}
          requiredText={t('Contact.requiredText')}
          succesMessage={t('Contact.successMessage')}
          nameLabel={t('Contact.nameLabel')}
          subjectLabel={t('Contact.subjectLabel')}
          emailLabel={t('Contact.emailLabel')}
          emailTextError={t('Contact.emailTextError')}
          messageLabel={t('Contact.messageLabel')}
          buttonText={t('Contact.buttonText')}
        />
        <Footer 
          responsabilityContent={footerContent.responsibalityContent}
          websiteInfoContent={footerContent.WebsiteInfoContent}
          language={t('Footer.language')}
        />
      </main>
    </>
  )
}
