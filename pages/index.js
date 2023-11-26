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

export default function Home({ categories, posts }) {
  const filteredCategories = categories.filter(
    (category) => category.name !== "Uncategorized"
  );

  const [activeCategory, setActiveCategory] = useState(
    filteredCategories?.[0]?.id || ""
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = posts.filter(
    (post) =>
      post.categories.includes(parseInt(activeCategory)) &&
      (post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.rendered.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className={styles.home}>
      <div className={styles.fixedHeader}>
        <Header
          logoSrc={logo}
          title="HEALTH CHAT"
          subtitle="Frequently Asked Questions"
        />
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
        {filteredCategories.length > 0 ? (
          <Categories
            categories={filteredCategories}
            activeCategory={activeCategory}
            onCategoryClick={(category) => setActiveCategory(category.id)}
          />
        ) : (
          <p>No categories available.</p>
        )}
      </div>
      <div className={styles.faqContainer}>
        <Accordion type="single" collapsible>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${index}`}
                className={`${styles.faqItem} ${styles.accordionCard} ${styles.accordionItem}`}
              >
                <AccordionTrigger
                  className={`${styles.faqQuestion} ${styles.accordionTrigger}`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: faq.title.rendered }}
                  />
                </AccordionTrigger>
                <AccordionContent
                  className={`${styles.faqAnswer} ${styles.accordionContent}`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: faq.content.rendered }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p>No FAQs available.</p>
          )}
        </Accordion>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const categoryRes = await fetch(
      "http://localhost/jhuccp/Wordpress/wp-json/wp/v2/categories"
    );
    if (!categoryRes.ok) {
      throw new Error(
        `Failed to fetch categories, status: ${categoryRes.status}`
      );
    }
    const categories = await categoryRes.json();

    const postsRes = await fetch(
      "http://localhost/jhuccp/Wordpress/wp-json/wp/v2/posts?per_page=100"
    );
    if (!postsRes.ok) {
      throw new Error(`Failed to fetch posts, status: ${postsRes.status}`);
    }
    const posts = await postsRes.json();

    return {
      props: {
        categories,
        posts,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        categories: [],
        posts: [],
      },
    };
  }
}
