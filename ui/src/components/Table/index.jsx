import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import './styles.css';

export default function Table() {
  return (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
}
