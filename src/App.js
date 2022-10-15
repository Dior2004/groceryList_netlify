import "./css/App.css";
import { useState, useEffect } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import Search from "./components/Search";

function App() {
  // getting items from local storage

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  // search

  const [search, setSearch] = useState("");

  // new items

  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const addItem = async (newItem) => {
    // define the id for our new item if there is an item in the previous array get the id of the last item and + 1 else give it 1 as it is going to be the first element
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const customNewItem = { id, checked: false, text: newItem };
    const newListItems = [...items, customNewItem];
    setItems(newListItems);
  };

  // changing info in an array + object

  const handleCheck = async (id) => {
    const listItems = items.map((element) =>
      element.id === id ? { ...element, checked: !element.checked } : element
    );
    setItems(listItems);
  };

  // delete

  const handleDelete = async (id) => {
    const listItems = items.filter((element) => element.id !== id);
    setItems(listItems);
  };

  // form submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <nav>
          <h1>Groceries List</h1>
        </nav>

        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        <Search search={search} setSearch={setSearch} />

        {/* props */}

        <main>
          <Content
            // filtering a list of items

            items={items.filter((e) =>
              e.text.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            search={search}
          />
        </main>

        <Footer lenght={items.length} />
      </div>
    </div>
  );
}

export default App;
