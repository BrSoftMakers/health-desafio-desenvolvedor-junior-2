import React from 'react';

import styles from './Table.module.css';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export interface Column<T> {
    header: string;
    acessor: keyof T;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    handleEdit?: (item: T) => void;
    handleDelete?: (item: T) => void;
}

const Table = <T,>({ columns, data, handleEdit, handleDelete }: TableProps<T>): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={styles.th}>{column.header}</th>
                    ))}
                    {(handleEdit || handleDelete) && <th className={styles.th}>Editar / Deletar</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, columnIndex) => (
                            column.acessor == "imagem" ?
                                <td key={columnIndex} className={styles.td}>
                                    <img src={item[column.acessor] as string} alt="imagem" className={styles.foto}/>
                                </td>
                                :
                                <td key={columnIndex} className={styles.td}>{item[column.acessor]}</td>
                        ))}
                        {(handleEdit || handleDelete) && (
                            <td className={styles.buttonGroup}>
                                {handleEdit && <button className={styles.button} onClick={() => handleEdit(item)}><EditIcon/></button>}
                                {handleDelete && <button className={styles.buttonDelete} onClick={() => handleDelete(item)}><DeleteIcon/></button>}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;