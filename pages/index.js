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
import "../app/globals.css";

export default function Home() {
  const categories = [
    { id: "neonatal", name: "Neonatal Health Care" },
    { id: "neonatal1", name: "Neonatal Health Care1" },
    { id: "neonatal2", name: "Neonatal Health Care2" },
    { id: "neonatal3", name: "Neonatal Health Care3" },
    { id: "neonatal4", name: "Neonatal Health Care4" },
    { id: "neonatal5", name: "Neonatal Health Care5" },
    { id: "neonatal6", name: "Neonatal Health Care" },
    { id: "neonatal7", name: "Neonatal Health Care1" },
    { id: "neonatal8", name: "Neonatal Health Care2" },
    { id: "neonatal9", name: "Neonatal Health Care3" },
    { id: "neonatal10", name: "Neonatal Health Care4" },
    { id: "neonatal11", name: "Neonatal Health Care5" },
  ];

  const faqs = [
    {
      question: "Is it accessible?",
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
    <div className="min-h-screen bg-gray-50">
      <Header
        logoSrc={logo}
        title="HEALTH CHAT"
        subtitle="Frequently Asked Questions"
      />
      <div className="max-w-2xl mx-auto p-4">
        <SearchBar onSearch={setSearchTerm} />
        <div className="bg-white rounded-lg shadow mb-4">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={(category) => setActiveCategory(category.id)}
          />
        </div>
        <div className="faq-container">
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-lg shadow">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
