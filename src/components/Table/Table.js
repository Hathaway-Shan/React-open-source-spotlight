import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

export default function Table() {
  const { pokemon, error } = usePokemon();
  let products = pokemon;
  console.log('products is:', products);

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
      text: 'type_2',
    },
  ];

  return (
    <div className="wrapper">
      <BootstrapTable keyField="pokemon" data={products} columns={columns} />
    </div>
  );
}
