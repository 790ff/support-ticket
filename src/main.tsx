import { StrictMode } from 'react'
import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
        theme={{
        token: {
            colorPrimary: '#1677ff',
            colorBgLayout: '#f0f5ff',
            borderRadius: 8,
        },
        }}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
