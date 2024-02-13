export default {
    items: state => state.todo.items || [],
    filteredItems: state => state.todo.filteredItems || [],
    loading: state => state.todo.loading,
}