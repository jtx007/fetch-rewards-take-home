import { render, screen } from "@testing-library/react";
import ListContainer from "../components/ListContainer";
import ListItem from "../components/ListItem";

describe("ListContainer", () => {
  test("displays ListContainer component with expand button", async () => {
    const listId = 1;
    const listItems = [
      { id: 0, listId: 1, name: "Item 0" },
      { id: 4, listId: 1, name: "Item 4" },
      { id: 22, listId: 1, name: "Item 22" },
    ];
    const listContainer = render(
      <ListContainer listId={listId} listItems={listItems} />
    );

    const toggleBtn = await listContainer.findByTestId("toggle");

    expect(screen.getByText(/List 1/)).toBeInTheDocument();
    expect(toggleBtn).toHaveTextContent("Expand");
  });

  test("renders 3 listItems on toggle", async () => {
    const listId = 1;
    const listItems = [
      { id: 0, listId: 1, name: "Item 0" },
      { id: 4, listId: 1, name: "Item 4" },
      { id: 22, listId: 1, name: "Item 22" },
    ];
    const listContainer = render(
      <ListContainer listId={listId} listItems={listItems} />
    );

    const toggleBtn = listContainer.getByTestId("toggle");

    toggleBtn.click();

    expect(screen.queryByText(/List 1/)).toBeNull();
    expect(screen.queryAllByText(/Item/)).toHaveLength(3);
  });
});
