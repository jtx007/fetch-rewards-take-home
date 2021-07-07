import React, { useEffect, useState } from "react";
import ListContainer from "./ListContainer";
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

  const displayListContainers = (data) => {
    let listHash = {};
    // new data structure could also be used for Search/Filter functionality
    data.forEach((listItem) => {
      const { listId, id, name } = listItem;
      if (listHash[listId]) {
        listHash[listId].push({
          id,
          name,
          listId,
        });
      } else {
        listHash[listId] = [{ id, name, listId }];
      }
    });
    return Object.keys(listHash).map((listId) => {
      return (
        <ListContainer
          key={listId}
          listId={listId}
          listItems={listHash[listId]}
        />
      );
    });
  };

  // Conditional rendering

  return (
    <div data-testid="list" className="list">
      {loading && <Loader />}
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        displayListContainers(listItems)
      )}
    </div>
  );
}

export default App;
