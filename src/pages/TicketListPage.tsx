import { Card, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { tickets } from '../data/tickets'

function TicketListPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-900">Ticket List </h1>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {tickets.map((ticket) => (
                    <Card key={ticket.id} title={ticket.title}>
                        <h2 className="mb-3 text-slate-600">{ticket.description}</h2>

                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <Tag color="blue">
                                {ticket.status}
                                </Tag>

                                <Tag color="blue">
                                {ticket.priority}
                                </Tag>
                            </div>
                            <div className="flex gap-3">
                                <Link to={`/tickets/${ticket.id}`}>Details</Link>
                                <Link to={`/tickets/${ticket.id}/edit`}>Edit</Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TicketListPage