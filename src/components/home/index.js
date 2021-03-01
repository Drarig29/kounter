import { h } from 'preact';
import { useState } from 'preact/hooks';

import style from './style.css';

import { Dialog } from 'primereact/dialog';
import { Toolbar } from 'primereact/toolbar';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';

const lists = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
];

const data = {
  NY: [
    { name: 'Amiee Beverley', counter: 0 },
    { name: 'Janine Rodrique', counter: 0 },
    { name: 'Malisa Portales', counter: 0 },
    { name: 'Lane Mcpeak', counter: 0 },
    { name: 'Ollie Bouknight', counter: 0 },
    { name: 'Omar Flink', counter: 0 },
    { name: 'Kenisha Lombard', counter: 0 },
    { name: 'Maynard Deal', counter: 0 },
    { name: 'Eryn Valla', counter: 0 },
    { name: 'Drema Signorelli', counter: 0 },
    { name: 'Matilda Ocegueda', counter: 0 },
    { name: 'Teresita Adams', counter: 0 },
    { name: 'Patrina Nunnery', counter: 0 },
    { name: 'Sau Luque', counter: 0 },
    { name: 'Dagny Surrett', counter: 0 },
    { name: 'Quiana Rasberry', counter: 0 },
    { name: 'Nery Apicella', counter: 0 },
    { name: 'Bennie Goldsmith', counter: 0 },
    { name: 'Sharice Bennette', counter: 0 },
    { name: 'Maris Olden', counter: 0 },
    { name: 'Joane Lentini', counter: 0 },
    { name: 'Keitha Brogden', counter: 0 },
    { name: 'Meda Lauffer', counter: 0 },
    { name: 'Malik Trout', counter: 0 },
    { name: 'Marilee Levell', counter: 0 },
    { name: 'Maurine Beedle', counter: 0 },
    { name: 'Sammie Anton', counter: 0 },
    { name: 'Janell Parker', counter: 0 },
    { name: 'Tim Borunda', counter: 0 },
    { name: 'Carlita Otter', counter: 0 },
  ],
  RM: [
    { name: 'Amiee Beverley', counter: 0 },
    { name: 'Carlita Otter', counter: 0 },
  ]
}

const Home = () => {
  const [selected, setSelected] = useState(null);

  const counterBodyTemplate = (row) => {
    return (
      <InputNumber value={row.counter} showButtons buttonLayout="horizontal" step={1} min={0}
        decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success"
        incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
    );
  }

  const [fileDialog, setFileDialog] = useState(false);

  const importFile = () => {
    // Import file

    setFileDialog(false);
  }

  const openDialog = () => {
    setFileDialog(true);
  }

  const hideDialog = () => {
    setFileDialog(false);
  }

  const fileDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={importFile} />
    </>
  );

  const leftToolbarTemplate = <Dropdown placeholder="Select a list" value={selected} options={lists} onChange={e => setSelected(e.value)}></Dropdown>
  const rightToolbarTemplate = <Button label="Import file" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openDialog} />

  return (
    <main class={style.home}>
      <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

      <DataTable value={data[selected]}>
        <Column field="name" header="Name"></Column>
        <Column field="counter" header="Counter" body={counterBodyTemplate}></Column>
      </DataTable>

      <Dialog visible={fileDialog} style={{ width: '450px' }} header="Import file" modal class="p-fluid" footer={fileDialogFooter} onHide={hideDialog}>
        <div className="p-field">
          <label htmlFor="name">Name</label>
          <FileUpload mode="basic" accept=".xls,.xlsx,.csv" label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" />
        </div>
      </Dialog>
    </main>
  )
};

export default Home;
