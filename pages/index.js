import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import logo from "../public/JHUCCP.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
import styles from "../styles/Home.module.css";
import "../app/globals.css";

export default function Home() {
  const categories = [
    { id: "neonatal", name: "Neonatal Health Care" },
    { id: "neonatal1", name: "Neonatal Health Care1" },
    { id: "neonatal2", name: "Neonatal Health Care2" },
    { id: "neonatal3", name: "Neonatal Health Care3" },
    { id: "neonatal4", name: "Neonatal Health Care4" },
    { id: "neonatal5", name: "Neonatal Health Care5" },
    { id: "neonatal6", name: "Neonatal Health Care6" },
    { id: "neonatal7", name: "Neonatal Health Care7" },
    { id: "neonatal8", name: "Neonatal Health Care8" },
    { id: "neonatal9", name: "Neonatal Health Care9" },
    { id: "neonatal10", name: "Neonatal Health Care10" },
    { id: "neonatal11", name: "Neonatal Health Care11" },
  ];

  const faqs = [
    {
      question: "Question No. 1 is what?",
      answer:
        "1.Yes. It adheres to the WAI-ARIA design pattern.\n .Yes. It adheres to the WAI-ARIA design pattern. \n 3.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer:
        "Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal1",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal2",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
      category: "neonatal",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.category === activeCategory &&
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.home}>
      <div className={styles.fixedHeader}>
        <Header
          logoSrc={logo}
          title="HEALTH CHAT"
          subtitle="Frequently Asked Questions"
        />
        <SearchBar onSearch={setSearchTerm} />
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={(category) => setActiveCategory(category.id)}
        />
      </div>
      <div className={styles.faqContainer}>
        <Accordion type="single" collapsible>
          {filteredFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`${styles.faqItem} ${styles.accordionCard} ${styles.accordionItem}`}
            >
              <AccordionTrigger
                className={`${styles.faqQuestion} ${styles.accordionTrigger}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={`${styles.faqAnswer} ${styles.accordionContent}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
