import { Card, Select, Tag, message } from 'antd'
import { ticketService } from '../services/ticketService'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import type { TicketStatus } from '../types/ticket'

function TicketDetailsPage() {
    const { t } = useTranslation()
    const { ticketId } = useParams()
    const [ticket, setTicket] = useState(() => ticketService.getById(Number(ticketId))
    )
    if (!ticket) {
        return <p>{t('tickets.notFound')}</p>
    }
    const handleStatusChange = (status: TicketStatus) => {
        const updatedTicket = ticketService.updateStatus(ticket.id, status)
        if (updatedTicket) {
            setTicket(updatedTicket)
            message.success(t('feedback.statusUpdated'))
        }
    }

    const priorityKey = {
        Low: 'low',
        Medium: 'medium',
        High: 'high',
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">{t('tickets.detailsTitle')}</h1>

            <Card title={ticket.title} style={{ marginTop: '20px' }}>
                <p>{t('tickets.id')}: {ticketId}</p>

                <p>{t('form.description')}: {ticket.description}</p>

                <div className="flex mt-4 gap-3">
                    <Select value={ticket.status} onChange={handleStatusChange}
                        options={[
                            { value: 'Open', label: t('status.open') },
                            { value: 'In Progress', label: t('status.inProgress') },
                            { value: 'Closed', label: t('status.closed') },
                        ]}
                    />

                    <Tag color="blue" style={{ marginLeft: '10px', padding: '4px' }}>
                        {t(`priority.${priorityKey[ticket.priority]}`)}
                    </Tag>
                    <Link to="/" style={{ marginLeft: '20px' , padding: '4px' }}> {t('tickets.back')} </Link>
                </div>

            </Card>
        </div>
    )
}

export default TicketDetailsPage