import React from 'react';
import 'bulma/css/bulma.min.css';
import { Table as bulmaTable } from 'react-bulma-components';
import BootstrapTable from 'react-bootstrap-table-next';
import { usePokemon } from '../../hooks/usePokemon';
import Pokeball from '../Pokeball/Pokeball';

export default function Table() {
  const { pokemon, loading } = usePokemon();
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
    <div>
      <span>{loading ? <Pokeball /> : <></>}</span>
      <section className="mt-4">
        <div className="columns is-centered">
          <bulmaTable className="table is-bordered is-hoverable">
            <BootstrapTable keyField="pokemon" data={products} columns={columns} />
          </bulmaTable>
        </div>
      </section>
    </div>
  );
}
