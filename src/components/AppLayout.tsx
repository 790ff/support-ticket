import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
const { Header, Content, Footer } = Layout
import { Link, Outlet } from 'react-router-dom'

const menuItems: MenuProps['items'] = [
    {key: 't', label: <Link to="/">Tickets</Link>,},
    {key: 'c', label: <Link to="/tickets/create">Create Ticket</Link>,},
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
                <span className="text-2xl font-bold mr-3"> Support Ticket</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['t']} items={menuItems} style={{ backgroundColor: '#0958d9' }}/>
            </Header>

            <Content className="bg-[#f0f5ff] px-12 py-10" style={{ flex: 1 }}>
                <Outlet />
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