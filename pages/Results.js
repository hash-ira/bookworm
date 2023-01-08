import React, { useEffect, useState } from "react";
import BigResult from "../components/ResultComponents/BigResult";
import SmallResult from "../components/ResultComponents/SmallResult";
import styles from "../styles/Results.module.css";
import Link from "next/link";

function Results() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (process.browser) {
      setResult(JSON.parse(window.localStorage.getItem("booksLocalStorage")));
    }
  }, []);

  if (!result) return null;
  return (
    <div className={styles.result_page_container}>
      <div className={styles.top_bar}>
        <Link href="/">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/left.png"
            alt="Back"
            className={styles.result_page_back_on_top}
          />
        </Link>

        <h1 className={styles.result_page_search_input_on_top}>
          "{window.localStorage.getItem("SearchedInput")}"
        </h1>
      </div>
      <div className={styles.result_page_list_of_small_results}>
        <BigResult
          title={result.items[0].volumeInfo.title}
          imgurl={result.items[0].volumeInfo.imageLinks?.thumbnail}
          author={result.items[0].volumeInfo?.authors?.[0]}
          pages={result.items[0].volumeInfo.pageCount}
          description={result.items[0].volumeInfo.description}
        />

        <div className={styles.all_small_result_container_div}>
          {
            result.items.slice(1).map(
              (book, key) => (
                <SmallResult
                  title={book.volumeInfo.title}
                  imgurl={book.volumeInfo.imageLinks?.thumbnail}
                  author={book.volumeInfo?.authors?.[0]}
                />
              )

            )
          }
        </div>
      </div>
    </div>
  );
}
export default Results;
