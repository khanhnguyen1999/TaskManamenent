const apis = {
    tasks: {
      fetchAll: '/tasks',
      add: '/tasks',
      update: (id: number) => `/tasks/${id}`,
      delete: (id: number) => `/tasks/${id}`,
    },
  };
  
  export default apis;
  
  