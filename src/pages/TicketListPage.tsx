import { Card, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { tickets } from '../data/tickets'
import { useTranslation } from 'react-i18next'
function TicketListPage() {
    const { t } = useTranslation()

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
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-900">{t('tickets.listTitle')}</h1>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {tickets.map((ticket) => (
                    <Card key={ticket.id} title={ticket.title}>
                        <h2 className="mb-3 text-slate-600">{ticket.description}</h2>

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
                ))}
            </div>
        </div>
    )
}

export default TicketListPage