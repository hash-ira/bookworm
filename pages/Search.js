import styles from "../styles/Search.module.css";
import React, { useEffect, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");

  async function onSearchBook(event) {

    event.preventDefault();

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}`
      );
      const data = await res.json();

      localStorage.setItem("booksLocalStorage", JSON.stringify(data));
      console.log("searching :" ,input)
      localStorage.setItem("SearchedInput", input);

      
    } catch (err) {
      console.error(err);
    }

    setInput("");


    window.location.href = "/Results";  
  }


  return (
    <div className={styles.search_container}>
      <form onSubmit={onSearchBook}>
        <input
          className={styles.search_input}
          placeholder="Book/Author/Keyword..."
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          value="Submit"
          className={`${styles.btn} ${styles.first}`}
        >
          Search
        </button>
      </form>
    </div>
  );
}

