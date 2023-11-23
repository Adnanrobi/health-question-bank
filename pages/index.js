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
  // Use the first category as the default if available
  const [activeCategory, setActiveCategory] = useState(
    categories?.[0]?.id || ""
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts by category and search term
  const filteredFaqs = posts.filter(
    (post) =>
      post.categories.includes(parseInt(activeCategory)) &&
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
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
        {categories.length > 0 && (
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={(category) => setActiveCategory(category.id)}
          />
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
                  {faq.title.rendered}
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
    // Fetch categories
    const categoryRes = await fetch(
      `http://localhost/jhuccp/Wordpress/wp-json/wp/v2/categories`
    );
    if (!categoryRes.ok) {
      throw new Error(
        `Failed to fetch categories, status: ${categoryRes.status}`
      );
    }
    const categories = await categoryRes.json();

    // Fetch up to 100 posts
    const postsRes = await fetch(
      `http://localhost/jhuccp/Wordpress/wp-json/wp/v2/posts?per_page=100`
    );
    if (!postsRes.ok) {
      throw new Error(`Failed to fetch posts, status: ${postsRes.status}`);
    }
    const posts = await postsRes.json();

    // Ensure that categories array is not empty
    if (categories.length === 0) {
      throw new Error("No categories found");
    }

    return {
      props: {
        categories,
        posts,
      },
    };
  } catch (error) {
    console.error("getServerSideProps error:", error.message);

    // Return empty arrays if there was an error fetching data
    return {
      props: {
        categories: [],
        posts: [],
      },
    };
  }
}
