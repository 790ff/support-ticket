import { ConfigProvider, Layout, Menu, Switch, theme } from 'antd'
import type { MenuProps } from 'antd'
const { Header, Content, Footer } = Layout
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
function AppLayout() {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem('themeMode') === 'dark'
    )

    const { t, i18n } = useTranslation()
    const headerBg = isDarkMode ? '#002c8c' : '#0958d9'
    const footerBg = isDarkMode ? '#001d66' : '#003eb3'
    useEffect(() => {
        const lang = i18n.resolvedLanguage === 'ar' ? 'ar' : 'en'
        document.documentElement.lang = lang
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'},
        [i18n.resolvedLanguage])
    useEffect(() => {
        localStorage.setItem(
            'themeMode',
            isDarkMode ? 'dark' : 'light'
        )
    }, [isDarkMode])

    const menuItems: MenuProps['items'] = [
        { key: 't', label: <Link to="/">{t('navigation.tickets')}</Link> },
        { key: 'c', label: <Link to="/tickets/create">{t('navigation.createTicket')}</Link> },
    ]


    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#1677ff',
                    borderRadius: 8,
                },
                components: {
                    Layout: {
                        headerBg,
                        headerColor: '#ffffff',
                        footerBg,
                    },
                    Menu: {
                        darkItemBg: headerBg,
                    },
                },
            }}
        >
            <Layout style={{ minHeight: '100vh' }}>
            <Header
                className="flex items-center px-6">
                <span className="text-2xl font-bold mr-3"> {t('app.name')}</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['t']} items={menuItems} style={{flex: 1, marginLeft: 10, marginRight: 10 }}/>

                <div className="flex items-center gap-3" style={{ marginInlineStart: 'auto' }}>
                    <Switch
                        aria-label="Toggle theme"
                        checked={isDarkMode}
                        checkedChildren="dark"
                        unCheckedChildren="light"
                        onChange={setIsDarkMode}
                    />

                    <Switch
                        checked={i18n.resolvedLanguage === 'ar'}
                        checkedChildren="AR"
                        unCheckedChildren="EN"
                        onChange={(checked) =>
                            i18n.changeLanguage(checked ? 'ar' : 'en')
                        }
                    />
                </div>
            </Header>

            <Content className="px-12 py-10" style={{ flex: 1 }}>
                <Outlet />
            </Content>

                <Footer className="text-center text-white">{t('app.footer')}</Footer>
        </Layout>
     </ConfigProvider>

    )
}

export default AppLayout