import { Card, Tag } from 'antd'
import { useParams } from 'react-router-dom'
import { tickets } from '../data/tickets'
import { Link } from 'react-router-dom'

function TicketDetailsPage() {
    const { ticketId } = useParams()
    const ticket = tickets.find(
        (ticket) => ticket.id === Number(ticketId)
    )
    if (!ticket) {
        return <p>Ticket not found</p>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">Ticket Details</h1>

            <Card title={ticket.title} style={{ marginTop: '20px' }}>
                <p>Ticket ID: {ticketId}</p>

                <p>{ticket.description}</p>

                <div className="flex mt-5">
                    <Tag color="blue">{ticket.status}</Tag>

                    <Tag color="orange" style={{ marginLeft: '10px' }}>
                        {ticket.priority}
                    </Tag>
                    <Link to="/" style={{ marginLeft: '20px' }}> Back to Tickets </Link>
                </div>

            </Card>
        </div>
    )
}

export default TicketDetailsPage