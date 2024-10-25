"use client"
import Image from "next/image";
import {sendContactForm} from "../../../lib/api"
import { useState , useEffect } from "react";
import theme from "@/app/config/theme";
import styles from "./Contact.module.css"
import Container from "../Container/Container";
import { 
  FormControl , 
  FormErrorMessage, 
  FormLabel , 
  Input, 
  Textarea ,
  Button, 
  ChakraProvider,
  Text,
  useToast
} from "@chakra-ui/react";

const initValues = {
  name : "",
  email : "",
  subject : "",
  message : "",
}

const initState = {
  isLoading: false, 
  error: "", 
  emailError: "",
  values: initValues 
};

const Contact = ({
  contactTitle,
  requiredText,
  succesMessage,
  nameLabel,
  subjectLabel,
  emailLabel,
  emailTextError,
  messageLabel,
  buttonText
}) => {

  const toast = useToast();
  const [state,setState] = useState(initState)
  const [touched,setTouched] = useState({})

  const {values , isLoading , error , emailError} = state

  const onBlur = ({target}) => setTouched((prev) => ({
    ...prev,
    [target.name] : true
  }))

  const handleChange = ({target}) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      },
    }));
  }
  useEffect(() => {
    let newEmailError = "";
    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newEmailError = emailTextError;
    }
    setState((prev) => ({
      ...prev,
      emailError: newEmailError, // Set separate emailError state
    }));
  }, [values.email, emailTextError,touched.email]);

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading : true
    }))
    try{
      await sendContactForm(values)
      setTouched({});
      setState(initState);
      toast({
        title: succesMessage,
        status: "success",
        duration: 2000,
        position: "top",
      });
    }catch(error){
      setState((prev) => ({
        ...prev,
        isLoading : false,
        error : error.message
      }))
    }
  }
  return ( 
    <section className={styles.contact} id="contact">
      <ChakraProvider theme={theme}>
        <Container>
        <div className={styles.contact_title}>
          <h3>{contactTitle}</h3>
        </div>
          <div className={styles.row}>
            <div className={styles.responsible_content}>
                <div className={styles.responsible_content_title}>
                  <h4>Responsible Website Information</h4>
                </div>
                <div className={styles.responsible_main_info}>
                  <div className={styles.responsible_image}>
                    <img
                      src="/Assets/profile.png"
                      alt="Responsible Arab Consulting Image"
                    />
                  </div>
                  <div className={styles.responsible_description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates qui! Atque corrupti nulla nisi perferendis fugit odit nesciunt sequi quidem in, ipsum omnis vitae sit deleniti obcaecati? Modi, expedita!</p>
                  </div>
                </div>
            </div>
            <div className={styles.contact_form}>
              {error && (
                <Text color="red.300" my={4} fontSize="xl">
                  {error}
                </Text>
              )}
              <FormControl 
                isRequired 
                mb={5} 
                isInvalid={touched.name && !values.name}
              >
                <FormLabel>{nameLabel}</FormLabel>
                <Input 
                  type="text"
                  name="name"
                  errorBorderColor="red.300"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>{requiredText}</FormErrorMessage>
              </FormControl>
              <FormControl 
                isRequired 
                mb={5} 
                isInvalid={touched.subject && !values.subject}
              >
                <FormLabel>{subjectLabel}</FormLabel>
                <Input 
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>{requiredText}</FormErrorMessage>
              </FormControl>
              <FormControl 
                isRequired 
                mb={5} 
                isInvalid={(touched.email && emailError!=="")}
              >
                <FormLabel>{emailLabel}</FormLabel>
                <Input 
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>{emailTextError}</FormErrorMessage>
              </FormControl>
              <FormControl 
                isRequired 
                mb={5} 
                isInvalid={touched.message && !values.message}
              >
                <FormLabel>{messageLabel}</FormLabel>
                <Textarea 
                  type="text"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>{requiredText}</FormErrorMessage>
              </FormControl>
              <Button
                variant="outline"
                colorScheme="blue"
                isLoading={isLoading}
                isDisabled={!values.name || !values.email || !values.subject || !values.message || emailError!==""}
                onClick={onSubmit}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </Container>
      </ChakraProvider>
    </section>
   );
}
 
export default Contact;