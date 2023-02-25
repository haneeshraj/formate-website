import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import QuestionBox from "@/components/QuestionBox/QuestionBox";
import questions from "public/data/aboutQuestion";

function ContactBoxes({ icon, text }) {
  return (
    <div className={styles.contactBoxContainer}>
      <Image src={`/images/${icon}.png`} width="100" height="100" alt={icon} />
      <span>{text}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - The Formante Recording Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Navbar home />
        {/* Close container */}
        <div className={styles.content}>
          <section className={`${styles.introduction} ${styles.section} `}>
            <div className={styles.introLeft}>
              <h1>THE FORMANTE</h1>
              <h3>Recording Services</h3>
              <p>
                Sunt esse proident id nulla amet labore amet irure in sint est
                esse excepteur. Lorem in et fugiat eu sit. Ullamco incididunt
                culpa mollit aliquip duis nostrud voluptate excepteur sunt
                mollit eiusmod nisi nostrud voluptate.
              </p>
              <div className={styles.buttons}>
                <Button>BUTTON</Button>
                <Button>BUTTON</Button>
              </div>
            </div>
            <div className={styles.introRight}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/home_v2.png"
                  width={587}
                  height={475}
                  alt="home"
                  className={styles.image}
                />
              </div>
            </div>
          </section>
          <section className={`${styles.section} ${styles.about}`}>
            <div className={styles.aboutHeading}>About me</div>
            <p className={styles.aboutPara}>
              Adipisicing dolor duis id sunt quis.
            </p>
            <div className={styles.aboutQuestions}>
              {questions.map((question) => {
                return (
                  <QuestionBox
                    key={question.id}
                    question={question.question}
                    answer={question.answer}
                    icon={question.icon}
                  />
                );
              })}
            </div>
          </section>
          <section className={`${styles.section} ${styles.services}`}></section>
          <section
            className={`${styles.section} ${styles.clientele}`}
          ></section>
          <section className={`${styles.section} ${styles.reviews}`}></section>
          <section className={`${styles.section} ${styles.contact}`}>
            <div className={styles.contactLeftSection}>
              <ContactBoxes />
              <ContactBoxes />
              <ContactBoxes />
              <ContactBoxes />
            </div>
            <div className={styles.contactRightSection}>
              <h1>Get In Touch</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div className={styles.contactDetails}>
                <form onSubmit={() => console.log("it work")}>
                  <label for="firstName">First Name</label>
                  <input type="text" name="firstName" />
                  <label for="lastName">Last Name</label>
                  <input type="text" name="lastName" />
                  <label for="email">E-mail</label>
                  <input type="email" name="email" />
                  <label for="phoneNumber">Phone Number</label>
                  <input type="text" name="phoneNumber" />
                  <label for="message">Message</label>
                  <textarea name="firstName" />
                </form>
              </div>
              <Image src={"/images/"} alt={"image"} width={300} height={300} />
            </div>
          </section>
        </div>
        <Footer />
      </div>{" "}
    </>
  );
}
