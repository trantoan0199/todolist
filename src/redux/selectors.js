import { createSelector } from "reselect"

export const todoListSelector = state => state.todoList.list
export const searchTextSelector = state => state.filters.search
export const statusSelector = state => state.filters.status

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  (todoList, searchText, status) => {
    return todoList.filter(todo => {
      if (status === "All") return todo.name.includes(searchText)
      return (
        todo.name.includes(searchText) &&
        (status !== "All" && status === "Completed"
          ? todo.status
          : !todo.status)
      )
    })
  }
)
