import React from 'react';
import 'bulma/css/bulma.min.css';
import { Table as bulmaTable, Button } from 'react-bulma-components';
import { usePokemon } from '../../hooks/usePokemon';
import BootstrapTable from 'react-bootstrap-table-next';

export default function Table() {
  const { pokemon, error } = usePokemon();
  let products = pokemon;

  const columns = [
    {
      dataField: 'pokemon',
      text: 'Pokemon',
    },
    {
      dataField: 'type_1',
      text: 'Type 1',
    },
    {
      dataField: 'type_2',
      text: 'Type_2',
    },
  ];

  return (
    <section className="mt-4">
      <div className="columns is-centered">
        <bulmaTable className="table is-bordered">
          <BootstrapTable keyField="pokemon" data={products} columns={columns} />
        </bulmaTable>
      </div>
    </section>
  );
}
