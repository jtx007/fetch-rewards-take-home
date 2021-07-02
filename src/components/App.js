import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import fetchListItems from "../api/index";
import "../styles/App.css";

function App() {
  // States vital for the app
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        const response = await fetchListItems.get();
        const data = await response.data;
        setListItems(sortAndFormatData(data));
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  // Helper Functions
  const sortAndFormatData = (data) => {
    return data
      .filter((listItem) => (listItem.name ? listItem : null))
      .sort((a, b) => a.listId - b.listId || a.id - b.id);
  };

  const displayListItems = () => {
    return listItems.map((listItem) => (
      <ListItem key={listItem.id} listItem={listItem} />
    ));
  };

  // Conditional rendering

  return (
    <div className="list-container">
      {loading && <Loader />}
      {error ? <ErrorMessage error={error} /> : displayListItems()}
    </div>
  );
}

export default App;
