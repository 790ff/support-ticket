import { Button, Form, Input, Select } from 'antd'
import { useTranslation } from 'react-i18next'

function CreateTicketPage() {
    const { t } = useTranslation()

    return (
        <div>
            <h1 className="text-3xl font-bold">{t('form.create')}</h1>

            <Form style={{ margin: '20px 0'}} layout="vertical" onFinish={(values) => console.log(values)}>
                <Form.Item label={t('form.title')} name="title">
                    <Input/>
                </Form.Item>

                <Form.Item label={t('form.description')} name="description">
                    <Input/>
                </Form.Item>

                <Form.Item label={t('form.priority')} name="priority">
                    <Select options={[
                            { value: 'Low', label: t('priority.low') },
                            { value: 'Medium', label: t('priority.medium') },
                            { value: 'High', label: t('priority.high') },
                        ]}/>
                </Form.Item>

                <Form.Item label={t('form.status')} name="status">
                    <Select
                        options={[
                            { value: 'Open', label: t('status.open') },
                            { value: 'In Progress', label: t('status.inProgress') },
                            { value: 'Closed', label: t('status.closed') },
                        ]}/>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    {t('form.create')}
                </Button>
            </Form>
        </div>
    )
}

export default CreateTicketPage