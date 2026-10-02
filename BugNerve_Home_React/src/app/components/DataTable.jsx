import { FiChevronRight } from 'react-icons/fi'

export default function DataTable({ columns, rows, onRow, empty = 'No data yet.' }) {
  if (!rows.length) return <div className="table-empty">{empty}</div>
  return (
    <div className="app-table-wrap app-table-wrap--page">
      <table className="app-table page-data-table">
        <thead><tr>{columns.map((column)=><th key={column.key}>{column.label}</th>)}{onRow && <th/>}</tr></thead>
        <tbody>
          {rows.map((row, index)=><tr key={row.id || row.key || row.name || index} onClick={() => onRow?.(row)} className={onRow ? 'is-clickable' : ''}>
            {columns.map((column)=><td key={column.key}>{column.render ? column.render(row) : row[column.key]}</td>)}
            {onRow && <td className="table-next"><FiChevronRight/></td>}
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
