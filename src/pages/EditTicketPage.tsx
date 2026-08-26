import { Button, Form, Input, Select } from 'antd'
import { useParams } from 'react-router-dom'
import { tickets } from '../data/tickets'
import { useTranslation } from 'react-i18next'
function EditTicketPage() {
    const { ticketId } = useParams()
    const { t } = useTranslation()

    const ticket = tickets.find(
        (ticket) => ticket.id === Number(ticketId)
    )
    if (!ticket) {
        return <p>{t('tickets.notFound')}</p>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">{t('form.update')}</h1>

            <Form style={{ margin: '20px 0'}} layout="vertical" initialValues={ticket} onFinish={(values) =>
                    console.log({
                        id: ticketId,
                        values,
                    })}
            >
                <Form.Item label={t('form.title')} name="title">
                    <Input />
                </Form.Item>

                <Form.Item label={t('form.description')} name="description">
                    <Input />
                </Form.Item>

                <Form.Item label={t('form.priority')} name="priority">
                    <Select options={[
                            { value: 'Low', label: t('priority.low') },
                            { value: 'Medium', label: t('priority.medium') },
                            { value: 'High', label: t('priority.high') },
                        ]}
                    />
                </Form.Item>

                <Form.Item label={t('form.status')} name="status">
                    <Select options={[
                            { value: 'Open', label: t('status.open') },
                            { value: 'In Progress', label: t('status.inProgress') },
                            { value: 'Closed', label: t('status.closed') },
                        ]}
                    />
                </Form.Item>

                <Button type="primary" htmlType="submit"> {t('form.update')} </Button>
            </Form>
        </div>
    )
}

export default EditTicketPage