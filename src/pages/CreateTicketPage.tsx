import { Button, Form, Input, Select } from 'antd'

function CreateTicketPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Create Ticket</h1>

            <Form style={{ margin: '20px 0'}} layout="vertical" onFinish={(values) => console.log(values)}>
                <Form.Item label="Title" name="title">
                    <Input/>
                </Form.Item>

                <Form.Item label="Description" name="description">
                    <Input/>
                </Form.Item>

                <Form.Item label="Priority" name="priority">
                    <Select options={[
                            { value: 'Low', label: 'Low' },
                            { value: 'Medium', label: 'Medium' },
                            { value: 'High', label: 'High' },
                        ]}/>
                </Form.Item>

                <Form.Item label="Status" name="status">
                    <Select
                        options={[
                            { value: 'Open', label: 'Open' },
                            { value: 'In Progress', label: 'In Progress' },
                            { value: 'Closed', label: 'Closed' },
                        ]}/>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Create Ticket
                </Button>
            </Form>
        </div>
    )
}

export default CreateTicketPage