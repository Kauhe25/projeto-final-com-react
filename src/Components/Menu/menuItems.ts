import type { NavigateFunction } from "react-router";

const menuItems = (navigate: NavigateFunction) => {
  return [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => { navigate('/'); }
    },
    {
      label: 'Departamentos',
      icon: 'pi pi-building',
      items: [
        [
          {
            label: 'Ações',
            items: [
              { 
                label: 'Listar', 
                icon: 'pi pi-table', 
                command: () => { navigate('/departamentos'); } 
              },
              { 
                label: 'Cadastrar', 
                icon: 'pi pi-table', 
                command: () => { navigate('/departamentos/new'); } 
              },
          ]
          }
        ]
      ]
    }
  ];
}

export default menuItems;