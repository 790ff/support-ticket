import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
const { Header, Content, Footer } = Layout

const menuItems: MenuProps['items'] = [
    {key: 'tickets', label: 'Tickets',},
    {key: 'create-ticket', label: 'Create Ticket',},
]

function AppLayout() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header
                className="flex items-center px-6"
                style={{
                    background: '#0958d9',
                    color: '#ffffff',
                }}
            >
                <span className="text-2xl font-bold"> Support Ticket </span>
                <Menu className="ml-auto" theme="dark" mode="horizontal" defaultSelectedKeys={['tickets']} items={menuItems} style={{ background: 'transparent' }}/>
            </Header>

            <Content className="bg-[#f0f5ff] px-12 py-10" style={{ flex: 1 }}>
                <h1 className="text-3xl font-bold text-slate-900"> Support Ticket </h1>
            </Content>

            <Footer className="text-center"
                style={{
                    background: '#003eb3',
                    color: '#ffffff',
                }}
            >
                Support Ticket System
            </Footer>
        </Layout>
    )
}

export default AppLayout