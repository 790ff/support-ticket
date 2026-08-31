import { Button, Form, Input, Select, message } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { ticketService } from '../services/ticketService'
import { useTranslation } from 'react-i18next'
function EditTicketPage() {
    const { ticketId } = useParams()
    const { t } = useTranslation()
    const navigate = useNavigate()

    const ticket = ticketService.getById(Number(ticketId))
    if (!ticket) {
        return <p>{t('tickets.notFound')}</p>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">{t('form.update')}</h1>

            <Form style={{ margin: '20px 0'}} layout="vertical" initialValues={ticket} onFinish={(values) => {
                ticketService.update(ticket.id, values)
                message.success(t('feedback.updated'))
                navigate('/')
            }}>
                <Form.Item label={t('form.title')} name="title" rules={[{ required: true, message: t('validation.titleRequired'),}]}>
                    <Input />
                </Form.Item>

                <Form.Item label={t('form.description')} name="description" rules={[{ required: true, message: t('validation.descriptionRequired'),}]}>
                    <Input />
                </Form.Item>

                <Form.Item label={t('form.priority')} name="priority" rules={[{ required: true, message: t('validation.priorityRequired'),}]}>
                    <Select options={[
                            { value: 'Low', label: t('priority.low') },
                            { value: 'Medium', label: t('priority.medium') },
                            { value: 'High', label: t('priority.high') },
                        ]}
                    />
                </Form.Item>

                <Form.Item label={t('form.status')} name="status" rules={[{ required: true, message: t('validation.statusRequired'),}]}>
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