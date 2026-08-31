import { Card, Empty, Select, Tag } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ticketService } from '../services/ticketService'
import { useTranslation } from 'react-i18next'
function TicketListPage() {
    const { t } = useTranslation()
    const tickets = ticketService.getAll()
    const [selectedStatus, setSelectedStatus] = useState('All')
    const statusKey = {
        Open: 'open',
        'In Progress': 'inProgress',
        Closed: 'closed',
    }
    const priorityKey = {
        Low: 'low',
        Medium: 'medium',
        High: 'high',
    }
    const filteredTickets =
        selectedStatus === 'All'
            ? tickets
            : tickets.filter((ticket) => ticket.status === selectedStatus)
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{t('tickets.listTitle')}</h1>
                <Select className="mt-6 w-full md:w-60" value={selectedStatus} onChange={setSelectedStatus}
                options={[
                    { value: 'All', label: t('tickets.allStatuses') },
                    { value: 'Open', label: t('status.open') },
                    { value: 'In Progress', label: t('status.inProgress') },
                    { value: 'Closed', label: t('status.closed') },
                ]}
                />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredTickets.length === 0 ? (
                    <Empty description={t('tickets.empty')} />
                ) : (
                    filteredTickets.map((ticket) => (
                    <Card key={ticket.id} title={ticket.title}>
                        <h2 className="mb-3">{ticket.description}</h2>

                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <Tag color="blue">{t(`status.${statusKey[ticket.status]}`)}</Tag>

                                <Tag color="blue">
                                {t(`priority.${priorityKey[ticket.priority]}`)}
                                </Tag>
                            </div>
                            <div className="flex gap-3">
                                <Link to={`/tickets/${ticket.id}`}>{t('tickets.details')}</Link>
                                <Link to={`/tickets/${ticket.id}/edit`}>{t('tickets.edit')}</Link>
                            </div>
                        </div>
                    </Card>
                    ))
                )}
            </div>
        </div>
    )
}

export default TicketListPage