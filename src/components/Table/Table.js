import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import BootstrapTable from 'react-bootstrap-table-next';

export default function Table() {
  const { pokemon, error } = usePokemon();
  let products = pokemon;

  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
    },
    {
      dataField: 'name',
      text: 'Product Name',
    },
    {
      dataField: 'price',
      text: 'Product Price',
    },
  ];

  return (
    <div className="wrapper">
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </div>
  );
}
