import React from 'react'

const Table = () => {
    const Data = [
        { id: 1, name: 'Adewale', type: 'Credit', amount: '$5000' },
        { id: 2, name: 'Sophiyulah', type: 'Debit', amount: '$25000' },
        { id: 3, name: 'Nurudeen', type: 'Credit', amount: '$400' },
        { id: 4, name: 'Peter', type: 'Credit', amount: '$3800' },
        { id: 5, name: 'Michael', type: 'Debit', amount: '$50000' }
    ]
  return (
    <div className='bg-white'>
        <div className='p-5 text-black'>
            <div className='font-bold text-xl'>Transactions</div>
            <div className='py-5'>
                <table className='w-full border-collapse border-t border-gray-300'>
                    <thead>
                        <tr className='border-b border-gray-300'>
                            <th className="font-medium">ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map(item => (
                            <tr key={item.id}>
                                <th className="font-light">{item.id}</th>
                                <th className="font-light">{item.name}</th>
                                <th className="font-light">{item.type}</th>
                                <th className="font-light">{item.amount}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Table