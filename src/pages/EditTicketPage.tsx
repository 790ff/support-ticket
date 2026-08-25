import { Button, Form, Input, Select } from 'antd'
import { useParams } from 'react-router-dom'
import { tickets } from '../data/tickets'

function EditTicketPage() {
    const { ticketId } = useParams()

    const ticket = tickets.find(
        (ticket) => ticket.id === Number(ticketId)
    )
    if (!ticket) {
        return <p>Ticket not found</p>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold"> Edit Ticket </h1>

            <Form style={{ margin: '20px 0'}} layout="vertical" initialValues={ticket} onFinish={(values) =>
                    console.log({
                        id: ticketId,
                        values,
                    })}
            >
                <Form.Item label="Title" name="title">
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="description">
                    <Input />
                </Form.Item>

                <Form.Item label="Priority" name="priority">
                    <Select options={[
                            { value: 'Low', label: 'Low' },
                            { value: 'Medium', label: 'Medium' },
                            { value: 'High', label: 'High' },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Status" name="status">
                    <Select options={[
                            { value: 'Open', label: 'Open' },
                            { value: 'In Progress', label: 'In Progress' },
                            { value: 'Closed', label: 'Closed' },
                        ]}
                    />
                </Form.Item>

                <Button type="primary" htmlType="submit"> Update Ticket </Button>
            </Form>
        </div>
    )
}

export default EditTicketPage