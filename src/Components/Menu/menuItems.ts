const menuItems = () => {
  return [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => { alert('Clicou em Home'); }
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
                command: () => { alert('Clicou em Listar'); } 
              },
              { 
                label: 'Cadastrar', 
                icon: 'pi pi-table', 
                command: () => { alert('Clicou em Cadastrar'); } 
              },
          ]
          }
        ]
      ]
    }
  ];
}

export default menuItems;