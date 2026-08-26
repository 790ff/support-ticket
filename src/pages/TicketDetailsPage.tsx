import { Card, Tag } from 'antd'
import { useParams } from 'react-router-dom'
import { tickets } from '../data/tickets'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function TicketDetailsPage() {
    const { t } = useTranslation()
    const { ticketId } = useParams()
    const ticket = tickets.find(
        (ticket) => ticket.id === Number(ticketId)
    )
    if (!ticket) {
        return <p>{t('tickets.notFound')}</p>
    }
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
            <h1 className="text-3xl font-bold">{t('tickets.detailsTitle')}</h1>

            <Card title={ticket.title} style={{ marginTop: '20px' }}>
                <p>{t('tickets.id')}: {ticketId}</p>

                <p>{t('form.description')}: {ticket.description}</p>

                <div className="flex mt-4 gap-3">
                    <Tag color="blue">{t(`status.${statusKey[ticket.status]}`)}</Tag>

                    <Tag color="orange" style={{ marginLeft: '10px' }}>
                        {t(`priority.${priorityKey[ticket.priority]}`)}
                    </Tag>
                    <Link to="/" style={{ marginLeft: '20px' }}> {t('tickets.back')} </Link>
                </div>

            </Card>
        </div>
    )
}

export default TicketDetailsPage