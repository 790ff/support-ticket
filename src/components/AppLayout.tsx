import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
const { Header, Content, Footer } = Layout
import { Link, Outlet } from 'react-router-dom'
import { Switch } from 'antd'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
function AppLayout() {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        const lang = i18n.resolvedLanguage === 'ar' ? 'ar' : 'en'
        document.documentElement.lang = lang
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'},
        [i18n.resolvedLanguage])

    const menuItems: MenuProps['items'] = [
        { key: 't', label: <Link to="/">{t('navigation.tickets')}</Link> },
        { key: 'c', label: <Link to="/tickets/create">{t('navigation.createTicket')}</Link> },
    ]


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header
                className="flex items-center px-6"
                style={{
                    background: '#0958d9',
                    color: '#ffffff',
                }}
            >
                <span className="text-2xl font-bold mr-3"> {t('app.name')}</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['t']} items={menuItems} style={{ backgroundColor: '#0958d9', flex: 1, marginLeft: 10, marginRight: 10 }}/>

                <div className="flex items-center" style={{ marginInlineStart: 'auto' }}>
                    <Switch
                        checked={i18n.resolvedLanguage === 'ar'}
                        checkedChildren="AR"
                        unCheckedChildren="EN"
                        onChange={(checked) => i18n.changeLanguage(checked ? 'ar' : 'en')}
                    />
                </div>
            </Header>

            <Content className="bg-[#f0f5ff] px-12 py-10" style={{ flex: 1 }}>
                <Outlet />
            </Content>

            <Footer className="text-center" style={{background: '#003eb3', color: '#ffffff',}}>{t('app.footer')}
            </Footer>
        </Layout>
    )
}

export default AppLayout