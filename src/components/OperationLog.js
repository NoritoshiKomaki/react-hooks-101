import React from 'react'

const OperationLog = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>計</th>
            <th>購入額</th>
            <th>購入枚数</th>
            <th>売却時</th>
            <th>売却時利益</th>
          </tr>
        </thead>
      </table>
      <tr>
        <td>計</td>
        <td>購入額</td>
        <td>購入枚数</td>
        <td>売却時</td>
        <td>売却時利益</td>
      </tr>
    </>
  )
}

export default OperationLog